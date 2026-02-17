"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 px-6 md:px-12 bg-sakura-gray text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading text-foreground">Let&apos;s Work Together</h2>
                <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed">
                    Have a project in mind? I&apos;m currently available for freelance work and open to new opportunities. Inquire for more details.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:bg-coral hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                    Get in Touch <MoveRight />
                </Link>
            </div>
        </section>
    );
}
