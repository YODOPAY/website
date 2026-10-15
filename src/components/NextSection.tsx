import React from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

const handClass = "font-hand font-normal text-[1.3em] leading-none text-[#F0EEAD]";

const NextSection = () => {
    return (
        <section className="w-full flex flex-col-reverse lg:flex-row lg:min-h-[1024px] font-jakarta">
            {/* Left Content Side */}
            <div className="w-full lg:w-[58.5%] bg-[#3E3B00] px-4 md:px-12 lg:pl-[67px] lg:pr-10 pt-28 lg:pt-[153px] pb-24 lg:pb-20 overflow-hidden">

                {/* Text Content */}
                <h2 className="font-display text-[28px] min-[370px]:text-[34px] md:text-[46px] font-semibold leading-[1.2] text-[#9C9A5E]">
                    <Reveal as="span" variant="write" className={handClass}>Money</Reveal> Is Better
                    <br />
                    With <Reveal as="span" variant="write" delay={450} className={handClass}>Friends.</Reveal>
                </h2>

                <Reveal as="p" delay={150} className="mt-4 md:mt-[17px] md:max-w-[492px] text-base md:text-[19px] font-semibold leading-[25px] md:leading-[1.6] text-[#F0EEAD]">
                    YodoPay is a social-first digital wallet built for how you actually live. Send and receive money instantly, manage multiple currencies, discover places nearby, and pay without breaking the moment. No long forms. No awkward steps. Just tap, pay, and move.
                </Reveal>

                {/* Photo Collage: photos are dealt in one by one, then the stickers get slapped on */}
                <div className="relative w-[122%] md:w-full max-w-[580px] aspect-[580/340] mt-14 md:mt-[77px]">
                    {/* Image 1 - Left */}
                    <div className="absolute left-0 top-[5%] w-[31%] -rotate-[8deg] z-10">
                        <Reveal variant="deal">
                            <Image
                                src="/image1.webp"
                                alt="Friends having fun"
                                width={469}
                                height={557}
                                sizes="(min-width: 768px) 220px, 45vw"
                                className="w-full h-auto"
                            />
                        </Reveal>
                    </div>
                    {/* LOL Sticker */}
                    <div className="absolute left-[25%] top-[-2%] w-[17%] z-30">
                        <Reveal variant="stamp" delay={750}>
                            <Image
                                src="/lol.webp"
                                alt="LOL Sticker"
                                width={200}
                                height={187}
                                sizes="100px"
                                className="w-full h-auto drop-shadow-lg animate-wiggle-slow"
                            />
                        </Reveal>
                    </div>

                    {/* Image 2 - Center */}
                    <div className="absolute left-[28%] top-[18%] w-[36%] rotate-3 z-20">
                        <Reveal variant="deal" delay={180}>
                            <Image
                                src="/image2.webp"
                                alt="Friends at a picnic"
                                width={452}
                                height={552}
                                sizes="(min-width: 768px) 220px, 45vw"
                                className="w-full h-auto"
                            />
                        </Reveal>
                    </div>

                    {/* Image 3 - Right */}
                    <div className="absolute left-[59%] top-[3%] w-[37%] -rotate-[5deg] z-10">
                        <Reveal variant="deal" delay={360}>
                            <Image
                                src="/image3.webp"
                                alt="Friends taking a photo"
                                width={456}
                                height={554}
                                sizes="(min-width: 768px) 220px, 45vw"
                                className="w-full h-auto"
                            />
                        </Reveal>
                    </div>
                    {/* YEAH Sticker */}
                    <div className="absolute left-[84%] top-[26%] w-[16%] z-30">
                        <Reveal variant="stamp" delay={950}>
                            <Image
                                src="/yeah.webp"
                                alt="Yeah Sticker"
                                width={209}
                                height={218}
                                sizes="100px"
                                className="w-full h-auto drop-shadow-lg animate-wiggle-slow [animation-delay:1.2s]"
                            />
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Right Image Side */}
            <div className="w-full lg:w-[41.5%] relative aspect-[440/757] md:aspect-auto md:h-[900px] lg:h-auto overflow-hidden">
                <div className="absolute -inset-y-[6%] inset-x-0" data-parallax="0.08">
                    <Image
                        src="/side_image.webp"
                        alt="YodoPay App Interface"
                        fill
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        className="object-cover object-[center_80%]"
                    />
                </div>
            </div>
        </section>
    );
};

export default NextSection;
