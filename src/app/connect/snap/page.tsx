'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { http } from '@/lib/http';
import { HttpError } from '@/lib/http';
import { useRouter } from 'next/navigation';

export default function ConnectSnapPage() {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const searchParams = useSearchParams();

  const code = searchParams.get('code');
  const state = searchParams.get('state');

  useEffect(() => {
    const handleCallback = async () => {
      // Check if we have the required parameters
      if (!code || !state) {
        setError('Missing required OAuth parameters. Please try connecting again.');
        setLoading(false);
        return;
      }

      setError(null);

      try {
        const response = await http.post('/snapchat/callback', {
          state,
          code,
        });

        console.log('Success:', response);
        setSuccess(true);
        setLoading(false);
      } catch (err) {
        if (err instanceof HttpError) {
          setError(`Error ${err.status}: ${err.message}`);
        } else {
          setError('Failed to connect to Snapchat. Please try again.');
        }
        console.error('Error:', err);
        setLoading(false);
      }
    };

    handleCallback();
  }, [code, state]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-yellow-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-20"></div>
      </div>

      <div className="relative max-w-md w-full">
        {/* Card */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Yodo Pay Logo"
                width={100}
                height={50}
                className="mx-auto"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Connect Snapchat
            </h1>
            <p className="text-white/90 text-sm">
              Link your account to start sharing payments
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="text-6xl">👻</div>
          </div>

          {loading ? (
            <div className="w-full bg-white/20 text-white py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 mb-4">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Connecting to Snapchat...
            </div>
          ) : success ? (
            <div className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Successfully Connected!, You can now close this page, and go back to the app
            </div>
          ) : error ? (
            <div className="w-full bg-red-500 text-white py-4 rounded-xl font-semibold text-md shadow-lg flex items-center justify-center gap-3 mb-4">
              
              Connection Failed, Please try again
            </div>
          ) : null}

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-100 text-sm text-center">{error}</p>
            </div>
          )}

          {/* Features list */}
          {!loading && !error && (
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-white/90 text-sm">
                <svg className="w-5 h-5 mr-3 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Send and receive money instantly
              </div>
              <div className="flex items-center text-white/90 text-sm">
                <svg className="w-5 h-5 mr-3 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Split bills with friends
              </div>
              <div className="flex items-center text-white/90 text-sm">
                <svg className="w-5 h-5 mr-3 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Keep your finances social
              </div>
            </div>
          )}

          {/* Privacy note */}
          <p className="text-center text-white/70 text-xs mt-6">
            By connecting, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>

        <button
          onClick={() => router.push('/')}
          className="mt-6 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm flex items-center gap-2 mx-auto"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Go Home
        </button>
      </div>
    </div>
  );
}
