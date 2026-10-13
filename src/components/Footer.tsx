import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReserveTagButton from './ReserveTagButton';
import Reveal from './Reveal';

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const PRODUCT_LINKS = [
  { href: "#features", label: "How Yodo works" },
  { href: "#spotlight", label: "Spotlight" },
  { href: "#faqs", label: "FAQ" },
];

// TODO: there is no cookie policy page yet
const LEGAL_LINKS = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "#", label: "Cookie Policy" },
];

// TODO: replace the placeholder contact address and social links with the real ones
const CONNECT_LINKS = [
  {
    href: "mailto:Yodo@mail.com",
    label: "Yodo@mail.com",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4.5" width="18" height="15" rx="3" />
        <path d="M7 9l5 3.5L17 9" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg {...iconProps}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <path d="M17 7h.01" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "X (Formerly twitter)",
    icon: (
      <svg {...iconProps}>
        <path d="M4 4l16 16M20 4L4 20" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg {...iconProps}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <path d="M8 11v5M8 8h.01M12 16v-5m0 2.2c0-1.3.9-2.2 2-2.2s2 .9 2 2.2V16" />
      </svg>
    ),
  },
];

const columnTitleClass = "font-inter text-xs font-medium tracking-[0.3em] uppercase text-[#B4B4B4]";
const linkClass = "font-geist text-base leading-6 font-medium hover:text-[#CEC600] transition-colors";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-b from-black from-35% to-[#3E3B00] text-white px-6 md:px-[60px] pt-20 md:pt-[92px] pb-14 md:pb-[53px]">
      <Reveal variant="pop" className="flex flex-col items-center text-center">
        <Image
          src="/logo.webp"
          alt="Yodo"
          width={800}
          height={338}
          sizes="390px"
          className="w-[260px] md:w-[390px] h-auto brightness-0 invert"
        />
        <p className="-mt-2 font-display text-base leading-6 font-semibold text-[#CEC600]">
          Digital banking at your fingertips
        </p>
        <ReserveTagButton variant="yellow" className="mt-5 w-[354px]" />
      </Reveal>

      <div className="mx-auto mt-20 md:mt-[91px] w-full max-w-[716px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[275px_275px_1fr] gap-12 sm:gap-4 lg:gap-0">
        <div>
          <h4 className={columnTitleClass}>Product</h4>
          <ul className="mt-8 flex flex-col gap-4">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClass}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={columnTitleClass}>Legal</h4>
          <ul className="mt-8 flex flex-col gap-4">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClass}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={columnTitleClass}>Connect</h4>
          <ul className="mt-8 flex flex-col gap-4">
            {CONNECT_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={`flex items-center gap-2.5 whitespace-nowrap ${linkClass}`}>
                  {link.icon}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 md:mt-[100px] flex flex-col md:flex-row items-start gap-6 md:gap-[76px]">
        <Image
          src="/logo.webp"
          alt="Yodo"
          width={100}
          height={42}
          className="w-[46px] h-auto shrink-0 brightness-0 invert"
        />
        <div className="max-w-[1070px] flex flex-col gap-3 font-inter text-sm leading-7 text-[#B4B4B4]">
          <p>
            Yodo is a financial technology company, not a bank. Banking services are provided by our licensed banking partners.
          </p>
          <p>
            United States: Services are provided by YODO SEND LLC, 1001 S Main St, Suite 600, Kalispell, MT 59901. YODO SEND LLC is registered with the Financial Crimes Enforcement Network (FinCEN) as a Money Services Business (MSB Registration No. 31000336102486).
          </p>
          {/* TODO: fill in the CAC registration number */}
          <p>
            Nigeria: Yodo Solutions is registered with the Corporate Affairs Commission (RC [number]).
          </p>
          <p>© 2026 Yodo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
