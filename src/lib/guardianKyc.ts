export type GuardianContextData = {
  guardian: {
    fullName: string;
    email: string;
    relationship: string;
    verified: boolean;
  };
  minor: {
    fullName: string;
  };
  requiredDocuments: {
    idDocument: boolean;
    legalDocument: boolean;
  };
  uploadedDocuments: {
    idDocument: boolean;
    legalDocument: boolean;
  };
  allowedRelationships: string[];
};

export type ApiSuccessResponse<T> = {
  status: string;
  message: string;
  data: T;
};

export type UploadDocumentResponse = {
  path: string;
  url: string;
};

function getErrorMessage(err: unknown): string {
  if (err && typeof err === "object" && "response" in err) {
    const res = (err as { response?: { data?: { message?: string } } }).response;
    if (res?.data?.message) return res.data.message;
  }
  if (err instanceof Error) return err.message;
  return "Something went wrong. Please try again.";
}

export async function fetchGuardianContext(
  email: string
): Promise<GuardianContextData> {
  const res = await fetch(
    `/api/proxy/kyc/guardian/context?email=${encodeURIComponent(email)}`
  );
  const body = await res.json();
  if (!res.ok) {
    throw new Error(body?.message || "Failed to load verification context");
  }
  if (body.status !== "success" || !body.data) {
    throw new Error(body?.message || "Invalid response from server");
  }
  return body.data as GuardianContextData;
}

export async function uploadGuardianDocument(
  email: string,
  file: File
): Promise<UploadDocumentResponse> {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("file", file);

  const res = await fetch("/api/proxy/kyc/guardian/upload", {
    method: "POST",
    body: formData,
  });
  const body = await res.json();
  if (!res.ok) {
    throw new Error(body?.message || "Upload failed");
  }
  if (body.status !== "success" || !body.data?.url) {
    throw new Error(body?.message || "Invalid upload response");
  }
  return body.data as UploadDocumentResponse;
}

export async function verifyGuardianOtp(payload: {
  email: string;
  otp: string;
  guardianIdDocument: string;
  guardianLegalDocument?: string;
}): Promise<ApiSuccessResponse<unknown>> {
  const res = await fetch("/api/proxy/kyc/guardian/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const body = await res.json();
  if (!res.ok) {
    throw new Error(body?.message || "Verification failed");
  }
  return body as ApiSuccessResponse<unknown>;
}

export { getErrorMessage };

export const ALLOWED_UPLOAD_EXTENSIONS = [
  ".png",
  ".jpeg",
  ".jpg",
  ".pdf",
  ".xls",
];
export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export function validateUploadFile(file: File): string | null {
  if (file.size > MAX_UPLOAD_BYTES) {
    return "File too large. Maximum size is 10MB.";
  }
  const ext = file.name.includes(".")
    ? file.name.slice(file.name.lastIndexOf(".")).toLowerCase()
    : "";
  if (!ALLOWED_UPLOAD_EXTENSIONS.includes(ext)) {
    return "Allowed types: PNG, JPEG, JPG, PDF, XLS.";
  }
  return null;
}

export function formatRelationship(value: string): string {
  return value
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
