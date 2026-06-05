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
  width?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  label,
  href,
  bgColor = "#0274FE",
  textColor = "#FFFFFF",
  onClick,
  width,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
    
    // Handle anchor scrolling
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.getElementById(href.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Use regular anchor tag for hash links, Link for routes
  const isAnchorLink = href && href.startsWith('#');

  return (
    <div
      className={`${width ? width : "w-fit"} p-[1px] transition-transform duration-300 ease-out hover:scale-[1.02] cursor-pointer`}
      style={{
        borderRadius: "40px",
        background:
          "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
      }}
    >
      {isAnchorLink ? (
        <a
          href={href}
          onClick={handleClick}
          className="block font-normal py-3 px-6 text-center  transition-opacity duration-300 hover:opacity-85"
          style={{
            borderRadius: "40px",
            background: bgColor,
            color: textColor,
          }}
        >
          {label}
        </a>
      ) : (
        <Link
          href={href || ""}
          onClick={handleClick}
          className="block font-normal py-3 px-6 text-center  transition-opacity duration-300 hover:opacity-85 "
          style={{
            borderRadius: "40px",
            background: bgColor,
            color: textColor,
          }}
        >
          {label}
        </Link>
      )}
    </div>
  );
};

export default GradientButton;
  