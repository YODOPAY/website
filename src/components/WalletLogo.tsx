"use client";

import Image from 'next/image';

interface WalletLogoProps {
    hueRotate: string;
}

const WalletLogo = ({ hueRotate, className }: WalletLogoProps & { className?: string }) => {
    return (
        <div className={`relative ${className || "w-[310px] h-[113px] md:w-full md:max-w-[600px] md:h-auto"}`}>
            <Image
                src="/wallet-logo.webp"
                alt="Wallet"
                width={1221}
                height={495}
                sizes="(min-width: 768px) 610px, 100vw"
                className="w-full h-full object-contain transition-all duration-300"
                style={{
                    filter: `hue-rotate(${hueRotate}) drop-shadow(0 10px 20px rgba(0,0,0,0.15))`,
                }}
                priority
            />
        </div>
    );
};

export default WalletLogo;
