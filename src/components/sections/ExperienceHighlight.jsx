"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Briefcase, Code, Star } from "lucide-react";

export default function ExperienceHighlight() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Horizontal scroll text
            gsap.to(textRef.current, {
                xPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            // Cards Animation
            gsap.from(".stat-card", {
                scrollTrigger: {
                    trigger: ".stats-container",
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            });

            // Big Number Animation
            gsap.from(".big-number", {
                scrollTrigger: {
                    trigger: ".stats-container",
                    start: "top 80%",
                },
                scale: 0,
                opacity: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.3)"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-white relative overflow-hidden border-y border-sakura-gray/30">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-br from-sakura-pink to-transparent rounded-full blur-[80px]" />
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-[60px]" />
            </div>

            {/* Sliding Text Background */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-5 pointer-events-none overflow-hidden whitespace-nowrap">
                <h2 ref={textRef} className="text-[20vw] font-bold font-heading text-coral leading-none">
                    EXPERIENCE • CREATIVITY • CODE • DESIGN •
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 stats-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">

                    {/* Left Side: Big Number */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="relative inline-block">
                            <span className="big-number block text-8xl md:text-9xl font-black text-coral font-heading leading-none">
                                1.5<span className="text-6xl text-foreground">+</span>
                            </span>
                            <div className="absolute -bottom-4 -right-8 bg-white px-4 py-1 rounded-full border border-sakura-gray shadow-sm rotate-12">
                                <span className="text-sm font-bold text-foreground">Years</span>
                            </div>
                        </div>
                        <h3 className="mt-8 text-3xl md:text-4xl font-bold text-foreground">
                            Frontend Excellence
                        </h3>
                        <p className="mt-4 text-lg text-foreground/70 max-w-md">
                            Crafting pixel-perfect, responsive, and interactive web experiences with modern technologies.
                        </p>
                    </div>

                    {/* Right Side: Details Grid */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        <div className="stat-card p-6 rounded-3xl bg-secondary/5 border border-sakura-gray/30 hover:border-coral/50 transition-colors shadow-sm hover:shadow-md bg-white/80 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                                <Briefcase size={22} />
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-2">Professional</h4>
                            <p className="text-sm text-foreground/70">Delivering high-quality code for diverse client projects.</p>
                        </div>

                        <div className="stat-card p-6 rounded-3xl bg-secondary/5 border border-sakura-gray/30 hover:border-coral/50 transition-colors shadow-sm hover:shadow-md bg-white/80 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                                <Code size={22} />
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-2">Modern Stack</h4>
                            <p className="text-sm text-foreground/70">Specialized in Next.js, React, and Tailwind CSS ecosystems.</p>
                        </div>

                        <div className="stat-card p-6 rounded-3xl bg-secondary/5 border border-sakura-gray/30 hover:border-coral/50 transition-colors shadow-sm hover:shadow-md bg-white/80 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                                <Star size={22} />
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-2">Animation</h4>
                            <p className="text-sm text-foreground/70">Creating immersive web experiences with GSAP.</p>
                        </div>

                        <div className="stat-card p-6 rounded-3xl bg-secondary/5 border border-sakura-gray/30 hover:border-coral/50 transition-colors shadow-sm hover:shadow-md bg-white/80 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                                <Award size={22} />
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-2">Dedicated</h4>
                            <p className="text-sm text-foreground/70">Committed to continuous learning and improvement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
