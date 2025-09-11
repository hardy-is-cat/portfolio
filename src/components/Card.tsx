"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "../utils/atoms";
import {
  GalleryModalTypes,
  ProjectModalTypes,
  CardTypes as ThumbTypes,
} from "../data";
import Modal from "./Modal";

type CardTypes = {
  card: ThumbTypes;
  modal: ProjectModalTypes | GalleryModalTypes;
};

function Card({ card, modal }: CardTypes) {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const darkMode = useAtomValue(darkModeAtom);
  const { title, bgColor, titleColor, thumb } = card;

  const handleModal = () => {
    setIsModalShowing(!isModalShowing);
  };

  return (
    <>
      <motion.li
        className="sm:min-w-1/2 lg:min-w-1/3 before:bg-1 relative aspect-square min-w-full cursor-pointer p-5"
        style={{
          backgroundColor: bgColor,
          backgroundImage: "url(" + thumb + ")",
          backgroundSize: darkMode === "dark" ? 250 : 150,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          opacity: 0,
          y: 100,
        }}
        onClick={handleModal}
      >
        <h4
          className="text-headline3 font-bold"
          style={{ color: titleColor || "#fff" }}
        >
          {title}
        </h4>
        <div
          className="absolute left-0 top-0 flex size-full items-center justify-center opacity-0 transition-all duration-300 hover:opacity-100"
          style={{
            color: titleColor || "#fff",
          }}
        >
          <div
            className="absolute left-0 top-0 z-0 size-full opacity-80"
            style={{
              background: bgColor,
            }}
          />
          <button className="z-10 cursor-pointer p-5 font-bold">
            {darkMode === "dark" ? "프로젝트 보기" : "자세히 보기"}
            <span
              className="-mt-[4px] ml-1 inline-block h-[10px] w-[10px] rotate-45 transform border-r-2 border-t-2"
              style={{ borderColor: titleColor }}
            />
          </button>
        </div>
      </motion.li>
      <AnimatePresence>
        {isModalShowing && <Modal content={modal} handleModal={handleModal} />}
      </AnimatePresence>
    </>
  );
}

export default Card;
