import { useRecoilValue } from "recoil";
import { darkModeState } from "stores/atom";

import SectionTitle from "@/components/SectionTitle";
import ProjectCards from "./ProjectCards";
import GalleryCards from "./GalleryCards";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";

function Projects() {
  const IsDarkMode = useRecoilValue(darkModeState);
  return (
    <section id="projects">
      <SectionTitle {...useScrollFadeIn<HTMLHeadingElement>()}>
        {IsDarkMode ? "프로젝트" : "갤러리"}
      </SectionTitle>
      {IsDarkMode ? <ProjectCards /> : <GalleryCards />}
    </section>
  );
}

export default Projects;
