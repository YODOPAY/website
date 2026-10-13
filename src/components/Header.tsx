"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
    { href: '#features', label: 'Features' },
    { href: '#spotlight', label: 'Spotlight' },
    { href: '#faqs', label: 'FAQs' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute top-3.5 md:top-6 inset-x-3.5 md:inset-x-16 z-50 font-jakarta">
            <div className="flex items-center justify-between h-10 md:h-[50px] px-4 md:px-6 rounded-full bg-white/20 backdrop-blur-md">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.webp"
                        alt="Yodo"
                        width={100}
                        height={42}
                        className="w-[62px] md:w-20 h-auto object-contain brightness-0 invert"
                        priority
                    />
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-6 text-white text-base font-medium">
                    {NAV_LINKS.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-[#CEC600] transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <nav className="md:hidden mt-2 flex flex-col gap-1 p-3 rounded-3xl bg-black/60 backdrop-blur-md text-white font-medium">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="px-3 py-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
