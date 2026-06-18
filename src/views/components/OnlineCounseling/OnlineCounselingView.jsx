import React from 'react';
import { motion } from 'framer-motion';
import useRevealOnScrollController from '../../../controllers/useRevealOnScrollController';
import SectionHeading from '../../shared/SectionHeading';
import Card from '../../shared/Card';
import { Users, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

export const OnlineCounselingView = () => {
  const { fadeUp } = useRevealOnScrollController();

  const highlights = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team of Psychologists",
      description: "Access a certified network of therapists specializing in mood, relationship, anxiety, and career challenges."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Confidential Environment",
      description: "Complete privacy is our core promise. Communicate anonymously or securely from your home."
    },
    {
      icon: <Compass className="w-8 h-8 text-primary" />,
      title: "Professional Guidance",
      description: "Receive evidence-based treatment plans tailored directly to your psychological goals and pace."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Emotional Support",
      description: "Work with counselors who listen without judgment, offering validation, safety, and deep empathy."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
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
    <section className="py-24 bg-dark text-accent relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,26,26,0.8)_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Quote Header Banner */}
        <motion.div
          {...fadeUp}
          className="w-full text-center mb-16 flex flex-col items-center justify-center"
        >
          <span className="text-primary font-serif text-5xl leading-none opacity-50">“</span>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-accent italic max-w-2xl mt-2 leading-relaxed">
            Be there for others but don't leave yourself.
          </p>
          <div className="w-16 h-[1.5px] bg-primary/40 mt-6" />
        </motion.div>

        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <SectionHeading
            title="Online Counseling Service"
            subtitle="Virtual Care Anywhere"
            align="center"
            className="mb-0 text-accent"
          />
          <p className="text-sm md:text-base text-accent/70 max-w-xl mt-4 leading-relaxed">
            Get premium, certified therapy sessions anywhere. Our online system connects you to clinical support, maintaining an emotionally safe environment.
          </p>
        </div>

        {/* Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {highlights.map((item, idx) => (
            <motion.div key={item.title} variants={cardVariants}>
              <Card
                variant="dark"
                hoverEffect={true}
                glowOnHover={true}
                className="h-full border border-primary/10 flex flex-col md:flex-row gap-6 p-8 items-start hover:border-primary/30 transition-colors duration-500 group"
              >
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary/20">
                  {item.icon}
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-lg md:text-xl font-bold font-serif text-accent group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-accent/70 leading-relaxed mt-2 font-sans">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OnlineCounselingView;
