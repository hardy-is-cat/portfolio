"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Button from "./Button";

import { FaReact } from "react-icons/fa";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiStyledcomponents,
  SiRecoil,
  SiFirebase,
  SiFigma,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

import { skillsDev } from "../data";
import { IconContext } from "react-icons";

type SkillCardItemTypes = {
  index: number;
  title: (typeof skillsDev)[number]["title"];
  description: string;
};

const iconObj: { [skill: string]: React.ReactNode } = {
  React: <FaReact />,
  JavaScript: <RiJavascriptFill />,
  TypeScript: <BiLogoTypescript />,
  "Next.js": <RiNextjsFill />,
  "Styled-Components": <SiStyledcomponents />,
  TailwindCSS: <RiTailwindCssFill />,
  Recoil: <SiRecoil />,
  Firebase: <SiFirebase />,
  Figma: <SiFigma />,
  "Three.js": <TbBrandThreejs />,
};

function SkillCardItem({ index, title, description }: SkillCardItemTypes) {
  const [active, setActive] = useState(false);

  return (
    <>
      {active && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 m-auto size-full bg-black/50"
            onClick={() => setActive(false)}
          />
        </AnimatePresence>
      )}
      <motion.li
        className="bg-gnb-background hover:bg-primary/30 flex w-full cursor-pointer items-center gap-3 px-5 py-4 text-center transition-colors md:aspect-square md:flex-col md:justify-center"
        layoutId={`card-container-${title}-${index}`}
        onClick={() => setActive(true)}
        whileHover={{ scale: 1.05 }}
        animate={{ borderRadius: "10px" }}
        style={{ y: 50, opacity: 0 }}
      >
        <motion.div
          layoutId={`card-image-${title}-${index}`}
          className="flex items-center justify-center"
        >
          <IconContext.Provider
            value={{ className: "aspect-square w-8 h-8 md:w-20 md:h-20" }}
          >
            {iconObj[title]}
          </IconContext.Provider>
        </motion.div>
        <motion.h4
          className="text-headline4 sm:text-description font-bold leading-tight"
          layoutId={`card-title-${title}-${index}`}
        >
          {title}
        </motion.h4>
      </motion.li>
      {active && (
        <motion.div
          className="z-51 bg-gnb-background fixed inset-0 m-auto flex aspect-square max-w-[400px] flex-col items-center justify-center gap-5 p-4 text-center"
          layoutId={`card-container-${title}-${index}`}
          layout
          animate={{ borderRadius: "20px" }}
        >
          <motion.div
            layoutId={`card-image-${title}-${index}`}
            layout
            className="flex items-center justify-center"
          >
            <IconContext.Provider
              value={{ className: "aspect-square w-10 h-10 md:w-20 md:h-20" }}
            >
              {iconObj[title]}
            </IconContext.Provider>
          </motion.div>
          <motion.h4
            className="text-headline4 sm:text-description font-bold leading-tight"
            layoutId={`card-title-${title}-${index}`}
            layout
          >
            {title}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {description}
          </motion.p>
          <Button onClick={() => setActive(!active)}>닫기</Button>
        </motion.div>
      )}
    </>
  );
}

export default SkillCardItem;
