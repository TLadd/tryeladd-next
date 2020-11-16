import { css } from "styled-components";
import { Stack } from "../components/Stack";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import AppHeader from "../components/AppHeader";

const root = process.cwd();

interface BlogItemProps {
  description: string;
  imgUrl: string;
  postedAt: string;
  slug: string;
  title: string;
}

function BlogItem({
  description,
  imgUrl,
  postedAt,
  slug,
  title,
}: BlogItemProps) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100%;
        border: 1px solid #e2e8f0;
        border-radius: 4px;
      `}
    >
      <Image
        width={375}
        height={250}
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
        src={imgUrl}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 11em;
          padding: 1em;
          @media screen and (max-width: 600px) {
            height: 6em;
          }
        `}
      >
        <Stack space="0.5em">
          <h4>
            <Link href="/blog/[slug]" as={`/blog/${slug}`}>
              <a
                css={css`
                  color: currentColor;
                  text-decoration: none;
                  cursor: pointer;
                `}
              >
                {title}
              </a>
            </Link>
          </h4>
          <p
            css={css`
              display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */
              overflow: hidden;
              color: #747474;
              font-weight: 300;
              font-size: 0.7rem;
              -webkit-line-clamp: 3;
              line-clamp: 3;
              -webkit-box-orient: vertical; /* stylelint-disable-line property-no-vendor-prefix */
              line-height: 1.4;

              @media screen and (max-width: 600px) {
                display: none;
              }
            `}
          >
            {description}
          </p>
        </Stack>
        <span
          css={css`
            justify-self: flex-end;
            font-weight: 500;
            font-size: 0.8rem;
          `}
        >
          {new Date(postedAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

function formatPath(p) {
  return p.replace(/\.mdx$/, "");
}

interface BlogsListProps {
  postData: PostItem[];
}
export default function BlogsList({ postData }: BlogsListProps) {
  return (
    <>
      <AppHeader />
      <main
        css={css`
          padding: 48px;
        `}
      >
        <h1
          css={css`
            text-align: center;
          `}
        >
          Blog
        </h1>
        <div
          css={css`
            display: flex;
            justify-content: center;
            padding: 48px 0;
          `}
        >
          <ul
            css={css`
              display: grid;
              grid-template-rows: auto;
              grid-template-columns: 1fr 1fr 1fr;
              gap: 1.5rem;
              max-width: 1200px;
              list-style-type: none;

              @media screen and (max-width: 1200px) {
                grid-template-columns: 1fr 1fr;
              }

              @media screen and (max-width: 600px) {
                grid-template-columns: 1fr;
              }
            `}
          >
            {postData.map((post) => {
              return (
                <li
                  key={post.slug}
                  css={css`
                    min-width: 0;
                  `}
                >
                  <BlogItem
                    description={post.frontMatter.description}
                    title={post.frontMatter.title}
                    slug={post.slug}
                    imgUrl={post.frontMatter.image}
                    postedAt={post.frontMatter.date}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

interface PostItem {
  slug: string;
  content: string;
  frontMatter: Record<string, any>;
}

export async function getStaticProps() {
  const contentRoot = path.join(root, "content");
  const postData = fs.readdirSync(contentRoot).map((p) => {
    const content = fs.readFileSync(path.join(contentRoot, p), "utf8");
    return {
      slug: p.replace(/\.mdx/, ""),
      content,
      frontMatter: matter(content).data,
    };
  });
  postData.sort((a, b) => {
    return new Date(a.frontMatter.date) > new Date(b.frontMatter.data) ? -1 : 1;
  });

  return { props: { postData } };
}
