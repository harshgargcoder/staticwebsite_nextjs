'use client';
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
        id: 1,
        name: "Alice Johnson",
        designation: "Frontend Developer",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
        id: 2,
        name: "Bob Smith",
        designation: "Backend Developer",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
        id: 3,
        name: "Charlie Brown",
        designation: "UI/UX Designer",
        image:
            "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&q=80",
    },
    {
        id: 4,
        name: "Diana Prince",
        designation: "Full Stack Developer",
        image:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
    },
    {
        id: 5,
        name: "Ethan Hunt",
        designation: "DevOps Engineer",
        image:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&q=80",
    },
];


function Instructors() {
    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl font-bold text-center">Meet Our Instructors</h2>
                <p className="max-w-3xl text-center mt-4 text-lg">
                    Our instructors are industry experts with years of experience in web development, design, and programming.
                </p>
                <div className="flex flex-row items-center justify-center w-full mb-10">
                    <AnimatedTooltip items={instructors} />

                </div>

            </WavyBackground>
        </div>
    )
}

export default Instructors