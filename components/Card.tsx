import Image from "next/image";
import styled from "styled-components";
import IconArrow from "./IconArrow";

type CardTypes = {
  imgSrc: string;
  title: string;
  BGcolor: string;
};

function Card({ imgSrc, title, BGcolor }: CardTypes) {
  return (
    <CardBlock $BGcolor={BGcolor}>
      <ContentWrapper>
        <h3>{title}</h3>
        <Image src={imgSrc} fill alt={title} objectFit="scale-down" />
      </ContentWrapper>
      <HoverBG className="hover-bg" $BGcolor={BGcolor}>
        <p>프로젝트 보기</p>
        <IconArrow size={14} direction="right" color="white" />
      </HoverBG>
    </CardBlock>
  );
}

export default Card;

const CardBlock = styled.div<{ $BGcolor: string }>`
  position: relative;
  width: calc(100% / 3);
  padding: 24px;
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

const ContentWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
  text-transform: uppercase;

  h3 {
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.headline3};
    z-index: 11;
  }
`;
