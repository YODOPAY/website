"use client";

import Image from 'next/image';
import { useState } from 'react';
import WalletLogo from './WalletLogo';
import ReserveTagButton from './ReserveTagButton';

const LOGO_OPTIONS = [
    { hex: '#E0F2FE', glow: '#7DD3FC', hueRotate: '255deg' }, // Sky Blue
    { hex: '#FEF9C3', glow: '#FDE047', hueRotate: '105deg' }, // Yellow
    { hex: '#FFB7FA', glow: '#FF70F6', hueRotate: '0deg' },   // Purple (Default)
    { hex: '#D1FAE5', glow: '#6EE7B7', hueRotate: '210deg' }, // Emerald
    { hex: '#FFEDD5', glow: '#FDBA74', hueRotate: '85deg' },  // Orange
];

const Hero = () => {
    const [selectedOption, setSelectedOption] = useState(LOGO_OPTIONS[2]);

    return (
        // From laptop width up the section takes the photo's own proportions, so the whole image shows uncropped
        <section className="relative w-full min-h-svh lg:min-h-0 lg:aspect-[2968/2158] flex flex-col items-center justify-start pt-[166px] md:pt-[160px] lg:pt-[max(120px,11.1vw)] pb-20 overflow-hidden bg-black font-jakarta">

            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/images/hero_friends.webp"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[660px] mx-auto px-6 flex flex-col items-center text-center text-white">

                {/* Logo Section Wrapper */}
                <div className="relative flex flex-col items-start w-full max-w-[610px]">
                    <div className="flex items-center gap-2.5 min-[370px]:gap-4 md:gap-6 pl-[21%] -mb-[21px] md:-mb-[22px] z-20">
                        <span className="text-2xl md:text-[30px] font-bold tracking-tight animate-rise">
                            The
                        </span>

                        <div className="flex items-center gap-2.5 min-[370px]:gap-4 md:gap-6">
                            {LOGO_OPTIONS.map((option, index) => {
                                const selected = selectedOption.hex === option.hex;
                                return (
                                    <button
                                        key={option.hex}
                                        onClick={() => setSelectedOption(option)}
                                        className={`w-6 h-6 md:w-9 md:h-9 rounded-full cursor-pointer animate-pop transition-[scale] duration-300 ${selected ? 'ring-[3px] ring-[#990A90] scale-110' : 'hover:scale-125'}`}
                                        style={{
                                            backgroundColor: option.hex,
                                            boxShadow: `0 0 14px ${option.glow}`,
                                            animationDelay: `${300 + index * 90}ms`,
                                        }}
                                        aria-label={`Select color ${option.hex}`}
                                        aria-pressed={selected}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div className="w-full px-[3px] md:px-0" style={{ rotate: '-1.69deg' }}>
                        {/* Re-keyed on colour so the logo does its jelly bounce again */}
                        <div key={selectedOption.hex} className="animate-jelly">
                            <WalletLogo hueRotate={selectedOption.hueRotate} className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                <h1 style={{ animationDelay: '450ms' }} className="animate-rise -mt-[26px] md:-mt-[34px] text-base min-[370px]:text-[19.5px] md:text-[29px] font-extrabold tracking-tighter leading-[1.2]">
                    for everything you do with money 💸.
                </h1>

                <p style={{ animationDelay: '600ms' }} className="animate-rise mt-4 md:mt-5 max-w-[580px] text-[15.5px] md:text-[19px] leading-normal md:leading-[1.6]">
                    Connect with people, discover businesses, and move money
                    globally effortlessly — all from one wallet built around you.
                </p>

                <div style={{ animationDelay: '750ms' }} className="animate-rise mt-3 md:mt-8 w-full max-w-[607px]">
                    <ReserveTagButton className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
