'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

const testimonials = [
    {
        quote:
            "This platform completely changed how our team collaborates on code. Real-time updates and smooth workflows make development faster and cleaner.",
        name: "Aarav Sharma",
        title: "Frontend Developer",
    },
    {
        quote:
            "Hot reload and live previews save me hours every week. I can experiment freely and ship features with confidence.",
        name: "Riya Verma",
        title: "React & Next.js Engineer",
    },
    {
        quote:
            "Built-in Git workflows and clean version control finally removed the chaos from our releases. Everything feels intentional.",
        name: "Kunal Mehta",
        title: "Senior Software Engineer",
    },
    {
        quote:
            "Debugging production issues is much easier now. Real-time logs and performance insights help us catch problems early.",
        name: "Neha Patel",
        title: "Backend Engineer",
    },
    {
        quote:
            "The developer experience is outstanding. Clean UI, smooth animations, and tools that actually respect how developers work.",
        name: "Rahul Singh",
        title: "Full-Stack Developer",
    },
    {
        quote:
            "From solo projects to team collaboration, this tool scales beautifully. It feels like it was built by developers, for developers.",
        name: "Ananya Gupta",
        title: "Product Engineer",
    },
];


function CodeCraftingTestimonial() {
    return (
        <div className="w-full h-[40rem] dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col overflow-hidden items-center justify-center">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <h2 className="z-10 text-center text-3xl font-bold mb-8">What Our Developers Say</h2>
            <div className="flex w-full justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default CodeCraftingTestimonial