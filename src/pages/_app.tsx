import { AppProps } from "next/app";

import "@kotala/css";
import "../styles/style.css";
import "highlight.js/styles/github-dark-dimmed.css";
import GoogleAnalytics from "@components/google-analytics";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
