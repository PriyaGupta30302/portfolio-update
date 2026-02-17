"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ setIsLoading }) {
    const loaderRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setIsLoading(false),
        });

        tl.to(textRef.current, {
            opacity: 1,
            duration: 1,
            y: 0,
            ease: "power3.out",
        })
            .to(textRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 0.5,
                y: -20,
            })
            .to(loaderRef.current, {
                yPercent: -100,
                duration: 1,
                ease: "power4.inOut",
            });

    }, [setIsLoading]);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-sakura-pink text-foreground"
        >
            <div className="overflow-hidden">
                <h1
                    ref={textRef}
                    className="text-4xl md:text-6xl font-heading font-bold opacity-0 translate-y-10"
                >
                    Welcome
                </h1>
            </div>
        </div>
    );
}
