"use client";

import { useLocale } from "@/hooks/useLocale";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  const { locale, setLocale, t } = useLocale();

  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[color-mix(in_srgb,var(--md-sys-color-surface)_85%,transparent)] border-b border-[color:var(--md-sys-color-outline-variant)]">
        <nav className="container-md flex items-center justify-between h-16">
          <a href="#top" className="md-title-large flex items-center gap-2 text-[color:var(--md-sys-color-on-surface)] no-underline">
            <span
              aria-hidden
              className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--md-shape-corner-small)]"
              style={{ background: "var(--md-sys-color-primary)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Thirty Nighty
          </a>
          <div className="hidden md:flex items-center gap-6 md-body-medium text-[color:var(--md-sys-color-on-surface-variant)]">
            <a href="#product" className="hover:text-[color:var(--md-sys-color-on-surface)]">{t("nav_product")}</a>
            <a href="#how-it-works" className="hover:text-[color:var(--md-sys-color-on-surface)]">{t("nav_how")}</a>
            <a href="#pricing" className="hover:text-[color:var(--md-sys-color-on-surface)]">{t("nav_pricing")}</a>
            <a href="#faq" className="hover:text-[color:var(--md-sys-color-on-surface)]">{t("nav_faq")}</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "es" : "en")}
              className="md-button-outlined h-9 px-3 sm:px-4"
              aria-label={locale === "en" ? "Cambiar a español" : "Switch to English"}
            >
              🌐 <span className="hidden sm:inline">{locale === "en" ? "Español" : "English"}</span>
            </button>
            <a href="#waitlist" className="md-button-filled px-4 sm:px-6">{t("nav_join")}</a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(1200px 600px at 50% -10%, var(--md-sys-color-primary-container) 0%, transparent 60%)",
            }}
          />
          <div className="container-md pt-20 pb-24 md:pt-28 md:pb-32 text-center">
            <div className="md-chip mx-auto mb-6 w-fit">{t("hero_badge")}</div>
            <h1 className="md-display-large text-[color:var(--md-sys-color-on-surface)] max-w-3xl mx-auto">
              {t("hero_title_1")}{" "}
              <span style={{ color: "var(--md-sys-color-primary)" }}>{t("hero_title_2")}</span>
            </h1>
            <p className="md-body-large mt-6 max-w-xl mx-auto text-[color:var(--md-sys-color-on-surface-variant)]">
              {t("hero_body")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#waitlist" className="md-button-filled">{t("hero_cta_primary")}</a>
              <a href="#how-it-works" className="md-button-outlined">{t("hero_cta_secondary")}</a>
            </div>
            <p className="md-body-medium mt-6 text-[color:var(--md-sys-color-on-surface-variant)]">
              {t("hero_footnote")}
            </p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-20 border-t border-[color:var(--md-sys-color-outline-variant)]">
          <div className="container-md">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="md-headline-large">{t("problem_title")}</h2>
                <p className="md-body-large mt-4 text-[color:var(--md-sys-color-on-surface-variant)]">
                  {t("problem_body")}
                </p>
              </div>
              <ul className="grid gap-4">
                {[
                  [t("problem_1_title"), t("problem_1_body")],
                  [t("problem_2_title"), t("problem_2_body")],
                  [t("problem_3_title"), t("problem_3_body")],
                ].map(([title, body]) => (
                  <li key={title} className="md-card p-5">
                    <p className="md-title-large">{title}</p>
                    <p className="md-body-medium mt-1 text-[color:var(--md-sys-color-on-surface-variant)]">{body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PRODUCT — two lines */}
        <section id="product" className="py-20 bg-[color:var(--md-sys-color-surface-container-low)]">
          <div className="container-md">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="md-headline-large">{t("product_title")}</h2>
              <p className="md-body-large mt-4 text-[color:var(--md-sys-color-on-surface-variant)]">
                {t("product_subtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md-card md-card--elevated p-8">
                <div className="md-chip mb-4">{t("product_agent_badge")}</div>
                <h3 className="md-headline-medium">{t("product_agent_title")}</h3>
                <p className="md-body-large mt-3 text-[color:var(--md-sys-color-on-surface-variant)]">
                  {t("product_agent_body")}
                </p>
                <ul className="mt-6 grid gap-3">
                  {[
                    t("product_agent_1"),
                    t("product_agent_2"),
                    t("product_agent_3"),
                    t("product_agent_4"),
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 md-body-medium">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md-card md-card--elevated p-8">
                <div className="md-chip mb-4" style={{ background: "var(--md-sys-color-tertiary-container)", color: "var(--md-sys-color-on-tertiary-container)" }}>
                  {t("product_api_badge")}
                </div>
                <h3 className="md-headline-medium">{t("product_api_title")}</h3>
                <p className="md-body-large mt-3 text-[color:var(--md-sys-color-on-surface-variant)]">
                  {t("product_api_body")}
                </p>
                <ul className="mt-6 grid gap-3">
                  {[
                    t("product_api_1"),
                    t("product_api_2"),
                    t("product_api_3"),
                    t("product_api_4"),
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 md-body-medium">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-20">
          <div className="container-md">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="md-headline-large">{t("how_title")}</h2>
              <p className="md-body-large mt-4 text-[color:var(--md-sys-color-on-surface-variant)]">
                {t("how_subtitle")}
              </p>
            </div>
            <div className="md-card p-8 md:p-10">
              <div className="grid md:grid-cols-3 gap-6 items-center text-center">
                <div>
                  <StepBadge n={1} />
                  <p className="md-title-large mt-3">{t("how_1_title")}</p>
                  <p className="md-body-medium mt-1 text-[color:var(--md-sys-color-on-surface-variant)]">
                    {t("how_1_body")}
                  </p>
                </div>
                <ArrowIcon />
                <div>
                  <StepBadge n={2} />
                  <p className="md-title-large mt-3">{t("how_2_title")}</p>
                  <p className="md-body-medium mt-1 text-[color:var(--md-sys-color-on-surface-variant)]">
                    {t("how_2_body")}
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-[color:var(--md-sys-color-outline-variant)] text-center">
                <StepBadge n={3} />
                <p className="md-title-large mt-3">{t("how_3_title")}</p>
                <p className="md-body-medium mt-1 max-w-md mx-auto text-[color:var(--md-sys-color-on-surface-variant)]">
                  {t("how_3_body")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-20 bg-[color:var(--md-sys-color-surface-container-low)]">
          <div className="container-md">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="md-headline-large">{t("pricing_title")}</h2>
              <p className="md-body-large mt-4 text-[color:var(--md-sys-color-on-surface-variant)]">
                {t("pricing_subtitle")}
              </p>
            </div>

            <div className="text-center mb-8">
              <span className="md-chip" style={{ background: "var(--md-sys-color-tertiary-container)", color: "var(--md-sys-color-on-tertiary-container)" }}>
                {t("pricing_badge")}
              </span>
            </div>

            <div className="mb-10">
              <p className="md-title-large mb-4">{t("pricing_agents_label")}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { name: "Starter", price: "$9", period: "/mo", features: [t("pricing_agent_starter"), t("pricing_agent_5k")] },
                  { name: "Pro", price: "$29", period: "/mo", features: [t("pricing_agent_starter"), t("pricing_agent_advanced"), t("pricing_agent_25k")], highlight: true },
                  { name: "Team", price: "$79", period: "/mo", features: [t("pricing_agent_team"), t("pricing_agent_centralized")] },
                  { name: "Enterprise", price: "Custom", period: "", features: [t("pricing_agent_unlimited"), t("pricing_agent_sla")] },
                ].map((tier) => (
                  <PricingCard key={tier.name} {...tier} mostPopularLabel={t("pricing_most_popular")} />
                ))}
              </div>
            </div>

            <div>
              <p className="md-title-large mb-4">{t("pricing_api_label")}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { name: "Free", price: "$0", period: "", features: [t("pricing_api_100"), t("pricing_api_base")] },
                  { name: "Dev", price: "$5", period: "/mo", features: [t("pricing_api_10k"), t("pricing_api_streaming")] },
                  { name: "Pro", price: "$25", period: "/mo", features: [t("pricing_api_100k"), t("pricing_api_priority")], highlight: true },
                  { name: "Enterprise", price: "Custom", period: "", features: [t("pricing_api_volume"), t("pricing_api_sla")] },
                ].map((tier) => (
                  <PricingCard key={tier.name} {...tier} mostPopularLabel={t("pricing_most_popular")} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="py-20">
          <div className="container-md grid md:grid-cols-3 gap-6 text-center">
            {[
              [t("trust_1_title"), t("trust_1_body")],
              [t("trust_2_title"), t("trust_2_body")],
              [t("trust_3_title"), t("trust_3_body")],
            ].map(([title, body]) => (
              <div key={title} className="md-card p-6">
                <p className="md-title-large">{title}</p>
                <p className="md-body-medium mt-2 text-[color:var(--md-sys-color-on-surface-variant)]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-[color:var(--md-sys-color-surface-container-low)]">
          <div className="container-md max-w-2xl">
            <h2 className="md-headline-large text-center mb-10">{t("faq_title")}</h2>
            <div className="grid gap-3">
              {[
                [t("faq_1_q"), t("faq_1_a")],
                [t("faq_1b_q"), t("faq_1b_a")],
                [t("faq_2_q"), t("faq_2_a")],
                [t("faq_3_q"), t("faq_3_a")],
                [t("faq_4_q"), t("faq_4_a")],
              ].map(([q, a]) => (
                <details key={q} className="md-card p-5 group">
                  <summary className="md-title-large cursor-pointer list-none flex items-center justify-between gap-4">
                    {q}
                    <span className="shrink-0 transition-transform group-open:rotate-45 md-headline-medium leading-none" aria-hidden>+</span>
                  </summary>
                  <p className="md-body-medium mt-3 text-[color:var(--md-sys-color-on-surface-variant)]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* WAITLIST / CTA */}
        <section id="waitlist" className="py-24">
          <div className="container-md">
            <div
              className="md-card p-10 md:p-14 text-center"
              style={{ background: "var(--md-sys-color-primary-container)", border: "none" }}
            >
              <h2 className="md-headline-large" style={{ color: "var(--md-sys-color-on-primary-container)" }}>
                {t("waitlist_title")}
              </h2>
              <p className="md-body-large mt-3 max-w-md mx-auto" style={{ color: "var(--md-sys-color-on-primary-container)" }}>
                {t("waitlist_body")}
              </p>
              <WaitlistForm locale={locale} t={t} />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[color:var(--md-sys-color-outline-variant)] py-10">
        <div className="container-md flex flex-col sm:flex-row items-center justify-between gap-4 md-body-medium text-[color:var(--md-sys-color-on-surface-variant)]">
          <p>{t("footer_copyright")}</p>
          <div className="flex items-center gap-6">
            <a href="#product" className="hover:text-[color:var(--md-sys-color-on-surface)]">{t("nav_product")}</a>
            <a href="#how-it-works" className="hover:text-[color:var(--md-sys-color-on-surface)]">{t("nav_how")}</a>
            <a href="#pricing" className="hover:text-[color:var(--md-sys-color-on-surface)]">{t("nav_pricing")}</a>
            <a href="#faq" className="hover:text-[color:var(--md-sys-color-on-surface)]">{t("nav_faq")}</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="var(--md-sys-color-primary-container)" />
      <path d="M8 12.5l2.5 2.5L16 9" stroke="var(--md-sys-color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepBadge({ n }: { n: number }) {
  return (
    <div
      className="mx-auto flex h-10 w-10 items-center justify-center rounded-full md-title-large"
      style={{ background: "var(--md-sys-color-primary)", color: "var(--md-sys-color-on-primary)" }}
      aria-hidden
    >
      {n}
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="hidden md:flex items-center justify-center" aria-hidden>
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
        <path d="M0 8H30M30 8L24 2M30 8L24 14" stroke="var(--md-sys-color-outline)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  features,
  highlight,
  mostPopularLabel,
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlight?: boolean;
  mostPopularLabel: string;
}) {
  return (
    <div
      className={`p-6 rounded-[var(--md-shape-corner-large)] ${
        highlight ? "md-card--elevated" : "md-card"
      }`}
      style={
        highlight
          ? { outline: "2px solid var(--md-sys-color-primary)", outlineOffset: "-2px" }
          : undefined
      }
    >
      {highlight && <div className="md-chip mb-3">{mostPopularLabel}</div>}
      <p className="md-title-large">{name}</p>
      <p className="md-display-small mt-2">
        {price}
        <span className="md-body-medium text-[color:var(--md-sys-color-on-surface-variant)]">{period}</span>
      </p>
      <ul className="mt-4 grid gap-2">
        {features.map((f) => (
          <li key={f} className="md-body-medium text-[color:var(--md-sys-color-on-surface-variant)] flex items-start gap-2">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
