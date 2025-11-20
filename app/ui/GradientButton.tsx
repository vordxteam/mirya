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
          "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
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
