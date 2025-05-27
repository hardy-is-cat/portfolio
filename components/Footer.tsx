import { useRecoilValue } from "recoil";
import { darkModeState } from "stores/atom";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Footer() {
  const isDarkMode = useRecoilValue(darkModeState);
  return (
    <FooterBlock $isDarkMode={isDarkMode}>
      <p>Copyright 2023 zual. all rights reserved.</p>
    </FooterBlock>
  );
}

export default Footer;

const FooterBlock = styled.footer<{ $isDarkMode: boolean }>`
  background-color: ${({ theme }) => theme.colors.gnb};
  ${({ $isDarkMode }) =>
    $isDarkMode
      ? ""
      : css`
          border-top: 1px solid #ebebeb;
        `}

  p {
    ${({ theme }) => theme.flexWidth[1280]}
    text-transform: uppercase;
    text-align: center;
  }
`;
