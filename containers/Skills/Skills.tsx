import Accodian from "@/components/Accordian";
import Title from "@/components/SectionTitle";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";

function Skills() {
  return (
    <section id="skills">
      <Title {...useScrollFadeIn<HTMLHeadingElement>()}>보유 기술</Title>
      <Accodian />
    </section>
  );
}

export default Skills;
