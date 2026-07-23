import { SITE, SERVICES, PROJECTS } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date();
  const staticPaths = ["/", "/about/", "/services/", "/projects/", "/contact/"];
  const servicePaths = SERVICES.map((s) => `/services/${s.slug}/`);
  const projectPaths = PROJECTS.map((p) => `/projects/${p.slug}/`);

  return [...staticPaths, ...servicePaths, ...projectPaths].map((path) => ({
    url: SITE.url + path,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
