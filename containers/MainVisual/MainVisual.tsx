import { useRecoilValue } from "recoil";
import { darkModeState } from "stores/atom";
import styled from "styled-components";

import IconScroll from "./IconScroll";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";

function MainVisual() {
  const IsDarkMode = useRecoilValue(darkModeState);

  return (
    <MainVisualWrapper id="main-visual">
      <p {...useScrollFadeIn<HTMLParagraphElement>()}>
        {IsDarkMode ? "엉덩이가 무거운 개발자" : "요리와 하디를 좋아하는"}
        <br />
        조정현입니다.
      </p>
      <IconScrollBlock />
    </MainVisualWrapper>
  );
}

export default MainVisual;

const MainVisualWrapper = styled.section`
  position: relative;
  top: 100px;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 300px 0;
  margin-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.bg};
  text-align: center;

  p {
    font-size: 48px;
    font-weight: 700;
  }
`;

const IconScrollBlock = styled(IconScroll)`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, -50%);
`;
