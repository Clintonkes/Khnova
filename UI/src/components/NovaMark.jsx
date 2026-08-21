import React from "react";

export default function NovaMark({ size = 22, className = "", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M6 18V6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 6V18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="18" cy="6" r="1.6" fill="currentColor" />
    </svg>
  );
}
