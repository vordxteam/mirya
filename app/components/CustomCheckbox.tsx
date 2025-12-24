"use client";

import React from "react";

interface CustomCheckboxProps {
  label: React.ReactNode; // 👈 important change
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  value?: string;
  className?: string;
  labelClassName?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  onChange,
  name,
  value,
  className = "",
  labelClassName = "text-[14px] leading-5",
}) => {
  return (
<label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      {/* Checkbox */}
      <input
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        name={name}
        value={value}
      />

      <div
        className="w-4 h-4 mt-[2px] border border-white rounded flex items-center justify-center
                      peer-checked:[&_svg]:opacity-100"
      >
        <svg
          className="w-3 h-3 text-white opacity-0 transition-opacity"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* Label Content */}
      <div className={`text-[#FFFFFFB2] select-none ${labelClassName}`}>
        {label}
      </div>
    </label>
  );
};

export default CustomCheckbox;
