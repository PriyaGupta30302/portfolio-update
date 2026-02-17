"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
    "Next.js", "React", "GSAP", "Tailwind CSS", "Node.js", "MongoDB", "Framer Motion", "TypeScript"
];

export default function Skills() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".skill-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 px-6 md:px-12 bg-pale-sakura">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground font-heading">
                    Core Technologies
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="skill-item px-6 py-3 rounded-full border border-sakura-gray bg-white text-foreground font-medium hover:scale-105 hover:border-coral transition-all duration-300 shadow-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
