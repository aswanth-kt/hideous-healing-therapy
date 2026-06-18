import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import animationConstants from '../models/constants/animationConstants';

export const useFrameAnimationController = (containerRef) => {
  const {
    TOTAL_FRAMES,
    FRAME_PATH_PREFIX,
    FRAME_FILE_EXTENSION,
    TIMEOUT_DURATION,
    STATIC_FALLBACK_IMAGE
  } = animationConstants;

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [hasFailed, setHasFailed] = useState(false);
  const [, setTriggerUpdate] = useState(0);

  const imagesRef = useRef(new Array(TOTAL_FRAMES).fill(null));
  const loadedFramesRef = useRef(new Array(TOTAL_FRAMES).fill(false));
  const loadingFramesRef = useRef(new Array(TOTAL_FRAMES).fill(false));
  const requestRef = useRef(null);

  const getFrameSrc = (index) => {
    const frameNum = index + 1;
    const frameStr = String(frameNum).padStart(3, '0');
    return `/${FRAME_PATH_PREFIX}${frameStr}${FRAME_FILE_EXTENSION}`;
  };

  const loadFrame = (index, onComplete) => {
    if (index < 0 || index >= TOTAL_FRAMES) return;
    if (loadedFramesRef.current[index] || loadingFramesRef.current[index]) {
      if (loadedFramesRef.current[index] && onComplete) onComplete();
      return;
    }

    loadingFramesRef.current[index] = true;
    const img = new Image();
    img.src = getFrameSrc(index);
    img.onload = () => {
      imagesRef.current[index] = img;
      loadedFramesRef.current[index] = true;
      loadingFramesRef.current[index] = false;
      setTriggerUpdate((prev) => prev + 1);
      if (onComplete) onComplete();
    };
    img.onerror = () => {
      loadingFramesRef.current[index] = false;
      console.warn(`Failed to load frame index ${index}`);
      if (onComplete) onComplete();
    };
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 300,
    mass: 0.8,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (requestRef.current) return;
    requestRef.current = requestAnimationFrame(() => {
      requestRef.current = null;
      const index = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(latest * (TOTAL_FRAMES - 1))));
      setCurrentFrameIndex(index);
    });
  });

  useEffect(() => {
    let active = true;

    const sparseIndices = [];
    for (let i = 0; i < TOTAL_FRAMES; i += 8) {
      sparseIndices.push(i);
    }
    if (sparseIndices[sparseIndices.length - 1] !== TOTAL_FRAMES - 1) {
      sparseIndices.push(TOTAL_FRAMES - 1);
    }

    let loadedSparseCount = 0;

    const startBackgroundLoading = () => {
      let nextIndex = 0;
      const CONCURRENCY = 3;

      const loadNext = () => {
        if (!active || nextIndex >= TOTAL_FRAMES) return;

        while (nextIndex < TOTAL_FRAMES && (loadedFramesRef.current[nextIndex] || loadingFramesRef.current[nextIndex])) {
          nextIndex++;
        }

        if (nextIndex >= TOTAL_FRAMES) return;

        const indexToLoad = nextIndex++;
        loadFrame(indexToLoad, () => {
          if (!active) return;
          setTimeout(loadNext, 10);
        });
      };

      for (let c = 0; c < CONCURRENCY; c++) {
        loadNext();
      }
    };

    sparseIndices.forEach((idx) => {
      loadFrame(idx, () => {
        if (!active) return;
        loadedSparseCount++;
        if (loadedSparseCount === 1 || loadedSparseCount === Math.floor(sparseIndices.length / 2)) {
          setIsInitialLoading(false);
        }
        if (loadedSparseCount === sparseIndices.length) {
          setIsInitialLoading(false);
          startBackgroundLoading();
        }
      });
    });

    const timeoutId = setTimeout(() => {
      if (active && isInitialLoading) {
        setIsInitialLoading(false);
        startBackgroundLoading();
      }
    }, TIMEOUT_DURATION);

    return () => {
      active = false;
      clearTimeout(timeoutId);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInitialLoading) return;
    const windowSize = 4;
    for (let i = -windowSize; i <= windowSize; i++) {
      loadFrame(currentFrameIndex + i);
    }
  }, [currentFrameIndex, isInitialLoading]);

  const getClosestLoadedImage = (targetIndex) => {
    if (hasFailed) return null;

    let dist = 0;
    while (dist < TOTAL_FRAMES) {
      const left = targetIndex - dist;
      const right = targetIndex + dist;
      if (left >= 0 && loadedFramesRef.current[left]) {
        return imagesRef.current[left];
      }
      if (right < TOTAL_FRAMES && loadedFramesRef.current[right]) {
        return imagesRef.current[right];
      }
      dist++;
    }
    return null;
  };

  const currentImage = getClosestLoadedImage(currentFrameIndex);

  return {
    currentImage,
    currentFrameIndex,
    isInitialLoading,
    hasFailed,
    currentFrameNumber: currentFrameIndex + 1,
    totalFrames: TOTAL_FRAMES,
    scrollProgress: scrollYProgress
  };
};

export default useFrameAnimationController;
