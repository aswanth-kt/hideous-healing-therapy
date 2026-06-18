import { useTransform } from 'framer-motion';

/**
 * Controller to map scroll progress to the hero narrative words.
 * Triggers beautiful transitions (fade, blur, translation) for each word
 * as the canvas character walks through the stages of healing.
 */
export const useHeroScrollStoryController = (scrollYProgress, wordsData) => {
  const wordsCount = wordsData.length;

  // 1. Title & CTA container animations (fade out as scroll starts)
  // Main title is fully visible at 0% scroll, fades out completely by 20% scroll
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  // 2. Story Words Scroll Mapping
  // The story sequence runs between scroll progress 0.20 and 0.95
  const storyStart = 0.20;
  const storyEnd = 0.95;
  const storyRange = storyEnd - storyStart;
  const segmentLength = storyRange / wordsCount;

  const wordTransforms = wordsData.map((_, index) => {
    // Calculate the scroll center of this word
    const center = storyStart + segmentLength * index + segmentLength / 2;
    const width = segmentLength * 0.7; // overlapping threshold

    // Define scroll boundaries for input mapping
    const startFadeIn = Math.max(storyStart, center - width);
    const peakStart = center - width * 0.3;
    const peakEnd = center + width * 0.3;
    const endFadeOut = Math.min(storyEnd, center + width);

    // Transforms for opacity
    const opacity = useTransform(
      scrollYProgress,
      [startFadeIn, peakStart, peakEnd, endFadeOut],
      [0, 1, 1, 0]
    );

    // Transforms for blur (Framer Motion maps string filters smoothly)
    const blur = useTransform(
      scrollYProgress,
      [startFadeIn, peakStart, peakEnd, endFadeOut],
      ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]
    );

    // Transforms for translation (parallax vertical slide)
    const y = useTransform(
      scrollYProgress,
      [startFadeIn, center, endFadeOut],
      [40, 0, -40]
    );

    // Transforms for scale
    const scale = useTransform(
      scrollYProgress,
      [startFadeIn, center, endFadeOut],
      [0.9, 1, 0.9]
    );

    return {
      opacity,
      filter: blur,
      y,
      scale
    };
  });

  return {
    titleOpacity,
    titleY,
    titleScale,
    wordTransforms
  };
};

export default useHeroScrollStoryController;
