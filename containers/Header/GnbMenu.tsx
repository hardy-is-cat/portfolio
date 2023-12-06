import { useRecoilState } from "recoil";
import { gnbState } from "stores/atom";
import styled from "styled-components";
import scrollToHash from "utils/scrollToHash";

function GnbMenu() {
  const [isGnbOpened, setIsGnbOpened] = useRecoilState(gnbState);
  return (
    <>
      <GnbBGBlock
        $isGnbOpened={isGnbOpened}
        onClick={() => setIsGnbOpened(!isGnbOpened)}
      ></GnbBGBlock>
      <GnbMenuWrapper $isGnbOpened={isGnbOpened}>
        <ul>
          <li>
            <button type="button" onClick={() => scrollToHash("main-visual")}>
              인트로
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToHash("introduce")}>
              어떤 개발자인가요?
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToHash("skills")}>
              보유 기술
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToHash("projects")}>
              프로젝트
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToHash("contact")}>
              연락처
            </button>
          </li>
        </ul>
      </GnbMenuWrapper>
    </>
  );
}

export default GnbMenu;

const GnbBGBlock = styled.div<{ $isGnbOpened: boolean }>`
  visibility: ${({ $isGnbOpened }) => ($isGnbOpened ? "visible" : "hidden")};
  opacity: ${({ $isGnbOpened }) => ($isGnbOpened ? "1" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.4s;
  z-index: 101;
`;

const GnbMenuWrapper = styled.nav<{ $isGnbOpened: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isGnbOpened }) => ($isGnbOpened ? "0" : "-400px")};
  width: 400px;
  height: 100vh;
  padding: 100px 50px;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: ${({ $isGnbOpened }) =>
    $isGnbOpened ? "-5px -5px 15px rgba(0, 0, 0, 0.2)" : "none"};
  transition: right 0.4s;
  z-index: 101;

  ${({ theme }) => theme.media.tablet} {
    width: 80%;
    right: ${({ $isGnbOpened }) => ($isGnbOpened ? "0" : "-80%")};
  }

  button {
    border: none;
    background-color: transparent;
    font-size: ${({ theme }) => theme.fontSize.headline2};
    margin-bottom: 24px;
    font-weight: 300;
    color: inherit;
    transition: all 0.1s;
    cursor: pointer;

    &::after {
      display: block;
      content: "";
      width: 0;
      height: 2px;
      margin-top: 4px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: all 0.2s;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;
