"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Caveat } from 'next/font/google';
import WalletLogo from './WalletLogo';

const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });

const LOGO_OPTIONS = [
    { hex: '#7DD3FC', hueRotate: '255deg' }, // Sky Blue
    { hex: '#FDE047', hueRotate: '105deg' }, // Yellow
    { hex: '#990A90', hueRotate: '0deg' },   // Purple (Default)
    { hex: '#6EE7B7', hueRotate: '210deg' }, // Emerald
    { hex: '#FDBA74', hueRotate: '85deg' },  // Orange
];

const Hero = () => {
    const [selectedOption, setSelectedOption] = useState(LOGO_OPTIONS[2]);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-24 md:pt-16 overflow-hidden mx-auto bg-[#F5EFED]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/background.png"
                    alt="Map Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                {/* Decorative Images (Desktop Only) */}
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                    {/* Right Side: Tag 2 + Chat Bubbles */}
                    <div className="absolute right-[-5%] top-[20%] w-[322px]">
                        <Image
                            src="/yodo_tag2.png"
                            alt="Yodo Tag"
                            width={400}
                            height={400}
                            className="w-full h-auto object-contain animate-float-slow"
                        />
                    </div>

                    {/* Right Side: Coffee */}
                    <div className="absolute right-[15%] bottom-[-55%] w-[342px]">
                        <Image
                            src="/coffee.png"
                            alt="Coffee Transaction"
                            width={300}
                            height={300}
                            className="w-full h-auto object-contain animate-float-delayed"
                        />
                    </div>

                    {/* Left Side: Tag 1 + Chat Bubble */}
                    <div className="absolute left-[-3%] top-[50%] w-[350px]">
                        <Image
                            src="/yodo_tag1.png"
                            alt="Yodo Tag"
                            width={350}
                            height={350}
                            className="w-full h-auto object-contain animate-float"
                        />
                    </div>

                    {/* Bottom Left: Swapped */}
                    <div className="absolute left-[25%] bottom-[-51%] w-[324px]">
                        <Image
                            src="/swapped.png"
                            alt="Currency Swap"
                            width={350}
                            height={350}
                            className="w-full h-auto object-contain animate-float-delayed"
                        />
                    </div>
                </div>

                <div className="w-fit mx-auto flex flex-col items-start md:translate-x-20">

                    {/* Logo Section Wrapper */}
                    <div className="relative flex flex-col items-start">

                        <div className="flex items-center gap-4 mb-[-10px] z-20 w-full justify-start">
                            <span className="text-4xl md:text-5xl font-black text-[#2e0e2e] tracking-tight">
                                Your
                            </span>

                            <div className="flex items-center gap-4">
                                {LOGO_OPTIONS.map((option) => (
                                    <button
                                        key={option.hex}
                                        onClick={() => setSelectedOption(option)}
                                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full transition-all duration-300 border-2 border-white shadow-sm ${selectedOption.hex === option.hex ? 'scale-125 ring-2 ring-offset-2 ring-gray-300' : 'hover:scale-110'
                                            }`}
                                        style={{
                                            backgroundColor: option.hex,
                                            boxShadow: selectedOption.hex === option.hex ? `0 0 20px ${option.hex}` : 'none'
                                        }}
                                        aria-label={`Select color ${option.hex}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 transform transition-transform hover:scale-105 duration-500 origin-left" style={{ transform: 'rotate(-1.69deg)' }}>
                            <WalletLogo hueRotate={selectedOption.hueRotate} />
                        </div>

                        <div className="flex flex-col items-start -mt-4">
                            <div className="flex items-baseline gap-3 flex-wrap justify-start">
                                <h1 className="text-5xl md:text-5xl font-black text-[#2e0e2e] tracking-tight">
                                    Always In
                                </h1>
                                <span className="text-6xl md:text-5xl font-bold text-[#2e0e2e] -mt-2 font-hand">
                                    motion
                                </span>
                                <span className="text-4xl md:text-6xl animate-pulse">💨</span>
                            </div>
                        </div>

                    </div>

                    {/* Subheader */}
                    <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-6 text-left mt-2 leading-relaxed font-semibold">
                        Find local vendors, pay friends via @Tag, and handle your
                        cash across borders. It's not just a map—it's your wallet.
                    </p>

                    {/* App Store Buttons */}
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <button className="flex items-center gap-3 bg-black rounded-[48px] px-6 py-3 transition-transform hover:scale-105 active:scale-95 border border-transparent hover:border-[#CEC600]/30 shadow-lg">
                            <Image
                                src="/icons/playstore.svg"
                                alt="Google Play"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                            <div className="flex flex-col items-start pr-2">
                                <span className="text-[10px] uppercase font-bold text-[#CEC600] leading-tight tracking-wider">Get it on</span>
                                <span className="text-xl font-bold text-[#CEC600] leading-none">Google Play</span>
                            </div>
                        </button>

                        <button className="flex items-center gap-3 bg-black rounded-[48px] px-6 py-3 transition-transform hover:scale-105 active:scale-95 border border-transparent hover:border-[#CEC600]/30 shadow-lg">
                            <Image
                                src="/icons/appstore.svg"
                                alt="App Store"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                            <div className="flex flex-col items-start pr-1">
                                <span className="text-[10px] uppercase font-bold text-[#CEC600] leading-tight tracking-wider">Download on the</span>
                                <span className="text-xl font-bold text-[#CEC600] leading-none">App Store</span>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
