// components/GradientButton.tsx
"use client";

import React from "react";
import Link from "next/link";

interface GradientButtonProps {
  label: string;
  href: string;
  bgColor?: string;
  textColor?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  label,
  href,
  bgColor = "#00031C",
  textColor = "#FFFFFF",
}) => {
  return (
    <div
      /* Added p-[1px] for even thickness, w-fit to prevent stretching, 
         and flex to center the content perfectly */
      className="rounded-full p-[1px] w-fit flex items-center justify-center" 
      style={{
        background:
          "linear-gradient(0deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
      }}
    >
      <Link
        href={href}
        /* Changed to block and removed extra spacing issues */
        className="block font-normal py-2 px-5 rounded-full cursor-pointer"
        style={{
          background: bgColor,
          color: textColor,
        }}
      >
        {label}
      </Link>
    </div>
  );
};

export default GradientButton;