import * as React from "react";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import mdxPrism from "mdx-prism";
import AppHeader from "../../components/AppHeader";
import { NextSeo } from "next-seo";
import { css } from "styled-components";
import { PostFrontMatter } from "../../types";
import { SITE_ORIGIN } from "../../constants";

const root = process.cwd();

interface BlogPostProps {
  mdxSource: any;
  frontMatter: PostFrontMatter;
}

export default function BlogPost({ mdxSource, frontMatter }: BlogPostProps) {
  const content = hydrate(mdxSource);

  return (
    <>
      <NextSeo
        description={frontMatter.description}
        title={frontMatter.title}
        openGraph={{
          type: "article",
          images: [
            {
              url: `${SITE_ORIGIN}${frontMatter.image}`,
              width: 1000,
              height: 625,
              alt: frontMatter.imageAlt,
            },
          ],
        }}
      />
      <AppHeader />
      <main
        className="blog-page"
        css={css`
          display: flex;
          justify-content: center;
          padding: 2rem;
        `}
      >
        <div
          css={css`
            flex: 0 1 45rem;
            min-width: 0;
          `}
        >
          <h1
            css={css`
              margin-bottom: 2rem;
              text-align: center;
            `}
          >
            {frontMatter.title}
          </h1>
          {content}
        </div>
      </main>
    </>
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs
      .readdirSync(path.join(root, "content"))
      .map((p) => ({ params: { slug: p.replace(/\.mdx/, "") } })),
  };
}
export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, "content", `${params.slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      rehypePlugins: [mdxPrism],
    },
  });
  return { props: { mdxSource, frontMatter: data } };
}
