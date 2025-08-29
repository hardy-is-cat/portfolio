import { ProjectModalTypes } from "../data";
import Slide from "./Slide";

function ProjectModal({ modal }: { modal: ProjectModalTypes }) {
  const {
    title,
    info: { introduce, link, skills, contribution, durationOfWork },
    description,
    screenshot,
  } = modal;

  return (
    <>
      <h3 className="text-headline3 mb-5">{title}</h3>
      <div className="bg-foreground mb-5 h-px w-full" />
      <dl className="mb-5">
        <div className="mb-4 flex">
          <dt className="w-20 shrink-0 font-bold">소개</dt>
          <dd>{introduce}</dd>
        </div>
        <div className="mb-4 flex">
          <dt className="w-20 shrink-0 font-bold">사용 기술</dt>
          <dd className="flex flex-wrap items-center justify-start gap-1">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-helperText bg-primary text-background break-keep rounded-md px-2 py-1"
              >
                {skill}
              </span>
            ))}
          </dd>
        </div>
        <div className="mb-4 flex">
          <dt className="w-20 shrink-0 font-bold last:mb-0">바로가기</dt>
          <dd>
            {link.github && (
              <a
                href={link.github}
                className="hover:text-primary mr-2 font-bold transition-all"
                target="_blank"
              >
                깃허브
              </a>
            )}
            {link.buildSite && (
              <a
                href={link.buildSite}
                className="hover:text-primary font-bold transition-all"
                target="_blank"
              >
                배포사이트
              </a>
            )}
            {link.presentation && (
              <a
                href={link.presentation}
                className="hover:text-primary font-bold transition-all"
                target="_blank"
              >
                발표자료
              </a>
            )}
          </dd>
        </div>
        {contribution && (
          <div className="mb-4 flex last:mb-0">
            <dt className="w-20 shrink-0 font-bold">기여도</dt>
            <dd>{contribution}</dd>
          </div>
        )}
        {durationOfWork && (
          <div className="mb-4 flex last:mb-0">
            <dt className="w-20 shrink-0 font-bold">진행기간</dt>
            <dd>{durationOfWork}</dd>
          </div>
        )}
      </dl>
      <div className="bg-foreground mb-5 h-px w-full" />
      <Slide items={screenshot} />
      <ul className="mb-10">
        <p className="text-headline3 font-bold">담당 내용</p>
        {description.map((item) => (
          <li
            key={item.title}
            className="text-description text-primary mb-1 ml-4 list-['-_'] font-bold"
          >
            {item.title}
            {item.detail && (
              <ul>
                {item.detail.map((detail, index) => (
                  <li
                    key={index}
                    className="text-description text-foreground mb-1 ml-2 list-['-_'] font-normal"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProjectModal;
