"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const submitButtonState = {
  ready: "전송",
  loading: "전송중..",
  success: "전송 성공!",
  fail: "전송 실패!",
};

type SubmitButtonStateKey = keyof typeof submitButtonState;

function ContactForm() {
  const EMAIL_JS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
  const EMAIL_JS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sumitButtonText, setSubmitButtonText] =
    useState<SubmitButtonStateKey>("ready");

  // Alert 컴포넌트에 사용되는 코드
  // const [isLoading, setIsLoading] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  // const [alertType, setAlertType] = useState<"success" | "fail">("success");
  // const [alertMessage, setAlertMessage] =
  //   useState("메세지 전송에 성공하였습니다!");

  // const handleAlert = (type: "success" | "fail", message: string) => {
  //   setAlertType(type);
  //   setAlertMessage(message);
  //   setShowAlert(true);

  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 3000);
  // };

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    // setIsLoading(true);
    setSubmitButtonText("loading");

    try {
      await emailjs.send(
        EMAIL_JS_SERVICE_ID!,
        "template_33acxvz",
        {
          from_name: formData.name,
          to_name: "정현",
          from_email: formData.email,
          to_email: "zualzual0119@gmail.com",
          message: formData.message,
        },
        EMAIL_JS_PUBLIC_KEY
      );

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      setSubmitButtonText("success");
    } catch (error) {
      console.error(error);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // setIsLoading(false);
      setSubmitButtonText("fail");
    } finally {
      setTimeout(() => {
        setSubmitButtonText("ready");
      }, 2500);
    }
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <Alert type={alertType} message={alertMessage} showAlert={showAlert} /> */}
      <FormBlock onSubmit={handleSubmitForm}>
        <InputWrap>
          <label htmlFor="name" id="name">
            성함
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="성함을 적어주세요."
            required
            onChange={handleInput}
            value={formData.name}
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="email" id="email">
            이메일
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="hardy@gmail.com"
            required
            onChange={handleInput}
            value={formData.email}
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="message" id="message">
            메세지
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="내용을 적어주세요."
            required
            onChange={handleInput}
            value={formData.message}
          />
        </InputWrap>
        <SubmitButton type="submit" $state={sumitButtonText}>
          {submitButtonState[sumitButtonText]}
        </SubmitButton>
      </FormBlock>
    </>
  );
}

export default ContactForm;

const FormBlock = styled.form`
  max-width: 400px;
  width: 100%;
  text-align: center;

  & * {
    font-size: ${({ theme }) => theme.fontSize.headline4};
  }
`;

const InputWrap = styled.div`
  width: 100%;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    font-size: ${({ theme }) => theme.fontSize.description};
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;

const SubmitButton = styled.button<{ $state: SubmitButtonStateKey }>`
  width: 100%;
  padding: 12px;
  text-align: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};

  ${({ $state, theme }) =>
    $state === "success"
      ? css`
          background-color: #19a55a;
          border: none;
        `
      : $state === "fail"
        ? css`
            background-color: #e35353;
            border: none;
          `
        : css`
            background-color: transparent;
            border: 1px solid ${theme.colors.border};
          `}

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  &:focus {
    transform: scale(0.98);
  }
`;
