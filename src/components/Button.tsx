"use client";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  type = "button",
  onClick,
  className,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      type={type}
      className={`${twMerge("hover:bg-primary hover:border-primary hover:text-background dark:border-foreground transition-custom mt-30 w-full cursor-pointer rounded-lg border py-3", className)}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default Button;
