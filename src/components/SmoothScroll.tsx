"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
    useEffect(() => {
        // Respect the visitor's "reduce motion" setting: keep native scrolling.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            // Glide to in-page links (#features, #spotlight, #faqs) instead of jumping
            anchors: true,
            autoRaf: true,
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
