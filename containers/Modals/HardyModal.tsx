import styled from "styled-components";
import Gallery from "@/components/Gallery";
import { galleryImgData } from "pages/api/Data";

function HardyModal() {
  return (
    <>
      <H3Block>저희집 고양이 하디</H3Block>
      <HrBlock />
      <PBlock>
        세상에서 제일 귀여운 고양이!!!!!! 매주 메일링 서비스 가능합니다.
        많관부🙏
      </PBlock>
      <HrBlock />
      <Gallery imgData={galleryImgData.hardy} />
    </>
  );
}

export default HardyModal;

const HrBlock = styled.hr`
  margin: 20px 0;
  border-color: ${({ theme }) => theme.colors.border};
`;

const H3Block = styled.h3`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.headline3};
`;

const PBlock = styled.p``;
