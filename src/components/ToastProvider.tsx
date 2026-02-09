"use client";

import { ToastContainer } from "@/components/Toast";
import { ToastProvider as Provider, useToast } from "@/contexts/ToastContext";

function ToastRenderer() {
  const { toasts, dismissToast } = useToast();
  return <ToastContainer toasts={toasts} onDismiss={dismissToast} />;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      {children}
      <ToastRenderer />
    </Provider>
  );
}
