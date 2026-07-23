import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { SITE, PROJECTS, TESTIMONIALS } from "../../../lib/site";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study — Nafi Siam`,
    description: project.summary,
    alternates: { canonical: `${SITE.url}/projects/${project.slug}/` },
    openGraph: {
      title: `${project.title} — Case Study — Nafi Siam`,
      description: project.summary,
      url: `${SITE.url}/projects/${project.slug}/`,
    },
  };
}

export default function ProjectDetail({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const testimonial = TESTIMONIALS.find((t) => t.slug === project.testimonial);
  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" },
      { "@type": "ListItem", position: 2, name: "Projects", item: SITE.url + "/projects/" },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${SITE.url}/projects/${project.slug}/`,
      },
    ],
  };

  const workLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE.url}/projects/${project.slug}/#work`,
    name: project.title,
    description: project.summary,
    creator: { "@id": SITE.url + "/#person" },
    url: `${SITE.url}/projects/${project.slug}/`,
  };

  return (
    <main>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={workLd} />

      <section className="detail-hero wrap">
                  <span className="tag">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>
          <div className="meta-row">
            <div>
              <strong>Role</strong>
              {project.role}
            </div>
            <div>
              <strong>Timeline</strong>
              {project.timeline}
            </div>
            <div>
              <strong>Category</strong>
              {project.category}
            </div>
          </div>
      </section>

      <section className="detail-section">
        <div className="wrap detail-body">
          <div>
            <h2>The challenge</h2>
            <p style={{ color: "var(--muted)" }}>{project.challenge}</p>
          </div>
          <div className="side-card">
            <div className="tag">Stack</div>
            <div className="stack" style={{ marginTop: 0 }}>
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <h2>The approach</h2>
          <ol className="step-list">
            {project.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <h2>Results</h2>
          <ul className="results-list">
            {project.results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      {testimonial && (
        <section className="detail-section">
          <div className="wrap">
            <div className="quote" style={{ maxWidth: 680 }}>
              <p className="quote-text">{testimonial.quote}</p>
              <div className="quote-attrib">
                <strong>{testimonial.name}</strong> — {testimonial.title}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="detail-section">
        <div className="wrap">
          <div className="section-head">
            <h2>Want results like these?</h2>
          </div>
          <Link href="/contact/" className="btn btn-primary">
            Tell me about your project
          </Link>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <h2>More work</h2>
          <div className="related-links">
            {otherProjects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}/`}>
                {p.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
