"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence } from "motion/react";

import SectionTitle from "../SectionTitle";
import Button from "../Button";
import Input from "../Input";
import Toast from "../Toast";

import { IconContext } from "react-icons";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { LuMapPinned } from "react-icons/lu";

function Contact() {
  const [submitText, setSubmitText] = useState("전송");
  const [toastText, setToastText] = useState<"success" | "fail" | "ready">(
    "ready"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitText("전송중..");

    const EMAILJS_SERVICE_KEY = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY;
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!EMAILJS_SERVICE_KEY || !EMAILJS_PUBLIC_KEY) {
      console.error("서비스키 오류");
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_KEY,
        "templaacxvz",
        {
          from_name: formData.get("name"),
          to_name: "정현",
          from_email: formData.get("email"),
          to_email: formData.get("email"),
          message: formData.get("message"),
        },
        EMAILJS_PUBLIC_KEY
      );

      setToastText("success");
      setTimeout(() => {
        setSubmitText("전송");
        setToastText("ready");
      }, 2000);
      form.reset();
    } catch (error) {
      console.error(error);
      setToastText("fail");
      setTimeout(() => {
        setSubmitText("전송");
        setToastText("ready");
      }, 2000);
    }
  };

  return (
    <section id="contact" className="m-auto w-full">
      <SectionTitle>연락처</SectionTitle>
      <div className="max-w-1/2 m-auto mb-10 text-center">
        <p className="mb-5 text-xl">
          <IconContext.Provider
            value={{
              size: "30px",
              className: "inline-block mr-2",
            }}
          >
            <LuMapPinned />
          </IconContext.Provider>
          경기도 부천
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="mailto:zualzual0119@gmail.com">
            <IconContext.Provider
              value={{
                size: "48px",
                className:
                  "hover:text-primary transition-all hover:-translate-y-1",
              }}
            >
              <MdOutlineEmail />
            </IconContext.Provider>
          </a>
          <a href="https://github.com/hardy-is-cat">
            <IconContext.Provider
              value={{
                size: "48px",
                className:
                  "hover:text-primary transition-all hover:-translate-y-1",
              }}
            >
              <IoLogoGithub />
            </IconContext.Provider>
          </a>
          <a href="https://velog.io/@hardy-is-cat">
            <IconContext.Provider
              value={{
                size: "40px",
                className:
                  "hover:text-primary transition-all hover:-translate-y-1",
              }}
            >
              <SiVelog />
            </IconContext.Provider>
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="m-auto max-w-sm text-center">
        <div className="mb-2 flex flex-col gap-2">
          <label htmlFor="name">성함</label>
          <Input
            id="name"
            name="name"
            placeholder="성함을 적어주세요."
            required
          />
        </div>
        <div className="mb-2 flex flex-col gap-2">
          <label htmlFor="email">이메일</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="hardy@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col gap-2 last-of-type:mb-6">
          <label htmlFor="message">메세지</label>
          <textarea
            id="message"
            name="message"
            className="border-foreground rounded-2 block w-full rounded-lg border px-3 py-3"
            rows={4}
            placeholder="내용을 적어주세요."
            required
          />
        </div>
        <Button type="submit">{submitText}</Button>
      </form>
      <AnimatePresence>
        {toastText === "success" && (
          <Toast message="전송 성공!" state="success" />
        )}
        {toastText === "fail" && (
          <Toast message="전송 실패. 다시 시도해주세요." state="fail" />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
