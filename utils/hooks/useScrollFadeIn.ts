import { useEffect, useRef } from "react";

const useScrollFadeIn = <T extends HTMLElement>(
  direction = "up",
  duration = 1,
  delay = 0
) => {
  const element = useRef<T | null>(null);

  // fadeIn 되는 방향 설정
  const handleDirection = (direction: string) => {
    switch (direction) {
      case "up":
        return "translate(0, 50%)";
      case "down":
        return "translate(0, -50%)";
      case "right":
        return "translate(-50%, 0)";
      case "left":
        return "translate(50%, 0)";
      default:
        return;
    }
  };

  // 옵저버가 타겟 발견시 타겟에 style 부여
  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    const { current } = element;
    entries.forEach((entry) => {
      if (entry.isIntersecting && current) {
        current.style.transform = "translate(0,0)";
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
      }
    });
  };

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }
  }, []);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

export default useScrollFadeIn;
