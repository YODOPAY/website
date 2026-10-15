"use client";

import { useEffect, useState } from 'react';
import {
    TAG_MIN_LENGTH,
    checkTagAvailability,
    normalizeTag,
    reserveTag,
} from '@/lib/yodoTag';

type Step = 'tag' | 'contact' | 'done';
type TagStatus = 'idle' | 'checking' | 'available' | 'unavailable' | 'error';

interface ReserveTagModalProps {
    open: boolean;
    onClose: () => void;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
    "w-full h-[46px] rounded-full bg-white px-4 text-[#292800] outline-none placeholder:text-[#A3A3A3] focus:ring-2 focus:ring-[#CEC600]";
const primaryButtonClass =
    "mx-[5px] md:mx-[13px] w-[calc(100%-10px)] md:w-[calc(100%-26px)] h-14 rounded-full text-[15px] font-bold transition-all bg-[#292800] text-[#CEC600] cursor-pointer active:scale-95 disabled:bg-[#E5E5E5] disabled:text-[#A3A3A3] disabled:cursor-not-allowed disabled:active:scale-100";
const chipClass = "px-2 py-1 rounded-full bg-white/70 text-xs";

const BackButton = ({ onClick, className = "" }: { onClick: () => void; className?: string }) => (
    <button
        type="button"
        onClick={onClick}
        aria-label="Back"
        className={`absolute -left-2 -top-[5px] md:left-[9px] md:top-0 h-8 w-8 flex items-center justify-center cursor-pointer ${className}`}
    >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
        </svg>
    </button>
);

const SuccessBadge = () => (
    <svg width="124" height="124" viewBox="0 0 124 124" fill="none" className="animate-badge" aria-hidden>
        {[0, 30, 60].map((angle) => (
            <rect key={`halo-${angle}`} x="14" y="14" width="96" height="96" rx="20" fill="#FFB7FA" transform={`rotate(${angle} 62 62)`} />
        ))}
        {[0, 30, 60].map((angle) => (
            <rect key={angle} x="20" y="20" width="84" height="84" rx="16" fill="#FF10F0" transform={`rotate(${angle} 62 62)`} />
        ))}
        <polyline points="48 64 58 73 77 49" stroke="#FFB7FA" strokeWidth="5" />
    </svg>
);

const ReserveTagModal = ({ open, onClose }: ReserveTagModalProps) => {
    const [step, setStep] = useState<Step>('tag');
    const [tag, setTag] = useState('');
    const [status, setStatus] = useState<TagStatus>('idle');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [reason, setReason] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    // Check availability once the user stops typing
    useEffect(() => {
        if (tag.length < TAG_MIN_LENGTH) {
            setStatus('idle');
            return;
        }
        setStatus('checking');
        const controller = new AbortController();
        const timer = setTimeout(async () => {
            try {
                const result = await checkTagAvailability(tag, controller.signal);
                setStatus(result.available ? 'available' : 'unavailable');
                setSuggestions(result.suggestions);
                setReason(result.reason);
            } catch {
                if (!controller.signal.aborted) setStatus('error');
            }
        }, 400);
        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [tag]);

    // Lock page scroll and close on Escape while open
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKeyDown);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.body.dataset.modalOpen = 'true';
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
            delete document.body.dataset.modalOpen;
        };
    }, [open, onClose]);

    if (!open) return null;

    const contactValid = EMAIL_PATTERN.test(email) && phone.replace(/\D/g, '').length >= 7;

    const handleJoin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!contactValid || submitting) return;
        setSubmitting(true);
        setSubmitError(null);
        try {
            await reserveTag({ tag, email: email.trim(), phone: phone.trim() });
            setStep('done');
        } catch (err) {
            setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleDone = () => {
        setStep('tag');
        setTag('');
        setEmail('');
        setPhone('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] font-jakarta text-[#292800]" data-lenis-prevent>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />

            <div
                role="dialog"
                aria-modal="true"
                aria-label="Reserve your Yodo Tag"
                className={`absolute inset-0 md:inset-auto md:right-12 md:bottom-[43px] md:w-[445px] md:max-h-[calc(100vh-5rem)] overflow-y-auto md:rounded-[48px] px-5 md:px-[18px] pt-[66px] pb-8 md:pt-[34px] text-center animate-sheet-up ${step === 'done' ? 'bg-linear-to-b from-[#FFB7FA] to-[#F5EFED] to-45%' : 'bg-[#F5EFED]'}`}
            >
                {step === 'tag' && (
                    <div className="relative">
                        <BackButton onClick={onClose} className="md:hidden" />
                        <h2 className="font-[family-name:var(--font-clash)] text-[clamp(17px,5.2vw,23px)] md:text-[23px] font-semibold">
                            Claim your Yodo Tag 📠
                        </h2>
                        <p className="mt-1.5 px-8 text-[13px] font-semibold leading-[22px] md:leading-[19.5px] text-[#737373] capitalize">
                            Your Yodo handle is your unique identity for sending and receiving money.
                            Reserve yours now and we&rsquo;ll keep it for you when Yodo launches.
                        </p>

                        <label htmlFor="yodo-tag" className="block mt-8 md:mt-7 mb-2.5 text-left text-xs font-medium text-[#525252]">
                            Your Yodo tag
                        </label>
                        <div className="flex items-center h-[46px] rounded-full bg-white px-4 focus-within:ring-2 focus-within:ring-[#CEC600]">
                            <span className="text-[#A3A3A3]">@</span>
                            <input
                                id="yodo-tag"
                                value={tag}
                                onChange={(e) => setTag(normalizeTag(e.target.value))}
                                autoComplete="off"
                                autoCapitalize="none"
                                spellCheck={false}
                                autoFocus
                                className="flex-1 min-w-0 h-full bg-transparent outline-none"
                            />
                            <span className="shrink-0 text-[13px]" aria-live="polite">
                                {status === 'checking' && <span className="text-[#A3A3A3]">Checking…</span>}
                                {status === 'available' && (
                                    <span className="flex items-center gap-1.5 text-[#25AC33]">
                                        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                                            <circle cx="12" cy="12" r="12" fill="currentColor" />
                                            <polyline points="7 12.5 10.5 16 17 9" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Available
                                    </span>
                                )}
                                {status === 'unavailable' && <span className="text-[#FF2825]">Unavailable</span>}
                                {status === 'error' && <span className="text-[#FF2825]">Couldn&rsquo;t check</span>}
                            </span>
                        </div>

                        {/* Why the tag can't be used, e.g. reserved names */}
                        {status === 'unavailable' && reason && (
                            <p className="mt-2 text-left text-xs font-medium text-[#FF2825]" role="status">
                                {reason}
                            </p>
                        )}

                        {status === 'unavailable' && suggestions.length > 0 ? (
                            <div className="mt-2.5 text-left">
                                <p className="text-[13px] text-[#A3A3A3]">Suggestions</p>
                                <div className="mt-[7px] flex flex-wrap gap-3">
                                    {suggestions.map((suggestion) => (
                                        <button
                                            key={suggestion}
                                            onClick={() => setTag(suggestion)}
                                            className={`${chipClass} cursor-pointer hover:bg-white`}
                                        >
                                            @{suggestion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="mt-3.5 flex gap-3 text-[#737373]">
                                <span className={chipClass}>lowercase</span>
                                <span className={chipClass}>No spaces</span>
                            </div>
                        )}

                        <button
                            onClick={() => setStep('contact')}
                            disabled={status !== 'available'}
                            className={`${primaryButtonClass} mt-8 md:mt-[30px]`}
                        >
                            Reserve
                        </button>
                    </div>
                )}

                {step === 'contact' && (
                    <form onSubmit={handleJoin} className="relative">
                        <BackButton onClick={() => setStep('tag')} />
                        <h2 className="font-[family-name:var(--font-clash)] text-[clamp(17px,5.2vw,23px)] md:text-[23px] font-semibold">
                            Your handle is reserved 🎟️
                        </h2>
                        <p className="mt-1.5 px-8 min-h-[66px] md:min-h-0 text-[13px] font-semibold leading-5 text-[#737373]">
                            We&rsquo;ll keep @{tag} for you. Join the waitlist and we&rsquo;ll let
                            you know when Yodo is ready.
                        </p>

                        <label htmlFor="yodo-email" className="block mt-8 md:mt-7 mb-2.5 text-left text-xs font-medium text-[#525252]">
                            Email address
                        </label>
                        <input
                            id="yodo-email"
                            type="email"
                            placeholder="Enter"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            autoFocus
                            className={inputClass}
                        />

                        <label htmlFor="yodo-phone" className="block mt-8 md:mt-7 mb-2.5 text-left text-xs font-medium text-[#525252]">
                            Phone number
                        </label>
                        <input
                            id="yodo-phone"
                            type="tel"
                            placeholder="+234"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            autoComplete="tel"
                            className={inputClass}
                        />

                        {submitError && (
                            <p className="mt-4 text-left text-[13px] text-[#FF2825]">{submitError}</p>
                        )}

                        <button
                            type="submit"
                            disabled={!contactValid || submitting}
                            className={`${primaryButtonClass} mt-8`}
                        >
                            {submitting ? "Joining..." : "Join the waitlist"}
                        </button>
                    </form>
                )}

                {step === 'done' && (
                    <div className="flex flex-col items-center pt-[42px] md:pt-6 pb-3.5">
                        <SuccessBadge />
                        <h2 className="mt-[43px] font-[family-name:var(--font-clash)] text-[23px] font-semibold">
                            @{tag} is yours.
                        </h2>
                        <p className="mt-1.5 px-12 text-[13px] font-semibold leading-5 text-[#737373]">
                            Your Yodo Handle has been reserved. We&rsquo;ll let you know when
                            it&rsquo;s time to get started.
                        </p>
                        <button onClick={handleDone} className={`${primaryButtonClass} mt-[30px]`}>
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReserveTagModal;
