"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useToast } from "@/contexts/ToastContext";
import {
  fetchGuardianContext,
  formatRelationship,
  uploadGuardianDocument,
  validateUploadFile,
  verifyGuardianOtp,
  type GuardianContextData,
} from "@/lib/guardianKyc";

type DocKind = "idDocument" | "legalDocument";

function decodeGuardianEmail(param: string | string[] | undefined): string | null {
  if (!param) return null;
  const raw = Array.isArray(param) ? param[0] : param;
  try {
    const email = decodeURIComponent(raw).trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
    return email;
  } catch {
    return null;
  }
}

function DocumentUploadBlock({
  label,
  description,
  uploaded,
  uploading,
  fileName,
  onSelect,
}: {
  label: string;
  description: string;
  uploaded: boolean;
  uploading: boolean;
  fileName: string | null;
  onSelect: (file: File) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="rounded-2xl border border-[#2E2D01]/10 bg-white p-4 space-y-3">
      <div>
        <p className="font-jakarta text-sm font-semibold text-[#2E2D01]">{label}</p>
        <p className="font-jakarta text-xs text-[#7E7D5C] mt-1">{description}</p>
      </div>
      {uploaded && (
        <div className="flex items-center gap-2 text-[#1D9953] text-sm font-jakarta">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Uploaded{fileName ? `: ${fileName}` : ""}
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept=".png,.jpeg,.jpg,.pdf,.xls,image/png,image/jpeg,application/pdf,application/vnd.ms-excel"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onSelect(file);
          e.target.value = "";
        }}
      />
      <button
        type="button"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
        className="w-full h-11 rounded-xl border border-[#2E2D01]/15 bg-[#FEFAD7]/50 font-jakarta text-sm font-medium text-[#2E2D01] hover:bg-[#FEFAD7] disabled:opacity-50 transition-colors"
      >
        {uploading ? "Uploading…" : uploaded ? "Replace file" : "Choose file"}
      </button>
      <p className="text-[11px] text-[#7E7D5C] font-jakarta">PNG, JPG, PDF, or XLS · Max 10MB</p>
    </div>
  );
}

