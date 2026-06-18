import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Controller for the Testimonials Carousel.
 * Manages active index, autoplay intervals, and navigation overrides.
 */
export const useTestimonialCarouselController = (totalItems, autoplayInterval = 6000) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const setSlide = useCallback((index) => {
    if (index >= 0 && index < totalItems) {
      setActiveIndex(index);
    }
  }, [totalItems]);

  // Autoplay hook
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, autoplayInterval);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [nextSlide, autoplayInterval]);

  const resetAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(nextSlide, autoplayInterval);
  }, [nextSlide, autoplayInterval]);

  const handleNext = () => {
    nextSlide();
    resetAutoplay();
  };

  const handlePrev = () => {
    prevSlide();
    resetAutoplay();
  };

  const handleSelect = (idx) => {
    setSlide(idx);
    resetAutoplay();
  };

  return {
    activeIndex,
    handleNext,
    handlePrev,
    handleSelect
  };
};

export default useTestimonialCarouselController;
