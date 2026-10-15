"use client";

import { createElement, useEffect, useRef } from 'react';

type Variant = 'rise' | 'pop' | 'deal' | 'stamp' | 'write' | 'neon' | 'tilt' | 'drop' | 'fan';

interface RevealProps {
    /** Which entrance animation to play (defined in globals.css under "Reveal animations"). */
    variant?: Variant;
    /** Delay in ms, for staggering siblings. */
    delay?: number;
    as?: 'div' | 'span' | 'p' | 'li';
    className?: string;
    /** Extra inline styles, e.g. CSS variables a variant reads. */
    style?: React.CSSProperties;
    children: React.ReactNode;
}

// One observer shared by every Reveal on the page
let observer: IntersectionObserver | null = null;

const getObserver = () => {
    if (!observer) {
        observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).dataset.inview = 'true';
                        observer?.unobserve(entry.target);
                    }
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
        );
    }
    return observer;
};

/** Plays an entrance animation the first time its content scrolls into view. */
const Reveal = ({ variant = 'rise', delay = 0, as = 'div', className, style, children }: RevealProps) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        const io = getObserver();
        io.observe(element);
        return () => io.unobserve(element);
    }, []);

    return createElement(
        as,
        {
            ref,
            className,
            'data-reveal': variant,
            style: delay ? ({ ...style, '--reveal-delay': `${delay}ms` } as React.CSSProperties) : style,
        },
        // "write" clips an inner wrapper: clipping the observed element itself would stop
        // the IntersectionObserver from ever seeing it
        variant === 'write' ? createElement('span', { className: 'reveal-write-inner' }, children) : children
    );
};

export default Reveal;
