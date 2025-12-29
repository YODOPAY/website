import React from 'react';
import Image from 'next/image';

const ThirdSection = () => {
    return (
        <section className="w-full min-h-screen bg-[var(--yodo-cream)] px-4 md:px-6 py-20 flex justify-center">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

                {/* Item 1: Pay By Yodo Tag */}
                <div className="flex flex-col items-center text-center gap-6">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-3xl font-bold text-[var(--yodo-dark)] flex items-center justify-center gap-2">
                            Pay By Yodo Tag <span>🎨</span>
                        </h3>
                        <p className="text-[var(--yodo-dark)] opacity-80 max-w-sm mx-auto">
                            Send money using Yodo tags instead of long account numbers. Find friends instantly and pay in seconds.
                        </p>
                    </div>
                    <div className="relative w-full aspect-[3/4] md:aspect-[4/5] max-w-md bg-[#F2F2F2] rounded-[3rem] overflow-hidden flex items-center justify-center p-0">
                        <Image
                            src="/images/tag1.png"
                            alt="Pay By Yodo Tag"
                            width={500}
                            height={600}
                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Item 2: One Wallet. Many Currencies. */}
                <div className="flex flex-col items-center text-center gap-6 md:mt-24">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-3xl font-bold text-[var(--yodo-dark)] flex items-center justify-center gap-2">
                            One Wallet.<br />Many Currencies. <span className="inline-block">🌍</span>
                        </h3>
                        <p className="text-[var(--yodo-dark)] opacity-80 max-w-sm mx-auto">
                            Hold NGN, USD, and more in one place. Switch wallets instantly and see each balance clearly, whenever you need it.
                        </p>
                    </div>
                    <div className="relative w-full aspect-[3/4] md:aspect-[4/5] max-w-md bg-[#F2F2F2] rounded-[3rem] overflow-hidden flex items-center justify-center p-0">
                        {/* This image seems to have its own background in the design (grass etc), so we might want object-cover or contain depending on the asset */}
                        <Image
                            src="/images/tag2.png"
                            alt="Many Currencies"
                            width={500}
                            height={600}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Item 3: Find Spots. Pay Fast. */}
                <div className="flex flex-col items-center text-center gap-6">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-3xl font-bold text-[var(--yodo-dark)] flex items-center justify-center gap-2">
                            <span className="text-red-500">📍</span> Find Spots. Pay Fast.
                        </h3>
                        <p className="text-[var(--yodo-dark)] opacity-80 max-w-sm mx-auto">
                            Discover restaurants, stores, events, and creators around you. Browse, tap, and pay — without leaving Yodo.
                        </p>
                    </div>
                    <div className="relative w-full aspect-[3/4] md:aspect-[4/5] max-w-md bg-[#E8F5E9] rounded-[3rem] overflow-hidden flex items-center justify-center">
                        <Image
                            src="/images/tag3.png"
                            alt="Find Spots"
                            width={500}
                            height={600}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Item 4: Instant Transfers That Just Work */}
                <div className="flex flex-col items-center text-center gap-6 md:mt-24">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-3xl font-bold text-[var(--yodo-dark)] flex items-center justify-center gap-2">
                            Instant Transfers That<br />Just Work <span className="text-yellow-400">⚡</span>
                        </h3>
                        <p className="text-[var(--yodo-dark)] opacity-80 max-w-sm mx-auto">
                            Send and receive money in seconds. No delays, no "pending" anxiety. What you see is what moves.
                        </p>
                    </div>
                    {/* Placeholder Gray Box as per design screenshot */}
                    <div className="relative w-full aspect-[3/4] md:aspect-[4/5] max-w-md bg-[#EBEBEB] rounded-[3rem] shadow-inner hover:shadow-lg transition-shadow duration-300">
                        {/* Empty state as shown in design */}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ThirdSection;
