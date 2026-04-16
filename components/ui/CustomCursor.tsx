"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if it's a desktop device (has a fine pointer)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth trailing effect
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!isDesktop) return;

    // Add global class to hide default cursor
    document.body.style.cursor = "none";
    
    // Create a style element to hide cursor on text elements but show native pointer on interactive ones
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.innerHTML = `
      body { cursor: none; }
      a, button, [role="button"], input, select, textarea, .card-hover, .clickable,
      a *, button *, [role="button"] *, .card-hover * { cursor: pointer !important; }
    `;
    document.head.appendChild(style);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const clickableTarget = 
        target.closest("a") || 
        target.closest("button") || 
        target.closest("[role='button']") ||
        target.closest(".card-hover") ||
        target.closest("input");

      if (clickableTarget) {
        setIsClickable(true);
        setIsHovered(false);
      } else if (
        target.closest("h1") ||
        target.closest("h2") ||
        target.closest("h3") ||
        target.closest("p") || // paragraph test
        target.closest(".hover-text") ||
        target.tagName.toLowerCase() === "svg" ||
        target.tagName.toLowerCase() === "img"
      ) {
        setIsHovered(true);
        setIsClickable(false);
      } else {
        setIsHovered(false);
        setIsClickable(false);
      }
    };

    const handleMouseLeavePage = () => {
      setIsVisible(false);
    };

    const handleMouseEnterPage = () => {
      setIsVisible(true);
    };

    // Use requestAnimationFrame for smoother updates if needed, 
    // but Framer Motion's motion values perform very well on window events.
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeavePage);
    document.addEventListener("mouseenter", handleMouseEnterPage);

    return () => {
      document.body.style.cursor = "auto";
      const styleEl = document.getElementById("custom-cursor-style");
      if (styleEl) styleEl.remove();

      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeavePage);
      document.removeEventListener("mouseenter", handleMouseEnterPage);
    };
  }, [cursorX, cursorY, isDesktop, isVisible]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block ${isHovered ? "mix-blend-difference" : ""}`}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: isHovered ? "white" : "#1558B0",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible && !isClickable ? 1 : 0,
        scale: isVisible && !isClickable ? (isHovered ? 4 : 1) : 0,
        width: 16,
        height: 16,
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.2 }
      }}
    />
  );
};
