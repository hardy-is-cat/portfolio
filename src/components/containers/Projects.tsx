"use client";

import { useEffect } from "react";
import { motion, useAnimate, useInView, stagger } from "motion/react";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "@/src/utils/atoms";

import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { galleryContent, projectContent } from "@/src/data";

function Projects() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false });
  const darkMode = useAtomValue(darkModeAtom);

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
    <section id="projects">
      <SectionTitle>{darkMode === "dark" ? "프로젝트" : "갤러리"}</SectionTitle>
      <motion.ul className="projects-list flex flex-wrap" ref={scope}>
        {darkMode === "dark"
          ? projectContent.map((content) => (
              <Card
                key={content.id}
                card={content.card}
                modal={content.modal}
              />
            ))
          : galleryContent.map((content) => (
              <Card
                key={content.id}
                card={content.card}
                modal={content.modal}
              />
            ))}
      </motion.ul>
    </section>
  );
}

export default Projects;
