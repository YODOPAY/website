import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardian Verification | Yodo Pay",
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
