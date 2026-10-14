import React from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

const cardClass = "relative w-full aspect-[452/594] rounded-[44px] overflow-hidden transition-[translate,rotate,box-shadow] duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_30px_60px_-30px_rgba(41,40,0,0.35)]";

const Feature = ({ title, description, order, children }: { title: React.ReactNode; description: string; order: string; children: React.ReactNode }) => (
    <div className={`w-full flex flex-col items-center text-center ${order} md:order-none`}>
        <Reveal>
            <h3 className="font-display text-[23px] md:text-[29px] font-semibold leading-[1.2] text-[#292800]">
                {title}
            </h3>
            <p className="mt-2.5 mb-7 text-[15px] md:text-[19px] font-semibold leading-[1.6] text-[#525252]">
                {description}
            </p>
        </Reveal>
        <Reveal variant="tilt" delay={120} className="w-full max-w-[495px]">
            {children}
        </Reveal>
    </div>
);

const ThirdSection = () => {
    return (
        <section id="features" className="w-full bg-[#F5EFED] px-4 md:px-6 pt-24 pb-20 md:pt-[140px] md:pb-[74px] font-jakarta">
            <div className="mx-auto w-full max-w-[1260px] flex flex-col items-center md:items-start md:flex-row md:justify-between gap-[150px] md:gap-20">

                {/* Left Column (columns dissolve on mobile so the features follow reading order) */}
                <div className="contents md:flex flex-col md:gap-[190px] w-full max-w-[495px]">
                    <Feature
                        order="order-1"
                        title={<>Pay By Yodo Tag 🎨</>}
                        description="Send money using Yodo tags instead of long account numbers. Find friends instantly and pay in seconds."
                    >
                        <div className={`${cardClass} bg-[#E9E9E9]`}>
                            <Image
                                src="/images/ama.webp"
                                alt="Pay By Yodo Tag"
                                fill
                                sizes="(min-width: 768px) 495px, 100vw"
                                className="object-contain"
                            />
                        </div>
                    </Feature>

                    <Feature
                        order="order-3"
                        title={<>📍 Find Spots. Pay Fast.</>}
                        description="Discover restaurants, stores, events, and creators around you. Browse, tap, and pay — without leaving Yodo."
                    >
                        <div className={cardClass}>
                            <Image
                                src="/images/find_spot.webp"
                                alt="Find Spots"
                                fill
                                sizes="(min-width: 768px) 495px, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </Feature>
                </div>

                {/* Right Column */}
                <div className="contents md:flex flex-col md:gap-[225px] w-full max-w-[487px] md:pt-[140px]">
                    <Feature
                        order="order-2"
                        title={<>Bring People Together<br />Around A Goal</>}
                        description="Create a Circle, contribute together, and reach shared goals with the people who matter."
                    >
                        <div className={`${cardClass} bg-linear-to-b from-[#DCE9F7] via-[#A9CDEF] via-55% to-[#8CCB5E] flex items-end justify-center pb-[8%]`}>
                            <Image
                                src="/images/bring_together.webp"
                                alt="Friends in a Circle"
                                width={376}
                                height={476}
                                sizes="(min-width: 768px) 380px, 76vw"
                                className="absolute left-[12%] top-[7%] w-[76%] h-auto"
                            />
                            <p className="relative font-hand text-2xl md:text-[28px] leading-tight text-[#D9F27E]">
                                Everyone Stays<br />In The Loop
                            </p>
                        </div>
                    </Feature>

                    <Feature
                        order="order-4"
                        title={<>Instant Transfers That<br />Just Work ⚡</>}
                        description="Send and receive money in seconds. No delays, no “pending” anxiety. What you see is what moves."
                    >
                        <div className={cardClass}>
                            <Image
                                src="/images/instant_transfer.webp"
                                alt="Instant transfers between friends"
                                fill
                                sizes="(min-width: 768px) 487px, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </Feature>
                </div>

            </div>
        </section>
    );
};

export default ThirdSection;
