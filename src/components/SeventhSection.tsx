import React from 'react';
import Image from 'next/image';
import ReserveTagButton from './ReserveTagButton';
import Reveal from './Reveal';

const SeventhSection = () => {
  return (
    // From tablet up the section takes the photo's own proportions, so the whole image shows uncropped
    <section className="relative w-full min-h-[760px] md:min-h-0 md:aspect-[2880/2048] bg-[#141204] px-6 pt-[100px] md:pt-[5.7vw] pb-20 overflow-hidden flex flex-col items-center text-center text-white font-jakarta">
      <Image
        src="/images/your_tag.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <h2 className="relative font-display text-[32px] md:text-[69px] font-semibold leading-[1.1]">
        <Reveal as="span" variant="pop" className="inline-block">Your @Tag</Reveal>
        <br />
        <Reveal as="span" variant="pop" delay={150} className="inline-block">Starts Here</Reveal>
      </h2>
      <Reveal as="p" delay={300} className="relative mt-2 max-w-[320px] md:max-w-[520px] text-sm md:text-xl leading-normal">
        Reserve your unique Yodo Handle and be ready to send, receive, and connect when Yodo launches.
      </Reveal>
      <ReserveTagButton variant="yellow" compactOnMobile className="relative mt-3 md:mt-2 md:w-[297px]" />
    </section>
  );
};

export default SeventhSection;
