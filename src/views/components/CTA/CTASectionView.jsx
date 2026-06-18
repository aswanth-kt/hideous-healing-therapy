import React from 'react';
import { motion } from 'framer-motion';
import useRevealOnScrollController from '../../../controllers/useRevealOnScrollController';
import Button from '../../shared/Button';

export const CTASectionView = () => {
  const { fadeUp } = useRevealOnScrollController();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate 8 floating glowing particles
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 6
  }));

  return (
    <section className="relative py-28 bg-dark text-accent overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-muted to-primary/15 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Floating Particle Embers */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: ['0px', '-60px', '0px'],
            x: ['0px', '20px', '0px'],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          className="absolute rounded-full bg-primary/40 pointer-events-none"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.y}%`,
            left: `${p.x}%`
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Soft Glow Sparkle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 text-primary shadow-glow"
        >
          <span className="text-xl">✦</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-accent leading-tight max-w-2xl mb-6"
        >
          You Don't Have To Carry Everything Alone
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-accent/80 max-w-xl mb-10 leading-relaxed font-sans"
        >
          Healing begins when you allow yourself the same care, space, and deep compassion you so freely offer to those around you.
        </motion.p>

        {/* Action button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="primary"
            onClick={(e) => handleScrollTo(e, '#journey')}
            className="px-8 py-4 text-base font-bold shadow-lg hover:shadow-glow"
          >
            Start Your Healing Journey
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASectionView;
