import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { SITE, SERVICES, TESTIMONIALS } from "../../../lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — Nafi Siam`,
    description: service.short,
    alternates: { canonical: `${SITE.url}/services/${service.slug}/` },
    openGraph: {
      title: `${service.title} — Nafi Siam`,
      description: service.short,
      url: `${SITE.url}/services/${service.slug}/`,
    },
  };
}

export default function ServiceDetail({ params }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const testimonial = TESTIMONIALS.find((t) => t.slug === service.testimonial);
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: SITE.url + "/services/" },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE.url}/services/${service.slug}/`,
      },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${service.slug}/#service`,
    name: service.title,
    description: service.short,
    provider: { "@id": SITE.url + "/#person" },
    areaServed: "Worldwide",
    url: `${SITE.url}/services/${service.slug}/`,
  };

  const faqLd = service.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <main>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={serviceLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <section className="detail-hero wrap">
                  <p className="eyebrow">Service</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.intro}</p>
      </section>

      <section className="detail-section">
        <div className="wrap detail-body">
          <div>
            <h2>What's included</h2>
            <ul className="results-list">
              {service.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="side-card">
            <div className="tag">Next step</div>
            <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginBottom: 16 }}>
              Tell me what's currently showing when this is searched — I'll
              map what it would take to fix or improve it.
            </p>
            <Link href="/contact/" className="btn btn-primary">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      {service.process && (
        <section className="detail-section">
          <div className="wrap">
            <h2>How this engagement runs</h2>
            <div className="process-steps">
              {service.process.map((step, i) => (
                <div className="process-step" key={step.title}>
                  <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {service.faq && (
        <section className="detail-section">
          <div className="wrap">
            <h2>Frequently asked</h2>
            <div>
              {service.faq.map((f) => (
                <div className="faq-item" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="detail-section">
        <div className="wrap">
          <h2>Other services</h2>
          <div className="related-links">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`}>
                {s.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
