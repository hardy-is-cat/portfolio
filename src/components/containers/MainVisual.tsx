"use client";

import { useAtomValue } from "jotai";
import { motion } from "motion/react";

import { darkModeAtom } from "@/src/utils/atoms";

import Particles from "../Particles";
import RotateWord from "../RotateWord";
import ScrollDownArrow from "../ScrollDownArrow";

const words = {
  developer: [
    "함께 성장할 줄 아는",
    "끈질기게 몰두하는",
    "사용자를 생각하는",
    "왜?라고 되묻는",
  ],
  normal: [
    "어디에서나 녹아드는 성격의",
    "끊임없이 탐구하는",
    "걸어다니는 잡지식 사전",
    "요리와 하디를 좋아하는",
  ],
};

function MainVisual() {
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <div
      id="main-visual"
      className="relative mt-[100px] flex h-[calc(100vh-100px)] w-full items-center justify-start"
    >
      <Particles />
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
        className="m-auto break-keep text-center text-3xl font-bold md:text-5xl"
      >
        <p>안녕하세요!</p>
        <RotateWord
          words={darkMode === "dark" ? words.developer : words.normal}
        />
        <p>
          {darkMode === "dark"
            ? "프론트엔드 개발자 조정현입니다."
            : "조정현입니다."}
        </p>
        <span className="text-headline5 font-normal">
          최신 업데이트 날짜_25.09.05
        </span>
      </motion.div>
      <ScrollDownArrow />
    </div>
  );
}

export default MainVisual;
