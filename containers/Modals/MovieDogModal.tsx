import Link from "next/link";
import styled from "styled-components";
import Gallery from "@/components/Gallery";
import { projectImgData } from "pages/api/Data";

function MovieDogModal() {
  return (
    <>
      <H3Block>Next.js 사이드프로젝트 - 무비독(moviedog)</H3Block>
      <HrBlock />
      <DlBlock>
        <div>
          <dt>소개</dt>
          <dd>
            TMDB 영화정보 api를 이용한 영화정보 조회 및 리뷰 작성 서비스(반응형)
          </dd>
        </div>
        <div>
          <dt>진행기간</dt>
          <dd>2023.09.05 ~ 2023.11.25</dd>
        </div>
        <div>
          <dt>사용 기술</dt>
          <dd className="skills">
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>Styled-Components</span>
            <span>Firebase</span>
            <span>Swiper.js</span>
          </dd>
        </div>
        <div>
          <dt>바로가기</dt>
          <dd>
            <Link href="https://github.com/movie-dog/movie-dog">깃허브</Link>
            {", "}
            <Link href="movie-dog.vercel.app">배포사이트</Link>
          </dd>
        </div>
      </DlBlock>
      <HrBlock />
      <Gallery imgData={projectImgData.movieDog} />
      <WorkListTitle>담당 내용</WorkListTitle>
      <WorkListBlock>
        <li>- 와이어 프레임 작성, 피그마 시안 작업</li>
        <li>
          - 메인페이지
          <ul>
            <li>
              - TMBD api에서 불러온 정보와 파이어베이스에 저장한 리뷰 정보를
              swiper.js로 제작한 메인 비주얼과 카드 형식의 스와이퍼에 출력
            </li>
            <li>- 스와이퍼 커스터마이징</li>
          </ul>
        </li>
        <li>
          - 장르별 영화 카테고리 페이지
          <ul>
            <li>
              - 장르별로 나뉘어진 영화를 볼 수 있도록 카테고리 형식으로 나눔
            </li>
            <li>- 페이지네이션 컴포넌트 제작</li>
          </ul>
        </li>
        <li>
          - 영화정보 상세페이지
          <ul>
            <li>- 영화의 고유 id를 전달받아 해당 영화의 정보를 랜더링</li>
            <li>
              - 로그인 여부에 따라 한 줄 평, 찜 기능을 사용할 수 있게 나눔.
              로그아웃 상태라면 로그인 알림
            </li>
            <li>
              - 별점을 선택한 후, 한 줄 평을 작성하면 파이어베이스에 저장, 이후
              한 줄 평 재작성시 이전 리뷰정보를 불러와 수정 가능
            </li>
            <li>
              - 한 줄 평 작성시 영화 고유 id를 함께 저장하여, 하단 스와이퍼에
              해당 영화의 한 줄 평만 출력
            </li>
            <li>- TMDB에서 자체 제공하는 비슷한 영화 스와이퍼 출력</li>
          </ul>
        </li>
        <li>
          - 검색 페이지
          <ul>
            <li>- 영화의 제목으로 검색 가능한 기능 구현</li>
          </ul>
        </li>
      </WorkListBlock>
    </>
  );
}

export default MovieDogModal;

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
