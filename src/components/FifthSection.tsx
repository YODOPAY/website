import React from 'react';
import Image from 'next/image';

const FifthSection = () => {
  return (
    <section className="rounded-tl-4 rounded-tr-4 w-full min-h-screen bg-black text-white px-6 py-20 relative overflow-hidden flex flex-col items-center">

      {/* Header Content */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center gap-8 z-10">
        {/* Spotlight Logo - Main Image */}
        <div className="relative w-full max-w-lg aspect-[3/1] flex items-center justify-center">
          <Image
            src="/images/spotlight.png"
            alt="Spotlight"
            width={600}
            height={200}
            className="object-contain"
            priority
          />
        </div>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed font-medium">
          Spotlight puts businesses, creators, and local spots right on Yodo. Get discovered nearby, show your page, and get paid instantly. No extra apps. No long links. Just visibility that turns into real money.
        </p>
      </div>

      {/* Staggered Images Grid */}
      <div className="w-full max-w-7xl relative min-h-[600px] md:min-h-[800px] mt-12 flex flex-col md:block">

        {/* Image 1: Cafes (Left) */}
        <div className="relative md:absolute md:left-0 md:top-20 w-full md:w-[45%] lg:w-[40%] aspect-[4/5] transform md:-rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
          <Image
            src="/images/spotlight1.png"
            alt="Cafes, Restaurants, Bars & Lounges"
            fill
            className="object-contain"
          />
        </div>

        {/* Image 2: Sneaker (Right Top) */}
        <div className="relative md:absolute md:right-0 md:-top-10 w-full md:w-[40%] lg:w-[35%] aspect-[4/5] transform md:rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10 mt-8 md:mt-0">
          <Image
            src="/images/spotlight2.png"
            alt="Sneaker Clothing"
            fill
            className="object-contain"
          />
        </div>

        {/* Image 3: Gyms (Center Bottom) */}
        <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-0 w-full md:w-[45%] lg:w-[40%] aspect-[4/5] transform md:rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 mt-[-50px] md:mt-0">
          <Image
            src="/images/spotlight3.png"
            alt="Gyms, Spas & Wellness"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="flex flex-col items-center gap-8 mt-20 md:mt-32 z-30 pb-20">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-2">Get Your Business</h3>
          <h3 className="text-3xl md:text-4xl font-serif italic font-light">
            On <span className="not-italic font-bold">Spotlight</span>
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="flex items-center gap-3 bg-[#CEC600] text-black rounded-[48px] px-6 py-3 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(206,198,0,0.3)]">
            <Image
              src="/icons/playstore.svg"
              alt="Google Play"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div className="flex flex-col items-start pr-2">
              <span className="text-[10px] uppercase font-bold leading-tight tracking-wider">Get it on</span>
              <span className="text-xl font-bold leading-none">Google Play</span>
            </div>
          </button>

          <button className="flex items-center gap-3 bg-[#CEC600] text-black rounded-[48px] px-6 py-3 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(206,198,0,0.3)]">
            <Image
              src="/icons/appstore.svg"
              alt="App Store"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div className="flex flex-col items-start pr-1">
              <span className="text-[10px] uppercase font-bold leading-tight tracking-wider">Download on the</span>
              <span className="text-xl font-bold leading-none">App Store</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
