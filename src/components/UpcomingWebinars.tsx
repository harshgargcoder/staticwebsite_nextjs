'use client'

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
    {
        title: "Building Real-Time Apps with Next.js",
        description:
            "Learn how to build real-time applications using Next.js, React, and modern web technologies.",
        slug: "real-time-apps-nextjs",
        link: "/webinars/real-time-apps-nextjs",
        isFeatured: true,
    },
    {
        title: "Improving Developer Productivity",
        description:
            "Discover tools, workflows, and best practices to code faster and ship features confidently.",
        slug: "developer-productivity",
        link: "/webinars/developer-productivity",
        isFeatured: true,
    },
    {
        title: "Git & Version Control Essentials",
        description:
            "Understand Git fundamentals, branching strategies, and collaboration techniques for teams.",
        slug: "git-version-control-essentials",
        link: "/webinars/git-version-control-essentials",
        isFeatured: true,
    },
    {
        title: "Debugging Modern Web Applications",
        description:
            "Learn practical debugging techniques and error-handling strategies used in real-world projects.",
        slug: "debugging-modern-web-apps",
        link: "/webinars/debugging-modern-web-apps",
        isFeatured: false,
    },
    {
        title: "Web Performance Optimization Basics",
        description:
            "Improve page speed, reduce load times, and optimize performance for better user experience.",
        slug: "web-performance-optimization",
        link: "/webinars/web-performance-optimization",
        isFeatured: false,
    },
    {
        title: "Scaling Applications from MVP to Production",
        description:
            "A beginner-friendly session on scaling architecture, infrastructure, and development workflows.",
        slug: "scaling-applications-mvp-to-production",
        link: "/webinars/scaling-applications-mvp-to-production",
        isFeatured: true,
    },
];


function UpcomingWebinars() {
    return (
        <div className="py-10 bg-gray-700">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold  tracking-wide uppercase">
                        Featured Webinars
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl">
                        Enhance Your Skills with Our Latest Webinars
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-8">
                <HoverEffect items={featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: webinar.link,
                        isFeatured: webinar.isFeatured,
                    }
                ))} />
            </div>

            <div className="mt-auto text-center">
                <Link href={'/'} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View Upcoming Webinars
                </Link>
            </div>
        </div>
    )
}

export default UpcomingWebinars