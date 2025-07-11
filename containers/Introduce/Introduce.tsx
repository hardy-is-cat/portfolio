import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeState, introduceTitleState } from "stores/atom";
import styled from "@emotion/styled";

import SectionTitle from "@/components/SectionTitle";
import LinkBtn from "@/components/LinkBtn";
import IntroduceText from "./IntroduceText";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";

function Introduce() {
  const introduceRef = useRef<HTMLDivElement | null>(null);
  const setAppearIntroduce = useSetRecoilState(introduceTitleState);
  const IsDarkMode = useRecoilValue(darkModeState);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAppearIntroduce(true);
        } else {
          setAppearIntroduce(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (introduceRef.current) {
      observer.observe(introduceRef.current);
    }
  }, []);

  return (
    <section id="introduce">
      <SectionTitle {...useScrollFadeIn<HTMLHeadingElement>()}>
        {IsDarkMode ? "어떤 개발자인가요?" : "어떤 사람인가요?"}
      </SectionTitle>
      <IntroduceBlock ref={introduceRef}>
        <PictureBlock>
          <Image
            src={IsDarkMode ? "/images/pic-profile.jpg" : "/images/zual.jpeg"}
            alt="조정현 사진"
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
          />
          {IsDarkMode ? (
            <LinkBtn
              href="https://zualdy.notion.site/940aad540e2246d2bb2b9805b0f9858f?source=copy_link"
              target="_blank"
            >
              노션 이력서 보기
            </LinkBtn>
          ) : (
            ""
          )}
        </PictureBlock>
        <IntroduceText />
      </IntroduceBlock>
    </section>
  );
}

export default Introduce;

const IntroduceBlock = styled.div`
  ${({ theme }) => theme.flexWidth[1280]}
  align-items: center;
  gap: 140px;

  ${({ theme }) => theme.mediaQuery.tablet} {
    flex-flow: column;
    gap: 40px;
  }

  ${({ theme }) => theme.mediaQuery.mobile} {
    flex-flow: column;
    gap: 40px;
  }
`;

const PictureBlock = styled.div`
  text-align: center;

  img {
    display: block;
    border-radius: 999px;
    margin: 0 auto;
  }
`;
