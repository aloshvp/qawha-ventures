'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      smoothTouch: true,

      // --- Ultra Smooth Values ---
      duration: 1.6,                                // slightly slower, more fluid
      easing: (t) => 1 - Math.pow(1 - t, 4),        // soft, elastic-like motion
      lerp: 0.08,                                   // buttery gliding motion

      wheelMultiplier: 0.9,                         // extra soft scroll
      touchMultiplier: 1.1,                         // smoother touch movement
      gestureDirection: 'vertical',
      direction: 'vertical',
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;

