// Central site configuration — edit values here, everything updates site-wide.
//
// URL resolution (no hardcoded production domain in source):
//   1. BASE_URL           — explicit override, required for the GitHub Pages build
//                            (see README), e.g. BASE_URL=https://USERNAME.github.io/REPO
//   2. VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL — auto-injected by Vercel at build
//                            time, so a Vercel deploy resolves the right URL with zero config
//   3. http://localhost:3000 — local build fallback, never used in a real deployment
const inferredUrl =
  process.env.BASE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

export const SITE = {
  url: inferredUrl,
  name: "Nafi Siam",
  title: "Nafi Siam — ORM Executive & AI Engineer",
  jobTitle: ["ORM Executive", "AI Engineer"],
  tagline:
    "Online Reputation Management executive and AI engineer helping people and businesses own what search engines say about them.",
  email: "nafisiam4@gmail.com",
  phone: "+8801600201234",
  linkedin: "https://www.linkedin.com/in/nafiu-ibne-mazhar/",
  location: "Dhaka, Bangladesh",
  photo: "/nafi-siam.png",
};

export const STATS = [
  { value: "40+", label: "Branded SERPs cleaned or defended" },
  { value: "12", label: "Production apps shipped solo with AI tooling" },
  { value: "300+", label: "Ranking pages built through AI content pipelines" },
  { value: "24h", label: "Typical first response time" },
];

export const PROCESS = [
  {
    step: "01",
    title: "Audit the branded SERP",
    detail:
      "I map exactly what's ranking for your name or brand today — negative results, outdated profiles, thin assets — and what's realistically ownable on page one.",
  },
  {
    step: "02",
    title: "Design the asset strategy",
    detail:
      "A plan for what gets built or fixed: suppression targets, new positive assets, technical SEO work, and the schema/structured-data layer that helps Google trust it.",
  },
  {
    step: "03",
    title: "Build it myself",
    detail:
      "No handoff to a separate dev team. I build the sites, pipelines, and integrations directly — Next.js, Supabase, WordPress, AI-assisted content — so strategy and execution stay in sync.",
  },
  {
    step: "04",
    title: "Monitor and hold the position",
    detail:
      "Rankings are checked on a schedule, not assumed. If something slips, I know before you do, and the plan adjusts.",
  },
];

export const TESTIMONIALS = [
  {
    slug: "healthcare-exec",
    quote:
      "Nafi didn't just clean up what people saw when they searched my name — he explained why each result was ranking and what it would take to change it. Six months later the negative coverage is on page three, not page one.",
    name: "VP of Clinical Affairs",
    title: "US Healthcare Group",
    context: "reputation-recovery-campaign",
  },
  {
    slug: "ecommerce-founder",
    quote:
      "We got quotes from three agencies to build the store and none of them could ship in under four months. Nafi had a working checkout in three weeks and kept iterating with us in real time.",
    name: "Founder",
    title: "Direct-to-consumer retail brand",
    context: "ai-ecommerce-platform",
  },
  {
    slug: "physician-client",
    quote:
      "The bio site he built for me ranks above my hospital's own profile page for my name. Patients tell me it's the first thing they see, and it's exactly the impression I want to give.",
    name: "Attending Physician",
    title: "Private practice, Northeast US",
    context: "physician-bio-site",
  },
  {
    slug: "publisher-ops",
    quote:
      "The content pipeline Nafi built runs with almost no oversight from us now. What used to take a team of three writers a week happens overnight, and the pages actually rank.",
    name: "Head of Content Operations",
    title: "Niche media publisher",
    context: "seo-content-wiki",
  },
  {
    slug: "agency-partner",
    quote:
      "What sets Nafi apart is that he thinks like both a strategist and an engineer. Most ORM people can tell you what's wrong with a SERP; he's one of the few who can also build the fix.",
    name: "Managing Partner",
    title: "Digital marketing agency (referral partner)",
    context: "seo-gbp-optimization",
  },
];

