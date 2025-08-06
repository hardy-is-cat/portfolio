"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "../utils/atoms";

export default function InitTheme({ children }: { children: React.ReactNode }) {
  const [, setDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    const theme = document.cookie.includes("theme=dark") ? "dark" : "light";
    setDarkMode(theme);
  }, []);

  return <>{children}</>;
}
