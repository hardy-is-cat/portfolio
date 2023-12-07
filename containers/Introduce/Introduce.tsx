import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeState, introduceTitleState } from "stores/atom";
import styled from "styled-components";

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
            src={IsDarkMode ? "/images/zual.jpeg" : "/images/zual.jpeg"}
            alt="조정현 사진"
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
          />
          {IsDarkMode ? (
            <LinkBtn href="https://zualdy.notion.site/9797e03011ad4848b2ab98fa3c5476e3?pvs=4">
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
  ${({ theme }) => theme.width[1280]}
  gap: 140px;
`;

const PictureBlock = styled.div`
  text-align: center;

  img {
    display: block;
    border-radius: 999px;
  }
`;
