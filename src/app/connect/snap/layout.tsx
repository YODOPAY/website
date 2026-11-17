export const dynamic = "force-dynamic";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function SnapchatCallbackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
