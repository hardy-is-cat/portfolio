import SectionTitle from "@/components/SectionTitle";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";
import IconEmail from "public/images/icon-email.svg";
import IconCall from "public/images/icon-call.svg";
import IconGithub from "public/images/icon-github.svg";
import styled from "@emotion/styled";
import Link from "next/link";

function Contact() {
  return (
    <section id="contact">
      <SectionTitle {...useScrollFadeIn<HTMLHeadingElement>()}>
        연락처
      </SectionTitle>
      <ContactWrapper {...useScrollFadeIn<HTMLDivElement>()}>
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
          <Link href="https://github.com/hardy-is-cat">
            https://github.com/hardy-is-cat
          </Link>
        </p>
      </ContactWrapper>
    </section>
  );
}

export default Contact;

const ContactWrapper = styled.div`
  ${({ theme }) => theme.flexWidth[1280]}
  flex-flow: column;
  align-items: center;

  p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSize.headline2};
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
  }

  svg path {
    fill: ${({ theme }) => theme.colors.text};
  }
`;
