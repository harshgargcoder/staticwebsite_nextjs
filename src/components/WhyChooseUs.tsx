"use client";

import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Live Code Collaboration",
    description:
      "Collaborate with your team in real time. Pair program, review code together, and resolve issues faster using a shared development environment.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="pair programming developers"
          className="h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    ),
  },
  {
    title: "Instant Preview & Hot Reload",
    description:
      "See changes instantly as you write code. Hot reload and live preview help developers ship faster with confidence.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1555099962-4199c345e5dd"
          alt="live code preview"
          className="h-full w-full object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    ),
  },
  {
    title: "Git-Based Version Control",
    description:
      "Manage branches, pull requests, and code history with built-in Git workflows designed for modern development teams.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3"
          alt="git workflow visualization"
          className="h-full w-full object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    ),
  },
  {
    title: "Debugging & Performance Monitoring",
    description:
      "Track errors, inspect logs, and monitor performance in real time to keep your applications fast and reliable.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="debugging code"
          className="h-full w-full object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="py-10 bg-gray-800">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold  tracking-wide uppercase">
            WHY CHOOSE US
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl">Empowering Developers Worldwide</p>
        </div>
      </div>
      <div className="mt-10 px-4">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

export default WhyChooseUs;