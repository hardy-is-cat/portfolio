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
        <ModalContenBlock>
          {children}

          <Button onClick={onClick}>닫기</Button>
        </ModalContenBlock>
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
  height: 70%;
  padding: 40px 0;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.gnb};
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  z-index: 301;
`;

const ModalContenBlock = styled.div`
  height: 100%;
  padding: 0 40px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ModalCloseBtn = styled.button`
  box-sizing: content-box;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  padding: 4px;
  background-color: transparent;
  border: none;
  transition: all 0.3s;

  svg path {
    fill: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    transform: rotate(180deg);
    transition: all 0.3s;
  }
`;
