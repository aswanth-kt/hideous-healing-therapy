import React from 'react';
import { motion } from 'framer-motion';
import useRevealOnScrollController from '../../../controllers/useRevealOnScrollController';
import servicesData from '../../../models/data/servicesData';
import SectionHeading from '../../shared/SectionHeading';
import Card from '../../shared/Card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesSectionView = () => {
  const { fadeUp } = useRevealOnScrollController();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeading
          title="Services Offered"
          subtitle="Support For Every Dynamic"
          align="center"
        />
        <div className="text-center mb-16 -mt-8">
          <p className="text-sm md:text-base text-text-muted max-w-xl mx-auto leading-relaxed">
            We offer expert, confidential counseling services tailored for individuals, couples, and families navigating the complexities of life and relationships.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className="h-full">
              <Card
                variant="glass"
                hoverEffect={true}
                glowOnHover={true}
                className="h-full border border-primary/15 flex flex-col justify-between p-8 group hover:border-primary/45 transition-colors duration-500"
              >
                <div>
                  <h3 className="text-xl font-bold font-serif text-text-dark group-hover:text-primary-dark transition-colors duration-300 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-primary-dark font-sans tracking-wide mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>
                  
                  {/* Points list */}
                  <ul className="space-y-3 mb-8">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-xs md:text-sm text-text-dark font-sans text-left">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-primary/10 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-primary-dark group-hover:text-primary transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSectionView;
