import type { Metadata } from "next";
import { Inter_Tight, Patrick_Hand, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

import SmoothScroll from "@/components/SmoothScroll";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-patrick-hand",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yodo Pay",
  description: "Yodo Pay - The future of social banking. Connect, transact, and manage your finances with friends and family like never before.",
  keywords: "social banking, fintech, payments, money transfer, financial app",
  authors: [{ name: "Yodo Pay" }],
  openGraph: {
    title: "Yodo Pay",
    description: "The future of social banking is here. Stay tuned for Yodo Pay.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yodo Pay",
    description: "The future of social banking is here. Stay tuned for Yodo Pay.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${interTight.variable} ${patrickHand.variable} ${plusJakartaSans.variable} ${clashDisplay.variable} antialiased font-sans no-scrollbar`}
      >
        <SmoothScroll />
        {/* <Header /> */}

        {children}
      </body>
    </html>
  );
}
