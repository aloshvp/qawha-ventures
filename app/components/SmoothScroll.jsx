'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Faster response time
      easing: (t) => t, // Linear easing for more direct response
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.2, // More responsive mouse control
      smoothTouch: false,
      touchMultiplier: 1.8, // Balanced touch response
      infinite: false,
      lerp: 0.08, // Lower lerp for more responsive tracking
      wheelMultiplier: 1, // Standard wheel sensitivity
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SmoothScroll;
