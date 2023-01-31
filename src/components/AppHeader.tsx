import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { css } from "styled-components";

function AppHeader() {
  return (
    <header
      css={css`
        height: 64px;
        padding: 8px 24px;
        border-bottom: 1px solid #eaeaea;
      `}
    >
      <ul
        css={css`
          display: flex;
          align-items: center;
          height: 100%;
        `}
      >
        <li
          css={css`
            display: flex;
            align-items: center;
            font-size: 24px;
          `}
        >
          <Link
            href="/"
            css={css`
              display: flex;
              align-items: center;
              font-size: 24px;
              text-decoration: none;
              cursor: pointer;
            `}
          >
            <Image
              src="/android-chrome-512x512.png"
              alt="Logo"
              width={50}
              height={50}
              loading="eager"
            />{" "}
            <span
              css={css`
                margin-left: 12px;
              `}
            >
              Thomas Ladd
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default AppHeader;
