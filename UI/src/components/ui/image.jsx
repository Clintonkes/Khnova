import React from "react";

export function Image({ src, alt = "", fittingType = "fill", className = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${fittingType === "fill" ? "object-cover" : "object-contain"} ${className}`}
      {...props}
    />
  );
}
