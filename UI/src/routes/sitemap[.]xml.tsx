import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  head: () => ({
    meta: [],
  }),
  server: {
    loader: () => {
      const baseUrl = "https://alanrichllc.com";
      const routes = ["/", "/services", "/book", "/contact"];
      const urls = routes
        .map(
          (path) =>
            `  <url><loc>${baseUrl}${path}</loc><changefreq>weekly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`
        )
        .join("\n");
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
      return new Response(xml, {
        headers: { "Content-Type": "application/xml" },
      });
    },
  },
  component: () => null,
});
