"use client";

import Hero from "@/components/sections/Hero";
import ExperienceHighlight from "@/components/sections/ExperienceHighlight";
import Skills from "@/components/sections/Skills";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import CTA from "@/components/sections/CTA";
import PageTransition from "@/components/layout/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-0">
        <Hero />
        <ExperienceHighlight />
        <Skills />
        <ProjectsPreview />
        <CTA />
      </div>
    </PageTransition>
  );
}
