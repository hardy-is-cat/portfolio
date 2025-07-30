import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { darkModeState } from "stores/atom";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "styles/theme";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: React.PropsWithChildren) {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "0") {
      setIsDarkMode(false);
    }
  });

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyleBlock>
        <Header />
        <main>{children}</main>
        <Footer />
      </GlobalStyleBlock>
    </ThemeProvider>
  );
}

const GlobalStyleBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.25s;
`;
