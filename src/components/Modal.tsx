import { motion } from "motion/react";
import { GalleryModalTypes, ProjectModalTypes } from "../data";
import CloseButton from "./CloseButton";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "../utils/atoms";
import Link from "next/link";
import ProjectModal from "./ProjectModal";
import { useRef } from "react";
import Button from "./Button";
import GalleryModal from "./GalleryModal";

const renderProjectContent = (data: ProjectModalTypes) => {
  const {
    title,
    info: { contribution, introduce, link, skills, durationOfWork },
    description,
    screenshot,
  } = data;

  return (
    <>
      <h3>title</h3>
      <div className="bg-foreground h-px w-full" />
      <dl>
        <dt className="font-bold">소개</dt>
        <dd>{introduce}</dd>
        <dt className="font-bold">사용 기술</dt>
        <dd>
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-primary text-background px-2 py-1.5"
            >
              skill
            </span>
          ))}
        </dd>
        <dt className="font-bold">바로가기</dt>
        <dd>
          {link.github && (
            <a
              href={link.github}
              className="hover:text-primary font-bold transition-all"
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
        {durationOfWork && (
          <>
            <dt className="font-bold">기여도</dt>
            <dd>{durationOfWork}</dd>
          </>
        )}
        <dt className="font-bold">소개</dt>
        <dd>{introduce}</dd>
      </dl>
      <div className="bg-foreground h-px w-full" />
    </>
  );
};

function Modal({
  content,
  handleModal,
}: {
  content: ProjectModalTypes | GalleryModalTypes;
  handleModal: () => void;
}) {
  const bgRef = useRef<HTMLDivElement>(null);

  // 모달의 배경 클릭시에만 모달 닫기
  const handleModalBGOnClick = (
    e: React.MouseEvent,
    ref: React.RefObject<HTMLElement | null>
  ) => {
    if (e.target === ref.current) {
      handleModal();
    }
  };

  return (
    <>
      <motion.div
        className="z-100 fixed left-0 top-0 flex h-screen w-full items-center bg-black/80 px-10 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        ref={bgRef}
        onClick={(e: React.MouseEvent) => handleModalBGOnClick(e, bgRef)}
      >
        <motion.div
          className="modal bg-background relative mx-auto h-full w-full max-w-3xl overflow-auto scroll-auto rounded-xl px-8 py-16"
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <CloseButton onClick={handleModal} />
          {"info" in content ? (
            <ProjectModal modal={content} />
          ) : (
            <GalleryModal modal={content} />
          )}
          <Button onClick={handleModal}>닫기</Button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Modal;
