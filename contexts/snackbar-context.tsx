"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Snackbar, { SnackbarType } from "@/components/snackbar";

interface SnackbarContextType {
  showSnackbar: (message: string, type?: SnackbarType, duration?: number) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: SnackbarType;
    isVisible: boolean;
    duration: number;
  }>({
    message: "",
    type: "info",
    isVisible: false,
    duration: 3000,
  });

  const showSnackbar = (message: string, type: SnackbarType = "info", duration: number = 3000) => {
    setSnackbar({ message, type, isVisible: true, duration });
  };

  const handleClose = () => {
    setSnackbar((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        isVisible={snackbar.isVisible}
        onClose={handleClose}
        duration={snackbar.duration}
      />
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
}
