import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { SITE, PROJECTS } from "../../lib/site";

export const metadata = {
  title: "Projects & Case Work — Nafi Siam",
  description:
    "Selected ORM campaigns, AI-built web applications, and SEO systems by Nafi Siam — real client work with identities kept confidential.",
  alternates: { canonical: SITE.url + "/projects/" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" },
    { "@type": "ListItem", position: 2, name: "Projects", item: SITE.url + "/projects/" },
  ],
};

const listLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": SITE.url + "/projects/#list",
  name: "Projects by Nafi Siam",
  itemListElement: PROJECTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      description: p.summary,
      creator: { "@id": SITE.url + "/#person" },
      url: SITE.url + "/projects/#" + p.slug,
    },
  })),
};

export default function Projects() {
  return (
    <main>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={listLd} />
      <section className="page-hero wrap">
                  <p className="eyebrow">Projects</p>
          <h1>Projects by Nafi Siam</h1>
          <p>
            Campaigns led and systems shipped. Client names stay private —
            the work and outcomes are real.
          </p>
      </section>

      <section className="section">
        <div className="wrap grid-3">
          {PROJECTS.map((p) => (
            <Link
              href={`/projects/${p.slug}/`}
              className="card card-link"
              key={p.slug}
              id={p.slug}
            >
              <span className="tag">{p.category}</span>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="outcome">{p.outcome}</div>
              <div className="card-cta">Read case study →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Want results like these?</h2>
          </div>
          <Link href="/contact/" className="btn btn-primary">
            Tell me about your project
          </Link>
        </div>
      </section>
    </main>
  );
}
