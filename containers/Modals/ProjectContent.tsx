import Link from "next/link";
import styled from "styled-components";
import Gallery from "@/components/Gallery";
import { ProjectContentTypes } from "pages/api/data.ts";

type ModalContentTypes = {
  content: ProjectContentTypes;
};

function ProjectContent({ content }: ModalContentTypes) {
  const { title, info, screenshot, description } = content;
  return (
    <>
      <H3Block>{title}</H3Block>
      <HrBlock />
      <DlBlock>
        <div>
          <dt>소개</dt>
          <dd>{info.introduce}</dd>
        </div>
        <div>
          <dt>진행기간</dt>
          <dd>{info.durationOfWork}</dd>
        </div>
        <div>
          <dt>사용 기술</dt>
          <dd className="skills">
            {info.skills.map((skill) => {
              return <span key={skill}>{skill}</span>;
            })}
          </dd>
        </div>
        <div>
          <dt>바로가기</dt>
          <dd>
            {info.link.github && <Link href={info.link.github}>깃허브</Link>}
            {info.link.presentation && (
              <Link href={info.link.presentation}>발표자료</Link>
            )}
            {info.link.buildSite && (
              <Link href={info.link.buildSite}>배포사이트</Link>
            )}
          </dd>
        </div>
      </DlBlock>
      <HrBlock />
      <Gallery imgData={screenshot} />
      <WorkListTitle>담당 내용</WorkListTitle>
      <WorkListBlock>
        {description.map((item, i) => {
          return (
            <li key={i}>
              - {item.title}
              {item.detail && (
                <ul>
                  {item.detail.map((item, i) => {
                    return <li key={i}>- {item}</li>;
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </WorkListBlock>
    </>
  );
}

export default ProjectContent;

const HrBlock = styled.hr`
  margin: 20px 0;
  border-color: ${({ theme }) => theme.colors.border};
`;

const H3Block = styled.h3`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.headline3};
  line-height: 1.5;
`;

const DlBlock = styled.dl`
  margin: 40px 0;

  ${({ theme }) => theme.media.mobile} {
    margin: 12px 0;
  }

  div {
    margin: 12px 0;
    display: flex;
    flex-flow: row;

    ${({ theme }) => theme.media.mobile} {
      flex-flow: column;
    }
  }

  dt,
  dd {
    display: inline-block;
    line-height: 1.3;

    ${({ theme }) => theme.media.mobile} {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }

  dt {
    min-width: 80px;
    font-weight: 700;
  }

  a {
    font-weight: 700;
    margin-right: 4px;
    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .skills {
    span {
      display: inline-block;
      padding: 4px 8px;
      margin: 4px 4px 4px 0;
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

    ${({ theme }) => theme.media.mobile} {
      margin-left: 0;
    }
  }

  & > li > ul {
    margin-left: calc(${({ theme }) => theme.fontSize.helperText});
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  li {
    line-height: 1.8;
  }
`;
