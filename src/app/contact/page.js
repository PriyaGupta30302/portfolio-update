"use client";

import ContactForm from "@/components/sections/ContactForm";
import PageTransition from "@/components/layout/PageTransition";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <PageTransition>
            <div className="min-h-screen bg-pale-sakura flex items-center justify-center px-6 md:px-12 py-32 relative overflow-hidden">

                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-sakura-pink to-transparent opacity-50 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-sakura-gray to-transparent opacity-50 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-10">
                        <div>
                            <span className="block text-coral font-medium tracking-widest mb-4 uppercase">Get In Touch</span>
                            <h1 className="text-4xl md:text-7xl font-bold font-heading text-foreground mb-6">
                                Let&apos;s Create Something Amazing
                            </h1>
                            <p className="text-lg text-foreground/80 leading-relaxed font-light">
                                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-foreground/80 hover:text-coral transition-colors">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-coral">
                                    <Mail size={20} />
                                </div>
                                <span className="font-medium text-lg">hello@example.com</span>
                            </div>

                            <div className="flex items-center gap-4 text-foreground/80 hover:text-coral transition-colors">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-coral">
                                    <Phone size={20} />
                                </div>
                                <span className="font-medium text-lg">+1 (555) 123-4567</span>
                            </div>

                            <div className="flex items-center gap-4 text-foreground/80 hover:text-coral transition-colors">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-coral">
                                    <MapPin size={20} />
                                </div>
                                <span className="font-medium text-lg">New York, NY</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
