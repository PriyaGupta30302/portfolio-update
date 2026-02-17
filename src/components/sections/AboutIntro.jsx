"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function AboutIntro() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-text", {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });

            gsap.from(".about-image", {
                scale: 0.8,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.4
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-background min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="order-2 md:order-1">
                    <span className="about-text block text-coral font-medium tracking-widest mb-4 uppercase">Who I Am</span>
                    <h1 className="about-text text-4xl md:text-6xl font-bold mb-8 font-heading text-foreground leading-tight">
                        Passionate about <span className="text-gradient-rainbow">creating</span> digital experiences.
                    </h1>
                    <div className="space-y-6 text-lg text-foreground/80 leading-relaxed about-text">
                        <p>
                            I&apos;m a Frontend Web Developer with a keen eye for design and a love for clean code. specialized in building modern, responsive, and performance-optimized web applications using the latest technologies.
                        </p>
                        <p>
                            My journey started with a curiosity for how things work on the web, which quickly turned into a passion for crafting pixel-perfect interfaces. I believe in the power of minimalism and functionality working hand in hand.
                        </p>
                        <p>
                            When I&apos;m not coding, you can find me exploring new design trends, contributing to open-source, or enjoying a good cup of coffee while brainstorming my next project.
                        </p>
                    </div>
                </div>

                <div className="order-1 md:order-2 relative about-image">
                    <div className="aspect-square relative rounded-2xl overflow-hidden bg-sakura-gray">
                        <Image
                            src="https://placehold.co/600x600/fce9ec/4a4a4a?text=Me"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-coral/20 rounded-full blur-3xl" />
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-light-crimson/20 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
}
