"use client";

import { useAtomValue } from "jotai";
import { darkModeAtom } from "@/components/utils/atoms";
import Particles from "../Particles";

function MainVisual() {
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <div className="h-screen">
      <Particles />
      <div
        className={`h-40 w-full ${darkMode === "dark" ? "bg-primary" : "bg-cyan-600"}`}
      >
        {darkMode === "dark" ? "다크모드임니다" : "라이트모드임니다"}
      </div>
    </div>
  );
}

export default MainVisual;
