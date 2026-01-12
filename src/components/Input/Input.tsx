import React, { useState } from "react";
import "./input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  clearable = false,
  value,
  onChange,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClear = () => {
    if (onChange) {
      const e = {
        target: { value: "" }
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(e);
    }
  };

  const isPassword = type === "password";

  return (
    <div className="input-wrapper">
      <input
        {...rest}
        className="input-field"
        type={isPassword && showPassword ? "text" : type}
        value={value}
        onChange={onChange}
      />

      {/* Password Toggle */}
      {isPassword && (
        <button
          type="button"
          className={`input-icon ${clearable ? "input-icon-shift" : ""}`}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      )}

      {/* Clear Button */}
      {clearable && value && String(value).length > 0 && (
        <button
          type="button"
          className="input-clear-btn"
          onClick={handleClear}
        >
          ×
        </button>
      )}
    </div>
  );
};
