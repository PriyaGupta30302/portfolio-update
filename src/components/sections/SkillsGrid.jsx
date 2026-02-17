"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillsData = [
    { category: "Frontend", items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Sass"] },
    { category: "Animation & UI", items: ["GSAP", "Framer Motion", "Lenis Scroll", "Canvas", "Three.js (Basics)"] },
    { category: "Backend & database", items: ["Node.js", "Express", "MongoDB", "Firebase", "Supabase"] },
    { category: "Tools & Others", items: ["Git/GitHub", "Figma", "Canva", "Redux Toolkit", "React Native"] }
];

export default function SkillsGrid() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".skill-category", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-pale-sakura">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-heading text-foreground">Technical Arsenal</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {skillsData.map((category, idx) => (
                        <div key={idx} className="skill-category bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/60 hover:border-coral/30 transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-6 text-coral border-b border-coral/20 pb-2 inline-block">{category.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-foreground shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
