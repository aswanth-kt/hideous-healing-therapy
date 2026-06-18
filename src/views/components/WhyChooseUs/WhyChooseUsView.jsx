import React from 'react';
import { motion } from 'framer-motion';
import useRevealOnScrollController from '../../../controllers/useRevealOnScrollController';
import whyChooseUsData from '../../../models/data/whyChooseUsData';
import SectionHeading from '../../shared/SectionHeading';
import Card from '../../shared/Card';
import * as Icons from 'lucide-react';

export const WhyChooseUsView = () => {
  const { fadeUp } = useRevealOnScrollController();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeading
          title="Why Choose Hideous Healing"
          subtitle="Our Strengths"
          align="center"
        />
        <div className="text-center mb-16 -mt-8">
          <p className="text-sm md:text-base text-text-muted max-w-xl mx-auto leading-relaxed">
            We understand the courage it takes to seek help. We offer professional, high-standard therapeutic care that centers around your safety, comfort, and schedule.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {whyChooseUsData.map((item) => {
            const IconComponent = Icons[item.iconName] || Icons.HelpCircle;

            return (
              <motion.div key={item.id} variants={cardVariants} className="h-full">
                <Card
                  variant="glass"
                  hoverEffect={true}
                  glowOnHover={true}
                  className="h-full border border-primary/10 flex flex-col items-center text-center p-8 group hover:border-primary/40 transition-all duration-500"
                >
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 text-primary-dark flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-105">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-serif text-text-dark mb-3 group-hover:text-primary-dark transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed font-sans">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUsView;
