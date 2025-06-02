import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { useState } from "react";

import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "styles/theme";
import globalStyles from "styles/global-styles";

import Layout from "@/components/Layout";

const cache = createCache({ key: "next" });

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CacheProvider value={cache}>
          {globalStyles}
          <RecoilRoot>
            <Layout>
              <button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "라이트모드" : "다크모드"}
              </button>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </CacheProvider>
      </ThemeProvider>
    </>
  );
}
