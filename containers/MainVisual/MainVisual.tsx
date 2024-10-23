import { useRecoilValue } from "recoil";
import { darkModeState } from "stores/atom";
import styled from "styled-components";

import IconScroll from "./IconScroll";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";

function MainVisual() {
  const IsDarkMode = useRecoilValue(darkModeState);
  // const convertString = (string: string) => {
  //   return string.split("<br/>").map((string) => {
  //     return (
  //       <span key={string}>
  //         {string}
  //         <br />
  //       </span>
  //     );
  //   });
  // };

  return (
    <MainVisualWrapper id="main-visual">
      <p {...useScrollFadeIn<HTMLParagraphElement>()}>
        {IsDarkMode ? "엉덩이가 무거운 개발자" : "요리와 하디를 좋아하는"}
        <br />
        조정현입니다.
        <br />
        <span>최신 업데이트 날짜_24.10.23</span>
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
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: calc(100vh - 100px);
  margin-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.bg};
  text-align: center;

  p {
    font-size: 48px;
    font-weight: 700;

    ${({ theme }) => theme.media.tablet} {
      font-size: 32px;
    }

    span {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

const IconScrollBlock = styled(IconScroll)`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, -50%);
`;
