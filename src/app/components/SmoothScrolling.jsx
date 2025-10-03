// components/SmoothScrolling.jsx
"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrolling({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Use native scroll on mobile
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.4,
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      autoRaf: false, // we'll drive it from GSAP's ticker
      infinite: false,
    });

    // Make Lenis globally accessible for scroll reset
    window.lenis = lenis;

    // Keep ScrollTrigger in sync with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Single RAF loop: GSAP ticker -> Lenis
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // When ST refreshes (layout changes), ask Lenis to recompute if available
    const onRefresh = () => {
      if (typeof lenis.resize === "function") lenis.resize();
    };
    ScrollTrigger.addEventListener("refresh", onRefresh);

    // First refresh after wiring
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(1000, 16);
      lenis.destroy();
      // Clean up global reference
      if (window.lenis === lenis) {
        window.lenis = null;
      }
    };
  }, [isMobile]);

  return <div id="lenis-root">{children}</div>;
}
