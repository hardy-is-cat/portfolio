import Title from "@/components/Title";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <section>
      <Title {...useScrollFadeIn<HTMLHeadingElement>()}>프로젝트</Title>
      <ProjectCards />
    </section>
  );
}

export default Projects;
