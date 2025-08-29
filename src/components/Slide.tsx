"use client";

import { wrap } from "motion";
import {
  AnimatePresence,
  motion,
  usePresence,
  usePresenceData,
} from "motion/react";
import Image from "next/image";
import { forwardRef, useState } from "react";

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
      <button
        className="z-11 hover:bg-foreground/70 bg-foreground/40 ml-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow transition-all active:scale-90"
        onClick={() => setSlide(-1)}
      >
        <span className="a11y-hidden">이전</span>
        <span className="border-background ml-1.5 block h-4 w-4 -rotate-45 border-l-2 border-t-2" />
      </button>
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <SlideItem
          key={items[currentIndex]}
          items={items}
          currentIndex={currentIndex}
        />
      </AnimatePresence>
      <button
        className="z-11 hover:bg-foreground/70 bg-foreground/40 mr-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow transition-all active:scale-90"
        onClick={() => setSlide(1)}
      >
        <span className="a11y-hidden">다음</span>
        <span className="border-background mr-1.5 block h-4 w-4 rotate-45 border-r-2 border-t-2" />
      </button>
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
