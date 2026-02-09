"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/contexts/ToastContext";
import { useApi } from "@/hooks/useApi";

export default function FeedbackPage() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { post, loading, error: apiError } = useApi();
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && fullName && description) {
      try {
        await post("/feedback", {
          email,
          fullName,
          text: description,
        });
        setSubmitted(true);
        setEmail("");
        setFullName("");
        setDescription("");
        showToast("success", "Thanks! Your feedback has been sent.");
      } catch (err: unknown) {
        const message =
          (err as { response?: { data?: { message?: string } }; message?: string })?.response?.data?.message ||
          (err as Error)?.message ||
          "Something went wrong. Please try again.";
        showToast("error", message);
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#FEFAD7] selection:bg-yodo-yellow/30">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-8 md:px-12 max-w-7xl mx-auto w-full relative z-50">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-28 md:h-12 md:w-32 transition-transform hover:scale-105">
            <Image
              src="/logo.png"
              alt="YodoPay Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <Link
          href="/"
          className="font-jakarta text-[#2E2D01] hover:text-[#7E7D5C] transition-colors text-sm md:text-base"
        >
          Back to Home
        </Link>
      </nav>

      {/* Content */}
      <main className="mx-auto flex max-w-2xl flex-col items-center px-6 pt-8 pb-16 md:pt-12 md:pb-24 relative z-10">
        <div className="w-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
          <h1 className="font-jakarta text-3xl md:text-4xl font-bold text-[#2E2D01] mb-2 text-center">
            Send Feedback
          </h1>
          <p className="font-jakarta text-[#7E7D5C] text-center mb-8 text-sm md:text-base">
            We’d love to hear from you. Share your ideas, bugs, or suggestions.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DDF5E6] border border-[#1D9953]/20">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#1D9953]"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-jakarta text-xl font-bold text-[#2E2D01]">
                Thank you!
              </h2>
              <p className="font-jakarta text-[#7E7D5C] text-sm md:text-base max-w-sm">
                Your feedback has been sent. We’ll review it and get back to you if needed.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 font-jakarta text-[#2E2D01] underline hover:text-[#7E7D5C] transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-jakarta text-sm font-medium text-[#2E2D01] mb-2"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Jane Doe"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="h-12 w-full rounded-2xl bg-white px-4 font-jakarta text-[#2E2D01] outline-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#2E2D01]/10 placeholder:text-[#2E2D01]/40 focus:border-[#2E2D01]/30 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-jakarta text-sm font-medium text-[#2E2D01] mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full rounded-2xl bg-white px-4 font-jakarta text-[#2E2D01] outline-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#2E2D01]/10 placeholder:text-[#2E2D01]/40 focus:border-[#2E2D01]/30 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block font-jakarta text-sm font-medium text-[#2E2D01] mb-2"
                >
                  Feedback
                </label>
                <textarea
                  id="description"
                  placeholder="Tell us what you think, report a bug, or suggest a feature..."
                  required
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full resize-y min-h-[120px] rounded-2xl bg-white px-4 py-3 font-jakarta text-[#2E2D01] outline-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#2E2D01]/10 placeholder:text-[#2E2D01]/40 focus:border-[#2E2D01]/30 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="h-14 w-full rounded-[1.75rem] bg-[#292800] px-10 font-jakarta font-bold text-[#E6E4AD] transition-all hover:bg-[#3E3D01] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm"
              >
                {loading ? "Sending…" : "Send feedback"}
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-yodo-yellow/5 to-transparent pointer-events-none" />
    </div>
  );
}
