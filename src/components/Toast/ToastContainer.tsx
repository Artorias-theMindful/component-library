import React from "react";
import { Toast, type ToastProps } from "./Toast";
import "./toast.css";

interface Props {
  toasts: ToastProps[];
  removeToast: (id: string) => void;
}

export const ToastContainer: React.FC<Props> = ({ toasts, removeToast }) => {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={removeToast} />
      ))}
    </div>
  );
};
