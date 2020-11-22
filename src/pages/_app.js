import App, { Container } from "next/app";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          locale: "en_US",
        }}
        twitter={{
          handle: "@TRyeLadd",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