export const SERVICES = [
  {
    slug: "online-reputation-management",
    title: "Online Reputation Management",
    short:
      "Suppress negative search results, build positive digital assets, and take control of branded SERPs.",
    intro:
      "Reputation problems rarely have a single fix — they're a mix of what's ranking, what should be ranking, and what's missing entirely. I run ORM as a system: audit, build, monitor, repeat.",
    points: [
      "Negative link & image suppression campaigns",
      "Branded SERP audits and asset strategy",
      "High-authority profile and content placement",
      "Review and sentiment recovery programs",
    ],
    process: [
      {
        title: "SERP & sentiment audit",
        detail:
          "Full inventory of page one and two for the target name or brand: what's negative, what's neutral, what's ownable.",
      },
      {
        title: "Asset & suppression plan",
        detail:
          "A prioritized list of assets to build (bio sites, profiles, press, content) and links to target for de-ranking.",
      },
      {
        title: "Build and place",
        detail:
          "I build the technical assets myself and place or syndicate content through legitimate, high-authority channels.",
      },
      {
        title: "Track and defend",
        detail:
          "Scheduled rank monitoring so a slipped position gets caught and corrected before it becomes a visible problem again.",
      },
    ],
    faq: [
      {
        q: "How long does suppression typically take?",
        a: "Most branded SERP campaigns show meaningful movement within 6-10 weeks and stabilize within 3-6 months, depending on how established the negative content is.",
      },
      {
        q: "Do you guarantee removal of negative content?",
        a: "No ethical ORM practitioner can guarantee removal of content you don't own. The realistic, durable strategy is building stronger, better-ranking positive assets — which is what this service delivers.",
      },
      {
        q: "Is this just SEO with a different name?",
        a: "It overlaps heavily with technical SEO, but ORM adds sentiment analysis, asset diversification across profile types, and suppression-specific link strategy on top.",
      },
    ],
    testimonial: "healthcare-exec",
  },
  {
    slug: "ai-engineering",
    title: "AI Engineering & Automation",
    short:
      "Production-grade web apps and automation pipelines built end-to-end with modern AI tooling.",
    intro:
      "I use AI-assisted development the way an experienced engineer uses any powerful tool — to move faster without cutting corners on architecture, security, or maintainability.",
    points: [
      "Full-stack app development (Next.js, Supabase, Lovable)",
      "AI content pipelines with human-quality output",
      "Custom WordPress plugins and integrations",
      "Workflow automation that replaces manual ops",
    ],
    process: [
      {
        title: "Scope the system",
        detail:
          "Define the data model, user flows, and integration points before any code — the same discipline as a traditional build, just faster to execute.",
      },
      {
        title: "Build the core",
        detail:
          "Ship a working end-to-end slice early (auth, data, one real flow) so we're validating against something real, not a spec.",
      },
      {
        title: "Iterate with AI tooling",
        detail:
          "Feature buildout, content generation, and integration work move at AI-assisted speed, with every output reviewed for correctness and security.",
      },
      {
        title: "Harden and hand off",
        detail:
          "Error handling, monitoring, and documentation so the system is maintainable by you or any future developer, not just by me.",
      },
    ],
    faq: [
      {
        q: "What stack do you default to?",
        a: "Next.js and Supabase for most full-stack apps, WordPress when the client already runs on it, and Lovable when a client needs to keep editing the UI themselves after handoff.",
      },
      {
        q: "Do you write the code or just prompt an AI?",
        a: "Both — I use AI tooling to move fast on boilerplate and first drafts, but architecture, security review, and anything business-critical gets hand-reviewed and often hand-written.",
      },
      {
        q: "Can you take over an existing codebase?",
        a: "Yes. Most engagements start with a codebase audit so I understand existing patterns before adding automation or new features on top.",
      },
    ],
    testimonial: "ecommerce-founder",
  },
  {
    slug: "seo-gbp-optimization",
    title: "SEO & Google Business Profile",
    short:
      "Technical SEO, structured data, and local visibility that turn websites into ranking assets.",
    intro:
      "Rankings follow technical fundamentals plus content that actually deserves to rank. I work both ends: the schema and site health Google needs, and the content that gives it something worth showing.",
    points: [
      "Technical SEO & advanced schema markup",
      "Google Business Profile optimization",
      "Programmatic and AI-assisted content at scale",
      "Backlink and digital-PR campaigns",
    ],
    process: [
      {
        title: "Technical audit",
        detail:
          "Crawlability, indexation, Core Web Vitals, and schema coverage checked against what's actually blocking rankings today.",
      },
      {
        title: "Structured data & site fixes",
        detail:
          "JSON-LD, canonicals, and sitemap corrections implemented directly — not just recommended in a report.",
      },
      {
        title: "Content & local presence",
        detail:
          "Programmatic or AI-assisted content builds topical authority; Google Business Profile is optimized for local intent queries.",
      },
      {
        title: "Links and measurement",
        detail:
          "Digital-PR and backlink work targeted at pages that need authority, tracked against ranking and traffic movement, not vanity metrics.",
      },
    ],
    faq: [
      {
        q: "Do you handle Google Business Profile suspensions?",
        a: "Yes — GBP suspension appeals and re-verification are a common part of local SEO engagements, especially for multi-location or service-area businesses.",
      },
      {
        q: "What does 'programmatic content' mean here?",
        a: "Template-driven pages generated from structured data (locations, services, FAQs) at scale, with AI assisting the drafting and a human editorial pass before publishing.",
      },
      {
        q: "How is this different from the ORM service?",
        a: "SEO here is about growing overall visibility and rankings; ORM is specifically about controlling what shows for a name or brand. They share tooling but different goals.",
      },
    ],
    testimonial: "agency-partner",
  },
];

