"use client";

import { forwardRef, useState } from "react";
import { wrap } from "motion";
import { AnimatePresence, motion, usePresenceData } from "motion/react";
import Image from "next/image";

import PaginationButton from "./PaginationButton";

function Slide({ items }: { items: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const setSlide = (newDirection: 1 | -1) => {
    const nextIndex = wrap(0, items.length, currentIndex + newDirection);
    setCurrentIndex(nextIndex);
    setDirection(newDirection);
  };

  return (
    <div className="h-100 border-foreground relative col-span-4 mb-5 flex items-center justify-between overflow-hidden border">
      <PaginationButton direction={-1} onClick={() => setSlide(-1)} />
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <SlideItem
          key={items[currentIndex]}
          items={items}
          currentIndex={currentIndex}
        />
      </AnimatePresence>
      <PaginationButton direction={1} onClick={() => setSlide(1)} />
    </div>
  );
}

const SlideItem = forwardRef(function SlideItem(
  { currentIndex, items }: { currentIndex: number; items: string[] },
  ref: React.Ref<HTMLDivElement>
) {
  const direction = usePresenceData();

  return (
    <motion.div
      className="absolute left-0 top-0 z-10 size-full"
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.3,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
    >
      <Image
        src={items[currentIndex]}
        alt="스크린샷"
        fill
        objectFit="contain"
      />
    </motion.div>
  );
});

export default Slide;
