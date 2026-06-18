import React from 'react';
import { motion } from 'framer-motion';

export const Badge = ({
  children,
  className = "",
  variant = "primary", // primary, outline, secondary
  ...props
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase font-sans border transition-all duration-300";
  
  const variants = {
    primary: "bg-primary/10 border-primary/20 text-primary-dark shadow-sm",
    outline: "border-primary/30 bg-transparent text-primary-dark hover:border-primary/60",
    secondary: "bg-dark/10 border-dark/10 text-dark"
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Badge;
