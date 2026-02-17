"use client";

import StackCards from "@/components/sections/StackCards";
import PageTransition from "@/components/layout/PageTransition";

export default function Projects() {
    return (
        <PageTransition>
            <div className="bg-background min-h-screen">
                <div className="pt-32 pb-12 px-6 md:px-12 max-w-6xl mx-auto text-center">
                    <span className="block text-coral font-medium tracking-widest mb-4 uppercase">Selected Work</span>
                    <h1 className="text-4xl md:text-7xl font-bold font-heading text-foreground mb-6">
                        Featured Projects
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                        A collection of projects showcasing my expertise in frontend development, UI/UX design, and performance optimization.
                    </p>
                </div>
                <StackCards />
            </div>
        </PageTransition>
    );
}
