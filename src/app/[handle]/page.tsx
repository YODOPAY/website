"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { http } from '@/lib/http';

interface BusinessProfile {
  id: string;
  businessName: string;
  businessProfile: string;
  businessLogo?: string;
  category: {
    name: string;
    icon: string;
    id: string;
  }[];
  about: string;
  aboutLink: string;
  website: string;
  socialMedia: {
    tiktok?: string;
    twitter?: string;
    instagram?: string;
    snapchat?: string;
  };
  paylink: string;
  accountDetails?: {
    
    accountNumber: string;
    accountName: string;
    bankName?: string;
  };
  createdAt: string;
}

interface ApiResponse {
  status: string;
  message: string;
  data: BusinessProfile;
}

export default function SpotlightPage() {
  const params = useParams();
  const [profile, setProfile] = useState<BusinessProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      let handle = params?.handle;

      if (Array.isArray(handle)) {
        handle = handle[0];
      }

      if (!handle) return;

      // Check for @ prefix (encoded as %40 or literal @)
      const decodedHandle = decodeURIComponent(handle);
      if (!decodedHandle.startsWith('@')) {
        // If it doesn't start with @, it might not be a spotlight page request.
        // But since this is a catch-all [handle], we should perhaps handle it or let it 404.
        // For this task, we assume the user navigates to /@username
        setLoading(false);
        return;
      }

      const username = decodedHandle.substring(1); // Remove '@'

      try {
        const response = await http.get<ApiResponse>(`/business/profile/${username}`);
        if (response && response.status === 'success') {
          setProfile(response.data);
        } else {
          setError('Profile not found');
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [params]);

  if (loading) {
    return (
      <main className="min-h-screen w-full bg-[#FBF7F4] flex flex-col justify-center items-center p-6 text-[#1A1A1A]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-8 bg-gray-200 w-48 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 w-64 rounded"></div>
        </div>
      </main>
    );
  }

  if (error || !profile) {
    if (!decodeURIComponent(params?.handle as string || '').startsWith('@')) {
      // Optionally render standard 404 or nothing if it catches other routes
      return notFound();
    }
    return (
      <main className="min-h-screen w-full bg-[#FBF7F4] flex flex-col justify-center items-center p-6 text-[#1A1A1A]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Profile Not Found</h1>
          <p className="text-gray-600">{error || "The requested business profile could not be found."}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#FBF7F4] flex flex-col justify-center p-6 sm:p-8 text-[#1A1A1A]">
      <div className="w-full max-w-2xl mx-auto flex flex-col">

        {/* Header Area: Avatar & Socials */}
        <div className="w-full flex flex-row items-center justify-between mb-8">
          <div className="relative">
            {/* Avatar Container with Aura */}
            <div className="relative w-24 h-24 md:w-36 md:h-36">
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-white z-10 bg-white">
                <Image
                  src={profile.businessLogo || "/fallback-business.png"}
                  alt={`${profile.businessName} logo`}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== "/fallback-business.png") {
                      target.src = "/fallback-business.png";
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Social Icons - Flex Row on the right */}
          <div className="flex items-center gap-2">
            {profile.website && (
              <a href={profile.website} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#E5E5E0] flex items-center justify-center hover:bg-gray-50 transition-colors">
                {/* Link Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 17H8C5.23858 17 3 14.7614 3 12C3 9.23858 5.23858 7 8 7H10M8 12H16" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}

            {profile.socialMedia.twitter && (
              <a href={`https://twitter.com/${profile.socialMedia.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#E5E5E0] flex items-center justify-center hover:bg-gray-50 transition-colors">
                {/* X / Twitter Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.662L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" fill="#1A1A1A" />
                </svg>
              </a>
            )}

            {profile.socialMedia.instagram && (
              <a href={`https://instagram.com/${profile.socialMedia.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#E5E5E0] flex items-center justify-center hover:bg-gray-50 transition-colors">
                {/* Instagram Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1A1A1A" strokeWidth="1.5" />
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.96039 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.5204 8.0055 14.3727 8.36154 15.0006 8.98939C15.6285 9.61725 15.9845 10.4696 15.99 11.36L16 11.37Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}

            {profile.socialMedia.tiktok && (
              <a href={`https://tiktok.com/${profile.socialMedia.tiktok.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#E5E5E0] flex items-center justify-center hover:bg-gray-50 transition-colors">
                {/* TikTok Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.62 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.872 4.872 0 0 1-1.003-.104z" fill="#1A1A1A" />
                </svg>
              </a>
            )}

            {profile.socialMedia.snapchat && (
              <a href={`https://snapchat.com/add/${profile.socialMedia.snapchat}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#E5E5E0] flex items-center justify-center hover:bg-gray-50 transition-colors">
                {/* Snapchat Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" fill="#1A1A1A" />
                </svg>
              </a>
            )}

          </div>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-clash)] text-4xl md:text-5xl font-[800] mb-3 tracking-tight text-[#111110] leading-[1.1] text-left">
          {profile.businessName}
        </h1>

        {/* Category Badge */}
        {profile.category && profile.category.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {profile.category.map((cat) => (
              <div key={cat.id} className="flex items-center gap-1.5 text-[13px] text-gray-600 font-medium bg-[#EFEDED] px-3 py-1 rounded-full border border-gray-200/50 w-fit">
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-[#4A4A45] leading-relaxed mb-12 max-w-[500px] text-[15px] md:text-base font-normal text-left">
          {profile.about}
        </p>

        {/* Bank Details Card */}
        {profile.accountDetails && (
          <div className="w-full bg-[#EFECE8] rounded-xl p-6 mb-10 text-left space-y-5 border border-[#E5E2DE]">
            <h3 className="text-sm font-bold text-[#1A1A1A] mb-1">Bank details</h3>

            {profile.accountDetails.bankName && (
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-[#6B6B66]">Bank Name</span>
                <span className="font-medium text-[#1A1A1A]">{profile.accountDetails.bankName}</span>
              </div>
            )}

            <div className="flex justify-between items-center text-[15px]">
              <span className="text-[#6B6B66]">Account Name</span>
              <div className="text-right pl-4">
                <span className="font-medium text-[#1A1A1A] block break-words text-right">{profile.accountDetails.accountName}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[15px]">
              <span className="text-[#6B6B66]">Account Number</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#1A1A1A] tracking-wide">{profile.accountDetails.accountNumber}</span>
                <button
                  onClick={() => copyToClipboard(profile.accountDetails?.accountNumber || '')}
                  className="text-[#4A4A45] hover:text-black transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Primary Action Button */}
        <div className="flex items-center justify-center">
          {profile.accountDetails && (
            <button
              onClick={() => copyToClipboard(`${profile.accountDetails?.accountNumber}\n${profile.accountDetails?.accountName}`)}
              className="bg-[#1C1C1A] text-[#D0F224] font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-[15px] flex items-center text-center justify-center min-w-[50%] w-fit cursor-pointer"
            >
              Copy account detail
            </button>
          )}
        </div>

      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-[#1C1C1A] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 z-50 animate-fade-in-down transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="#D0F224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-medium text-xs">Account detail copied</span>
        </div>
      )}
    </main>
  );
}