export const PROJECTS = [
  {
    slug: "reputation-recovery-campaign",
    title: "Executive Reputation Recovery",
    category: "ORM",
    role: "Lead ORM Strategist",
    timeline: "6 months",
    summary:
      "Led a suppression campaign for a US-based executive: pushed negative articles off page one by building and ranking 12+ positive assets — bio sites, press placements, and optimized profiles.",
    challenge:
      "A healthcare executive had two outdated negative news articles and a thin, unmanaged professional profile occupying four of the top ten branded search results — the first thing patients, colleagues, and recruiters saw.",
    approach: [
      "Audited the full branded SERP and sentiment across page one and two",
      "Built a custom bio site with Person/Physician schema as the primary owned asset",
      "Placed and optimized profiles across five high-authority industry directories",
      "Secured two positive press placements through digital-PR outreach",
      "Ran a structured review-recovery program to add fresh, positive signal",
    ],
    stack: ["SERP strategy", "Content assets", "Schema markup"],
    outcome: "Page one fully controlled by positive results within months.",
    results: [
      "Both negative articles pushed to page three within 5 months",
      "New bio site ranking #1 for the executive's full name",
      "Zero negative results remaining in the top 10 at project close",
    ],
    testimonial: "healthcare-exec",
  },
  {
    slug: "ai-ecommerce-platform",
    title: "AI-Built E-commerce Platform",
    category: "AI Engineering",
    role: "Solo Full-Stack Engineer",
    timeline: "3 weeks to first launch",
    summary:
      "Designed and shipped a complete e-commerce platform — catalog, cart, checkout, and admin — built end-to-end with AI-assisted development on a Lovable + Supabase stack.",
    challenge:
      "A direct-to-consumer brand needed a fully custom store — not a templated Shopify build — but had a four-week timeline and no in-house engineering team.",
    approach: [
      "Designed the data model for catalog, inventory, and orders in Supabase",
      "Built the storefront and admin UI on Lovable for client-editable flexibility",
      "Implemented Stripe-ready checkout with tax and shipping logic",
      "Set up role-based admin access for the client's small ops team",
      "Handed off with documentation so the client's team could extend it directly",
    ],
    stack: ["Next.js", "Supabase", "Lovable", "Stripe-ready"],
    outcome: "Production store delivered solo, at a fraction of agency cost.",
    results: [
      "Working checkout live in 3 weeks, full platform in 6",
      "Delivered at roughly a third of the lowest agency quote received",
      "Client's ops team able to add products and manage orders without a developer",
    ],
    testimonial: "ecommerce-founder",
  },
  {
    slug: "seo-content-wiki",
    title: "SEO Wiki & AI Content Pipeline",
    category: "SEO + AI",
    role: "Systems Architect & Engineer",
    timeline: "Ongoing, 8+ months live",
    summary:
      "Built a niche knowledge wiki powered by an automated AI content pipeline: research, drafting, internal linking, and structured data generated programmatically with editorial review.",
    challenge:
      "A publisher wanted deep topical coverage of a niche subject area but couldn't staff a large enough writing team to compete with existing sites in the space.",
    approach: [
      "Mapped the full topic cluster and internal-linking architecture upfront",
      "Built an automated pipeline: research → draft → structured-data generation",
      "Added a lightweight editorial review step before any page published",
      "Generated JSON-LD (Article, FAQ, breadcrumbs) programmatically per page",
      "Instrumented ranking and indexation tracking across the full page set",
    ],
    stack: ["AI pipeline", "JSON-LD", "Programmatic SEO"],
    outcome: "Hundreds of indexed, ranking pages from one automated system.",
    results: [
      "300+ pages published and indexed within the first 4 months",
      "Content operations reduced from a 3-person writing team to editorial review only",
      "Majority of published pages ranking on page one for target long-tail terms",
    ],
    testimonial: "publisher-ops",
  },
  {
    slug: "news-portal",
    title: "Automated News Portal",
    category: "AI Engineering",
    role: "Solo Developer",
    timeline: "5 weeks",
    summary:
      "A full news portal with automated ingestion, categorization, and publishing — including a custom RSS canonicalization plugin to keep syndicated content SEO-safe.",
    challenge:
      "The client aggregated and republished syndicated news content but was getting flagged for duplicate content, hurting rankings across the whole portal.",
    approach: [
      "Built automated ingestion and categorization for syndicated feeds",
      "Wrote a custom WordPress plugin to canonicalize RSS-sourced content correctly",
      "Set up automated publishing rules with category and tag mapping",
      "Added schema markup for NewsArticle and organization-level publisher data",
    ],
    stack: ["WordPress", "Custom plugin", "RSS automation"],
    outcome: "Self-running publication with clean canonical structure.",
    results: [
      "Duplicate-content flags cleared within one crawl cycle post-launch",
      "Portal runs with near-zero manual publishing intervention",
      "Organic indexation rate improved after canonical fix shipped",
    ],
    testimonial: null,
  },
  {
    slug: "content-community-platform",
    title: "Content & Community Platform",
    category: "AI Engineering",
    role: "Solo Full-Stack Engineer",
    timeline: "10 weeks",
    summary:
      "A combined content management and community contribution app where members submit, moderate, and publish — architected and built solo with AI-assisted development.",
    challenge:
      "The client wanted a member-driven publishing platform — submissions, moderation, roles — without the cost of a multi-person engineering team.",
    approach: [
      "Designed a role-based architecture (member, moderator, admin) from the ground up",
      "Built submission and moderation queues with status tracking",
      "Implemented authentication and permissions with Supabase",
      "Shipped a public-facing content layer separate from the contribution backend",
    ],
    stack: ["Next.js", "Supabase", "Auth & roles"],
    outcome: "Scalable multi-role platform shipped by a one-person team.",
    results: [
      "Full platform shipped solo in 10 weeks",
      "Three distinct user roles live at launch with clean permission boundaries",
      "Zero moderation-queue backlog reported after first month live",
    ],
    testimonial: null,
  },
  {
    slug: "physician-bio-site",
    title: "Physician Bio & Authority Site",
    category: "ORM + SEO",
    role: "Lead Strategist & Developer",
    timeline: "4 weeks",
    summary:
      "Custom-coded medical professional bio site with advanced Person/Physician schema, self-referencing canonicals, and E-E-A-T-focused content built to rank for the client's name.",
    challenge:
      "The client's hospital-hosted profile page outranked every asset the client actually controlled, meaning they had no ownership over their own branded search presence.",
    approach: [
      "Hand-coded a fast, custom bio site instead of a templated builder",
      "Implemented Person and Physician schema with credentials and affiliations",
      "Wrote E-E-A-T-focused content: credentials, publications, patient philosophy",
      "Set self-referencing canonicals and clean URL structure from day one",
    ],
    stack: ["Custom HTML/CSS", "JSON-LD", "E-E-A-T"],
    outcome: "A ranking, brand-owned asset on the client's branded SERP.",
    results: [
      "New bio site outranked the hospital profile page within 10 weeks",
      "Site now holds the #1 organic position for the client's full name",
      "Rich snippet eligibility achieved through structured data implementation",
    ],
    testimonial: "physician-client",
  },
];
