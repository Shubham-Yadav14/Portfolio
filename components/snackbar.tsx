"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, AlertCircle, X } from "lucide-react";
import { useEffect } from "react";

export type SnackbarType = "success" | "info" | "error";

interface SnackbarProps {
  message: string;
  type?: SnackbarType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const icons = {
  success: Check,
  info: Info,
  error: AlertCircle,
};

const colors = {
  success: "bg-green-600",
  info: "bg-blue-600",
  error: "bg-red-600",
};

export default function Snackbar({
  message,
  type = "info",
  isVisible,
  onClose,
  duration = 3000,
}: SnackbarProps) {
  const Icon = icons[type];

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-4 sm:max-w-md ${colors[type]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3 max-w-full`}
        >
          <Icon size={20} />
          <span className="flex-1 text-sm">{message}</span>
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-1 rounded transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
