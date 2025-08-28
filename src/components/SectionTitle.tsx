"use client";

import { motion } from "motion/react";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: "0", opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-headline1 mb-20 text-center transition-all"
    >
      {children}
    </motion.h2>
  );
}

export default SectionTitle;
