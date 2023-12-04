import styled from "styled-components";
import IconScroll from "./IconScroll";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";

function MainVisual() {
  return (
    <MainVisualWrapper id="main-visual">
      <p {...useScrollFadeIn<HTMLParagraphElement>()}>
        엉덩이가 무거운 개발자
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
  width: 100%;
  height: calc(100vh - 100px);
  padding: 400px 0 300px;
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
