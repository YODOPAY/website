import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-yodo-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-16">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="Yodo Pay Logo"
              width={120}
              height={60}
              priority
              className="mx-auto"
            />
          </div>
          <h1 className="text-6xl sm:text-8xl font-light text-yodo-black mb-4 tracking-tight">
            Yodo Pay
          </h1>
          <p className="text-lg text-yodo-dark font-light">
            Social banking, reimagined
          </p>
        </div>

        {/* Coming Soon */}
        <div>
          <div className="inline-block px-8 py-3 border border-yodo-dark rounded-full">
            <span className="text-yodo-dark font-medium text-sm tracking-wide uppercase">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
