import Link from "next/link";
import Image from "next/image";
import JsonLd from "../components/JsonLd";
import AnimatedStat from "../components/AnimatedStat";
import { SITE, SERVICES, PROJECTS, STATS, PROCESS, TESTIMONIALS } from "../lib/site";

export const metadata = {
  title: SITE.title,
  description: SITE.tagline,
  alternates: { canonical: SITE.url + "/" },
  openGraph: {
    title: SITE.title,
    description: SITE.tagline,
    url: SITE.url + "/",
    images: [{ url: SITE.photo }],
  },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": SITE.url + "/#person",
  name: "Nafi Siam",
  alternateName: "Nafiu Ibne Mazhar",
  jobTitle: SITE.jobTitle,
  description: SITE.tagline,
  url: SITE.url + "/",
  image: SITE.url + SITE.photo,
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [SITE.linkedin],
  knowsAbout: [
    "Online Reputation Management",
    "AI Engineering",
    "Search Engine Optimization",
    "Google Business Profile Optimization",
    "Next.js Development",
    "Workflow Automation",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE.url + "/#website",
  url: SITE.url + "/",
  name: "Nafi Siam — ORM Executive & AI Engineer",
  publisher: { "@id": SITE.url + "/#person" },
  inLanguage: "en",
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": SITE.url + "/#service",
  name: "Nafi Siam — ORM & AI Services",
  url: SITE.url + "/",
  founder: { "@id": SITE.url + "/#person" },
  areaServed: "Worldwide",
  serviceType: SERVICES.map((s) => s.title),
};

export default function Home() {
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <main>
      <JsonLd data={personLd} />
      <JsonLd data={websiteLd} />
      <JsonLd data={serviceLd} />

      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">ORM Executive · AI Engineer</p>
            <h1>Nafi Siam — I make search engines tell the right story.</h1>
            <p className="lead">
              I lead online reputation campaigns that clean up branded search
              results, and I build the AI-powered web apps, content
              pipelines, and SEO assets that keep them that way.
            </p>
            <div className="hero-cta">
              <Link href="/contact/" className="btn btn-primary">
                Work with me
              </Link>
              <Link href="/projects/" className="btn btn-ghost">
                See my projects
              </Link>
            </div>
          </div>
          <div className="hero-photo-frame">
            <Image
              src="/nafi-siam.png"
              alt="Nafi Siam, ORM Executive and AI Engineer"
              width={320}
              height={420}
              priority
            />
          </div>
        </div>

        {/* Signature: what a controlled branded SERP looks like */}
        <div className="serp" aria-label="Illustration of a controlled search result">
          <div className="serp-search">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="#5B6B80" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" stroke="#5B6B80" strokeWidth="2" strokeLinecap="round" />
            </svg>
            your name or brand
          </div>
          <div className="serp-url">
            <span className="serp-favicon">N</span>
            yourbrand.com › about
          </div>
          <span className="serp-title">
            The result you want people to see — ranked #1
          </span>
          <p className="serp-snippet">
            This is what a managed reputation looks like: <b>positive,
            accurate, brand-owned assets</b> holding page one, built with
            technical SEO, structured data, and content that earns its rank.
          </p>
          <div className="serp-sitelinks">
            <Link href="/services/">Services</Link>
            <Link href="/projects/">Case work</Link>
            <Link href="/about/">About</Link>
            <Link href="/contact/">Contact</Link>
          </div>
          <p className="serp-note">✓ page one, under your control</p>
        </div>
      </section>

      <section className="section-invert">
        <div className="wrap" style={{ padding: "56px 24px" }}>
          <div className="stat-row">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <AnimatedStat value={s.value} />
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>What I do</h2>
            <p>
              Three disciplines, one goal: your name and brand look their best
              everywhere they're searched.
            </p>
          </div>
          <div className="grid-3">
            {SERVICES.map((s) => (
              <Link
                href={`/services/${s.slug}/`}
                className="card card-link"
                key={s.slug}
              >
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <ul>
                  {s.points.slice(0, 3).map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="card-cta">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Selected work</h2>
            <p>
              Real campaigns and builds — client identities kept confidential,
              results kept real.
            </p>
          </div>
          <div className="grid-3">
            {PROJECTS.slice(0, 3).map((p) => (
              <Link
                href={`/projects/${p.slug}/`}
                className="card card-link"
                key={p.slug}
              >
                <span className="tag">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <div className="outcome">{p.outcome}</div>
                <div className="card-cta">Read case study →</div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/projects/" className="btn btn-ghost">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>How an engagement runs</h2>
            <p>
              The same process whether the job is reputation recovery, a new
              app, or an SEO rebuild.
            </p>
          </div>
          <div className="process-steps">
            {PROCESS.map((step) => (
              <div className="process-step" key={step.step}>
                <div className="step-num">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-pastel">
        <div className="wrap">
          <div className="section-head">
            <h2>What clients say</h2>
            <p>Direct feedback from ORM campaigns and engineering builds.</p>
          </div>
          <div className="quote-grid">
            {featuredTestimonials.map((t) => (
              <div className="quote" key={t.slug}>
                <p className="quote-text">{t.quote}</p>
                <div className="quote-attrib">
                  <strong>{t.name}</strong> — {t.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Let's fix what search says about you</h2>
            <p>
              Whether it's a reputation problem, an app you need built, or a
              site that should be ranking — I respond within 24 hours.
            </p>
          </div>
          <Link href="/contact/" className="btn btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
