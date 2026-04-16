"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 28 : 0,
      x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" as const }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerParent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" as const },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
