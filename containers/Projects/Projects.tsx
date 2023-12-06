import SectionTitle from "@/components/SectionTitle";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <section id="projects">
      <SectionTitle {...useScrollFadeIn<HTMLHeadingElement>()}>
        프로젝트
      </SectionTitle>
      <ProjectCards />
    </section>
  );
}

export default Projects;
