import SectionTitle from "@/components/SectionTitle";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";
import IconEmail from "public/images/icon-email.svg";
import IconCall from "public/images/icon-call.svg";
import IconGithub from "public/images/icon-github.svg";
import styled from "@emotion/styled";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <section id="contact">
      <SectionTitle {...useScrollFadeIn<HTMLHeadingElement>()}>
        연락처
      </SectionTitle>
      <ContactWrapper {...useScrollFadeIn<HTMLDivElement>()}>
        <SocialWrapper>
          <p>
            <IconCall />
            <a href="tel:010-7288-5859">010-7288-5859</a>
          </p>
          <p>
            <IconEmail />
            <Link href="mailto:zualzual0119@gmail.com">
              zualzual0119@gmail.com
            </Link>
          </p>
          <p>
            <IconGithub />
            <Link href="https://github.com/hardy-is-cat" target="_blank">
              https://github.com/hardy-is-cat
            </Link>
          </p>
        </SocialWrapper>
        <ContactForm />
      </ContactWrapper>
    </section>
  );
}

export default Contact;

const ContactWrapper = styled.div`
  ${({ theme }) => theme.flexWidth[1280]}
  flex-flow: column;
  align-items: center;
  gap: 30px;
`;

const SocialWrapper = styled.div`
  p {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.fontSize.headline3};
    font-weight: 400;

    a {
      text-align: center;
    }

    ${({ theme }) => theme.mediaQuery.mobile} {
      gap: 4px;

      svg {
        transform: scale(80%);
      }

      font-size: ${({ theme }) => theme.fontSize.headline4};
    }

    svg path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;
