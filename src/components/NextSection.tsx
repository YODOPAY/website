import React from 'react';
import Image from 'next/image';

const NextSection = () => {
    return (
        <section className="w-full min-h-screen flex flex-col md:flex-row">
            {/* Left Content Side */}
            <div className="w-full md:w-[60%] bg-[#3E3B00] px-8 py-16 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">

                {/* Text Content */}
                <div className="z-10 mb-12">
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        <span className="font-hand text-[#F0EEAD]">Money</span>
                        <span className="text-white/60 ml-3">Is Better</span>
                        <br />
                        <span className="text-white/60">With</span>
                        <span className="font-hand text-[#F0EEAD] ml-3">Friends.</span>
                    </h2>

                    <p className="text-[#F0EEAD]/80 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                        YodoPay is a social-first digital wallet built for how you actually live. Send and receive money instantly, manage multiple currencies, discover places nearby, and pay without breaking the moment. No long forms. No awkward steps. Just tap, pay, and move.
                    </p>
                </div>

                {/* Photo Collage */}
                <div className="relative w-full max-w-xl h-[300px] md:h-[400px] mt-8">
                    {/* Image 1 - Left */}
                    <div className="absolute left-[5%] bottom-10 w-[35%] transform -rotate-6 z-10">
                        <Image
                            src="/image1.png"
                            alt="Friends having fun"
                            width={300}
                            height={400}
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                        {/* LOL Sticker */}
                        <div className="absolute -top-2 -right-8 w-16 md:w-20 transform rotate-12 animate-bounce">
                            <Image
                                src="/lol.png"
                                alt="LOL Sticker"
                                width={120}
                                height={120}
                                className="w-full h-auto drop-shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Image 2 - Center/Back */}
                    <div className="absolute left-[28%] bottom-0 w-[35%] transform rotate-3 z-0">
                        <Image
                            src="/image2.png"
                            alt="Group selfie"
                            width={300}
                            height={400}
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>

                    {/* Image 3 - Right */}
                    <div className="absolute right-[12%] bottom-20 w-[35%] transform rotate-12 z-10">
                        <Image
                            src="/image3.png"
                            alt="Party vibes"
                            width={300}
                            height={400}
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                        {/* YEAH Sticker */}
                        <div className="absolute top-32 -right-6 w-16 md:w-20 transform -rotate-12 animate-bounce" style={{ animationDelay: '0.5s' }}>
                            <Image
                                src="/yeah.png"
                                alt="Yeah Sticker"
                                width={120}
                                height={120}
                                className="w-full h-auto drop-shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Image Side */}
            <div className="w-full md:w-[40%] relative min-h-[50vh] md:min-h-screen">
                <Image
                    src="/side_image.png"
                    alt="YodoPay App Interface"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </section>
    );
};

export default NextSection;
