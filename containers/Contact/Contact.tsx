import SectionTitle from "@/components/SectionTitle";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";
import IconEmail from "public/images/icon-email.svg";
import IconCall from "public/images/icon-call.svg";
import IconGithub from "public/images/icon-github.svg";
import styled from "styled-components";
import Link from "next/link";

function Contact() {
  return (
    <SectionBlock>
      <SectionTitle {...useScrollFadeIn<HTMLHeadingElement>()}>
        연락처
      </SectionTitle>
      <ContactWrapper {...useScrollFadeIn<HTMLDivElement>()}>
        <p>
          <IconCall />
          010-7288-5859
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
    </SectionBlock>
  );
}

export default Contact;

const SectionBlock = styled.section`
  ${({ theme }) => theme.width[1280]}
  flex-flow: column;
  align-items: center;
  padding-bottom: 100px;
`;

const ContactWrapper = styled.div`
  p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSize.headline2};
    font-weight: 400;
  }

  svg path {
    fill: ${({ theme }) => theme.colors.text};
  }
`;
