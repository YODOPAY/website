import React from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import ReserveTagButton from './ReserveTagButton';

// Photos fan out from the middle of the row into these spots.
// Positions are % of the 952×421 row, measured from the design.
const PHOTOS = [
    { src: '/images/plans2.webp', width: 579, height: 672, alt: 'Friends laughing together', className: 'left-[19.6%] top-[19.5%] w-[26.8%] z-10', fanX: '60%', fanRotate: '6deg', delay: 0 },
    { src: '/images/plans4.webp', width: 694, height: 854, alt: 'Friends celebrating with balloons', className: 'left-[71.6%] top-0 w-[28.4%] z-10', fanX: '-110%', fanRotate: '-10deg', delay: 120 },
    { src: '/images/plans1.webp', width: 604, height: 743, alt: 'Two friends smiling', className: 'left-0 top-[1.7%] w-[29.3%] z-20', fanX: '120%', fanRotate: '10deg', delay: 240 },
    { src: '/images/plans3.webp', width: 594, height: 788, alt: 'Friend laughing at an outdoor event', className: 'left-[43%] top-[3.3%] w-[31%] z-30', fanX: '-20%', fanRotate: '-4deg', delay: 360 },
];

const PlansSection = () => {
    return (
        <section className="w-full bg-[#F5EFED] px-4 md:px-6 pt-20 md:pt-[94px] pb-20 md:pb-[83px] font-jakarta overflow-hidden">
            <div className="mx-auto w-full max-w-[952px] flex flex-col items-center text-center">

                {/* Photo fan */}
                <div className="relative w-full aspect-[952/421]">
                    {PHOTOS.map((photo) => (
                        <div key={photo.src} className={`absolute ${photo.className}`}>
                            <Reveal
                                variant="fan"
                                delay={photo.delay}
                                style={{ '--fan-x': photo.fanX, '--fan-rotate': photo.fanRotate } as React.CSSProperties}
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    width={photo.width}
                                    height={photo.height}
                                    sizes="(min-width: 768px) 300px, 32vw"
                                    className="w-full h-auto"
                                />
                            </Reveal>
                        </div>
                    ))}
                </div>

                <Reveal className="mt-14 md:mt-[51px]">
                    <h2 className="font-display text-[30px] min-[370px]:text-[34px] md:text-[46px] font-semibold leading-[1.2] text-[#292800]">
                        Big Plans Are
                        <br />
                        Better Together.
                    </h2>
                    <p className="mx-auto mt-4 md:mt-[17px] max-w-[520px] text-[15px] md:text-[19px] font-semibold leading-[1.6] text-[#292800]">
                        From trips with friends to shared goals, bring your people together, contribute towards something meaningful, and watch your progress as a team.
                    </p>
                </Reveal>

                <Reveal delay={150} className="mt-4 md:mt-[15px] w-full flex justify-center">
                    <ReserveTagButton className="w-[351px]" />
                </Reveal>
            </div>
        </section>
    );
};

export default PlansSection;
