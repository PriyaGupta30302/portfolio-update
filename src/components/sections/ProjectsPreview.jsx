"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

// Placeholder data - replace with real projects later
const projects = [
    {
        title: "E-Commerce Dashboard",
        category: "Web Application",
        image: "https://placehold.co/600x400/fce9ec/4a4a4a?text=Project+1",
        link: "/projects"
    },
    {
        title: "SaaS Landing Page",
        category: "Marketing Site",
        image: "https://placehold.co/600x400/e8d3d8/4a4a4a?text=Project+2",
        link: "/projects"
    }
];

export default function ProjectsPreview() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-coral uppercase tracking-widest font-medium text-sm">Selected Work</span>
                        <h2 className="text-4xl md:text-6xl font-bold mt-2 font-heading text-foreground">Featured Projects</h2>
                    </div>
                    <Link href="/projects" className="hidden md:flex items-center gap-2 text-foreground hover:text-coral transition-colors">
                        View All <MoveRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-sakura-gray">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold mb-1 group-hover:text-coral transition-colors">{project.title}</h3>
                            <p className="text-foreground/60">{project.category}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-coral transition-colors">
                        View All Projects <MoveRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
