"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";

interface RotateWordProps {
  words: string[];
  delay?: number;
  duration?: number;
}

function RotateWord({ words, duration = 3000 }: RotateWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <RotateBlock $duration={duration}>
        <p key={index}>{words[index]}</p>
      </RotateBlock>
    </>
  );
}

export default RotateWord;

const RotateBlock = styled.div<{ $duration: number }>`
  overflow-y: hidden;

  p {
    opacity: 1;
    animation-name: rotate;
    animation-duration: ${({ $duration }) => $duration + "ms"};
    animation-fill-mode: both;
  }

  @keyframes rotate {
    from {
      opacity: 0;
      transform: translateY(-48px);
    }

    50% {
      opacity: 1;
      transform: translateY(0);
    }

    to {
      opacity: 0;
      transform: translateY(48px);
    }
  }
`;
