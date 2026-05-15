"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "primary" | "ghost-pill";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-primary text-white rounded-full text-[17px] font-normal px-[22px] py-[11px]",
  "ghost-pill":
    "bg-transparent text-primary border border-primary rounded-full text-[17px] font-normal px-[22px] py-[11px]",
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
      className={`inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity duration-150 ${styles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
