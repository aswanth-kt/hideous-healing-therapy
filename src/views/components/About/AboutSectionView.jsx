import React from 'react';
import { motion } from 'framer-motion';
import useRevealOnScrollController from '../../../controllers/useRevealOnScrollController';
import SectionHeading from '../../shared/SectionHeading';

export const AboutSectionView = () => {
  const { fadeUp } = useRevealOnScrollController();

  return (
    <section id="about" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text Column */}
          <motion.div
            {...fadeUp}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            <SectionHeading
              title="The Meaning Behind Hideous Healing"
              subtitle="Our Philosophy"
              align="left"
              className="mb-6"
            />
            
            <p className="text-base md:text-lg text-text-dark font-medium leading-relaxed mb-6 font-serif">
              Healing is not always beautiful — sometimes it's messy, uncomfortable, and forces us to confront parts of ourselves we've long ignored.
            </p>
            
            <div className="space-y-4 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                <strong>"Hideous Healing"</strong> represents the transformative process of confronting painful experiences, difficult emotions, and hidden wounds. True transformation doesn't come from ignoring the cracks, but from working through the discomfort of raw self-confrontation.
              </p>
              <p>
                Like the ancient art of Kintsugi, where broken pottery is repaired with gold lacquer, we believe that your wounds are not something to hide. Once mended, those fractures become the strongest, most beautiful parts of your history.
              </p>
              <p>
                At Hideous Healing, we provide a safe, confidential, and judgment-free space where you can explore your struggles under professional guidance, rebuilding your life with strength, resilience, and authenticity.
              </p>
            </div>
          </motion.div>

          {/* Right Illustration Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-center justify-center"
          >
            <div className="relative group p-4 bg-bg-light border border-primary/10 rounded-3xl shadow-premium overflow-hidden">
              {/* Card background glowing edge */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 rounded-3xl" />
              
              <img
                src="/assets/images/healing-illustration.png"
                alt="Emotional Healing Kintsugi Illustration"
                className="rounded-2xl max-w-full h-auto object-cover max-h-[480px] shadow-lg transition-transform duration-700 group-hover:scale-[1.02]"
              />
              
              {/* Floating quote badge */}
              <div className="absolute -bottom-2 -left-2 md:-left-1 max-w-xs glass p-5 rounded-2xl border border-primary/20 shadow-lg text-left hidden sm:block">
                <span className="text-primary-dark font-serif text-3xl leading-none">“</span>
                <p className="text-xs text-text-dark italic font-sans mt-1">
                  The wound is the place where the Light enters you.
                </p>
                <span className="text-xs font-semibold text-primary mt-2 block font-sans">— Rumi</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSectionView;
