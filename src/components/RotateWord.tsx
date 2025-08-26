"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface RotateWord {
  words: string[];
  duration?: number;
}

function RotateWord({ words, duration = 3000 }: RotateWord) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWordIndex((wordIndex + 1) % words.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [wordIndex, words.length, duration]);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={words[wordIndex]}
          initial={{ opacity: 0, y: "-100%" }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          exit={{ opacity: 0, y: "100%", transition: { duration: 0.5 } }}
        >
          {words[wordIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default RotateWord;
