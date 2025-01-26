"use client";

import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  buttonName?: string;
  color?: string; // Add dynamic color prop
  size?: string; // Add dynamic size prop
  onClick?: () => void;
}

const Button = ({
  children,
  className = "",
  // buttonName,
  color,
  size,
  onClick,
}: ButtonProps) => {
  // Combine dynamic styles with additional classes
  const dynamicStyles = `${color || "text-white"} ${
    size || "px-4 py-2"
  } ${className}`;

  return (
    <button
      className={dynamicStyles}
      onClick={onClick ? onClick : undefined}
      // onClick={() => alert(`Hello from your ${buttonName} app!`)}
    >
      {children}
    </button>
  );
};

export default Button;
