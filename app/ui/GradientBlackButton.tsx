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
  className="rounded-[40px] w-fit transition-all"
  style={{
    /* First background: The solid card color */
    /* Second background: The 3-shade border gradient */
    backgroundImage: `linear-gradient(#00031C, #00031C), 
                      linear-gradient(180deg, #4D4D4D 0%, #FFFFFF 50%, #4D4D4D 100%)`,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    border: "1px solid transparent",
  }}
>
      <Link
        href={href}
        /* Changed to block and removed extra spacing issues */
        className="block font-normal py-3 px-6 rounded-full cursor-pointer"
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