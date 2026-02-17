"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Code, Layout, Database, Server, Palette, FileCode, Layers,
    FileType, Box, Globe, Cpu, Zap
} from "lucide-react";

const skills = [
    { name: "Next.js", icon: <Globe size={24} />, color: "bg-black text-white" },
    { name: "React", icon: <Code size={24} />, color: "bg-blue-100 text-blue-600" },
    { name: "GSAP", icon: <Zap size={24} />, color: "bg-green-100 text-green-600" },
    { name: "Tailwind CSS", icon: <Palette size={24} />, color: "bg-cyan-100 text-cyan-600" },
    { name: "Bootstrap", icon: <Layout size={24} />, color: "bg-purple-100 text-purple-600" },
    { name: "CSS", icon: <FileType size={24} />, color: "bg-blue-50 text-blue-500" },
    { name: "CSS3", icon: <Layers size={24} />, color: "bg-blue-100 text-blue-600" },
    { name: "Node.js", icon: <Server size={24} />, color: "bg-green-50 text-green-600" },
    { name: "MongoDB", icon: <Database size={24} />, color: "bg-green-100 text-green-700" },
    { name: "Framer Motion", icon: <Cpu size={24} />, color: "bg-purple-50 text-purple-500" },
    { name: "TypeScript", icon: <FileCode size={24} />, color: "bg-blue-50 text-blue-700" }
];

export default function Skills() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Title Animation
            gsap.from(".skills-title", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            });

            // Skills Grid Animation
            gsap.from(".skill-card", {
                scrollTrigger: {
                    trigger: ".skills-grid",
                    start: "top 85%",
                },
                y: 100,
                opacity: 0,
                scale: 0.8,
                stagger: {
                    each: 0.1,
                    from: "center",
                    grid: "auto"
                },
                duration: 1.2,
                ease: "elastic.out(1, 0.5)"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1.1,
            rotate: 2,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
            duration: 0.4,
            ease: "back.out(1.7)"
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            rotate: 0,
            boxShadow: "0px 4px 6px rgba(0,0,0,0.05)",
            duration: 0.4,
            ease: "power2.out"
        });
    };

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-pale-sakura overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 skills-title">
                    <span className="text-coral font-bold tracking-widest uppercase mb-4 block">My Toolkit</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground font-heading">
                        Technical <span className="text-gradient-rainbow">Proficiency</span>
                    </h2>
                </div>

                <div className="skills-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card group relative w-full aspect-square flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-md border border-white/50 rounded-3xl shadow-sm cursor-pointer hover:border-coral/30 transition-colors"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${skill.color} transition-transform duration-500 group-hover:rotate-12`}>
                                {skill.icon}
                            </div>
                            <span className="font-bold text-foreground/80 group-hover:text-coral transition-colors">{skill.name}</span>

                            {/* Decorative Shine */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/40 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
