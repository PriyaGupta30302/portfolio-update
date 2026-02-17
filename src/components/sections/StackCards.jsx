"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, order management, and inventory tracking.",
        tech: ["Next.js", "Tailwind CSS", "Recharts", "Supabase"],
        image: "https://placehold.co/800x600/fce9ec/4a4a4a?text=E-Commerce+Dashboard",
        color: "#fce9ec"
    },
    {
        title: "SaaS Landing Page",
        description: "High-conversion landing page for a SaaS product, optimized for speed and SEO with modern animations.",
        tech: ["React", "GSAP", "Framer Motion"],
        image: "https://placehold.co/800x600/e8d3d8/4a4a4a?text=SaaS+Landing+Page",
        color: "#e8d3d8"
    },
    {
        title: "Social Media App",
        description: "A mobile-first social media application allowing users to share moments and connect with friends.",
        tech: ["React Native", "Firebase", "Redux"],
        image: "https://placehold.co/800x600/dcd0d5/4a4a4a?text=Social+Media+App",
        color: "#dcd0d5"
    },
    {
        title: "Portfolio v1",
        description: "My previous portfolio website, showcasing my growth as a developer over the years.",
        tech: ["HTML", "SCSS", "JavaScript"],
        image: "https://placehold.co/800x600/f5b1aa/ffffff?text=Portfolio+v1",
        color: "#f5b1aa"
    }
];

export default function StackCards() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray(".stack-card");

        cards.forEach((card, index) => {
            const isLast = index === cards.length - 1;

            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                    markers: false, // Set to true for debugging
                },
                scale: isLast ? 1 : 0.9,
                opacity: isLast ? 1 : 0.5,
                transformOrigin: "center top",
            });
        });

    }, []);

    return (
        <div ref={containerRef} className="pb-24">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="stack-card sticky top-0 min-h-screen flex items-center justify-center py-10 px-6"
                    style={{ backgroundColor: project.color }}
                >
                    <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/50">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-foreground">{project.title}</h2>
                            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-sakura-gray/30 rounded-full text-sm font-medium text-foreground">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <Link href="#" className="inline-flex items-center gap-2 text-coral font-bold hover:gap-4 transition-all">
                                View Project <MoveRight />
                            </Link>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
