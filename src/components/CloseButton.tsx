"use client";

import { motion } from "motion/react";

type CloseButtonTypes = {
  onClick: () => void;
};

function CloseButton({ onClick }: CloseButtonTypes) {
  return (
    <motion.button
      className="absolute right-5 top-5 flex size-10 origin-center cursor-pointer items-center justify-center"
      whileHover={{
        rotate: "180deg",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
    >
      <span className="a11y-hidden">닫기</span>
      <span className="bg-foreground absolute block h-0.5 w-8 origin-center rotate-45 transform rounded-full sm:w-10" />
      <span className="bg-foreground absolute block h-0.5 w-8 origin-center -rotate-45 transform rounded-full sm:w-10" />
    </motion.button>
  );
}

export default CloseButton;
