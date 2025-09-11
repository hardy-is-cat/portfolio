"use client";

import { motion, stagger, useAnimate, useInView } from "motion/react";
import { skillsDev } from "../data";
import SkillCardItem from "./SkillCardItem";
import { useEffect } from "react";

function SkillCardList() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "li",
        { opacity: 1, y: 0 },
        { duration: 0.4, delay: stagger(0.3) }
      );
    }
  }, [isInView]);

  return (
    <motion.ul
      ref={scope}
      className="m-auto grid w-full max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5 xl:grid-cols-5"
    >
      {skillsDev.map((skill, index) => (
        <SkillCardItem
          key={skill.title + index}
          index={index}
          title={skill.title}
          description={skill.description}
        />
      ))}
    </motion.ul>
  );
}

export default SkillCardList;
