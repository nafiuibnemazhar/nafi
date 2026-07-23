import JsonLd from "../../components/JsonLd";
import { SITE } from "../../lib/site";

export const metadata = {
  title: "Contact Nafi Siam — ORM & AI Projects",
  description:
    "Contact Nafi Siam for online reputation management, AI engineering, or SEO work. Email, phone, and LinkedIn — replies within 24 hours.",
  alternates: { canonical: SITE.url + "/contact/" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: SITE.url + "/contact/" },
  ],
};

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": SITE.url + "/contact/#page",
  url: SITE.url + "/contact/",
  name: "Contact Nafi Siam",
  mainEntity: { "@id": SITE.url + "/#person" },
};

export default function Contact() {
  return (
    <main>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={contactLd} />
      <section className="page-hero wrap">
                  <p className="eyebrow">Contact</p>
          <h1>Contact Nafi Siam</h1>
          <p>
            Tell me what search currently says about you — or what you want
            to build. I reply within 24 hours.
          </p>
      </section>

      <section className="section">
        <div className="wrap detail-body">
          <div className="contact-card">
            <div className="row">
              <span className="label">Email</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div className="row">
              <span className="label">Phone</span>
              <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
            </div>
            <div className="row">
              <span className="label">LinkedIn</span>
              <a href={SITE.linkedin} target="_blank" rel="me noopener">
                linkedin.com/in/nafiu-ibne-mazhar
              </a>
            </div>
            <div className="row">
              <span className="label">Based in</span>
              <span>Dhaka, Bangladesh (working worldwide)</span>
            </div>
          </div>
          <div className="side-card">
            <div className="tag">What happens next</div>
            <div className="process-steps" style={{ marginTop: 8, gridTemplateColumns: "1fr" }}>
              <div className="process-step">
                <div className="step-num">01</div>
                <h3>You reach out</h3>
                <p>Email, call, or message on LinkedIn — whatever's easiest.</p>
              </div>
              <div className="process-step">
                <div className="step-num">02</div>
                <h3>I review the situation</h3>
                <p>
                  A quick look at what's currently showing when you're
                  searched, or the scope of what you want built.
                </p>
              </div>
              <div className="process-step">
                <div className="step-num">03</div>
                <h3>You get a plan</h3>
                <p>A clear next step within 24 hours — no long sales cycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
