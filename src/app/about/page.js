"use client";

import AboutIntro from "@/components/sections/AboutIntro";
import SkillsGrid from "@/components/sections/SkillsGrid";
import Experience from "@/components/sections/Experience";
import PageTransition from "@/components/layout/PageTransition";

export default function About() {
    return (
        <PageTransition>
            <div className="flex flex-col gap-0">
                <AboutIntro />
                <SkillsGrid />
                <Experience />
            </div>
        </PageTransition>
    );
}
