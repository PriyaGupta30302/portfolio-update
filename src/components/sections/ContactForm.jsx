"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Send } from "lucide-react";

export default function ContactForm() {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            formRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent! (Simulation)");
        }, 2000);
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/60 shadow-lg">
            <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-coral">Name</label>
                <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full bg-white border border-sakura-gray rounded-xl px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-all font-medium text-foreground"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-coral">Email</label>
                <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full bg-white border border-sakura-gray rounded-xl px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-all font-medium text-foreground"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-coral">Message</label>
                <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white border border-sakura-gray rounded-xl px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-all font-medium text-foreground resize-none"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background font-bold py-4 rounded-xl hover:bg-coral hover:text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} />}
            </button>
        </form>
    );
}
