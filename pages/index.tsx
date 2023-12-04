import MainVisual from "containers/MainVisual/MainVisual";
import Introduce from "containers/Introduce/Introduce";
import Skills from "containers/Skills/Skills";
import Projects from "containers/Projects/Projects";
import Contact from "containers/Contact/Contact";

export default function Home() {
  return (
    <>
      <MainVisual />
      <Introduce />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
