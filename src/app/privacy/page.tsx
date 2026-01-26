import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Yodo Pay",
  description: "Privacy Policy for Yodo Pay - Learn how we protect and handle your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-[#FEFAD7]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-8 md:px-12 max-w-7xl mx-auto w-full">
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
          className="font-jakarta text-[#2E2D01] hover:text-[#7E7D5C] transition-colors"
        >
          Back to Home
        </Link>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-8 md:py-16 pb-24">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
          <h1 className="font-jakarta text-4xl md:text-5xl font-bold text-[#2E2D01] mb-4">
            Privacy Policy
          </h1>
          <p className="font-jakarta text-[#7E7D5C] mb-8 text-sm md:text-base">
            Last Updated: January 26, 2026
          </p>

          <div className="prose prose-lg max-w-none font-jakarta text-[#2E2D01] space-y-6">
            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                Welcome to Yodo Pay ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our website, mobile application, and related services (collectively, the "Service").
              </p>
              <p className="leading-relaxed">
                By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                2. Information We Collect
              </h2>
              
              <h3 className="font-jakarta text-xl md:text-2xl font-semibold text-[#2E2D01] mt-6 mb-3">
                2.1 Personal Information
              </h3>
              <p className="leading-relaxed">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Name, email address, phone number, and postal address</li>
                <li>Date of birth and government-issued identification documents</li>
                <li>Financial information, including bank account details and payment card information</li>
                <li>Social media handles and profile information</li>
                <li>User-generated content, including messages, posts, and transactions</li>
                <li>Profile information, including your @Tag and Color Aura preferences</li>
              </ul>

              <h3 className="font-jakarta text-xl md:text-2xl font-semibold text-[#2E2D01] mt-6 mb-3">
                2.2 Automatically Collected Information
              </h3>
              <p className="leading-relaxed">
                When you use our Service, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Usage data, including pages visited, time spent, and features used</li>
                <li>Transaction history and patterns</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>To provide, maintain, and improve our Service</li>
                <li>To process transactions and manage your account</li>
                <li>To verify your identity and comply with legal obligations</li>
                <li>To communicate with you about your account, transactions, and our services</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To detect, prevent, and address fraud, security, or technical issues</li>
                <li>To personalize your experience and provide relevant content</li>
                <li>To analyze usage patterns and improve our Service</li>
                <li>To comply with applicable laws, regulations, and legal processes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="leading-relaxed">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Service Providers:</strong> With third-party service providers who perform services on our behalf (e.g., payment processing, data storage, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                <li><strong>To Protect Rights:</strong> To protect our rights, property, or safety, or that of our users or others</li>
                <li><strong>Social Features:</strong> Information you choose to share through our social features may be visible to other users</li>
              </ul>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                5. Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure payment processing systems</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="leading-relaxed mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-Out:</strong> Opt out of certain data processing activities, including marketing communications</li>
                <li><strong>Account Settings:</strong> Update your account information and preferences through your account settings</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="mailto:legal@useyodopay.com" className="text-[#7E7D5C] hover:text-[#2E2D01] underline">legal@useyodopay.com</a>.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our Service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                8. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                9. International Data Transfers
              </h2>
              <p className="leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We take appropriate measures to ensure your information receives adequate protection in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                11. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p className="leading-relaxed">
                  <strong>Email:</strong> <a href="mailto:legal@useyodopay.com" className="text-[#7E7D5C] hover:text-[#2E2D01] underline">legal@useyodopay.com</a>
                </p>
                <p className="leading-relaxed">
                  <strong>Support:</strong> <a href="mailto:support@useyodopay.com" className="text-[#7E7D5C] hover:text-[#2E2D01] underline">support@useyodopay.com</a>
                </p>
                <p className="leading-relaxed">
                  <strong>Website:</strong> <a href="https://useyodopay.com" className="text-[#7E7D5C] hover:text-[#2E2D01] underline" target="_blank" rel="noopener noreferrer">useyodopay.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
