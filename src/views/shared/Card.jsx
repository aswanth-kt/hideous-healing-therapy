import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({
  children,
  className = "",
  hoverEffect = true,
  glowOnHover = false,
  variant = "glass", // glass, dark, outline, flat
  ...props
}) => {
  const baseStyles = "rounded-2xl p-6 overflow-hidden transition-all duration-500 shadow-premium";
  
  const variants = {
    glass: "glass text-text-dark",
    dark: "glass-dark text-accent",
    outline: "border border-primary/20 bg-transparent text-text-dark",
    flat: "bg-bg-light/50 border border-primary/10 text-text-dark"
  };

  const hoverAnimation = hoverEffect 
    ? { 
        y: -6, 
        scale: 1.01,
        boxShadow: glowOnHover 
          ? "0 20px 40px -15px rgba(213, 164, 78, 0.25), 0 0 30px rgba(213, 164, 78, 0.15)" 
          : "0 25px 50px -12px rgba(26, 26, 26, 0.08)"
      } 
    : {};

  return (
    <motion.div
      whileHover={hoverAnimation}
      className={`${baseStyles} ${variants[variant] || variants.glass} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
