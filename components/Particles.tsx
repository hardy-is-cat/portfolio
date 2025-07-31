"use client";

import styled from "@emotion/styled";
import { useCallback, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { darkModeState } from "stores/atom";

/**
 * @param x 입자의 x좌표
 * @param y 입자의 y좌표
 * @param baseY 입자의 기준 y좌표
 * @param offsetY 입자가 움직일 y축의 거리
 * @param radius 입자의 크기
 * @param opacity 입자의 투명도
 * @param directionY 입자가 움직일 방향(1 or -1)
 * @param directionOpacity 입자의 투명도의 증감을 결정하는 값(1 or -1)
 */
interface Circle {
  x: number;
  y: number;
  baseY: number;
  offsetY: number;
  radius: number;
  opacity: number;
  directionY: number;
  directionOpacity: number;
}

interface ParticlesType {
  circleCount?: number;
  circleRadius?: number;
}

function Particles({ circleCount = 100, circleRadius = 2 }: ParticlesType) {
  const IsDarkMode = useRecoilValue(darkModeState);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const canvasSize = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const dpr = useRef(1);
  const circlesRef = useRef<Circle[]>();
  const animationRef = useRef<number>();
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  const resizeCanvas = () => {
    const currentDpr = dpr.current;
    if (canvasRef.current && context.current) {
      canvasSize.current.width = document.documentElement.clientWidth;
      canvasSize.current.height = document.documentElement.clientHeight;

      canvasRef.current.width = canvasSize.current.width * currentDpr;
      canvasRef.current.height = canvasSize.current.height * currentDpr;
      canvasRef.current.style.width = `${canvasSize.current.width}px`;
      canvasRef.current.style.height = `${canvasSize.current.height}px`;
      context.current.scale(currentDpr, currentDpr);
    }
  };

  // 캔버스 초기화
  const initCanvas = () => {
    resizeCanvas();
    createRandomCircles(canvasRef.current!.width, canvasRef.current!.height);
  };

  // 창 크기 조절
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = setTimeout(() => {
        initCanvas();
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 랜덤한 원 만들기
  const createRandomCircles = (width: number, height: number) => {
    circlesRef.current = Array.from({ length: circleCount }, () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const offsetY = Math.floor(Math.random() * 20);
      const radius = Math.floor(Math.random() * circleRadius) + 1;
      return {
        x,
        y,
        baseY: y,
        offsetY,
        radius,
        opacity: Math.random(),
        directionY: Math.random() < 0.5 ? 1 : -1,
        directionOpacity: Math.random() < 0.5 ? 1 : -1,
      };
    });
  };

  // 원 그리기
  const drawCircle = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = context.current;
    if (!ctx) return;

    // 캔버스를 비워 이전 입자들을 삭제함
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circlesRef.current?.forEach((circle) => {
      // 입자의 y축 이동
      circle.y += 0.1 * circle.directionY;
      const offset = circle.y - circle.baseY;
      if (offset > circle.offsetY || offset < -circle.offsetY) {
        circle.directionY *= -1;
      }

      // 입자의 투명도 변경
      circle.opacity += 0.005 * circle.directionOpacity;
      if (circle.opacity > 1) {
        circle.opacity = 1;
        circle.directionOpacity = -1;
      } else if (circle.opacity < 0.1) {
        circle.opacity = 0.1;
        circle.directionOpacity = 1;
      }

      ctx.beginPath();
      ctx.globalAlpha = circle.opacity;
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.fillStyle = IsDarkMode ? "#eee" : "#555";
      ctx.fill();
    });

    ctx.globalAlpha = 1;
  }, []);

  // 원 움직이기
  const animateCircles = useCallback(() => {
    drawCircle();
    animationRef.current = requestAnimationFrame(animateCircles);
  }, [drawCircle]);

  // 컴포넌트가 마운트될 때 캔버스 초기화
  useEffect(() => {
    if (window) dpr.current = window.devicePixelRatio;
    if (canvasRef.current) context.current = canvasRef.current.getContext("2d");
    initCanvas();

    animationRef.current = requestAnimationFrame(animateCircles);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <CanvasBlock ref={canvasRef} />;
}

export default Particles;

const CanvasBlock = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.bg};
`;
