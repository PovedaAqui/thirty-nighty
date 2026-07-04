export default function Home() {
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
            <a href="#product" className="hover:text-[color:var(--md-sys-color-on-surface)]">Product</a>
            <a href="#how-it-works" className="hover:text-[color:var(--md-sys-color-on-surface)]">How it works</a>
            <a href="#pricing" className="hover:text-[color:var(--md-sys-color-on-surface)]">Pricing</a>
            <a href="#faq" className="hover:text-[color:var(--md-sys-color-on-surface)]">FAQ</a>
          </div>
          <a href="#waitlist" className="md-button-filled">Join waitlist</a>
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
            <div className="md-chip mx-auto mb-6 w-fit">Now onboarding early access</div>
            <h1 className="md-display-large text-[color:var(--md-sys-color-on-surface)] max-w-3xl mx-auto">
              A managed AI agent, or raw inference.{" "}
              <span style={{ color: "var(--md-sys-color-primary)" }}>Your call.</span>
            </h1>
            <p className="md-body-large mt-6 max-w-xl mx-auto text-[color:var(--md-sys-color-on-surface-variant)]">
              Thirty Nighty runs a Hermes agent for you — memory, tools, context included —
              or hands you a plain OpenAI-compatible endpoint if you'd rather build it yourself.
              Same private hardware underneath either way.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#waitlist" className="md-button-filled">Get early access</a>
              <a href="#how-it-works" className="md-button-outlined">See how it works</a>
            </div>
            <p className="md-body-medium mt-6 text-[color:var(--md-sys-color-on-surface-variant)]">
              Fixed hardware cost · No per-token surprises · Data never leaves the box
            </p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-20 border-t border-[color:var(--md-sys-color-outline-variant)]">
          <div className="container-md">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="md-headline-large">Cloud AI gets expensive and leaky, fast.</h2>
                <p className="md-body-large mt-4 text-[color:var(--md-sys-color-on-surface-variant)]">
                  Coding agents alone can burn $100–$1,000 per developer, per month. Every
                  prompt round-trips through someone else's servers. And the moment you need
                  a real assistant — not just an API — you're back to duct-taping wrappers.
                </p>
              </div>
              <ul className="grid gap-4">
                {[
                  ["Unpredictable bills", "Token meters never stop running, and usage spikes with adoption."],
                  ["Data leaves the building", "Regulated teams can't ship customer data to a third-party LLM."],
                  ["No real agent, just API calls", "Wrapping an API isn't the same as an assistant with memory and tools."],
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
              <h2 className="md-headline-large">Two ways to run on Thirty Nighty</h2>
              <p className="md-body-large mt-4 text-[color:var(--md-sys-color-on-surface-variant)]">
                Same private inference backend. Pick the layer that fits how you work.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md-card md-card--elevated p-8">
                <div className="md-chip mb-4">Managed</div>
                <h3 className="md-headline-medium">Hermes Agents as a Service</h3>
                <p className="md-body-large mt-3 text-[color:var(--md-sys-color-on-surface-variant)]">
                  A Hermes agent configured for you — persistent memory, tools, and its own
                  context. Talk to it like an assistant, not an API.
                </p>
                <ul className="mt-6 grid gap-3">
                  {[
                    "Persistent memory across sessions",
                    "Web search, docs, code, automations",
                    "Chat, Telegram, or email access",
                    "Scheduled recurring tasks",
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
                  Developer
                </div>
                <h3 className="md-headline-medium">Inference API</h3>
                <p className="md-body-large mt-3 text-[color:var(--md-sys-color-on-surface-variant)]">
                  An OpenAI-compatible endpoint, straight to the model. Build your own
                  wrapper, your own product, on hardware you don't have to manage.
                </p>
                <ul className="mt-6 grid gap-3">
                  {[
                    "OpenAI/Anthropic-compatible endpoint",
                    "Streaming (SSE) support",
                    "Speculative decoding for higher throughput",
                    "Priority queue on higher tiers",
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
              <h2 className="md-headline-large">One private backend, two front doors</h2>
              <p className="md-body-large mt-4 text-[color:var(--md-sys-color-on-surface-variant)]">
                Both products run on dedicated inference hardware — nothing shared with
                other providers, nothing sent to a third-party cloud.
              </p>
            </div>
            <div className="md-card p-8 md:p-10">
              <div className="grid md:grid-cols-3 gap-6 items-center text-center">
                <div>
                  <StepBadge n={1} />
                  <p className="md-title-large mt-3">Clients connect</p>
                  <p className="md-body-medium mt-1 text-[color:var(--md-sys-color-on-surface-variant)]">
                    Chat / Telegram for agent users, API key for developers.
                  </p>
                </div>
                <ArrowIcon />
                <div>
                  <StepBadge n={2} />
                  <p className="md-title-large mt-3">Service layer</p>
                  <p className="md-body-medium mt-1 text-[color:var(--md-sys-color-on-surface-variant)]">
                    Hermes agents (isolated, per-client memory) or raw API routing.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-[color:var(--md-sys-color-outline-variant)] text-center">
                <StepBadge n={3} />
                <p className="md-title-large mt-3">Dedicated inference hardware</p>
                <p className="md-body-medium mt-1 max-w-md mx-auto text-[color:var(--md-sys-color-on-surface-variant)]">
                  A fixed-cost inference appliance with speculative decoding for high
                  throughput. Fully private — nothing leaves the box.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-20 bg-[color:var(--md-sys-color-surface-container-low)]">
          <div className="container-md">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="md-headline-large">Simple, fixed pricing</h2>
              <p className="md-body-large mt-4 text-[color:var(--md-sys-color-on-surface-variant)]">
                No per-token bill shock. Pick a line, pick a tier.
              </p>
            </div>

            <div className="mb-10">
              <p className="md-title-large mb-4">Agents as a Service</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { name: "Starter", price: "$29", period: "/mo", features: ["1 Hermes agent", "5K interactions/mo"] },
                  { name: "Pro", price: "$79", period: "/mo", features: ["1 Hermes agent", "Advanced tools", "25K interactions/mo"], highlight: true },
                  { name: "Team", price: "$199", period: "/mo", features: ["Up to 5 agents", "Centralized management"] },
                  { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited agents", "SLA, dedicated instance"] },
                ].map((tier) => (
                  <PricingCard key={tier.name} {...tier} />
                ))}
              </div>
            </div>

            <div>
              <p className="md-title-large mb-4">Inference API</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { name: "Free", price: "$0", period: "", features: ["100 requests/mo", "Base model"] },
                  { name: "Dev", price: "$19", period: "/mo", features: ["10K requests/mo", "Streaming"] },
                  { name: "Pro", price: "$69", period: "/mo", features: ["100K requests/mo", "Priority queue"], highlight: true },
                  { name: "Enterprise", price: "Custom", period: "", features: ["Dedicated volume", "SLA"] },
                ].map((tier) => (
                  <PricingCard key={tier.name} {...tier} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="py-20">
          <div className="container-md grid md:grid-cols-3 gap-6 text-center">
            {[
              ["Fixed-cost hardware", "One-time infrastructure cost. No meter running while you sleep."],
              ["Private by design", "Inference happens on dedicated hardware — no data sent to third-party clouds."],
              ["Built solo, built in the open", "An independent project, no investors, no committee — just shipped decisions."],
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
            <h2 className="md-headline-large text-center mb-10">Frequently asked</h2>
            <div className="grid gap-3">
              {[
                ["What's the difference between an agent and the API?", "The agent is a ready-to-use Hermes assistant with memory and tools — you just talk to it. The API is a raw OpenAI-compatible endpoint for developers who want to build their own product on top of the inference layer."],
                ["Is my data used to train anything?", "No. Inference runs on dedicated hardware. Prompts and outputs stay within the service — nothing is used for third-party training."],
                ["Can I switch between plans?", "Yes, upgrades and downgrades take effect on your next billing cycle."],
                ["Do I need to bring my own models?", "No — models are pre-loaded and tuned. Enterprise plans can discuss custom model requirements."],
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
                Get on the early access list
              </h2>
              <p className="md-body-large mt-3 max-w-md mx-auto" style={{ color: "var(--md-sys-color-on-primary-container)" }}>
                We're onboarding a limited number of agents and API keys first. Leave your
                email and we'll reach out.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="flex-1 h-12 px-4 rounded-[var(--md-shape-corner-full)] border-none md-body-large"
                  style={{ background: "var(--md-sys-color-surface-container-lowest)", color: "var(--md-sys-color-on-surface)" }}
                />
                <button type="submit" className="md-button-filled h-12">Notify me</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[color:var(--md-sys-color-outline-variant)] py-10">
        <div className="container-md flex flex-col sm:flex-row items-center justify-between gap-4 md-body-medium text-[color:var(--md-sys-color-on-surface-variant)]">
          <p>© 2026 Thirty Nighty. An independent project.</p>
          <div className="flex items-center gap-6">
            <a href="#product" className="hover:text-[color:var(--md-sys-color-on-surface)]">Product</a>
            <a href="#pricing" className="hover:text-[color:var(--md-sys-color-on-surface)]">Pricing</a>
            <a href="#faq" className="hover:text-[color:var(--md-sys-color-on-surface)]">FAQ</a>
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
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlight?: boolean;
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
      {highlight && <div className="md-chip mb-3">Most popular</div>}
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
