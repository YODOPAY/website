import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yodo Pay - Coming Soon",
  description: "Yodo Pay - The future of social banking. Connect, transact, and manage your finances with friends and family like never before.",
  keywords: "social banking, fintech, payments, money transfer, financial app",
  authors: [{ name: "Yodo Pay" }],
  openGraph: {
    title: "Yodo Pay - Coming Soon",
    description: "The future of social banking is here. Stay tuned for Yodo Pay.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yodo Pay - Coming Soon",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
