"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

type WavyBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
} & Record<string, unknown>;

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const noise = createNoise3D();

  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const timeRef = useRef(0);

  const getSpeed = () => (speed === "slow" ? 0.001 : 0.002);

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (count: number) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    timeRef.current += getSpeed();

    for (let i = 0; i < count; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth ?? 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];

      for (let x = 0; x < widthRef.current; x += 5) {
        const y =
          noise(x / 800, 0.3 * i, timeRef.current) * 100;
        ctx.lineTo(x, y + heightRef.current * 0.5);
      }

      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.fillStyle = backgroundFill ?? "black";
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(
      0,
      0,
      widthRef.current,
      heightRef.current
    );

    drawWave(5);
    animationIdRef.current = requestAnimationFrame(render);
  };

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctxRef.current = ctx;

    widthRef.current = canvas.width = window.innerWidth;
    heightRef.current = canvas.height = window.innerHeight;

    ctx.filter = `blur(${blur}px)`;
    timeRef.current = 0;

    window.onresize = () => {
      widthRef.current = canvas.width = window.innerWidth;
      heightRef.current = canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    render();
  };

  useEffect(() => {
    init();
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const isSafari = 
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome");
    
    setTimeout(() => setIsSafari(isSafari), 0);
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
