"use client";

import { cn } from "@/utils/cn";
import React, { useCallback, useLayoutEffect, useState } from "react";
// import "@/styles/animations/scroll.css";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start] = useState(true);
  const hasInitialized = React.useRef(false);
  const shouldStart = React.useRef(false);

  const getDirection = useCallback(() => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (!containerRef.current) return;

    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

    containerRef.current.style.setProperty(
      "--animation-duration",
      duration
    );
  }, [speed]);

  useLayoutEffect(() => {
    if (hasInitialized.current) return;
    if (!containerRef.current || !scrollerRef.current) return;

    hasInitialized.current = true;

    const scrollerContent = Array.from(scrollerRef.current.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    getDirection();
    getSpeed();
    shouldStart.current = true;
  }, [getDirection, getSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
          >
            <blockquote>
              <span className="relative z-20 text-sm leading-[1.6] text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>

              <div className="relative z-20 mt-6 flex flex-col gap-1">
                <span className="text-sm text-neutral-500 dark:text-gray-400">
                  {item.name}
                </span>
                <span className="text-sm text-neutral-500 dark:text-gray-400">
                  {item.title}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
