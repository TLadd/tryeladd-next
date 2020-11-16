import * as React from "react";
import Image from "next/image";
import { css } from "styled-components";

interface ImageWithAttributionProps {
  className?: string;
  photographer: string;
  photographerHref: string;
  source: string;
  sourceHref: string;
  src: string;
}

function ImageWithAttribution({
  className,
  photographer,
  photographerHref,
  source = "Unsplash",
  sourceHref = "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  src,
}: ImageWithAttributionProps) {
  return (
    <div
      css={css`
        font-weight: 100;
        font-size: 0.8em;
        text-align: center;
      `}
      className={className}
    >
      <Image width={1000} height={625} src={src} loading="eager" />
      <span>
        Photo by{" "}
        <a href={photographerHref} target="_blank" rel="noopener noreferrer">
          {photographer}
        </a>{" "}
        on{" "}
        <a href={sourceHref} target="_blank" rel="noopener noreferrer">
          {source}
        </a>
      </span>
    </div>
  );
}

export default ImageWithAttribution;
