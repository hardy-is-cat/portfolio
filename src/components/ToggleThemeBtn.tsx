"use client";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { MouseEvent, useCallback } from "react";

const darkModeAtom = atomWithStorage("darkMode", "dark");

function ToggleThemeBtn() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const toggleTheme = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.innerText === "개발자") {
      setDarkMode("dark");
      document.cookie = `theme=dark; path=/; maxAge=2592000`;
      document.body.className = "dark";
    } else if (e.currentTarget.innerText === "일반인") {
      setDarkMode("light");
      document.cookie = `theme=light; path=/; maxAge=2592000`;
      document.body.className = "";
    }
  }, []);

  return (
    <div className="flex">
      <button
        type="button"
        className="py-2 px-5 rounded-lg rounded-r-none dark:text-background dark:bg-primary dark:border-none font-bold cursor-pointer bg-background text-foreground border border-gray-300 border-r-0"
        onClick={toggleTheme}
      >
        개발자
      </button>
      <button
        type="button"
        className="py-2 px-5 rounded-lg rounded-l-none bg-primary text-background dark:text-foreground dark:bg-transparent font-bold dark:border dark:border-white dark:border-l-0 cursor-pointer"
        onClick={toggleTheme}
      >
        일반인
      </button>
    </div>
  );
}

export default ToggleThemeBtn;
