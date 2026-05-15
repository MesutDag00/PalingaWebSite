"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      whileHover={{ borderColor: "#0A0A0A" }}
      transition={{ duration: 0.15 }}
      className={`rounded-xl border border-border-line p-6 bg-white ${className}`}
    >
      {children}
    </motion.div>
  );
}
