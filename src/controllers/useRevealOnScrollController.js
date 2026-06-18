/**
 * Controller to provide shared scroll reveal properties.
 * Exposes Framer Motion layout configurations so views can easily
 * trigger unified scroll entries (fade-up, scale-in, etc.) in a declarative way.
 */
export const useRevealOnScrollController = (options = {}) => {
  const {
    delay = 0,
    duration = 0.7,
    yOffset = 30,
    xOffset = 0,
    scale = 1,
    once = true,
    margin = "-80px"
  } = options;

  const fadeUp = {
    initial: { 
      opacity: 0, 
      y: yOffset,
      x: xOffset,
      scale: scale
    },
    whileInView: { 
      opacity: 1, 
      y: 0,
      x: 0,
      scale: 1
    },
    viewport: { 
      once: once, 
      margin: margin 
    },
    transition: { 
      duration: duration, 
      delay: delay, 
      ease: [0.25, 1, 0.5, 1] // cubic-bezier exit
    }
  };

  const scaleIn = {
    initial: { 
      opacity: 0, 
      scale: 0.92 
    },
    whileInView: { 
      opacity: 1, 
      scale: 1 
    },
    viewport: { 
      once: once, 
      margin: margin 
    },
    transition: { 
      duration: duration + 0.1, 
      delay: delay, 
      ease: "easeOut" 
    }
  };

  return {
    fadeUp,
    scaleIn
  };
};

export default useRevealOnScrollController;
