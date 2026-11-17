import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Guardian Verification | Yodo Pay",
  robots: { index: false, follow: false },
  description:
    "Verify your identity as a guardian and upload supporting documents for a minor's Yodo Pay account.",
};

export default function GuardianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
