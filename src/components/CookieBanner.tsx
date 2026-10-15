"use client";

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'yodo_cookie_consent';

type Consent = 'all' | 'essential';

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            setVisible(!localStorage.getItem(STORAGE_KEY));
        } catch {
            setVisible(true);
        }
    }, []);

    const choose = (consent: Consent) => {
        try {
            localStorage.setItem(STORAGE_KEY, consent);
        } catch {
            // Storage unavailable; the choice only lasts for this visit.
        }
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-label="Cookie preferences"
            className="animate-sheet-up [animation-delay:1.2s] fixed z-[60] [body[data-modal-open]_&]:hidden inset-x-0 bottom-0 md:inset-x-auto md:right-7 md:bottom-9 md:w-[450px] rounded-t-[40px] md:rounded-[40px] bg-[#CEC600] text-[#292800] px-3.5 pt-[34px] pb-4 text-center font-jakarta"
        >
            <h2 className="font-[family-name:var(--font-clash)] text-[23px] font-semibold">
                We use cookies 🍪
            </h2>
            <p className="mt-2 px-6 text-[13px] font-semibold leading-5 capitalize">
                We use cookies to keep Yodo working, understand how our website is used,
                and improve your experience. You can manage your preferences at any time.
            </p>
            <button
                onClick={() => choose('all')}
                className="mt-[30px] w-full h-14 rounded-full bg-white text-[15px] font-bold transition-transform active:scale-95 cursor-pointer"
            >
                Accept all
            </button>
            <button
                onClick={() => choose('essential')}
                className="mt-0.5 w-full h-11 text-[15px] font-bold cursor-pointer hover:underline"
            >
                Reject Non-Essential
            </button>
        </div>
    );
};

export default CookieBanner;