export default function GuardianVerificationPage() {
  const params = useParams();
  const { showToast } = useToast();

  const email = useMemo(
    () => decodeGuardianEmail(params?.guardianemail),
    [params?.guardianemail]
  );

  const [contextLoading, setContextLoading] = useState(true);
  const [contextError, setContextError] = useState<string | null>(null);
  const [context, setContext] = useState<GuardianContextData | null>(null);

  const [idDocumentUrl, setIdDocumentUrl] = useState<string | null>(null);
  const [legalDocumentUrl, setLegalDocumentUrl] = useState<string | null>(null);
  const [idFileName, setIdFileName] = useState<string | null>(null);
  const [legalFileName, setLegalFileName] = useState<string | null>(null);
  const [uploadingId, setUploadingId] = useState(false);
  const [uploadingLegal, setUploadingLegal] = useState(false);

  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const loadContext = useCallback(async () => {
    if (!email) {
      setContextLoading(false);
      setContextError("Invalid guardian email in link.");
      return;
    }
    setContextLoading(true);
    setContextError(null);
    try {
      const data = await fetchGuardianContext(email);
      setContext(data);
    } catch (err) {
      setContextError(err instanceof Error ? err.message : "Failed to load verification");
    } finally {
      setContextLoading(false);
    }
  }, [email]);

  useEffect(() => {
    loadContext();
  }, [loadContext]);

  const needsId = context?.requiredDocuments.idDocument ?? true;
  const needsLegal = context?.requiredDocuments.legalDocument ?? false;

  const handleUpload = async (kind: DocKind, file: File) => {
    if (!email) return;
    const validationError = validateUploadFile(file);
    if (validationError) {
      showToast("error", validationError);
      return;
    }
    const setUploading = kind === "idDocument" ? setUploadingId : setUploadingLegal;
    setUploading(true);
    try {
      const { url } = await uploadGuardianDocument(email, file);
      if (kind === "idDocument") {
        setIdDocumentUrl(url);
        setIdFileName(file.name);
      } else {
        setLegalDocumentUrl(url);
        setLegalFileName(file.name);
      }
      showToast("success", "Document uploaded successfully");
    } catch (err) {
      showToast("error", err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = otp.split("");
    while (next.length < 6) next.push("");
    next[index] = digit;
    const joined = next.join("").slice(0, 6);
    setOtp(joined);
    if (digit && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    setOtp(pasted);
    const focusIndex = Math.min(pasted.length, 5);
    otpRefs.current[focusIndex]?.focus();
  };

  const canSubmit = Boolean(
    email &&
      otp.length === 6 &&
      (needsId ? idDocumentUrl : true) &&
      (needsLegal ? legalDocumentUrl : true)
  );

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !canSubmit) return;
    setVerifying(true);
    try {
      await verifyGuardianOtp({
        email,
        otp,
        guardianIdDocument: idDocumentUrl!,
        ...(needsLegal && legalDocumentUrl
          ? { guardianLegalDocument: legalDocumentUrl }
          : {}),
      });
      setSubmitted(true);
      showToast("success", "Verification submitted successfully");
    } catch (err) {
      showToast("error", err instanceof Error ? err.message : "Verification failed");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#FEFAD7] selection:bg-yodo-yellow/30">
      <nav className="flex items-center justify-between px-6 py-8 md:px-12 max-w-3xl mx-auto w-full relative z-50">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-28 md:h-12 md:w-32 transition-transform hover:scale-105">
            <Image src="/logo.png" alt="Yodo Pay" fill className="object-contain" priority />
          </div>
        </Link>
        <Link
          href="/"
          className="font-jakarta text-[#2E2D01] hover:text-[#7E7D5C] transition-colors text-sm md:text-base"
        >
          Back to Home
        </Link>
      </nav>

      <main className="mx-auto flex max-w-2xl flex-col px-6 pt-4 pb-16 md:pb-24 relative z-10">
        <div className="w-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg">
          <h1 className="font-jakarta text-3xl md:text-4xl font-bold text-[#2E2D01] mb-2">
            Guardian verification
          </h1>
          <p className="font-jakarta text-[#7E7D5C] text-sm md:text-base mb-8">
            Complete verification to approve a minor&apos;s Yodo Pay account. Enter the OTP sent to your email, upload required documents, then submit.
          </p>

          {!email && (
            <div className="rounded-2xl bg-[#FEF2F2] border border-[#B91C1C]/20 p-4 text-[#991B1B] font-jakarta text-sm">
              This link is invalid. Please use the verification link from your email.
            </div>
          )}

          {email && contextLoading && (
            <div className="flex flex-col items-center py-12 gap-4">
              <div className="w-10 h-10 border-2 border-[#2E2D01]/20 border-t-[#2E2D01] rounded-full animate-spin" />
              <p className="font-jakarta text-[#7E7D5C] text-sm">Loading verification details…</p>
            </div>
          )}

          {email && !contextLoading && contextError && (
            <div className="rounded-2xl bg-[#FEF2F2] border border-[#B91C1C]/20 p-4 text-[#991B1B] font-jakarta text-sm">
              {contextError}
            </div>
          )}

          {email && !contextLoading && context && !submitted && (
            <div className="space-y-8">
              {/* Context summary */}
              <div className="rounded-2xl bg-[#EFECE8] border border-[#E5E2DE] p-5 space-y-4">
                <div>
                  <p className="text-xs font-jakarta font-medium text-[#6B6B66] uppercase tracking-wide">
                    Guardian
                  </p>
                  <p className="font-jakarta font-semibold text-[#2E2D01] mt-1">
                    {context.guardian.fullName}
                  </p>
                  <p className="font-jakarta text-sm text-[#7E7D5C]">{context.guardian.email}</p>
                  <p className="font-jakarta text-sm text-[#4A4A45] mt-1">
                    Relationship: {formatRelationship(context.guardian.relationship)}
                  </p>
                </div>
                <div className="border-t border-[#E5E2DE] pt-4">
                  <p className="text-xs font-jakarta font-medium text-[#6B6B66] uppercase tracking-wide">
                    Minor account
                  </p>
                  <p className="font-jakarta font-semibold text-[#2E2D01] mt-1">
                    {context.minor.fullName}
                  </p>
                </div>
              </div>

              {/* Step 1: Documents */}
              <section className="space-y-4">
                <h2 className="font-jakarta text-lg font-bold text-[#2E2D01]">
                  1. Upload documents
                </h2>
                {needsId && (
                  <DocumentUploadBlock
                    label="Government-issued ID"
                    description="Upload a valid photo ID proving your identity as the guardian."
                    uploaded={!!idDocumentUrl || context.uploadedDocuments.idDocument}
                    uploading={uploadingId}
                    fileName={idFileName}
                    onSelect={(file) => handleUpload("idDocument", file)}
                  />
                )}
                {needsLegal && (
                  <DocumentUploadBlock
                    label="Legal guardianship document"
                    description="Required for legal guardians. Upload court order or legal proof of guardianship."
                    uploaded={!!legalDocumentUrl || context.uploadedDocuments.legalDocument}
                    uploading={uploadingLegal}
                    fileName={legalFileName}
                    onSelect={(file) => handleUpload("legalDocument", file)}
                  />
                )}
              </section>

              {/* Step 2: OTP */}
              <section className="space-y-4">
                <h2 className="font-jakarta text-lg font-bold text-[#2E2D01]">
                  2. Enter verification code
                </h2>
                <p className="font-jakarta text-sm text-[#7E7D5C]">
                  Enter the 6-digit code sent to <span className="text-[#2E2D01] font-medium">{email}</span>.
                </p>
                <div
                  className="flex gap-2 sm:gap-3 justify-center"
                  onPaste={handleOtpPaste}
                >
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <input
                      key={i}
                      ref={(el) => {
                        otpRefs.current[i] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={otp[i] ?? ""}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      className="w-11 h-14 sm:w-12 sm:h-16 text-center text-xl font-semibold font-jakarta rounded-xl border border-[#2E2D01]/15 bg-white text-[#2E2D01] outline-none focus:border-[#2E2D01]/40 focus:ring-2 focus:ring-[#FFD325]/30"
                      aria-label={`Digit ${i + 1}`}
                    />
                  ))}
                </div>
              </section>

              {/* Submit */}
              <form onSubmit={handleVerify}>
                <button
                  type="submit"
                  disabled={!canSubmit || verifying}
                  className="w-full h-14 rounded-[1.75rem] bg-[#292800] font-jakarta font-bold text-[#E6E4AD] transition-all hover:bg-[#3E3D01] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm"
                >
                  {verifying ? "Submitting…" : "Submit verification"}
                </button>
                {!canSubmit && otp.length === 6 && (
                  <p className="mt-3 text-center font-jakarta text-xs text-[#7E7D5C]">
                    Upload all required documents before submitting.
                  </p>
                )}
              </form>
            </div>
          )}

          {submitted && (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DDF5E6] border border-[#1D9953]/20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1D9953" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-jakarta text-xl font-bold text-[#2E2D01]">
                Verification submitted
              </h2>
              <p className="font-jakarta text-[#7E7D5C] text-sm max-w-md">
                Thank you. Your guardian verification has been submitted and is pending admin review. The minor will be notified once approved.
              </p>
            </div>
          )}
        </div>
      </main>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-yodo-yellow/5 to-transparent pointer-events-none" />
    </div>
  );
}
