import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import Button from "./Button";

type ModalTypes = {
  onClick: MouseEventHandler;
  children: ReactNode;
};

function Modal({ onClick, children }: ModalTypes) {
  return (
    <>
      <ModalBGBlock onClick={onClick} />
      <ModalBlock>
        {children}
        <Button onClick={onClick}>닫기</Button>
      </ModalBlock>
    </>
  );
}

export default Modal;

const ModalBGBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 300;
`;

const ModalBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 60%;
  max-height: 100%;
  padding: 40px 24px 40px 40px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.gnb};
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  z-index: 301;
  overflow-y: scroll;

  ${({ theme }) => theme.media.tablet} {
    width: 90%;
    padding: 40px 20px;
  }

  &::-webkit-scrollbar {
    width: 24px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  }

  &::-webkit-scrollbar-thumb {
    border: 8px solid ${({ theme }) => theme.colors.gnb};
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
