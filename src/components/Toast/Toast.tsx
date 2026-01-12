import React, { useEffect } from "react";
import "./toast.css";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastProps {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
  closable?: boolean;
  onClose?: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  message,
  type = "info",
  duration = 3000,
  closable = true,
  onClose
}) => {
  useEffect(() => {
    if (!duration) return;
    const timer = setTimeout(() => {
      onClose?.(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, id, onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <span className="toast-message">{message}</span>

      {closable && (
        <button
          className="toast-close-btn"
          onClick={() => onClose?.(id)}
        >
          ×
        </button>
      )}
    </div>
  );
};
