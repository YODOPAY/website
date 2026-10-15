import React from 'react';
import Image from 'next/image';
import ReserveTagButton from './ReserveTagButton';
import Reveal from './Reveal';

const SPOTS = [
  {
    src: "/images/spotlight1.webp",
    alt: "Cafes, Restaurants, Bars & Lounges",
    width: 1000,
    height: 1109,
    position: "md:left-[5%] md:top-0 md:w-[27.8%]",
    drift: "0.06",
  },
  {
    src: "/images/spotlight2.webp",
    alt: "Sneaker Clothing",
    width: 1100,
    height: 1031,
    position: "md:left-[60.5%] md:top-[11%] md:w-[34.9%]",
    drift: "-0.05",
  },
  {
    src: "/images/spotlight3.webp",
    alt: "Gyms, Spas & Wellness, Clubs & Nightlife",
    width: 1200,
    height: 1005,
    position: "md:left-[34.9%] md:top-[52%] md:w-[40.6%]",
    drift: "0.09",
  },
];

const FifthSection = () => {
  return (
    <section id="spotlight" className="w-full bg-[#F5EFED]">
      <div className="w-full rounded-t-[48px] md:rounded-t-[100px] bg-black text-white px-6 pt-14 md:pt-[52px] pb-24 md:pb-[100px] overflow-hidden flex flex-col items-center font-jakarta">

        {/* Header Content */}
        <Reveal variant="neon">
          <Image
            src="/images/spotlight.webp"
            alt="Spotlight brings places to life"
            width={375}
            height={262}
            sizes="400px"
            className="w-[300px] md:w-[400px] h-auto"
          />
        </Reveal>

        <Reveal as="p" delay={500} className="-mt-4 max-w-[700px] text-center text-lg md:text-[23px] font-semibold leading-[1.6] tracking-tight text-[#E5E5E5]">
          Spotlight puts businesses, creators, and local spots right on Yodo. Get discovered nearby, show your page, and get paid instantly. No extra apps. No long links. Just visibility that turns into real money.
        </Reveal>

        {/* Staggered Images */}
        <div className="relative w-full max-w-[1440px] mt-16 md:mt-[184px] flex flex-col items-center gap-10 md:block md:aspect-[1404/1005]">
          {SPOTS.map((spot) => (
            <div key={spot.src} className={`w-full max-w-[420px] md:max-w-none md:absolute ${spot.position}`}>
              <div data-parallax={spot.drift}>
              <Reveal variant="drop">
              <Image
                src={spot.src}
                alt={spot.alt}
                width={spot.width}
                height={spot.height}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="w-full h-auto"
              />
              </Reveal>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <h3 className="mt-20 md:mt-[180px] text-center font-display text-[28px] md:text-[37px] font-semibold leading-[1.2] text-[#E5E5E5]">
          Get Your Business
          <br />
          On <Reveal as="span" variant="write" className="font-hand font-normal text-[1.15em]">Spotlight</Reveal>
        </h3>
        <ReserveTagButton variant="yellow" className="mt-4 w-[505px]" />
      </div>
    </section>
  );
};

export default FifthSection;
