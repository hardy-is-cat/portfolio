"use client";

import { useAtomValue } from "jotai";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { darkModeAtom } from "../utils/atoms";

function GNB({ isScroll }: { isScroll: boolean }) {
  const [isOpened, setIsOpend] = useState(false);
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <div className="relative size-12">
      <button
        type="button"
        className={`${isScroll ? "size-11 px-2.5" : "size-12 px-3"} border-foreground transition-custom fixed z-50 flex cursor-pointer flex-col items-start justify-center gap-2 rounded-sm border`}
        aria-label="메뉴 열기"
        onClick={() => setIsOpend(!isOpened)}
      >
        <span
          className={`block ${
            isOpened ? "w-[125%] rotate-45" : "w-[100%]"
          } bg-foreground transition-custom h-0.5 origin-left transform rounded-full`}
        />
        <span
          className={`block ${
            isOpened ? "w-0" : "w-[100%]"
          } bg-foreground transition-custom h-0.5 origin-left transform rounded-full`}
        />
        <span
          className={`block ${
            isOpened ? "w-[125%] -rotate-45" : "w-[100%]"
          } bg-foreground transition-custom h-0.5 origin-left transform rounded-full`}
        />
      </button>
      <AnimatePresence>
        {isOpened && (
          <motion.nav
            className="z-49 fixed right-0 top-0 flex size-full items-center justify-end bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              className="bg-gnb-background lg:w-sm size-full px-16 py-24 text-center text-2xl font-light lg:text-left"
              initial={{ x: 200, opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0.5 }}
            >
              <li className="mb-8">
                <a href="#main-visual">인트로</a>
              </li>
              <li className="mb-8">
                <a href="#introduce">
                  {darkMode === "dark"
                    ? "어떤 개발자인가요?"
                    : "어떤 사람인가요?"}
                </a>
              </li>
              <li className="mb-8">
                <a href="#projects">프로젝트</a>
              </li>
              {darkMode === "dark" && (
                <li className="mb-8">
                  <a href="#skills">보유 기술</a>
                </li>
              )}
              <li className="mb-8">
                <a href="#contact">연락처</a>
              </li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GNB;
