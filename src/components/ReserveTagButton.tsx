"use client";

import { useReserveTag } from '@/contexts/ReserveTagContext';

interface ReserveTagButtonProps {
    variant?: 'dark' | 'yellow';
    /** Smaller pill below the md breakpoint. */
    compactOnMobile?: boolean;
    className?: string;
}

const VARIANTS = {
    dark: 'bg-[#151400] text-[#CEC600]',
    yellow: 'bg-[#CEC600] text-[#292800]',
};

const ReserveTagButton = ({ variant = 'dark', compactOnMobile = false, className = '' }: ReserveTagButtonProps) => {
    const openReserveTag = useReserveTag();

    return (
        <button
            onClick={openReserveTag}
            className={`group max-w-full flex items-center justify-center rounded-full font-jakarta font-medium whitespace-nowrap ${compactOnMobile ? 'h-[38px] px-5 gap-2 text-[13px] md:h-16 md:px-4 md:gap-3 md:text-xl' : 'h-16 px-4 gap-3 text-lg min-[370px]:text-xl'} transition-transform hover:scale-[1.02] active:scale-95 cursor-pointer ${VARIANTS[variant]} ${className}`}
        >
            {/* TODO: swap for the "Super Star" sticker once the asset is added */}
            <span className={`group-hover-wiggle ${compactOnMobile ? 'text-base md:text-2xl' : 'text-2xl'}`} aria-hidden>🤩</span>
            Reserve your Yodo Tag
        </button>
    );
};

export default ReserveTagButton;
