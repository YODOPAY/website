"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const AURAS = [
    { name: ['Chill', 'Blue'], swatch: '#E0F2FE', edge: '#7DD3FC', accent: '#7DD3FC', ring: '#7DD3FC', panel: '#E0F2FE' },
    { name: ['Lemon', 'Pop'], swatch: '#FEF9C3', edge: '#FDE047', accent: '#FDE047', ring: '#FDE047', panel: '#FEF9C3' },
    { name: ['Cosmic', 'Purple'], swatch: '#F3E8FF', edge: '#D8B4FE', accent: '#990A90', ring: '#A855F7', panel: '#FFE7FD' },
    { name: ['Grounded', 'Green'], swatch: '#D1FAE5', edge: '#6EE7B7', accent: '#6EE7B7', ring: '#6EE7B7', panel: '#D1FAE5' },
    { name: ['Bold', 'Coral'], swatch: '#FFEDD5', edge: '#FDBA74', accent: '#FDBA74', ring: '#FDBA74', panel: '#FFEDD5' },
];

/**
 * "Choose your color aura" card. Every size is in cqw (1% of the card's own
 * width), so the card keeps its proportions at any width its parent gives it.
 */
const AuraCard = ({ className = '' }: { className?: string }) => {
    const [selected, setSelected] = useState(2);
    const [autoPlay, setAutoPlay] = useState(true);
    const cardRef = useRef<HTMLDivElement>(null);
    const aura = AURAS[selected];

    // Cycle through the auras while the card is on screen, until the visitor picks one
    useEffect(() => {
        const card = cardRef.current;
        if (!autoPlay || !card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let timer: ReturnType<typeof setInterval> | undefined;
        const observer = new IntersectionObserver(([entry]) => {
            clearInterval(timer);
            if (entry.isIntersecting) {
                timer = setInterval(() => setSelected((current) => (current + 1) % AURAS.length), 2400);
            }
        }, { threshold: 0.5 });
        observer.observe(card);
        return () => {
            clearInterval(timer);
            observer.disconnect();
        };
    }, [autoPlay]);

    return (
        <div ref={cardRef} className={`@container w-full ${className}`}>
            <div className="w-full rounded-[13.5cqw] bg-[#292800] p-[3.05cqw] pb-[8cqw] font-jakarta text-white">

                {/* Phone preview */}
                <div
                    className="relative h-[95cqw] rounded-[10.7cqw] overflow-hidden transition-colors duration-300"
                    style={{ backgroundColor: aura.panel }}
                >
                    <div
                        className="absolute left-[7.7cqw] top-[20.5cqw] w-[78.5cqw] h-[90cqw] rounded-t-[9.6cqw] border-[1cqw] border-b-0 bg-[#F5EFED] transition-colors duration-300"
                        style={{ borderColor: aura.accent }}
                    >
                        {/* Dynamic island */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[2cqw] w-[24.4cqw] h-[7.2cqw] rounded-full bg-[#111111]" />

                        {/* Back chevron */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-[4cqw] top-[13.6cqw] w-[4cqw] h-[4cqw]" aria-hidden>
                            <polyline points="15 18 9 12 15 6" />
                        </svg>

                        {/* Avatar with aura ring */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[17cqw] w-[39cqw] h-[39cqw]">
                            <div
                                className="absolute -inset-[8%] rounded-full blur-[4cqw] animate-breathe transition-colors duration-500"
                                style={{ backgroundColor: aura.accent }}
                            />
                            <div
                                className="relative w-full h-full rounded-full p-[2.4cqw] transition-colors duration-500"
                                style={{ backgroundColor: aura.accent }}
                            >
                                <Image
                                    src="/images/aura-avatar.webp"
                                    alt="Profile photo with a color aura"
                                    width={360}
                                    height={360}
                                    sizes="180px"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Upload pill */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[60.5cqw] h-[7.7cqw] px-[2.6cqw] flex items-center gap-[1.4cqw] rounded-full bg-white text-[2.9cqw] font-medium text-[#525252] whitespace-nowrap shadow-[0_0.4cqw_2cqw_rgba(0,0,0,0.06)]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[3.6cqw] h-[3.6cqw]" aria-hidden>
                                <path d="M20 12v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h5" />
                                <path d="M4 16l4-4 3 3 3-3" />
                                <path d="M18 3v7m0 0l-3-3m3 3l3-3" />
                            </svg>
                            Upload pfp
                        </div>
                    </div>
                </div>

                {/* Aura picker */}
                <p className="mt-[4.6cqw] px-[3cqw] text-[3.7cqw] leading-tight">
                    Choose your color aura
                </p>

                <div className="mt-[3cqw] px-[1.3cqw] flex" role="radiogroup" aria-label="Color aura">
                    {AURAS.map((option, index) => {
                        const isSelected = index === selected;
                        return (
                            <button
                                key={option.swatch}
                                role="radio"
                                aria-checked={isSelected}
                                onClick={() => {
                                    setAutoPlay(false);
                                    setSelected(index);
                                }}
                                className="w-[16.6cqw] flex flex-col items-center cursor-pointer"
                            >
                                <span className="h-[11cqw] flex items-center justify-center">
                                    <span
                                        className={`block w-[9cqw] h-[9cqw] rounded-full border-[0.5cqw] transition-transform duration-300 ${isSelected ? 'scale-110' : 'hover:scale-105'}`}
                                        style={{
                                            backgroundColor: option.swatch,
                                            borderColor: option.edge,
                                            boxShadow: isSelected ? `0 0 0 1cqw ${option.ring}` : 'none',
                                        }}
                                    />
                                </span>
                                <span className={`mt-[1.2cqw] text-[2.3cqw] leading-[1.2] ${isSelected ? 'font-semibold text-[#CEC600]' : 'text-[#A8A68F]'}`}>
                                    {option.name[0]}
                                    <br />
                                    {option.name[1]}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Handle */}
                <div className="mt-[5cqw] px-[3cqw] flex items-center justify-between">
                    <span className="font-hand text-[4.2cqw] leading-none tracking-wide">@Gideon.yodo</span>
                    <Image
                        src="/images/aura-qr.png"
                        alt=""
                        width={124}
                        height={124}
                        className="w-[6.8cqw] h-[6.8cqw] rounded-[1.2cqw]"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuraCard;
