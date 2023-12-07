import Link from "next/link";
import styled from "styled-components";
import Gallery from "@/components/Gallery";
import { projectImgData } from "pages/api/Data";

function CarZipModal() {
  return (
    <>
      <H3Block>리액트 팀프로젝트 - 카집(CarZip)</H3Block>
      <HrBlock />
      <DlBlock>
        <div>
          <dt>소개</dt>
          <dd>공공데이터와 카카오맵API를 이용한 주차장 정보 공유 서비스</dd>
        </div>
        <div>
          <dt>진행기간</dt>
          <dd>2023.03.09 ~ 2023.03.28</dd>
        </div>
        <div>
          <dt>사용 기술</dt>
          <dd className="skills">
            <span>React</span>
            <span>Vite</span>
            <span>Firebase</span>
            <span>Styled-Components</span>
            <span>EsLint</span>
            <span>Prettier</span>
          </dd>
        </div>
        <div>
          <dt>바로가기</dt>
          <dd>
            <Link href="https://github.com/LikeLion-FE-Final-Project03/car-zip">
              깃허브
            </Link>
            {", "}
            <Link href="https://docs.google.com/presentation/d/10ZIoQ7_o5HqIxnhy2IyQqxFqRTypoNFluwr22lURGCE/edit#slide=id.g1f9f45324dc_0_109">
              발표자료
            </Link>
          </dd>
        </div>
      </DlBlock>
      <HrBlock />
      <Gallery imgData={projectImgData.carZip} />
      <WorkListTitle>담당 내용</WorkListTitle>
      <WorkListBlock>
        <li>- 팀의 조장을 맡아 역할 분배</li>
        <li>- 와이어 프레임 작성, 피그마 시안 작업</li>
        <li>
          - 주차장 정보 상세보기 페이지
          <ul>
            <li>
              - 이전 페이지에서 주차장의 고유 ID를 props로 받아와 파이어
              베이스에 저장된 주차장 데이터 로드 후 랜더링
            </li>
            <li>
              - 즐겨찾기 데이터 베이스를 생성해 주차장 고유 ID와 즐겨찾기 여부,
              사용자 UID 저장
            </li>
            <li>- Clipboard API 를 이용하여 해당 주차장의 주소 복사</li>
            <li>
              - 유저의 디바이스 정보를 확인하여 pc와 모바일의 전화 동작을 구분
            </li>
          </ul>
        </li>
        <li>
          - 주차비 사전 계산 페이지
          <ul>
            <li>
              - 주차장 가격 정보를 받아와 사용자가 시간을 입력하면 예상 주차비를
              계산
            </li>
            <li>- 주차비 정보가 없을 경우 계산 불가 텍스트를 조건부 랜더링</li>
          </ul>
        </li>
        <li>- 스타일드 컴포넌트를 이용한 CSS 적용</li>
      </WorkListBlock>
    </>
  );
}

export default CarZipModal;

const HrBlock = styled.hr`
  margin: 20px 0;
  border-color: ${({ theme }) => theme.colors.border};
`;

const H3Block = styled.h3`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.headline3};
`;

const DlBlock = styled.dl`
  margin: 40px 0;

  div {
    margin: 20px 0;
  }

  dt,
  dd {
    display: inline-block;
  }

  dt {
    min-width: 80px;
    font-weight: 700;
  }

  a {
    font-weight: 700;
  }

  .skills {
    span {
      padding: 4px 8px;
      margin-right: 4px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.gnb};
      font-size: ${({ theme }) => theme.fontSize.helperText};
      font-weight: 400;
    }
  }
`;

const WorkListTitle = styled.h4`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.headline4};
  font-weight: 700;
`;

const WorkListBlock = styled.ul`
  margin-bottom: 40px;

  & > li {
    margin-left: ${({ theme }) => theme.fontSize.helperText};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  & > li > ul {
    margin-left: calc(${({ theme }) => theme.fontSize.helperText} * 2);
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  li {
    line-height: 1.8;
  }
`;
