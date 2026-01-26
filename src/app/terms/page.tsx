import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms and Conditions | Yodo Pay",
  description: "Terms and Conditions for Yodo Pay - Read our terms of service and user agreement.",
};

export default function TermsPage() {
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
            Terms and Conditions
          </h1>
          <p className="font-jakarta text-[#7E7D5C] mb-8 text-sm md:text-base">
            Last Updated: January 26, 2026
          </p>

          <div className="prose prose-lg max-w-none font-jakarta text-[#2E2D01] space-y-6">
            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using Yodo Pay ("we," "our," or "us"), including our website, mobile application, and related services (collectively, the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
              </p>
              <p className="leading-relaxed">
                These Terms constitute a legally binding agreement between you and Yodo Pay. Please read these Terms carefully before using our Service.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                2. Eligibility
              </h2>
              <p className="leading-relaxed">
                To use our Service, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Be responsible for maintaining the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                3. Account Registration
              </h2>
              <p className="leading-relaxed">
                To access certain features of our Service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide accurate, truthful, and complete information</li>
                <li>Maintain the security of your account password and credentials</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
                <li>Not share your account credentials with third parties</li>
                <li>Not create multiple accounts to circumvent Service limitations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                4. Use of Service
              </h2>
              
              <h3 className="font-jakarta text-xl md:text-2xl font-semibold text-[#2E2D01] mt-6 mb-3">
                4.1 Permitted Use
              </h3>
              <p className="leading-relaxed">
                You may use our Service for lawful purposes only and in accordance with these Terms. You agree to use the Service in a manner that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Complies with all applicable laws and regulations</li>
                <li>Respects the rights of other users</li>
                <li>Does not infringe upon intellectual property rights</li>
                <li>Does not interfere with or disrupt the Service</li>
              </ul>

              <h3 className="font-jakarta text-xl md:text-2xl font-semibold text-[#2E2D01] mt-6 mb-3">
                4.2 Prohibited Activities
              </h3>
              <p className="leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Attempt to gain unauthorized access to the Service or related systems</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                <li>Use automated systems to access the Service without authorization</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Collect or store personal information about other users without permission</li>
                <li>Use the Service to facilitate money laundering, fraud, or other financial crimes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                5. Financial Services and Transactions
              </h2>
              <p className="leading-relaxed">
                Our Service provides financial services, including payment processing and money transfers. By using these features, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide accurate payment information</li>
                <li>Authorize us to process transactions on your behalf</li>
                <li>Understand that all transactions are subject to verification and may be declined</li>
                <li>Be responsible for all transactions initiated through your account</li>
                <li>Report any unauthorized transactions immediately</li>
                <li>Comply with applicable financial regulations and anti-money laundering requirements</li>
                <li>Understand that transaction fees may apply as disclosed in our fee schedule</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We reserve the right to refuse, cancel, or reverse any transaction that we believe violates these Terms or applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                6. User Content
              </h2>
              <p className="leading-relaxed">
                You retain ownership of any content you post, upload, or share through the Service ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display your User Content in connection with providing and improving the Service.
              </p>
              <p className="leading-relaxed mt-4">
                You represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>You own or have the right to submit the User Content</li>
                <li>Your User Content does not violate any third-party rights</li>
                <li>Your User Content complies with these Terms and applicable laws</li>
                <li>Your User Content is not defamatory, obscene, or otherwise objectionable</li>
              </ul>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                7. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                The Service, including its original content, features, and functionality, is owned by Yodo Pay and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Service without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                8. Fees and Payments
              </h2>
              <p className="leading-relaxed">
                Certain features of our Service may be subject to fees. We will disclose all applicable fees before you complete a transaction. You agree to pay all fees associated with your use of the Service. Fees are non-refundable unless otherwise required by law or as specified in our refund policy.
              </p>
              <p className="leading-relaxed mt-4">
                We reserve the right to change our fee structure at any time. We will provide notice of any fee changes in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                9. Privacy
              </h2>
              <p className="leading-relaxed">
                Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information. By using the Service, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                10. Disclaimers
              </h2>
              <p className="leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="leading-relaxed mt-4">
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>The Service will be uninterrupted, secure, or error-free</li>
                <li>Any defects or errors will be corrected</li>
                <li>The Service is free of viruses or other harmful components</li>
                <li>The results obtained from using the Service will meet your requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                11. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, YODO PAY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Your use or inability to use the Service</li>
                <li>Any unauthorized access to or use of our servers or your account</li>
                <li>Any interruption or cessation of transmission to or from the Service</li>
                <li>Any bugs, viruses, or other harmful code transmitted through the Service</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content</li>
              </ul>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                12. Indemnification
              </h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless Yodo Pay and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your User Content</li>
              </ul>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                13. Termination
              </h2>
              <p className="leading-relaxed">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will cease immediately.
              </p>
              <p className="leading-relaxed mt-4">
                You may terminate your account at any time by contacting us at <a href="mailto:support@useyodopay.com" className="text-[#7E7D5C] hover:text-[#2E2D01] underline">support@useyodopay.com</a>. Upon termination, all provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                14. Governing Law and Dispute Resolution
              </h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration or in a court of competent jurisdiction, as applicable under local law.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                15. Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="leading-relaxed mt-4">
                By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you must stop using the Service.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                16. Severability
              </h2>
              <p className="leading-relaxed">
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between you and Yodo Pay regarding our Service.
              </p>
            </section>

            <section>
              <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[#2E2D01] mt-8 mb-4">
                17. Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p className="leading-relaxed">
                  <strong>Email:</strong> <a href="mailto:legal@useyodopay.com" className="text-[#7E7D5C] hover:text-[#2E2D01] underline">legal@useyodopay.com</a>
                </p>
                <p className="leading-relaxed">
                  <strong>Support:</strong> <a href="mailto:support@useyodopay.com" className="text-[#7E7D5C] hover:text-[#2E2D01] underline">support@useyodopay.com</a>
                </p>
                <p className="leading-relaxed">
                  <strong>Help:</strong> <a href="mailto:help@useyodopay.com" className="text-[#7E7D5C] hover:text-[#2E2D01] underline">help@useyodopay.com</a>
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
