import { useRecoilValue } from "recoil";
import { darkModeState } from "stores/atom";

import Accordian from "@/components/Accordian";
import Title from "@/components/SectionTitle";

import useScrollFadeIn from "utils/hooks/useScrollFadeIn";
import { skillsDev, skillsNormal } from "pages/api/data";

function Skills() {
  const IsDarkMode = useRecoilValue(darkModeState);
  return (
    <section id="skills">
      <Title {...useScrollFadeIn<HTMLHeadingElement>()}>
        {IsDarkMode ? "보유 기술" : "키워드"}
      </Title>
      {IsDarkMode ? (
        <Accordian data={skillsDev} />
      ) : (
        <Accordian data={skillsNormal} />
      )}
    </section>
  );
}

export default Skills;
