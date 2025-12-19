
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 w-full absolute top-0 z-50 bg-transparent">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Yodo Pay"
                        width={100}
                        height={40}
                        className="w-24 h-auto object-contain"
                        priority
                    />
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                <Link href="#features" className="hover:text-black transition-colors">
                    Features
                </Link>
                <Link href="#spotlight" className="hover:text-black transition-colors">
                    Spotlight
                </Link>
                <Link href="#security" className="hover:text-black transition-colors">
                    Security
                </Link>
                <Link href="#get-app" className="bg-black text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors">
                    Get The App
                </Link>
            </nav>

            {/* Mobile Menu Placeholder (Optional for now as per design focus on desktop hero) */}
            <div className="md:hidden">
                {/* Basic hamburger icon placeholder */}
                <button className="text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
