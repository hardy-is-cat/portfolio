import { useRecoilState } from "recoil";
import { gnbState } from "stores/atom";
import styled from "styled-components";

function GnbBtn() {
  const [isGnbOpened, setIsGnbOpened] = useRecoilState(gnbState);

  return (
    <HamburgerButton
      $isGnbOpened={isGnbOpened}
      onClick={() => setIsGnbOpened(!isGnbOpened)}
    >
      <span className="a11y-hidden">메뉴</span>
      <span className="hamburger-line top"></span>
      <span className="hamburger-line middle"></span>
      <span className="hamburger-line bottom"></span>
    </HamburgerButton>
  );
}

export default GnbBtn;

const HamburgerButton = styled.button<{
  $isGnbOpened: boolean;
}>`
  display: block;
  width: 48px;
  height: 48px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  background-color: transparent;
  z-index: 102;
  cursor: pointer;
  transform-origin: top right;
  transition: all 0.3s;

  .hamburger-line {
    display: block;
    width: 100%;
    height: 2px;
    margin-bottom: 8px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s;
  }

  .hamburger-line.top {
    width: ${({ $isGnbOpened }) => ($isGnbOpened ? "125%" : "")};
    transform-origin: bottom left;
    transform: ${({ $isGnbOpened }) => ($isGnbOpened ? "rotate(45deg)" : "")};
  }

  .hamburger-line.middle {
    width: ${({ $isGnbOpened }) => ($isGnbOpened ? "0" : "100%")};
  }

  .hamburger-line.bottom {
    width: ${({ $isGnbOpened }) => ($isGnbOpened ? "125%" : "")};
    transform-origin: top left;
    margin-bottom: 0;
    transform: ${({ $isGnbOpened }) => ($isGnbOpened ? "rotate(-45deg)" : "")};
  }
`;
