"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { http } from '@/lib/http';

interface BusinessProfile {
  id: string;
  businessName: string;
  businessProfile: string;
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
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-white z-10">
                <Image
                  src="/images/spotlight-user.svg" // Fallback/Default image as per design
                  alt={`${profile.businessName} Avatar`}
                  fill
                  className="object-cover"
                  priority
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
              <a href={`https://tiktok.com/${profile.socialMedia.tiktok}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#E5E5E0] flex items-center justify-center hover:bg-gray-50 transition-colors">
                {/* TikTok Icon (Generic placeholder if not available SVG, or reusing one) - Using a simple replacement or just text if icon missing. The previous file didn't have tiktok icon. */}
                <span className="text-xs font-bold text-black">Tk</span>
              </a>
            )}

            {profile.socialMedia.snapchat && (
              <a href={`https://snapchat.com/add/${profile.socialMedia.snapchat}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#E5E5E0] flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-xs font-bold text-black">Sc</span>
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

        {/* Bank Details Card - Omitted as per plan since data is missing in API response */}

        {/* Pay Link Section / Primary Action */}
        <div className="flex items-center justify-center">
          {profile.paylink && (
            <a href={`https://${profile.paylink}`} target="_blank" rel="noopener noreferrer" className="bg-[#1C1C1A] text-[#D0F224] font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-[15px] flex items-center text-center justify-center min-w-[50%] w-fit cursor-pointer">
              Pay {profile.businessName}
            </a>
          )}
        </div>

      </div>
    </main>
  );
}
