import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { SITE, SERVICES } from "../../lib/site";

export const metadata = {
  title: "Services — ORM, AI Engineering & SEO by Nafi Siam",
  description:
    "Online reputation management, AI engineering and automation, and technical SEO with Google Business Profile optimization — services by Nafi Siam.",
  alternates: { canonical: SITE.url + "/services/" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" },
    { "@type": "ListItem", position: 2, name: "Services", item: SITE.url + "/services/" },
  ],
};

const servicesLd = SERVICES.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": SITE.url + "/services/#" + s.slug,
  name: s.title,
  description: s.short,
  provider: { "@id": SITE.url + "/#person" },
  areaServed: "Worldwide",
  url: SITE.url + "/services/",
}));

export default function Services() {
  return (
    <main>
      <JsonLd data={breadcrumbLd} />
      {servicesLd.map((ld) => (
        <JsonLd key={ld["@id"]} data={ld} />
      ))}
      <section className="page-hero wrap">
                  <p className="eyebrow">Services</p>
          <h1>Services by Nafi Siam</h1>
          <p>
            Every engagement combines reputation strategy with hands-on
            engineering — I plan the outcome, then build the assets that
            deliver it.
          </p>
      </section>

      <section className="section">
        <div className="wrap grid-3">
          {SERVICES.map((s) => (
            <Link
              href={`/services/${s.slug}/`}
              className="card card-link"
              key={s.slug}
              id={s.slug}
            >
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="card-cta">See process & FAQ →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Not sure which one you need?</h2>
            <p>
              Most reputation problems are solved by a mix of all three. Tell
              me what people currently find when they search you — I'll map the
              fix.
            </p>
          </div>
          <Link href="/contact/" className="btn btn-primary">
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
