"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";

export default function LayoutWrapper({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    // Prevent scroll when loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isLoading]);

    return (
        <SmoothScroll>
            {isLoading && <Loader setIsLoading={setIsLoading} />}
            <Navbar />
            <main className="min-h-screen pt-20">
                {children}
            </main>
            <Footer />
        </SmoothScroll>
    );
}
