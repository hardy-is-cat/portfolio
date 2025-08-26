import { motion } from "motion/react";

function ScrollDownArrow() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2"
      animate={{ y: [0, 5, 10], opacity: [0, 1, 0] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        times: [0, 0.5, 1],
        ease: "easeOut",
      }}
    >
      <span className="rotate-135 border-foreground block h-5 w-5 transform border-r-2 border-t-2 opacity-30"></span>
      <span className="rotate-135 border-foreground block h-5 w-5 -translate-y-2 transform border-r-2 border-t-2 opacity-30"></span>
    </motion.div>
  );
}

export default ScrollDownArrow;
