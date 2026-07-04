import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const supabaseAdmin = getSupabaseAdmin();

  if (!supabaseAdmin) {
    console.error("Waitlist route called but Supabase env vars are not configured.");
    return NextResponse.json(
      { error: "Waitlist is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { email, locale, source, company } = body;

    // Honeypot: real users never fill a hidden "company" field.
    if (typeof company === "string" && company.trim().length > 0) {
      // Pretend success to not tip off bots, but don't write anything.
      return NextResponse.json({ success: true });
    }

    if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const { data: existing, error: lookupError } = await supabaseAdmin
      .from("waitlist")
      .select("id")
      .eq("email", normalizedEmail)
      .limit(1);

    if (lookupError) {
      console.error("Supabase lookup error:", lookupError);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    if (existing && existing.length > 0) {
      // Already on the list — treat as success, no duplicate insert.
      return NextResponse.json({ success: true, already_registered: true });
    }

    const { error: insertError } = await supabaseAdmin.from("waitlist").insert([
      {
        email: normalizedEmail,
        locale: typeof locale === "string" ? locale.slice(0, 5) : null,
        source: typeof source === "string" ? source.slice(0, 100) : "landing_page",
      },
    ]);

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist route error:", err);
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
