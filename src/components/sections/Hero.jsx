"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ".hero-text",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1,
                ease: "power4.out",
                delay: 2.2, // Wait for loader
            }
        )
            .fromTo(
                ".hero-shape",
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 0.5, duration: 1.5, ease: "elastic.out(1, 0.5)" },
                "-=0.5"
            );

    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 "
        >
            {/* Background Shapes */}
            <div className="hero-shape absolute top-20 right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-light-pink to-transparent rounded-full blur-[80px]" />
            <div className="hero-shape absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-sakura-gray to-transparent rounded-full blur-[100px]" />

            <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto">
                <span className="hero-text block text-coral font-medium tracking-widest mb-4 uppercase">
                    Portfolio
                </span>

                <h1 className="hero-text text-5xl md:text-8xl font-black mb-6 tracking-tight leading-light font-heading text-foreground">
                    Frontend <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-red-plum">Developer</span>
                </h1>

                <p className="hero-text text-lg md:text-xl text-foreground opacity-80 max-w-2xl mb-10 leading-relaxed font-light">
                    Crafting modern, high-performance web experiences with a touch of elegance and code. Specialized in React, Next.js, and creative interactions.
                </p>

                <div className="hero-text flex gap-4">
                    <Link
                        href="/projects"
                        className="group px-8 py-3 bg-foreground text-background rounded-full font-semibold flex items-center gap-2 hover:bg-coral hover:text-white transition-all duration-300"
                    >
                        View Projects
                        <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-3 border border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
}
