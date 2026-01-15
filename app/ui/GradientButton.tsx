// components/GradientButton.tsx
"use client";

import React from "react";
import Link from "next/link";

interface GradientButtonProps {
  label: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  label,
  href,
  bgColor = "#0274FE",
  textColor = "#FFFFFF",
  onClick
}) => {
  return (
    <div
      className="w-fit p-[1px]"
      style={{
        borderRadius: "40px",
        background:
          "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
      }}
    >
      <Link
        href={href || ""}
        onClick={onClick}
        className="block font-normal py-3 px-6 text-center"
        style={{
          borderRadius: "40px",
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
