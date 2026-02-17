"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoveRight, Menu, X } from "lucide-react";
import gsap from "gsap";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            gsap.to(".mobile-menu", {
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        } else {
            gsap.to(".mobile-menu", {
                x: "100%",
                duration: 0.5,
                ease: "power3.in",
            });
        }
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full z-[50] flex justify-between items-center px-6 py-4 md:px-12 mix-blend-difference text-toki-nezu">
            <Link href="/" className="text-2xl font-bold font-heading">
                Portfolio.
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`relative group overflow-hidden text-sm font-medium transition-colors hover:text-coral ${pathname === link.href ? "text-coral" : ""
                            }`}
                    >
                        <span className="block translate-y-0 transition-transform duration-300 group-hover:-translate-y-full">
                            {link.name}
                        </span>
                        <span className="absolute top-full left-0 block translate-y-0 transition-transform duration-300 group-hover:-translate-y-full text-coral">
                            {link.name}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-[60]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className="mobile-menu fixed top-0 right-0 w-full h-screen bg-sakura-pink flex flex-col items-center justify-center gap-8 translate-x-full text-foreground">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-4xl font-heading font-bold hover:text-coral transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
