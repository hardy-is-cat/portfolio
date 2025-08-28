"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "@/src/utils/atoms";

import { introContents } from "@/src/data";
import IntroDescription from "../IntroDescription";
import SectionTitle from "../SectionTitle";

function Introduce() {
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <section>
      <SectionTitle>
        {darkMode === "dark"
          ? introContents.developer.headline
          : introContents.normal.headline}
      </SectionTitle>
      <motion.div
        className="lg:gap-30 flex flex-col items-center justify-center gap-20 lg:flex-row"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
      >
        <div className="text-center">
          <div className="relative mb-5 h-[300px] w-[300px] overflow-hidden rounded-full">
            <Image
              src={
                darkMode === "dark"
                  ? introContents.developer.profile
                  : introContents.normal.profile
              }
              alt="프로필사진"
              fill
              className="object-cover transition-all"
            />
          </div>
          {darkMode === "dark" && (
            <Link
              href="https://zualdy.notion.site/940aad540e2246d2bb2b9805b0f9858f?source=copy_link"
              className="border-foreground hover:bg-primary hover:border-primary hover:text-background block w-full transform rounded-sm border px-4 py-2 transition-all active:scale-95"
              target="_blank"
            >
              노션 이력서
            </Link>
          )}
        </div>
        <div className="flex flex-col gap-8 text-center transition-all lg:text-left">
          {darkMode === "dark"
            ? introContents.developer.description.map((content, index) => (
                <IntroDescription
                  key={content.title + index}
                  content={content}
                  index={index}
                />
              ))
            : introContents.normal.description.map((content, index) => (
                <IntroDescription
                  key={content.title + index}
                  content={content}
                  index={index}
                />
              ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Introduce;
