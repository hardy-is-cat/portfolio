import { useRecoilValue } from "recoil";
import { darkModeState } from "stores/atom";
import { ReactNode } from "react";
import styled from "styled-components";

import IconArrow from "./IconArrow";
import Modal from "./Modal";
import useModal from "utils/hooks/useModal";

type CardTypes = {
  imgSrc: string;
  imgSize?: number;
  title: string;
  BGcolor: string;
  textColor: string;
  children?: ReactNode;
};

function Card({
  imgSrc,
  imgSize = 100,
  title,
  BGcolor,
  textColor,
  children,
}: CardTypes) {
  const { modal, toggleModal } = useModal(title);
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <>
      {modal.isOpened && (
        <Modal onClick={() => toggleModal(modal.isOpened)}>{children}</Modal>
      )}
      <CardBlock $BGcolor={BGcolor} onClick={() => toggleModal(modal.isOpened)}>
        <ContentWrapper
          $imgSrc={imgSrc}
          $imgSize={imgSize}
          $textColor={textColor}
        >
          <h3>{title}</h3>
        </ContentWrapper>
        <HoverBG className="hover-bg" $BGcolor={BGcolor} $textColor={textColor}>
          <p>{isDarkMode ? "프로젝트 보기" : "사진 보기"}</p>
          <IconArrow size={14} direction="right" color="white" />
        </HoverBG>
      </CardBlock>
    </>
  );
}

export default Card;

const CardBlock = styled.div<{ $BGcolor: string }>`
  position: relative;
  width: calc(100% / 3);
  padding: 24px;
  border: none;
  background-color: ${({ $BGcolor }) => $BGcolor};
  cursor: pointer;
  /* color: white; */

  ${({ theme }) => theme.media.tablet} {
    width: 50%;
  }

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }

  &:hover .hover-bg {
    opacity: 1;
    transition: all 0.2s;
  }
`;

const HoverBG = styled.div<{ $BGcolor: string; $textColor: string }>`
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
    color: ${({ $textColor }) => $textColor};
  }
`;

const ContentWrapper = styled.div<{
  $imgSrc: string;
  $imgSize: number;
  $textColor: string;
}>`
  position: relative;
  padding-bottom: 100%;
  text-transform: uppercase;
  background-image: url(${({ $imgSrc }) => $imgSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: ${({ $imgSize }) => $imgSize + "%"};

  h3 {
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.headline3};
    z-index: 11;
    color: ${({ $textColor }) => $textColor};
  }
`;
