"use client";

import { motion } from "motion/react";

type DescriptionTypes = {
  content: {
    title: string;
    description: string;
  };
  index: number;
};

function IntroDescription({ content, index }: DescriptionTypes) {
  return (
    <div>
      <h3 className="text-headline3 inline-block leading-[1]">
        {content.title}
        <motion.span
          className="bg-primary mb-1.5 mt-3 inline-block h-1 w-full lg:origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
        />
      </h3>
      <p className="opacity-95">
        {content.description.split("<br>").map((text, index) => (
          <span key={index}>
            {text}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}

export default IntroDescription;
