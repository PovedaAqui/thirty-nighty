export type Locale = "en" | "es";

export const translations = {
  en: {
    nav_product: "Product",
    nav_how: "How it works",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_join: "Join waitlist",

    hero_badge: "Now onboarding early access",
    hero_title_1: "A managed AI agent, or raw inference.",
    hero_title_2: "Your call.",
    hero_body:
      "Thirty Nighty runs a Hermes agent for you — memory, tools, context included — or hands you a plain OpenAI-compatible endpoint if you'd rather build it yourself. Same private hardware underneath either way.",
    hero_cta_primary: "Get early access",
    hero_cta_secondary: "See how it works",
    hero_footnote: "Fixed hardware cost · No per-token surprises · Data never leaves the box",

    problem_title: "Cloud AI gets expensive and leaky, fast.",
    problem_body:
      "Coding agents alone can burn $100–$1,000 per developer, per month. Every prompt round-trips through someone else's servers. And the moment you need a real assistant — not just an API — you're back to duct-taping wrappers.",
    problem_1_title: "Unpredictable bills",
    problem_1_body: "Token meters never stop running, and usage spikes with adoption.",
    problem_2_title: "Data leaves the building",
    problem_2_body: "Regulated teams can't ship customer data to a third-party LLM.",
    problem_3_title: "No real agent, just API calls",
    problem_3_body: "Wrapping an API isn't the same as an assistant with memory and tools.",

    product_title: "Two ways to run on Thirty Nighty",
    product_subtitle: "Same private inference backend. Pick the layer that fits how you work.",
    product_agent_badge: "Managed",
    product_agent_title: "Hermes Agents as a Service",
    product_agent_body:
      "Hermes is an AI assistant that remembers your context, uses tools, and gets things done — not just a chatbot that forgets everything the moment you close the tab. We set it up and run it for you; you just start talking to it.",
    product_agent_1: "Remembers your context between conversations",
    product_agent_2: "Searches the web, writes docs, runs code, automates tasks",
    product_agent_3: "Reach it over chat, Telegram, or email",
    product_agent_4: "Set it up once to handle recurring tasks on a schedule",
    product_api_badge: "Developer",
    product_api_title: "Inference API",
    product_api_body:
      "A raw OpenAI-compatible endpoint into the model — no agent, no assistant layer, just inference. Point any OpenAI-compatible frontend at it (Open WebUI, LibreChat, etc.), or call it directly from Python, curl, or your own app.",
    product_api_1: "Works out of the box with Open WebUI and other OpenAI-compatible frontends",
    product_api_2: "Call it directly with Python, curl, or any OpenAI-compatible SDK",
    product_api_3: "Streaming (SSE) support",
    product_api_4: "Speculative decoding for higher throughput",

    how_title: "One private backend, two front doors",
    how_subtitle:
      "Both products run on dedicated inference hardware — nothing shared with other providers, nothing sent to a third-party cloud.",
    how_1_title: "Clients connect",
    how_1_body: "Talk to your Hermes agent over chat/Telegram, or call the API from Open WebUI, Python, curl, or any OpenAI-compatible client.",
    how_2_title: "Service layer",
    how_2_body: "Hermes agents (isolated, per-client memory) or raw API routing — no assistant layer in between.",
    how_3_title: "Dedicated inference hardware",
    how_3_body:
      "A fixed-cost inference appliance with speculative decoding for high throughput. Fully private — nothing leaves the box.",

    pricing_title: "Aggressive launch pricing",
    pricing_subtitle: "No per-token bill shock, and early pricing well below market to get you in the door.",
    pricing_badge: "Launch pricing — limited time",
    pricing_agents_label: "Agents as a Service",
    pricing_api_label: "Inference API",
    pricing_most_popular: "Most popular",
    pricing_agent_starter: "1 Hermes agent",
    pricing_agent_5k: "5K interactions/mo",
    pricing_agent_advanced: "Advanced tools",
    pricing_agent_25k: "25K interactions/mo",
    pricing_agent_team: "Up to 5 agents",
    pricing_agent_centralized: "Centralized management",
    pricing_agent_unlimited: "Unlimited agents",
    pricing_agent_sla: "SLA, dedicated instance",
    pricing_api_100: "100 requests/mo",
    pricing_api_base: "Base model",
    pricing_api_10k: "10K requests/mo",
    pricing_api_streaming: "Streaming",
    pricing_api_100k: "100K requests/mo",
    pricing_api_priority: "Priority queue",
    pricing_api_volume: "Dedicated volume",
    pricing_api_sla: "SLA",

    trust_1_title: "Fixed-cost hardware",
    trust_1_body: "One-time infrastructure cost. No meter running while you sleep.",
    trust_2_title: "Private by design",
    trust_2_body: "Inference happens on dedicated hardware — no data sent to third-party clouds.",
    trust_3_title: "Built solo, built in Europe",
    trust_3_body: "An independent project based in Europe, no investors, no committee — just shipped decisions.",

    faq_title: "Frequently asked",
    faq_1_q: "What's the difference between an agent and the API?",
    faq_1_a:
      "The Hermes agent is a ready-to-use AI assistant with memory and tools — you just talk to it, no setup required on your end. The API is raw inference: an OpenAI-compatible endpoint with no assistant layer, meant for developers who want to plug in their own frontend or code.",
    faq_1b_q: "How do I use the Inference API?",
    faq_1b_a:
      "However you want. Point an existing OpenAI-compatible frontend at it — Open WebUI, LibreChat, and similar tools work out of the box — or call it directly with Python, curl, or any OpenAI-compatible SDK. It's the same endpoint shape as OpenAI's API, just pointed at our hardware.",
    faq_2_q: "Is my data used to train anything?",
    faq_2_a:
      "No. Inference runs on dedicated hardware. Prompts and outputs stay within the service — nothing is used for third-party training.",
    faq_3_q: "Can I switch between plans?",
    faq_3_a: "Yes, upgrades and downgrades take effect on your next billing cycle.",
    faq_4_q: "Do I need to bring my own models?",
    faq_4_a: "No — models are pre-loaded and tuned. Enterprise plans can discuss custom model requirements.",

    waitlist_title: "Get on the early access list",
    waitlist_body:
      "We're onboarding a limited number of agents and API keys first. Leave your email and we'll reach out.",
    waitlist_email_label: "Email address",
    waitlist_email_placeholder: "you@example.com",
    waitlist_submit: "Notify me",
    waitlist_submitting: "Submitting…",
    waitlist_success: "You're on the list — we'll be in touch.",
    waitlist_error: "Something went wrong. Please try again.",

    footer_copyright: "© 2026 Thirty Nighty. An independent project.",
  },
  es: {
    nav_product: "Producto",
    nav_how: "Cómo funciona",
    nav_pricing: "Precios",
    nav_faq: "Preguntas",
    nav_join: "Unirme a la lista",

    hero_badge: "Ahora aceptando acceso anticipado",
    hero_title_1: "Un agente de IA gestionado, o inferencia directa.",
    hero_title_2: "Tú decides.",
    hero_body:
      "Thirty Nighty ejecuta un agente Hermes por ti — memoria, herramientas y contexto incluidos — o te da un endpoint compatible con OpenAI si prefieres construirlo tú mismo. Mismo hardware privado debajo, en ambos casos.",
    hero_cta_primary: "Consigue acceso anticipado",
    hero_cta_secondary: "Ver cómo funciona",
    hero_footnote: "Coste de hardware fijo · Sin sorpresas por token · Los datos nunca salen del equipo",

    problem_title: "La IA en la nube se vuelve cara y filtra datos, rápido.",
    problem_body:
      "Solo los agentes de código pueden costar entre $100 y $1,000 por desarrollador al mes. Cada prompt viaja por servidores ajenos. Y en cuanto necesitas un asistente real — no solo una API — vuelves a improvisar wrappers.",
    problem_1_title: "Facturas impredecibles",
    problem_1_body: "El medidor de tokens nunca se detiene, y el uso se dispara con la adopción.",
    problem_2_title: "Los datos salen de casa",
    problem_2_body: "Los equipos regulados no pueden enviar datos de clientes a un LLM de terceros.",
    problem_3_title: "Ningún agente real, solo llamadas a una API",
    problem_3_body: "Envolver una API no es lo mismo que un asistente con memoria y herramientas.",

    product_title: "Dos formas de usar Thirty Nighty",
    product_subtitle: "Mismo backend de inferencia privado. Elige la capa que se ajusta a tu forma de trabajar.",
    product_agent_badge: "Gestionado",
    product_agent_title: "Agentes Hermes como servicio",
    product_agent_body:
      "Hermes es un asistente de IA que recuerda tu contexto, usa herramientas y hace tareas por ti — no es solo un chatbot que olvida todo al cerrar la pestaña. Lo configuramos y lo mantenemos funcionando nosotros; tú solo empiezas a hablarle.",
    product_agent_1: "Recuerda tu contexto entre conversaciones",
    product_agent_2: "Busca en la web, redacta documentos, ejecuta código, automatiza tareas",
    product_agent_3: "Accede por chat, Telegram o email",
    product_agent_4: "Configúralo una vez para tareas recurrentes programadas",
    product_api_badge: "Desarrollador",
    product_api_title: "API de inferencia",
    product_api_body:
      "Un endpoint de inferencia puro, compatible con OpenAI — sin agente, sin capa de asistente, solo el modelo. Apunta cualquier frontend compatible con OpenAI (Open WebUI, LibreChat, etc.), o llámalo directamente desde Python, curl o tu propia app.",
    product_api_1: "Funciona de fábrica con Open WebUI y otros frontends compatibles con OpenAI",
    product_api_2: "Llámalo directamente con Python, curl o cualquier SDK compatible con OpenAI",
    product_api_3: "Soporte de streaming (SSE)",
    product_api_4: "Decodificación especulativa para mayor rendimiento",

    how_title: "Un backend privado, dos puertas de entrada",
    how_subtitle:
      "Ambos productos corren sobre hardware de inferencia dedicado — nada compartido con otros proveedores, nada enviado a una nube de terceros.",
    how_1_title: "Los clientes se conectan",
    how_1_body: "Habla con tu agente Hermes por chat/Telegram, o llama a la API desde Open WebUI, Python, curl o cualquier cliente compatible con OpenAI.",
    how_2_title: "Capa de servicio",
    how_2_body: "Agentes Hermes (aislados, memoria por cliente) o enrutamiento directo de API — sin capa de asistente de por medio.",
    how_3_title: "Hardware de inferencia dedicado",
    how_3_body:
      "Un equipo de inferencia de coste fijo con decodificación especulativa para alto rendimiento. Totalmente privado — nada sale del equipo.",

    pricing_title: "Precios agresivos de lanzamiento",
    pricing_subtitle:
      "Sin sorpresas por token, y precios de lanzamiento muy por debajo del mercado para que empieces sin fricción.",
    pricing_badge: "Precio de lanzamiento — tiempo limitado",
    pricing_agents_label: "Agentes como servicio",
    pricing_api_label: "API de inferencia",
    pricing_most_popular: "Más popular",
    pricing_agent_starter: "1 agente Hermes",
    pricing_agent_5k: "5K interacciones/mes",
    pricing_agent_advanced: "Herramientas avanzadas",
    pricing_agent_25k: "25K interacciones/mes",
    pricing_agent_team: "Hasta 5 agentes",
    pricing_agent_centralized: "Gestión centralizada",
    pricing_agent_unlimited: "Agentes ilimitados",
    pricing_agent_sla: "SLA, instancia dedicada",
    pricing_api_100: "100 solicitudes/mes",
    pricing_api_base: "Modelo base",
    pricing_api_10k: "10K solicitudes/mes",
    pricing_api_streaming: "Streaming",
    pricing_api_100k: "100K solicitudes/mes",
    pricing_api_priority: "Cola prioritaria",
    pricing_api_volume: "Volumen dedicado",
    pricing_api_sla: "SLA",

    trust_1_title: "Hardware de coste fijo",
    trust_1_body: "Coste de infraestructura único. Ningún medidor corriendo mientras duermes.",
    trust_2_title: "Privado por diseño",
    trust_2_body: "La inferencia ocurre en hardware dedicado — ningún dato se envía a nubes de terceros.",
    trust_3_title: "Construido en solitario, construido en Europa",
    trust_3_body: "Un proyecto independiente con base en Europa, sin inversores, sin comité — solo decisiones ejecutadas.",

    faq_title: "Preguntas frecuentes",
    faq_1_q: "¿Cuál es la diferencia entre un agente y la API?",
    faq_1_a:
      "El agente Hermes es un asistente de IA listo para usar, con memoria y herramientas — solo le hablas, sin ninguna configuración de tu parte. La API es inferencia pura: un endpoint compatible con OpenAI sin capa de asistente, pensado para desarrolladores que quieren conectar su propio frontend o código.",
    faq_1b_q: "¿Cómo uso la API de Inferencia?",
    faq_1b_a:
      "Como prefieras. Apunta un frontend compatible con OpenAI que ya uses — Open WebUI, LibreChat y herramientas similares funcionan de fábrica — o llámalo directamente con Python, curl, o cualquier SDK compatible con OpenAI. Es el mismo formato de endpoint que la API de OpenAI, solo que apuntando a nuestro hardware.",
    faq_2_q: "¿Se usan mis datos para entrenar algo?",
    faq_2_a:
      "No. La inferencia corre en hardware dedicado. Los prompts y respuestas se quedan dentro del servicio — nada se usa para entrenar modelos de terceros.",
    faq_3_q: "¿Puedo cambiar entre planes?",
    faq_3_a: "Sí, las mejoras y bajadas de plan se aplican en tu siguiente ciclo de facturación.",
    faq_4_q: "¿Necesito aportar mis propios modelos?",
    faq_4_a:
      "No — los modelos vienen precargados y ajustados. Los planes Enterprise pueden negociar requisitos de modelos personalizados.",

    waitlist_title: "Únete a la lista de acceso anticipado",
    waitlist_body:
      "Estamos aceptando un número limitado de agentes y API keys primero. Deja tu email y te contactaremos.",
    waitlist_email_label: "Correo electrónico",
    waitlist_email_placeholder: "tu@ejemplo.com",
    waitlist_submit: "Avísame",
    waitlist_submitting: "Enviando…",
    waitlist_success: "Ya estás en la lista — te contactaremos.",
    waitlist_error: "Algo salió mal. Inténtalo de nuevo.",

    footer_copyright: "© 2026 Thirty Nighty. Un proyecto independiente.",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];
