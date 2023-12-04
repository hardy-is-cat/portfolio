import Image from "next/image";
import styled from "styled-components";
import IconArrow from "./IconArrow";
import useModal from "utils/hooks/useModal";
import { ReactNode } from "react";
import Modal from "./Modal";

type CardTypes = {
  imgSrc: string;
  title: string;
  BGcolor: string;
  children?: ReactNode;
};

function Card({ imgSrc, title, BGcolor, children }: CardTypes) {
  const { modal, toggleModal } = useModal(title);

  return (
    <>
      {modal.isOpened && (
        <Modal onClick={() => toggleModal(modal.isOpened)}>{children}</Modal>
      )}
      <CardBlock $BGcolor={BGcolor} onClick={() => toggleModal(modal.isOpened)}>
        <ContentWrapper $imgSrc={imgSrc}>
          <h3>{title}</h3>
        </ContentWrapper>
        <HoverBG className="hover-bg" $BGcolor={BGcolor}>
          <p>프로젝트 보기</p>
          <IconArrow size={14} direction="right" color="white" />
        </HoverBG>
      </CardBlock>
    </>
  );
}

export default Card;

const CardBlock = styled.button<{ $BGcolor: string }>`
  position: relative;
  width: calc(100% / 3);
  padding: 24px;
  border: none;
  background-color: ${({ $BGcolor }) => $BGcolor};
  cursor: pointer;
  color: white;

  &:hover .hover-bg {
    opacity: 1;
    transition: all 0.2s;
  }
`;

const HoverBG = styled.div<{ $BGcolor: string }>`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  transition: all 0.2s;
  z-index: 10;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ $BGcolor }) => $BGcolor};
    opacity: 0.85;
    z-index: 10;
  }

  & p,
  & div {
    font-size: ${({ theme }) => theme.fontSize.headline4};
    font-weight: 700;
    z-index: 11;
  }
`;

const ContentWrapper = styled.div<{ $imgSrc: string }>`
  position: relative;
  padding-bottom: 100%;
  text-transform: uppercase;
  background-image: url(${({ $imgSrc }) => $imgSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  h3 {
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.headline3};
    z-index: 11;
  }
`;