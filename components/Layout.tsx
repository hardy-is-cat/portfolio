import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { darkModeState } from "stores/atom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: React.PropsWithChildren) {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  useEffect(() => {
    if (localStorage.getItem("darkMode") !== undefined) {
      setIsDarkMode(!!Number(localStorage.getItem("darkMode")));
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
