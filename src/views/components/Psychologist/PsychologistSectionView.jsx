import React from 'react';
import { motion } from 'framer-motion';
import useRevealOnScrollController from '../../../controllers/useRevealOnScrollController';
import psychologistBadgesData from '../../../models/data/psychologistBadgesData';
import SectionHeading from '../../shared/SectionHeading';
import * as Icons from 'lucide-react';

export const PsychologistSectionView = () => {
  const { fadeUp } = useRevealOnScrollController();

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Psychologist Image with overlapping decorative card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex items-center justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/20 bg-bg-light p-4 max-w-md">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-3xl" />
              
              <img
                src="/assets/images/psychologist-talking.webp"
                alt="Psychologist in session"
                className="rounded-2xl w-full h-auto object-cover max-h-[500px]"
              />

              {/* Overlapping small stats badge */}
              <div className="absolute bottom-8 right-8 glass px-5 py-3 rounded-2xl border border-primary/20 shadow-lg flex flex-col items-start text-left">
                <span className="text-xl font-serif font-bold text-primary-dark">15+ Years</span>
                <span className="text-[10px] font-sans font-semibold tracking-wider text-text-muted uppercase">Clinical Experience</span>
              </div>
            </div>
            
            {/* Ambient gold rings behind the card */}
            <div className="absolute -z-10 w-96 h-96 border border-primary/10 rounded-full scale-95 pointer-events-none animate-pulse" />
          </motion.div>

          {/* Right: Info Column */}
          <motion.div
            {...fadeUp}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            <SectionHeading
              title="Professional Counseling Services Just For You"
              subtitle="Meet Our Counselors"
              align="left"
              className="mb-6"
            />

            <p className="text-base text-text-muted leading-relaxed mb-8 font-sans">
              We provide confidential and empathetic support tailored to your unique experiences, helping you navigate challenges, strengthen relationships, and build emotional well-being. Everyone deserves a safe space to process their thoughts without judgment.
            </p>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {psychologistBadgesData.map((badge, idx) => {
                // Dynamically resolve icon from string
                const IconComponent = Icons[badge.iconName] || Icons.HelpCircle;

                return (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-3.5 p-4 rounded-2xl glass border border-primary/15 hover:border-primary/35 transition-colors duration-300 shadow-sm"
                  >
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary-dark">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-serif font-bold text-sm text-text-dark">
                      {badge.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PsychologistSectionView;
