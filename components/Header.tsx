import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { darkModeState } from "stores/atom";
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

import ViewModeBtn from "../containers/Header/ViewModeBtn";
import GnbBtn from "../containers/Header/GnbBtn";
import GnbMenu from "../containers/Header/GnbMenu";

function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const isDarkMode = useRecoilValue(darkModeState);

  const headerScrollEvent = () => {
    if (headerRef.current && window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerScrollEvent);
    return () => window.addEventListener("scroll", headerScrollEvent);
  }, []);

  return (
    <HeaderBlock ref={headerRef} $isScroll={isScroll} $isDarkMode={isDarkMode}>
      <H1Block aria-label="조정현의 포트폴리오 사이트">
        ZU
        <br />
        AL
      </H1Block>
      <ViewModeBtn />
      <GnbBtn />
      <GnbMenu />
    </HeaderBlock>
  );
}

export default Header;

const scrollStyles = (theme: Theme) => css`
  height: 72px;
  padding: 12px;

  h1 {
    font-size: ${theme.fontSize.headline3};
  }

  & div[class*="ViewModeBtn"] label {
    padding: 8px 12px;
    font-size: 14px;
  }

  & button[class*="GnbBtn"] {
    width: 40px;
    height: 40px;
    padding: 0 8px;
  }
`;

const HeaderBlock = styled.header<{ $isScroll: boolean; $isDarkMode: boolean }>`
  position: fixed;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.gnb};
  transition: all 0.3s;
  z-index: 100;

  ${({ $isScroll, theme }) => $isScroll && scrollStyles(theme)}

  ${({ $isDarkMode }) =>
    $isDarkMode
      ? ""
      : css`
          border-bottom: 1px solid #ebebeb;
        `}
`;

const H1Block = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.headline2};
  letter-spacing: 10px;
  z-index: 101;
  transition: all 0.3s;
`;
