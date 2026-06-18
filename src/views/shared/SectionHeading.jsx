import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  title,
  subtitle,
  align = "center", // center, left
  className = ""
}) => {
  const alignClasses = align === "left" ? "text-left items-start" : "text-center items-center";
  
  return (
    <div className={`flex flex-col mb-12 ${alignClasses} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary-dark font-sans font-bold text-xs tracking-widest uppercase mb-2"
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-text-dark leading-tight"
      >
        {title}
      </motion.h2>
      
      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-gradient-to-r from-primary to-primary-dark mt-4 rounded-full"
      />
    </div>
  );
};

export default SectionHeading;
