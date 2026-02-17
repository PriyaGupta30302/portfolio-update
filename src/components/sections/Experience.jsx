"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
    {
        year: "2024 - Present",
        role: "Senior Frontend Developer",
        company: "Freelance",
        description: "Building high-performance web applications for diverse clients using Next.js and Tailwind CSS."
    },
    {
        year: "2023 - 2024",
        role: "Frontend Developer",
        company: "Tech Agency",
        description: "Collaborated with design teams to implement pixel-perfect UIs and complex animations."
    },
    {
        year: "2022 - 2023",
        role: "Junior Web Developer",
        company: "Startup Inc",
        description: "Assisted in developing core features for a SaaS platform using React and Redux."
    }
];

export default function Experience() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".timeline-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                x: -50,
                opacity: 0,
                stagger: 0.3,
                duration: 1,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-background">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-heading text-foreground">Journey</h2>

                <div className="relative border-l-2 border-sakura-gray/50 ml-4 md:ml-0 space-y-12 pl-8 md:pl-0">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item md:grid md:grid-cols-[1fr_2px_1fr] gap-8 relative items-start">
                            {/* Year - Left on Desktop */}
                            <div className="hidden md:block text-right pr-8">
                                <span className="text-2xl font-bold text-coral opacity-80">{exp.year}</span>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-[-37px] md:left-1/2 md:-ml-[5px] top-2 w-4 h-4 rounded-full bg-coral border-4 border-white shadow-sm z-10" />

                            {/* Content - Right on Desktop */}
                            <div className="md:pl-8">
                                <span className="md:hidden text-sm font-bold text-coral mb-1 block">{exp.year}</span>
                                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                <p className="text-sm font-medium text-foreground/60 mb-2">{exp.company}</p>
                                <p className="text-foreground/80 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
