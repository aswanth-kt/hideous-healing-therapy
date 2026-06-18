import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useTestimonialCarouselController from '../../../controllers/useTestimonialCarouselController';
import testimonialsData from '../../../models/data/testimonialsData';
import SectionHeading from '../../shared/SectionHeading';
import Card from '../../shared/Card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TestimonialsView = () => {
  const totalItems = testimonialsData.length;
  const { activeIndex, handleNext, handlePrev, handleSelect } = useTestimonialCarouselController(totalItems);

  const activeTestimonial = testimonialsData[activeIndex];

  const slideVariants = {
    enter: { opacity: 0, x: 20, scale: 0.98 },
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, scale: 0.98, transition: { duration: 0.4 } }
  };

  return (
    <section id="testimonials" className="py-24 bg-dark text-accent relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,26,26,0.6)_80%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <SectionHeading
          title="Stories of Restoration"
          subtitle="Client Testimonials"
          align="center"
          className="text-accent"
        />

        {/* Carousel Container */}
        <div className="relative flex flex-col items-center">
          
          {/* Card Carousel Box */}
          <div className="w-full min-h-[300px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <Card
                  variant="dark"
                  hoverEffect={false}
                  className="w-full border border-primary/15 bg-dark-muted/80 backdrop-blur-md p-10 md:p-12 rounded-3xl flex flex-col items-center text-center shadow-2xl relative"
                >
                  {/* Decorative Big Quote Icon */}
                  <span className="absolute top-6 left-10 text-primary/10 font-serif text-8xl leading-none select-none pointer-events-none">
                    “
                  </span>
                  
                  {/* Star Ratings */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimony Story */}
                  <p className="text-base md:text-xl text-accent font-serif leading-relaxed italic mb-8 max-w-2xl">
                    "{activeTestimonial.story}"
                  </p>

                  {/* Client Info */}
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold font-serif text-primary-dark tracking-wide uppercase">
                      {activeTestimonial.name}
                    </span>
                    <span className="text-[10px] font-sans font-semibold tracking-wider text-accent/50 uppercase mt-1 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                      {activeTestimonial.tag}
                    </span>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between w-full max-w-xs mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-primary/20 hover:border-primary text-accent hover:text-primary hover:bg-primary/5 flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-primary/20 hover:border-primary text-accent hover:text-primary hover:bg-primary/5 flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsView;
