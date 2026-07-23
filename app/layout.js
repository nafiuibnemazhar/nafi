import "./globals.css";
import Link from "next/link";
import { SITE } from "../lib/site";
import ThemeToggle from "../components/ThemeToggle";

const THEME_INIT_SCRIPT = `
  try {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch (e) {}
`;

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s | Nafi Siam",
  },
  description: SITE.tagline,
  openGraph: {
    siteName: "Nafi Siam",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

const NAV = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Services", "/services/"],
  ["Projects", "/projects/"],
  ["Contact", "/contact/"],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Fraunces:ital,wght@0,600;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="brand">
              <span>Nafi</span>
              <span>Siam</span>
            </Link>
            <div className="header-right">
              <nav className="nav" aria-label="Main navigation">
                {NAV.map(([label, href]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="wrap">
            <div className="footer-top">
              <div className="footer-cta">
                <div className="footer-brand">
                  <span>Nafi</span>
                  <span>Siam</span>
                </div>
                <p>ORM Executive &amp; AI Engineer</p>
                <p style={{ marginTop: 20 }}>
                  ORM strategy, AI-built web apps, and technical SEO — one
                  point of contact, from plan to shipped code.
                </p>
                <Link href="/contact/" className="btn btn-primary">
                  Get in touch
                </Link>
              </div>
              <div className="footer-links">
                <div className="footer-col">
                  <span className="footer-heading">Site</span>
                  {NAV.map(([label, href]) => (
                    <Link key={href} href={href}>
                      {label}
                    </Link>
                  ))}
                </div>
                <div className="footer-col">
                  <span className="footer-heading">Contact</span>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
                  <a href={SITE.linkedin} rel="me noopener" target="_blank">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <span>
                © {new Date().getFullYear()} Nafi Siam — ORM Executive &amp;
                AI Engineer
              </span>
              <span>{SITE.location}</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
