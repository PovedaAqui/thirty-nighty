"use client";

import { useState } from "react";
import type { Locale, TranslationKey } from "@/locales/translations";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm({
  locale,
  t,
}: {
  locale: Locale;
  t: (key: TranslationKey) => string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      email: formData.get("email"),
      locale,
      source: "landing_page",
      // Honeypot field — hidden from real users via CSS, bots tend to fill it.
      company: formData.get("company"),
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || t("waitlist_error"));
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(t("waitlist_error"));
    }
  };

  if (status === "success") {
    return (
      <p
        className="mt-8 md-title-large max-w-md mx-auto"
        style={{ color: "var(--md-sys-color-on-primary-container)" }}
        role="status"
      >
        ✓ {t("waitlist_success")}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" noValidate>
      <label htmlFor="email" className="sr-only">{t("waitlist_email_label")}</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder={t("waitlist_email_placeholder")}
        disabled={status === "submitting"}
        className="flex-1 h-12 px-4 rounded-[var(--md-shape-corner-full)] border-none md-body-large disabled:opacity-60"
        style={{ background: "var(--md-sys-color-surface-container-lowest)", color: "var(--md-sys-color-on-surface)" }}
      />
      {/* Honeypot — visually hidden, real users never see or fill it */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] w-px h-px overflow-hidden"
      />
      <button type="submit" disabled={status === "submitting"} className="md-button-filled h-12 disabled:opacity-60">
        {status === "submitting" ? t("waitlist_submitting") : t("waitlist_submit")}
      </button>
      {status === "error" && errorMsg && (
        <p
          className="sm:absolute sm:mt-14 md-body-medium w-full text-center"
          style={{ color: "var(--md-sys-color-error)" }}
          role="alert"
        >
          {errorMsg}
        </p>
      )}
    </form>
  );
}
