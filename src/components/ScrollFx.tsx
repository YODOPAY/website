"use client";

import { useEffect } from 'react';

/**
 * Drifts every [data-parallax="<speed>"] element as the page scrolls, so layers
 * move at slightly different rates. Speed is a fraction of the scroll distance
 * (0.1 = gentle, negative = opposite direction).
 */
const ScrollFx = () => {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
        if (!layers.length) return;

        let frame = 0;
        const update = () => {
            frame = 0;
            const viewport = window.innerHeight;
            for (const layer of layers) {
                const parent = layer.parentElement;
                if (!parent) continue;
                // Measure the parent: it doesn't move, so the maths stays stable
                const rect = parent.getBoundingClientRect();
                if (rect.bottom < -200 || rect.top > viewport + 200) continue;
                const distance = rect.top + rect.height / 2 - viewport / 2;
                const speed = Number(layer.dataset.parallax) || 0;
                layer.style.translate = `0 ${(-distance * speed).toFixed(1)}px`;
            }
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return null;
};

export default ScrollFx;
