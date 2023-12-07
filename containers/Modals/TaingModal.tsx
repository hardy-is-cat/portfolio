import Link from "next/link";
import styled from "styled-components";
import Gallery from "@/components/Gallery";
import { projectImgData } from "pages/api/Data";

function TaingModal() {
  return (
    <>
      <H3Block>바닐라JS 팀프로젝트 - 타잉(TAING)</H3Block>
      <HrBlock />
      <DlBlock>
        <div>
          <dt>소개</dt>
          <dd>국내 OTT 서비스인 티빙의 UI를 참고하여 제작한 반응형 웹사이트</dd>
        </div>
        <div>
          <dt>진행기간</dt>
          <dd>2023.01.27 ~ 2023.02.08</dd>
        </div>
        <div>
          <dt>사용 기술</dt>
          <dd className="skills">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>Swiper.js</span>
          </dd>
        </div>
        <div>
          <dt>바로가기</dt>
          <dd>
            <Link href="https://github.com/likelion-fe4-js3/taing">깃허브</Link>
            {", "}
            <Link href="https://www.canva.com/design/DAFZ-NRdK0s/8ydvSRLYPgARcu7E7lQRsw/view?analyticsCorrelationId=ba6c2384-97dd-4673-a52d-392218bc957c">
              발표자료
            </Link>
          </dd>
        </div>
      </DlBlock>
      <HrBlock />
      <Gallery imgData={projectImgData.taing} />
      <WorkListTitle>담당 내용</WorkListTitle>
      <WorkListBlock>
        <li>- 팀의 조장을 맡아 조원들에게 역할 분배, 차후 코드 리뷰</li>
        <li>
          - 프로젝트 초기설정(prettier, eslint, 코드 컨벤션, 커밋컨벤션 설정 등)
          및 깃허브 협업 방법 검색 및 공유
        </li>
        <li>- swiper.js를 사용해 메인 페이지 슬라이더 구현</li>
        <li>
          - data.json 파일을 생성해 슬라이더 내부 컨텐츠를 비동기 통신을
          이용하여 랜더링
        </li>
        <li>- 슬라이더의 각 컨텐츠에 aria-label 속성을 추가하여 접근성 향상</li>
      </WorkListBlock>
    </>
  );
}

export default TaingModal;

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

  li {
    line-height: 1.8;
  }
`;
