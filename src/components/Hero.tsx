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
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-24 md:pt-20 overflow-x-hidden max-w-[1920px] mx-auto min-w-[320px] bg-[#F5EFED]">

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
                    <div className="absolute right-[-5%] top-[25%] w-[322px]">
                        <Image
                            src="/yodo_tag2.png"
                            alt="Yodo Tag"
                            width={400}
                            height={400}
                            className="w-full h-auto object-contain animate-float-slow"
                        />
                    </div>

                    {/* Right Side: Coffee */}
                    <div className="absolute right-[5%] bottom-[-60%] w-[342px]">
                        <Image
                            src="/coffee.png"
                            alt="Coffee Transaction"
                            width={300}
                            height={300}
                            className="w-full h-auto object-contain animate-float-delayed"
                        />
                    </div>

                    {/* Left Side: Tag 1 + Chat Bubble */}
                    <div className="absolute left-[-3%] top-[70%] w-[350px]">
                        <Image
                            src="/yodo_tag1.png"
                            alt="Yodo Tag"
                            width={350}
                            height={350}
                            className="w-full h-auto object-contain animate-float"
                        />
                    </div>

                    {/* Bottom Left: Swapped */}
                    <div className="absolute left-[25%] bottom-[-80%] w-[324px]">
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
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.087 19.39L15.939 12.56L13.753 14.717L21.498 22.361C21.782 22.067 21.848 21.6 21.644 21.23L21.087 19.39Z" fill="#CEC600" />
                                <path d="M3.38806 2.05499C3.16706 2.27499 3.03706 2.61099 3.03706 3.01799V20.982C3.03706 21.39 3.16706 21.725 3.38806 21.945L12.981 12.449L3.38806 2.05499Z" fill="#CEC600" />
                                <path d="M14.561 10.875L21.077 4.45302C21.325 4.09602 21.298 3.59302 20.973 3.28002L13.754 9.28302L14.561 10.875Z" fill="#CEC600" />
                                <path d="M14.555 10.88L3.388 2.05499L12.981 12.449L14.555 10.88Z" fill="#CEC600" />
                            </svg>
                            <div className="flex flex-col items-start pr-2">
                                <span className="text-[10px] uppercase font-bold text-[#CEC600] leading-tight tracking-wider">Get it on</span>
                                <span className="text-xl font-bold text-[#CEC600] leading-none">Google Play</span>
                            </div>
                        </button>

                        <button className="flex items-center gap-3 bg-black rounded-[48px] px-6 py-3 transition-transform hover:scale-105 active:scale-95 border border-transparent hover:border-[#CEC600]/30 shadow-lg">
                            <svg className="w-8 h-8 text-[#CEC600]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.892 14.128C17.904 12.016 19.648 10.895 19.722 10.854C18.675 9.35101 17.062 9.12401 16.347 9.09601C14.992 8.95601 13.676 9.89701 12.992 9.89701C12.302 9.89701 11.233 9.12201 10.108 9.15101C8.66503 9.17101 7.33703 9.98901 6.60203 11.261C5.09303 13.882 6.22503 17.766 7.69703 19.888C8.42303 20.929 9.26803 22.046 10.42 22.005C11.517 21.961 11.942 21.296 13.298 21.296C14.646 21.296 15.029 22.005 16.175 21.961C17.382 21.918 18.157 20.871 18.872 19.833C19.697 18.647 20.045 17.493 20.06 17.436C20.016 17.417 17.872 16.606 17.892 14.128ZM15.424 7.22801C16.035 6.49501 16.444 5.47401 16.331 4.46901C15.442 4.56001 14.364 5.06001 13.731 5.80301C13.167 6.45201 12.671 7.49201 12.805 8.48301C13.791 8.55901 14.805 7.97301 15.424 7.22801Z" />
                            </svg>
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
