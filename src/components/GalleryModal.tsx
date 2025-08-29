import { GalleryModalTypes } from "../data";
import Slide from "./Slide";

function GalleryModal({ modal }: { modal: GalleryModalTypes }) {
  const { title, picture, description } = modal;

  return (
    <>
      <h3 className="text-headline3 mb-5">{title}</h3>
      <div className="bg-foreground/30 mb-5 h-px w-full" />
      <p className="mb-5">{description}</p>
      <div className="bg-foreground/30 mb-5 h-px w-full" />
      <Slide items={picture} />
    </>
  );
}

export default GalleryModal;
