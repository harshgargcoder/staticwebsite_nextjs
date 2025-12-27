"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Meteor = {
  left: number;
  delay: string;
  duration: string;
};

export default function Meteors({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const [width, setWidth] = useState<number>(0);
  const [meteors, setMeteors] = useState<Meteor[]>([]); // ✅ important

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!width) return;

    const newMeteors: Meteor[] = Array.from({ length: number }).map(() => ({
      left: Math.random() * width,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 5 + 5}s`,
    }));

    setMeteors(newMeteors);
  }, [number, width]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {meteors.map((meteor, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: "-40px",
            left: `${meteor.left}px`,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </motion.div>
  );
}
