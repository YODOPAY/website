"use client";

import Image from "next/image";
import { useState } from "react";
import { useApi } from "@/hooks/useApi";

export default function WaitlistPage() {
    const [email, setEmail] = useState("");
    const [joined, setJoined] = useState(false);
    const { post, loading, error: apiError } = useApi();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            try {
                await post("/waitlist/join", { email });
                setJoined(true);
            } catch (err) {
                console.error("Failed to join waitlist:", err);
            }
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#FEFAD7] selection:bg-yodo-yellow/30">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-8 md:px-12 max-w-7xl mx-auto w-full relative z-50">
                <div className="flex items-center">
                    <div className="relative h-10 w-28 md:h-12 md:w-32 transition-transform hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="YodoPay Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                    <a href="#" className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/50 border border-white/20 shadow-sm backdrop-blur-md transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2E2D01]">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                    </a>
                    <a href="#" className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/50 border border-white/20 shadow-sm backdrop-blur-md transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#2E2D01]">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                    </a>
                    <a href="#" className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/50 border border-white/20 shadow-sm backdrop-blur-md transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2E2D01]">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                </div>
            </nav>

            {/* Hero Content */}
            <main className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-8 pb-16 md:pt-12 md:pb-24 relative z-10">
                <div className="relative text-center mb-6">
                    <div className="flex flex-col items-center justify-center space-y-0">
                        <h1 className="flex flex-col items-center md:flex-row md:items-baseline md:justify-center">
                            <span className="inline-block font-hand text-[85px] leading-[0.7] font-bold text-[#2E2D01] md:text-[130px] lg:text-[150px] md:mr-6">
                                Money
                            </span>
                            <span className="inline-block font-jakarta text-[50px] font-bold tracking-tight text-[#7E7D5C] md:text-[85px] lg:text-[100px] leading-[0.8]">
                                Is Better
                            </span>
                        </h1>
                        <h1 className="flex flex-col items-center md:flex-row md:items-baseline md:justify-center">
                            <span className="inline-block font-jakarta text-[50px] font-bold tracking-tight text-[#7E7D5C] md:text-[85px] lg:text-[100px] md:mr-6 leading-[0.8]">
                                With
                            </span>
                            <span className="inline-block font-hand text-[85px] leading-[0.7] font-bold text-[#2E2D01] md:text-[130px] lg:text-[150px]">
                                Friends.
                            </span>
                        </h1>
                    </div>
                </div>

                <p className="max-w-xl text-center font-jakarta text-[15px] leading-[1.5] text-[#7E7D5C] md:text-[17px] mb-12">
                    The first social-first wallet is almost here. Secure your unique <span className="font-bold text-[#2E2D01]">@Tag</span> and custom <span className="font-bold text-[#2E2D01]">Color Aura</span> before the crowd arrives— <span className="md:block">banking will never look the same again.</span>
                </p>

                {/* Waitlist Form */}
                <div className="w-full max-w-[600px] mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 sm:flex-row w-full">
                        <div className="relative flex-1 w-full">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="h-14 w-full bg-white rounded-full px-8 font-jakarta text-[#2E2D01] outline-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-none placeholder:text-[#2E2D01]/30 transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        {joined ? (
                            <div className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#DDF5E6] px-8 font-jakarta font-bold text-[#1D9953] sm:w-auto sm:min-w-[180px] shadow-sm animate-in fade-in zoom-in duration-500 border border-[#1D9953]/10">
                                Waitlist Joined
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                        ) : (
                            <button
                                type="submit"
                                disabled={loading}
                                className="h-14 w-full sm:w-auto rounded-[1.75rem] bg-[#292800] px-10 font-jakarta font-bold text-[#E6E4AD] transition-all hover:bg-[#3E3D01] active:scale-95 disabled:opacity-50 cursor-pointer shadow-sm"
                            >
                                {loading ? "Joining..." : "Join Waitlist"}
                            </button>
                        )}
                    </form>
                    {apiError && (
                        <p className="mt-4 text-center text-sm text-red-500 font-jakarta">
                            {apiError}
                        </p>
                    )}
                </div>


                {/* Visual Cards Collage */}
                <div className="relative mt-20 w-full max-w-5xl h-[450px] md:h-[600px]">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Left Card */}
                        <div className="absolute left-[0%] top-[10%] md:left-[5%] transform -rotate-[10deg] transition-all duration-700 hover:-rotate-[5deg] hover:-translate-y-4 z-10">
                            <div className="relative w-[210px] h-[280px] md:w-[320px] md:h-[420px] bg-white p-3 rounded-[32px] shadow-[0_24px_50px_rgba(46,45,1,0.08)]">
                                <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                                    <Image src="/image1.png" alt="Friends" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Middle Card */}
                        <div className="relative z-20 transform rotate-[2deg] transition-all duration-700 hover:rotate-0 hover:scale-[1.02] mt-10">
                            <div className="relative w-[230px] h-[310px] md:w-[360px] md:h-[480px] bg-white p-3 rounded-[32px] shadow-[0_30px_60px_rgba(46,45,1,0.12)]">
                                <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                                    <Image src="/image2.png" alt="Picnic" fill className="object-cover" />
                                </div>
                                {/* Top Emoji Bubble Sticker */}
                                <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-white rounded-full px-5 py-3 md:px-7 md:py-4 shadow-xl border border-gray-100 flex items-center gap-2 text-xl md:text-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                                    <span>🛍️</span>
                                    <span>💸</span>
                                    <span className="text-red-500">📍</span>
                                </div>
                                {/* Profile Sticker */}
                                <div className="absolute -left-6 top-[20%] md:-left-12 w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg overflow-hidden transition-transform duration-500 hover:scale-110">
                                    <Image src="/ama.png" alt="User Sticker" fill className="object-cover" />
                                </div>

                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="absolute right-[0%] top-[8%] md:right-[5%] transform rotate-[12deg] transition-all duration-700 hover:rotate-[6deg] hover:-translate-y-4 z-10">
                            <div className="relative w-[210px] h-[280px] md:w-[320px] md:h-[420px] bg-white p-3 rounded-[32px] shadow-[0_24px_50px_rgba(46,45,1,0.08)]">
                                <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                                    <Image src="/image3.png" alt="Camera" fill className="object-cover" />
                                </div>
                                {/* Yeah Sticker */}
                                <div className="absolute -bottom-10 -right-6 md:-bottom-16 md:-right-10 w-24 h-24 md:w-40 md:h-40 transform -rotate-12 transition-transform duration-500 hover:scale-110 drop-shadow-2xl">
                                    <Image src="/yeah.png" alt="Yeah Sticker" fill className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-yodo-yellow/5 to-transparent pointer-events-none"></div>
        </div>

    );
}
