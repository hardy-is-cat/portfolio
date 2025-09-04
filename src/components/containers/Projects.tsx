"use client";

import { useAtomValue } from "jotai";
import { darkModeAtom } from "@/src/utils/atoms";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { galleryContent, projectContent } from "@/src/data";

function Projects() {
  const darkMode = useAtomValue(darkModeAtom);
  return (
    <section id="projects">
      <SectionTitle>{darkMode === "dark" ? "프로젝트" : "갤러리"}</SectionTitle>
      <div className="projects-list flex flex-wrap">
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
      </div>
    </section>
  );
}

export default Projects;
