"use client";

import { useSetAtom } from "jotai";
import { MouseEvent } from "react";
import { darkModeAtom } from "../utils/atoms";

function ToggleThemeBtn({ isScroll }: { isScroll: boolean }) {
  const setDarkMode = useSetAtom(darkModeAtom);

  const toggleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.innerText === "개발자") {
      setDarkMode("dark");
      // document.cookie = `theme=dark; path=/; maxAge=2592000`;
      document.body.className = "dark";
    } else if (e.currentTarget.innerText === "일반인") {
      setDarkMode("light");
      // document.cookie = `theme=light; path=/; maxAge=2592000`;
      document.body.className = "";
    }
  };

  return (
    <div className="flex">
      <button
        type="button"
        className={`${isScroll ? "px-4 text-sm" : "text-md px-5"} dark:text-background dark:bg-primary bg-background text-foreground transition-custom cursor-pointer rounded-lg rounded-r-none border border-r-0 border-gray-300 py-2 font-bold dark:border-none`}
        onClick={toggleTheme}
      >
        개발자
      </button>
      <button
        type="button"
        className={`${isScroll ? "px-4 text-sm" : "text-md px-5"} bg-primary text-background dark:text-foreground transition-custom cursor-pointer rounded-lg rounded-l-none py-2 font-bold dark:border dark:border-l-0 dark:border-white dark:bg-transparent`}
        onClick={toggleTheme}
      >
        일반인
      </button>
    </div>
  );
}

export default ToggleThemeBtn;
