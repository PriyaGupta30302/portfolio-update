"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/utils/animations";

export default function PageTransition({ children }) {
    useEffect(() => {
        animatePageIn();
    }, []);

    return (
        <div className="relative">
            <div
                id="banner-1"
                className="min-h-screen z-[9999] bg-sakura-gray fixed top-0 left-0 w-1/4"
            />
            <div
                id="banner-2"
                className="min-h-screen z-[9999] bg-sakura-gray fixed top-0 left-1/4 w-1/4"
            />
            <div
                id="banner-3"
                className="min-h-screen z-[9999] bg-sakura-gray fixed top-0 left-2/4 w-1/4"
            />
            <div
                id="banner-4"
                className="min-h-screen z-[9999] bg-sakura-gray fixed top-0 left-3/4 w-1/4"
            />
            {children}
        </div>
    );
}
