import React from 'react';
import { motion } from 'framer-motion';

export const Button = React.forwardRef(({
  children,
  onClick,
  type = "button",
  variant = "primary", // primary, secondary, outline, text
  className = "",
  disabled = false,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium text-sm rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-dark hover:bg-primary-dark shadow-premium hover:shadow-glow px-6 py-3 font-semibold",
    secondary: "bg-dark text-accent hover:bg-dark-muted px-6 py-3 font-semibold border border-primary/20",
    outline: "border border-primary/30 text-primary hover:bg-primary hover:text-dark px-6 py-3",
    text: "text-primary hover:text-primary-dark px-4 py-2 hover:underline"
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';
export default Button;
