"use client";

import { useAtomValue } from "jotai";
import { useCallback, useEffect, useRef } from "react";
import { darkModeAtom } from "../utils/atoms";

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
interface CircleType {
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const canvasSize = useRef({ width: 0, height: 0 });
  const dprRef = useRef(1);
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);
  const circleRef = useRef<CircleType[]>([]);
  const animationRef = useRef<number>(0);

  const darkModeValue = useAtomValue(darkModeAtom);
  const darkModeRef = useRef(darkModeValue);

  const MARGIN_TOP = 100;

  const resizeCanvas = () => {
    const currentDpr = dprRef.current;

    if (canvasRef.current && contextRef.current) {
      canvasSize.current.width = document.documentElement.clientWidth;
      canvasSize.current.height =
        document.documentElement.clientHeight - MARGIN_TOP / 2;

      canvasRef.current.width = canvasSize.current.width * currentDpr;
      canvasRef.current.height =
        canvasSize.current.height * currentDpr - MARGIN_TOP / 2;
      canvasRef.current.style.width = `${canvasSize.current.width}px`;
      canvasRef.current.style.height = `${canvasSize.current.height - MARGIN_TOP / 2}px`;

      contextRef.current.setTransform(1, 0, 0, 1, 0, 0); // 기존 scale 제거
      contextRef.current.scale(currentDpr, currentDpr);
    }
  };

  // 창 크기 변경 이벤트, 0.2초 안에 계속 변경 시 이전 이벤트 초기화로 디바운싱
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = setTimeout(() => {
        initCanvas();
      }, 300);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 현재 창의 가로,세로 길이를 받아 랜덤한 circle들을 만드는 함수
  const createRandomCircles = (width: number, height: number) => {
    circleRef.current = Array.from({ length: circleCount }, () => {
      const x = Math.floor(Math.random() * (width + 1));
      const y = Math.floor(Math.random() * (height + 1));
      return {
        x,
        y,
        baseY: y,
        offsetY: Math.floor(Math.random() * 21),
        radius: circleRadius,
        opacity: Math.random(),
        directionY: Math.random() < 0.5 ? 1 : -1,
        directionOpacity: Math.random() < 0.5 ? 1 : -1,
      };
    });
  };

  // Circles를 canvas에 그려주는 함수
  const drawCircles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = contextRef.current;
    if (!context) return;

    // 캔버스에 남아있는 이전 circle을 지우고 움직인 circle을 다시 그림
    context.clearRect(0, 0, canvas.width, canvas.height);

    circleRef.current.forEach((circle) => {
      circle.y += 0.1 * circle.directionY;

      // circle의 y 위치가 기준점으로부터 offsetY 만큼 떨어지면 움직일 방향 변경
      const offset = circle.y - circle.baseY;
      if (offset > circle.offsetY || offset < -circle.offsetY) {
        circle.directionY *= -1;
      }

      // circle의 opacity가 기준치를 넘으면 opacity 증감치 변경
      circle.opacity += 0.003 * circle.directionOpacity;
      if (circle.opacity > 1) {
        circle.opacity = 1;
        circle.directionOpacity = -1;
      } else if (circle.opacity < 0) {
        circle.opacity = 0;
        circle.directionOpacity = 1;
      }

      context.beginPath();

      context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      context.fillStyle = darkModeRef.current === "dark" ? "#999" : "#aaa";
      context.globalAlpha = circle.opacity;
      context.fill();
    });
  }, []);

  // circles를 그리고 애니메이션을 실행하는 함수
  const animateCircles = useCallback(() => {
    drawCircles();
    animationRef.current = requestAnimationFrame(animateCircles);
  }, [drawCircles]);

  // 캔버스 초기화 함수
  const initCanvas = () => {
    resizeCanvas();
    createRandomCircles(canvasSize.current.width, canvasSize.current.height);
  };

  // 랜더링 시 캔버스 초기화 후 애니메이션 실행
  useEffect(() => {
    if (window) dprRef.current = window.devicePixelRatio;
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext("2d");
    }
    initCanvas();

    drawCircles();

    animationRef.current = requestAnimationFrame(animateCircles);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // 테마 색상 감지 이벤트
  useEffect(() => {
    darkModeRef.current = darkModeValue;
  }, [darkModeValue]);

  return (
    <canvas
      ref={canvasRef}
      className="bg-background absolute left-0 top-0 -z-10 h-[calc(100vh-100px)]"
    ></canvas>
  );
}

export default Particles;
