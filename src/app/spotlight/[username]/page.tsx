"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useParams } from 'next/navigation';

export default function SpotlightUserPage() {
  const params = useParams();
  // In a real app, we would fetch data based on params.username
  // For now, we hardcode the design as per the request

  return (
    <main className="min-h-screen w-full bg-[#FBF7F4] flex flex-col justify-center p-6 sm:p-8 text-[#1A1A1A]">
      <div className="w-full max-w-2xl mx-auto flex flex-col">

        {/* Header Area: Avatar & Socials */}
        <div className="w-full flex flex-row items-center justify-between mb-8">
          <div className="relative">
            {/* Avatar Container with Aura */}
            <div className="relative w-24 h-24 md:w-36 md:h-36">
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-white z-10">
                <Image
                  src="/images/spotlight-user.svg"
                  alt="Profile Avatar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Social Icons - Flex Row on the right */}
          <div className="flex items-center gap-2">
            {/* Link */}
            <button className="w-10 h-10 rounded-full bg-white border border-[#E5E5E0] flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 17H8C5.23858 17 3 14.7614 3 12C3 9.23858 5.23858 7 8 7H10M8 12H16" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {/* X */}
            <button className="w-10 h-10 rounded-full bg-white border border-[#E5E5E0] flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.662L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" fill="#1A1A1A" />
              </svg>
            </button>
            {/* Instagram */}
            <button className="w-10 h-10 rounded-full bg-white border border-[#E5E5E0] flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1A1A1A" strokeWidth="1.5" />
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.96039 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.5204 8.0055 14.3727 8.36154 15.0006 8.98939C15.6285 9.61725 15.9845 10.4696 15.99 11.36L16 11.37Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-clash)] text-4xl md:text-5xl font-[800] mb-3 tracking-tight text-[#111110] leading-[1.1] text-left">
          The Doughnut <br /> Dynasty Co.
        </h1>

        {/* Category Badge */}
        <div className="flex items-center gap-1.5 mb-8 text-[13px] text-gray-600 font-medium bg-[#EFEDED] px-3 py-1 rounded-full border border-gray-200/50 w-fit">
          <span>🍔</span>
          <span>Food & Drinks</span>
        </div>

        {/* Description */}
        <p className="text-[#4A4A45] leading-relaxed mb-12 .max-w-[500px] text-[15px] md:text-base font-normal text-left">
          We are purveyors of fine, gourmet doughnuts, lovingly handcrafted every morning using only the freshest local ingredients. From our classic Cinnamon Swirl to our signature Saffron Rose, we blend traditional techniques with globally-inspired glazes to bring you a truly unique sweet experience.
        </p>

        {/* Bank Details Card */}
        <div className="w-full bg-[#EFECE8] rounded-xl p-6 mb-10 text-left space-y-5 .max-w-[460px] border border-[#E5E2DE]">
          <h3 className="text-sm font-bold text-[#1A1A1A] mb-1">Bank details</h3>

          <div className="flex justify-between items-center text-[15px]">
            <span className="text-[#6B6B66]">Bank Name</span>
            <span className="font-medium text-[#1A1A1A]">Safe Haven MFB</span>
          </div>

          <div className="flex justify-between items-center text-[15px]">
            <span className="text-[#6B6B66]">Account Name</span>
            <span className="font-medium text-[#1A1A1A]">The Doughnut Dynasty Co.</span>
          </div>

          <div className="flex justify-between items-center text-[15px]">
            <span className="text-[#6B6B66]">Account Number</span>
            <div className="flex items-center gap-2">
              <span className="font-medium text-[#1A1A1A] tracking-wide">4567890123</span>
              <button className="text-[#4A4A45] hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Copy Button */}
        <div className="flex items-center justify-center">

          <button className="bg-[#1C1C1A] text-[#D0F224] font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-[15px] flex items-center text-center justify-center min-w-[50%] w-fit cursor-pointer">
            Copy account number
          </button>
        </div>

      </div>
    </main>
  );
}
