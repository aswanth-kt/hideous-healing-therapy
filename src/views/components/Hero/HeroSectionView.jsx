import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import useFrameAnimationController from '../../../controllers/useFrameAnimationController';
import Button from '../../shared/Button';

// Helper to draw image like object-fit: cover
const drawImageProp = (ctx, img, x, y, w, h, offsetX = 0.5, offsetY = 0.5) => {
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  const r = Math.min(w / iw, h / ih);
  let nw = iw * r;
  let nh = ih * r;
  let cx, cy, cw, ch;

  if (nw < w) nw = w;
  if (nh < h) nh = h;

  cw = iw / (nw / w);
  ch = ih / (nh / h);

  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;

  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;

  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
};

export const HeroSectionView = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const {
    currentImage,
    isInitialLoading,
    hasFailed,
    // currentFrameNumber,
    // totalFrames
  } = useFrameAnimationController(containerRef);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Canvas drawing logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !currentImage) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      drawImageProp(ctx, currentImage, 0, 0, width, height);
      ctx.restore();
    };

    let animId = requestAnimationFrame(draw);

    window.addEventListener('resize', draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', draw);
    };
  }, [currentImage]);

  let mediaContent;

  if (isInitialLoading) {
    mediaContent = (
      <div className="absolute inset-0 bg-dark z-10 flex flex-col items-center justify-center text-accent animate-fade-in">
        <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin mb-4" />
        <p className="font-sans text-xs tracking-wider uppercase font-semibold">
          Loading Journey...
        </p>
      </div>
    );
  } else if (hasFailed) {
    mediaContent = (
      <img
        src="/assets/walking/ezgif-frame-001.jpg"
        alt="Healing journey fallback"
        className="w-full h-full object-cover block animate-fade-in"
      />
    );
  } else {
    mediaContent = (
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover"
      />
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-dark"
      style={{ height: '300svh' }}
    >
      <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden">
        
        <div className="absolute inset-0 w-full h-full z-0 bg-dark">
          {mediaContent}
          
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/75 to-dark/40 md:from-dark/90 md:via-dark/55 md:to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-dark/50 pointer-events-none z-10" />
        </div>

        <div className="relative z-20 w-full h-full flex flex-col md:flex-row items-center justify-start p-8 md:p-16">
          <div className="w-full md:w-1/2 flex items-center justify-start h-full relative">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full max-w-lg flex flex-col items-start text-left text-accent relative z-20"
            >
              <div className="flex items-center gap-3 mb-6">
                {/* <img
                  src="/assets/logo/logo.png"
                  alt="Hideous Healing Logo"
                  className="h-14 w-14 object-contain filter brightness-110"
                /> */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold font-serif text-accent uppercase leading-none mb-1 tracking-wide">
                    Hideous
                  </h1>
                  <h1 className="text-4xl md:text-5xl font-bold font-serif text-accent uppercase leading-none mb-1 tracking-wide">
                    Healing
                  </h1>
                  <p className="text-xs font-sans tracking-widest text-primary uppercase font-semibold">
                    Professional Therapy & Support
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-serif text-accent leading-tight mb-4">
                Be there for others but don't leave yourself.
              </h2>

              <p className="text-sm md:text-base text-accent/80 leading-relaxed mb-8">
                Experience the freedom of confidential counseling, where you can share your deepest thoughts and emotions without revealing your identity, and take the first step towards healing and transformation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  onClick={(e) => handleScrollTo(e, '#journey')}
                >
                  Start Healing Journey
                </Button>
                <Button
                  variant="outline"
                  className="border-accent/30 text-accent hover:bg-accent/10"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                >
                  Book Consultation
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-2 text-xs text-accent/60 font-sans font-medium animate-pulse">
                <span>Scroll down to walk the journey</span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-glow" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* {!isInitialLoading && !hasFailed && (
          <div className="absolute bottom-6 right-6 text-[10px] text-accent/30 font-mono tracking-widest uppercase z-30 bg-dark/60 px-3 py-1 rounded-md border border-primary/10 backdrop-blur-sm">
            Frame {currentFrameNumber} / {totalFrames}
          </div>
        )} */}

      </div>
    </section>
  );
};

export default HeroSectionView;
