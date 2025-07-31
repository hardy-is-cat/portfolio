import { useRecoilValue } from "recoil";
import { darkModeState } from "stores/atom";
import styled from "@emotion/styled";

import IconScroll from "./IconScroll";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";
import RotateWord from "@/components/RotateWord";
import Particles from "@/components/Particles";

function MainVisual() {
  const IsDarkMode = useRecoilValue(darkModeState);

  return (
    <>
      <Particles />
      <MainVisualWrapper id="main-visual">
        <div {...useScrollFadeIn<HTMLParagraphElement>()}>
          <p>안녕하세요!</p>
          {/* {IsDarkMode ? "엉덩이가 무거운 개발자" : "요리와 하디를 좋아하는"} */}
          <RotateWord
            words={
              IsDarkMode
                ? [
                    "끈질기게 몰두하는",
                    "사용자를 생각하는",
                    "왜? 라고 되묻는",
                    "함께 성장할 줄 아는",
                  ]
                : [
                    "어디에서나 녹아드는 성격의",
                    "요리와 하디를 좋아하는",
                    "끊임없이 탐구하는",
                  ]
            }
          />
          <p>
            {IsDarkMode ? "프론트엔드 개발자 조정현입니다." : "조정현입니다."}
          </p>
          <br />
          <span>최신 업데이트 날짜_25.07.31</span>
        </div>
        <IconScrollBlock />
      </MainVisualWrapper>
    </>
  );
}

export default MainVisual;

const MainVisualWrapper = styled.section`
  position: relative;
  top: 100px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  justify-content: left;
  align-items: center;
  padding: 0 80px;
  height: calc(100vh - 100px);
  margin-bottom: 100px;
  /* background-color: ${({ theme }) => theme.colors.bg}; */
  text-align: left;
  word-break: keep-all;

  ${({ theme }) => theme.mediaQuery.tablet} {
    text-align: center;
    justify-content: center;
  }

  p {
    font-size: 48px;
    ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: 32px;
    }
    font-weight: 700;

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
