"use client";

import Image from 'next/image';

interface WalletLogoProps {
    hueRotate: string;
}

const WalletLogo = ({ hueRotate }: WalletLogoProps) => {
    return (
        <div className="w-full max-w-[300px] md:max-w-[600px]">
            <Image
                src="/wallet-logo.svg"
                alt="Wallet"
                width={511}
                height={207}
                className="w-full h-auto transition-all duration-300"
                style={{
                    filter: `hue-rotate(${hueRotate}) drop-shadow(0 10px 20px rgba(0,0,0,0.15))`,
                }}
                priority
            />
        </div>
    );
};

export default WalletLogo;
