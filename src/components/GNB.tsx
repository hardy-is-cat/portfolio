"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function GNB() {
  const [isOpened, setIsOpend] = useState(false);

  return (
    <div className="relative size-[50px]">
      <button
        type="button"
        className="fixed z-50 size-12 flex flex-col items-start justify-center gap-2 px-3 border border-foreground rounded-sm cursor-pointer"
        aria-label="메뉴 열기"
        onClick={() => setIsOpend(!isOpened)}
      >
        <span
          className={`block ${
            isOpened ? "w-[130%] rotate-45" : "w-[100%]"
          } h-0.5 rounded-full bg-foreground transform origin-left transition-all`}
        />
        <span
          className={`block ${
            isOpened ? "w-0" : "w-[100%]"
          } h-0.5 rounded-full bg-foreground transform origin-left transition-all`}
        />
        <span
          className={`block ${
            isOpened ? "w-[130%] -rotate-45" : "w-[100%]"
          } h-0.5 rounded-full bg-foreground transform origin-left transition-all`}
        />
      </button>
      <AnimatePresence>
        {isOpened && (
          <motion.nav
            className="fixed top-0 right-0 size-full flex justify-end items-center bg-black/40 z-49"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              className="size-full px-16 py-24 text-center lg:w-sm lg:text-left bg-gnb-background text-2xl font-light"
              initial={{ x: 200, opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0.5 }}
            >
              <li className="mb-8">
                <a href="#">인트로</a>
              </li>
              <li className="mb-8">
                <a href="#">어떤 개발자인가요?</a>
              </li>
              <li className="mb-8">
                <a href="#">보유 기술</a>
              </li>
              <li className="mb-8">
                <a href="#">프로젝트</a>
              </li>
              <li className="mb-8">
                <a href="#">연락처</a>
              </li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GNB;
