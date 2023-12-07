import styled from "styled-components";
import Gallery from "@/components/Gallery";
import { galleryImgData } from "pages/api/Data";

function FoodModal() {
  return (
    <>
      <H3Block>이것저것 만든것</H3Block>
      <HrBlock />
      <PBlock>
        참치 초밥, 일본식 닭튀김, 시메사바 등등 주로 일식위주로 만들어 먹곤
        합니다. 먹는게 제일 좋아요.
      </PBlock>
      <HrBlock />
      <Gallery imgData={galleryImgData.food} />
    </>
  );
}

export default FoodModal;

const HrBlock = styled.hr`
  margin: 20px 0;
  border-color: ${({ theme }) => theme.colors.border};
`;

const H3Block = styled.h3`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.headline3};
`;

const PBlock = styled.p``;
