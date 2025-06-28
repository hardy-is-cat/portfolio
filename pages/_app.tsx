import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import globalStyles from "styles/global-styles";

import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/next";

const cache = createCache({ key: "next" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CacheProvider value={cache}>
        {globalStyles}
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
            <Analytics />
          </Layout>
        </RecoilRoot>
      </CacheProvider>
    </>
  );
}
