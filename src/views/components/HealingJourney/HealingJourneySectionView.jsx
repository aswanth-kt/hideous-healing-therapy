import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import useRevealOnScrollController from '../../../controllers/useRevealOnScrollController';
import healingJourneyData from '../../../models/data/healingJourneyData';
import SectionHeading from '../../shared/SectionHeading';
import Card from '../../shared/Card';

export const HealingJourneySectionView = () => {
  const containerRef = useRef(null);
  const { fadeUp } = useRevealOnScrollController();

  // Scroll tracking to drive the path animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll path progress
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      ref={containerRef}
      id="journey"
      className="py-24 bg-bg-light relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header */}
        <SectionHeading
          title="The Healing Journey"
          subtitle="Path to Transformation"
          align="center"
        />
        <div className="text-center mb-20 -mt-8">
          <p className="text-sm md:text-base text-text-muted max-w-xl mx-auto leading-relaxed">
            Healing is a structured journey. Here is what you can expect as we navigate the path toward emotional freedom and self-renewal together.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12">
          
          {/* Vertical Connecting Line (Background Track) */}
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[2px] bg-primary/10 -translate-x-1/2 pointer-events-none" />
          
          {/* Animated Connecting Line (Linked to Scroll) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary to-primary-dark -translate-x-1/2 origin-top pointer-events-none"
          />

          {/* Timeline Steps */}
          <div className="space-y-12">
            {healingJourneyData.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className="flex flex-col md:flex-row items-start md:items-center relative"
                >
                  
                  {/* Step Bubble (Left Aligned for mobile, Center Aligned for desktop) */}
                  <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                      className="w-10 h-10 rounded-full bg-dark border-2 border-primary text-primary flex items-center justify-center font-serif font-bold text-sm shadow-md shadow-primary/25"
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Left Content Side (Invisible on mobile, alternating on desktop) */}
                  <div className={`hidden md:block w-1/2 pr-12 text-right ${isEven ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    {isEven && (
                      <motion.div
                        {...fadeUp}
                        className="flex flex-col items-end"
                      >
                        <span className="text-xs font-semibold uppercase text-primary-dark tracking-widest mb-1">
                          Phase 0{step.step}
                        </span>
                        <h3 className="text-xl font-bold font-serif text-text-dark mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs text-primary font-sans font-medium mb-3 italic">
                          {step.subtitle}
                        </p>
                        <p className="text-sm text-text-muted leading-relaxed max-w-sm">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Spacer for mobile layout alignment / Right Content Side (Desktop) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-12 text-left ${!isEven ? 'md:block' : 'md:opacity-0 md:pointer-events-none'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                      className="md:max-w-md"
                    >
                      {/* For mobile view (which needs to show all details) or alternating right views */}
                      <div className="md:hidden">
                        <span className="text-xs font-semibold uppercase text-primary-dark tracking-widest mb-1 block">
                          Phase 0{step.step}
                        </span>
                        <h3 className="text-xl font-bold font-serif text-text-dark mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-primary font-sans font-semibold mb-3 italic">
                          {step.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Desktop view (only renders when index is odd) */}
                      {!isEven && (
                        <div className="hidden md:block">
                          <span className="text-xs font-semibold uppercase text-primary-dark tracking-widest mb-1 block">
                            Phase 0{step.step}
                          </span>
                          <h3 className="text-xl font-bold font-serif text-text-dark mb-2">
                            {step.title}
                          </h3>
                          <p className="text-xs text-primary font-sans font-medium mb-3 italic">
                            {step.subtitle}
                          </p>
                          <p className="text-sm text-text-muted leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HealingJourneySectionView;
