// components/SmoothScrolling.jsx
"use client";

import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrolling({ children}) {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 1024);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
      if (isMobile) return; // Skip initializing Lenis on mobile devices
    
    const lenis = new Lenis({
      duration: 1.4, // smoother glide, default is 1
      easing: (t) => 1 - Math.pow(2, -10 * t), // buttery exponential easing
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true, // smoother on mobile too
      touchMultiplier: 1.5,
      infinite: false, // fixed your "inifnite" typo
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [isMobile]);

  return <div>{children}</div>;
}
