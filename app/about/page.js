import Image from "next/image";
import JsonLd from "../../components/JsonLd";
import { SITE } from "../../lib/site";

export const metadata = {
  title: "About Nafi Siam — ORM Executive & AI Engineer",
  description:
    "Nafi Siam is an ORM executive and AI engineer from Dhaka, Bangladesh, leading reputation campaigns and building AI-powered web applications end-to-end.",
  alternates: { canonical: SITE.url + "/about/" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" },
    { "@type": "ListItem", position: 2, name: "About", item: SITE.url + "/about/" },
  ],
};

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": SITE.url + "/about/#page",
  url: SITE.url + "/about/",
  name: "About Nafi Siam",
  mainEntity: { "@id": SITE.url + "/#person" },
};

const SKILLS = [
  {
    group: "Reputation & search",
    items: [
      "Branded SERP audits",
      "Suppression strategy",
      "Sentiment recovery",
      "E-E-A-T content strategy",
    ],
  },
  {
    group: "Engineering",
    items: ["Next.js & React", "Supabase & Postgres", "Lovable", "WordPress plugin development"],
  },
  {
    group: "SEO & structured data",
    items: [
      "Technical SEO audits",
      "JSON-LD / schema.org",
      "Programmatic content systems",
      "Google Business Profile",
    ],
  },
  {
    group: "AI & automation",
    items: [
      "AI-assisted development workflows",
      "Content generation pipelines",
      "Workflow automation",
      "Prompt & pipeline design",
    ],
  },
];

export default function About() {
  return (
    <main>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={aboutLd} />
      <section className="page-hero wrap">
                  <p className="eyebrow">About</p>
          <h1>About Nafi Siam</h1>
          <p>
            ORM executive by title, AI engineer by craft — one person
            covering the full distance from strategy call to shipped code.
          </p>
      </section>

      <section className="section">
        <div className="wrap about-grid">
          <Image
            src="/nafi-siam.png"
            alt="Nafi Siam, ORM Executive and AI Engineer"
            width={520}
            height={520}
            className="about-photo"
            priority
          />
          <div className="about-body">
            <p>
              I'm <strong>Nafi Siam</strong>, an Online Reputation Management
              executive and AI engineer based in Dhaka, Bangladesh. I lead an
              ORM team that has suppressed negative links and images, recovered
              damaged branded search results, and built lasting positive
              visibility for executives, physicians, and businesses.
            </p>
            <p>
              What makes my work different is that I don't stop at strategy. I
              build the assets myself: full web applications on Next.js and
              Supabase, custom WordPress plugins, automated AI content
              pipelines, and technically precise bio sites with advanced
              structured data. I think like a software architect — I can design
              a system, debug it, secure it, and scale it — and I use modern AI
              tooling to ship at a speed that used to take a full team.
            </p>
            <p>
              For clients, that means one point of contact who understands both
              the business problem (what should people find when they search
              you?) and the technical execution (how do we make Google agree?).
            </p>
            <div className="facts">
              <div>
                <dt>Roles</dt>
                <dd>ORM Executive & Team Leader · AI Engineer</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Reputation management, AI-built web apps, technical SEO</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>Next.js, Supabase, WordPress, Lovable, AI pipelines</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Dhaka, Bangladesh — working worldwide, remote-first</dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>How I got here</h2>
          </div>
          <div className="about-body" style={{ maxWidth: 720 }}>
            <p>
              I started on the reputation side — auditing branded search
              results and figuring out why certain content outranked others.
              That work kept running into the same wall: knowing exactly what
              asset needed to exist wasn't enough if there was no one to build
              it well or fast enough. So I learned to build it myself.
            </p>
            <p>
              Over time that turned into a second discipline in its own right.
              AI-assisted development let me take on full application builds —
              e-commerce platforms, content systems, automation pipelines —
              solo, at a pace that used to require a small team. Today the two
              sides feed each other: reputation strategy tells me what needs to
              exist, engineering lets me actually ship it.
            </p>
          </div>
          <p className="pull-quote">
            "The gap between a reputation strategy and a working, ranking
            asset is usually a development team you don't have. I closed that
            gap by becoming the development team."
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Tools & disciplines</h2>
            <p>What I actually use day to day, grouped by discipline.</p>
          </div>
          <div className="skills-grid">
            {SKILLS.map((group) => (
              <div className="skill-group" key={group.group}>
                <h4>{group.group}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
