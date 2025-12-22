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
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.087 19.39L15.939 12.56L13.753 14.717L21.498 22.361C21.782 22.067 21.848 21.6 21.644 21.23L21.087 19.39Z" fill="black" />
              <path d="M3.38806 2.05499C3.16706 2.27499 3.03706 2.61099 3.03706 3.01799V20.982C3.03706 21.39 3.16706 21.725 3.38806 21.945L12.981 12.449L3.38806 2.05499Z" fill="black" />
              <path d="M14.561 10.875L21.077 4.45302C21.325 4.09602 21.298 3.59302 20.973 3.28002L13.754 9.28302L14.561 10.875Z" fill="black" />
              <path d="M14.555 10.88L3.388 2.05499L12.981 12.449L14.555 10.88Z" fill="black" />
            </svg>
            <div className="flex flex-col items-start pr-2">
              <span className="text-[10px] uppercase font-bold leading-tight tracking-wider">Get it on</span>
              <span className="text-xl font-bold leading-none">Google Play</span>
            </div>
          </button>

          <button className="flex items-center gap-3 bg-[#CEC600] text-black rounded-[48px] px-6 py-3 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(206,198,0,0.3)]">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.892 14.128C17.904 12.016 19.648 10.895 19.722 10.854C18.675 9.35101 17.062 9.12401 16.347 9.09601C14.992 8.95601 13.676 9.89701 12.992 9.89701C12.302 9.89701 11.233 9.12201 10.108 9.15101C8.66503 9.17101 7.33703 9.98901 6.60203 11.261C5.09303 13.882 6.22503 17.766 7.69703 19.888C8.42303 20.929 9.26803 22.046 10.42 22.005C11.517 21.961 11.942 21.296 13.298 21.296C14.646 21.296 15.029 22.005 16.175 21.961C17.382 21.918 18.157 20.871 18.872 19.833C19.697 18.647 20.045 17.493 20.06 17.436C20.016 17.417 17.872 16.606 17.892 14.128ZM15.424 7.22801C16.035 6.49501 16.444 5.47401 16.331 4.46901C15.442 4.56001 14.364 5.06001 13.731 5.80301C13.167 6.45201 12.671 7.49201 12.805 8.48301C13.791 8.55901 14.805 7.97301 15.424 7.22801Z" />
            </svg>
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
