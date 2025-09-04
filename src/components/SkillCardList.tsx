import { skillsDev } from "../data";
import SkillCardItem from "./SkillCardItem";

function SkillCardList() {
  return (
    <ul className="m-auto grid w-full max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5 xl:grid-cols-5">
      {skillsDev.map((skill, index) => (
        <SkillCardItem
          key={skill.title + index}
          index={index}
          title={skill.title}
          description={skill.description}
        />
      ))}
    </ul>
  );
}

export default SkillCardList;
