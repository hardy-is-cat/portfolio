import styled from "styled-components";
import ViewModeBtn from "./ViewModeBtn";
import GnbBtn from "./GnbBtn";
import GnbMenu from "./GnbMenu";

function Header() {
  return (
    <HeaderBlock>
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

const HeaderBlock = styled.header`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.gnb};
  z-index: 100;
`;

const H1Block = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.headline2};
  letter-spacing: 10px;
  z-index: 101;
`;
