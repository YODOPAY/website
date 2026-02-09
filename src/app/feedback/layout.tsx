import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback | Yodo Pay",
  description: "Send us your feedback, ideas, or report issues. We'd love to hear from you.",
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
