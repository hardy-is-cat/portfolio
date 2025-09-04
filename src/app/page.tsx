"use client";

import Header from "@/components/containers/Header";
import Introduce from "@/components/containers/Introduce";
import MainVisual from "@/components/containers/MainVisual";
import Projects from "@/components/containers/Projects";
import Skills from "@/components/containers/Skills";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "../utils/atoms";

export default function Home() {
  const darkMode = useAtomValue(darkModeAtom);
  return (
    <>
      <Header />
      <MainVisual />
      <Introduce />
      <Projects />
      {darkMode === "dark" && <Skills />}
      <div className="h-screen" />
      <div className="h-screen" />
      <div className="h-screen" />
      <div className="h-screen" />
      {/* Skills */}
      {/* Projects */}
      {/* Contact */}
      {/* Footer */}
    </>
  );
}
