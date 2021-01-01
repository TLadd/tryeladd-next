import { SitemapStream, streamToPromise } from "sitemap";
import path from "path";
import fs from "fs";

async function generateSiteMap() {
  const root = process.cwd();
  const contentRoot = path.join(root, "content");
  const posts = fs.readdirSync(contentRoot).map((fileName) => {
    const slug = fileName.replace(/\.mdx/, "");
    return { url: `/blog/${slug}`, changefreq: "monthly", priority: 0.7 };
  });
  const smStream = new SitemapStream({
    hostname: "https://tryeladd.com/",
  });

  smStream.write({ url: "/", changefreq: "weekly", priority: 0.7 });

  // Create each URL row
  posts.forEach((post) => {
    smStream.write(post);
  });

  // End sitemap stream
  smStream.end();

  // XML sitemap string
  const sitemapOutput = (await streamToPromise(smStream)).toString();

  // Display output to user
  const outPath = path.join(root, "public", "sitemap.xml");

  fs.writeFileSync(outPath, sitemapOutput, "utf8");
}

generateSiteMap();
