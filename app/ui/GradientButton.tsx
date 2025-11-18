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
      className="rounded-full p-[1.8px]"
      style={{
        background:
          "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <Link
        href={href}
        className="inline-block font-normal py-2 px-5 rounded-full"
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
