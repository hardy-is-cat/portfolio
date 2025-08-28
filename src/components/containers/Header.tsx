"use client";

import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import ToggleThemeBtn from "../ToggleThemeBtn";
import GNB from "../GNB";

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const { scrollY } = useScroll();

  const handleScroll = (scrollYOffset: number) => {
    if (scrollYOffset > 100) {
      setIsScroll(true);
    } else if (scrollYOffset <= 100) {
      setIsScroll(false);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    handleScroll(latest);
  });

  useEffect(() => {
    handleScroll(window.scrollY);
  }, []);

  return (
    <header
      className={`bg-gnb-background ${isScroll ? "h-20 p-4" : "h-24 p-5"} transition-custom fixed top-0 z-30 flex w-full items-center justify-between border-b border-b-gray-200 dark:border-b-0`}
    >
      <h1
        className={`${isScroll ? "text-xl" : "text-2xl"} transition-custom tracking-[0.4em]`}
      >
        <a href="#main-visual">
          ZU
          <br />
          AL
        </a>
      </h1>
      <ToggleThemeBtn isScroll={isScroll} />
      {/* <InitTheme>
      </InitTheme> */}
      <GNB isScroll={isScroll} />
    </header>
  );
}

export default Header;
