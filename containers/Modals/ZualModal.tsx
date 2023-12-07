import styled from "styled-components";
import Gallery from "@/components/Gallery";
import { galleryImgData } from "pages/api/Data";

function ZualModal() {
  return (
    <>
      <H3Block>조정현은 zual입니다</H3Block>
      <HrBlock />
      <PBlock>
        zual은 조정현입니다. 고등학교때 친구가 멍때리는 모습을 보고 침 좔좔
        흘릴것 같다고 해서 붙여진 별명인데, 마음에 들어서 계속 쓰고 있습니다.
        <br />
        사진 찍는걸 좋아하고 필름카메라도 좋아합니다. 저번 여름엔 스노클링의
        재미를 알아 잡은 조개로 또 이것저것 해먹었습니다.
        <br />
        집에서 음악 듣고 게임 하는 것도 좋아합니다. 몬스터헌터 월드라고...내년에
        신작 나오는 게임이 있는데...재밌습니다...
      </PBlock>
      <HrBlock />
      <Gallery imgData={galleryImgData.zual} />
    </>
  );
}

export default ZualModal;

const HrBlock = styled.hr`
  margin: 20px 0;
  border-color: ${({ theme }) => theme.colors.border};
`;

const H3Block = styled.h3`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.headline3};
`;

const PBlock = styled.p``;
