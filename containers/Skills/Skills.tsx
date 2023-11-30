import Accodian from "@/components/Accordian";
import Title from "@/components/Title";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";

function Skills() {
  return (
    <section>
      <Title {...useScrollFadeIn<HTMLHeadingElement>()}>보유 기술</Title>
      <Accodian />
    </section>
  );
}

export default Skills;
