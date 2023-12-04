import { useRecoilValue } from "recoil";
import { darkModeState } from "stores/atom";
import styled, { css } from "styled-components";

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
  ${({ $isDarkMode, theme }) =>
    css`
      border-top: 1px solid #ebebeb;
    ` || $isDarkMode}

  p {
    ${({ theme }) => theme.width[1280]}
    text-transform: uppercase;
  }
`;
