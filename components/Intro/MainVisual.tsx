import styled from "styled-components";
import IconScroll from "./IconScroll";

function MainVisual() {
  return (
    <MainVisualWrapper>
      <p>
        엉덩이가 무거운 개발자
        <br />
        조정현입니다.
      </p>
      <IconScroll />
    </MainVisualWrapper>
  );
}

export default MainVisual;

const MainVisualWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.bg};
  text-align: center;

  p {
    margin: 200px 0;
    font-size: 48px;
    font-weight: 700;
  }
`;
