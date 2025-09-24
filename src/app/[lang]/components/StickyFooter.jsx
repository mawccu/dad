'use client';

import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('./Footer'), { ssr: false });

// simple logger you can keep/remove
const log = (...a) => console.log('%c[STICKY-vanilla]', 'color:#22c55e;font-weight:bold', ...a);

export default function StickyFooter() {
  const revealRef  = useRef(null);  // the moving section
  const spacerRef  = useRef(null);  // 1px sentinel above footer
  const rafIdRef   = useRef(null);
  const moRef      = useRef(null);
  const mountedRef = useRef(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  // Check for small device on mount and resize
  useEffect(() => {
    const checkDeviceSize = () => {
      setIsSmallDevice(window.innerWidth < 400);
    };

    // Initial check
    checkDeviceSize();

    // Listen for resize events
    window.addEventListener('resize', checkDeviceSize);
    
    return () => {
      window.removeEventListener('resize', checkDeviceSize);
    };
  }, []);

  useLayoutEffect(() => {
    const reveal = revealRef.current;
    const spacer = spacerRef.current;
    if (!reveal || !spacer) return;

    // If small device, just show footer normally without animation
    if (isSmallDevice) {
      reveal.style.transform = 'translateY(0)';
      reveal.style.willChange = 'auto';
      log('Small device detected - animation disabled');
      return;
    }

    mountedRef.current = true;

    // initial paint (hidden by 50%)
    reveal.style.transform   = 'translateY(-50%)';
    reveal.style.willChange  = 'transform';

    // compute progress 0..1 based on how far we've scrolled past the spacer
    const height = () => Math.max(reveal.offsetHeight || 0, 400);
    const compute = () => {
      if (!mountedRef.current) return;
      const h    = height();
      const vb   = window.innerHeight;                       // viewport bottom (in px)
      const r    = spacer.getBoundingClientRect();           // sentinel rect
      const past = vb - r.bottom;                            // how much the sentinel's bottom has crossed the viewport bottom
      const prog = Math.max(0, Math.min(1, past / h));       // clamp 0..1
      const y    = -50 + 50 * prog;                          // -50% -> 0%
      reveal.style.transform = `translateY(${y}%)`;
      // log('progress', prog.toFixed(3), 'y%', y.toFixed(1));
    };

    // debounce with rAF (smooth + cheap)
    const schedule = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        compute();
      });
    };

    // events
    const onScroll = () => schedule();
    const onResize = () => schedule();

    // when mask opens/finishes
    const onMaskOpen = () => { reveal.style.transform = 'translateY(-50%)'; };
    const onMaskDone = () => schedule();

    // observe content changes inside footer (logos/images settling)
    const mo = new MutationObserver(schedule);
    mo.observe(reveal, { childList: true, subtree: true });
    moRef.current = mo;

    // wire listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('mask:open', onMaskOpen);
    window.addEventListener('mask:done', onMaskDone);

    // first computation after layout
    schedule();

    return () => {
      mountedRef.current = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mask:open', onMaskOpen);
      window.removeEventListener('mask:done', onMaskDone);
      moRef.current?.disconnect();
      // clear transform so it doesn't carry across routes
      reveal.style.transform = '';
      log('cleanup');
    };
  }, [isSmallDevice]); // Re-run effect when device size changes

  return (
    <>
      {/* sentinel above the footer - hidden on small devices */}
      {!isSmallDevice && (
        <section ref={spacerRef} className="w-screen h-px bg-transparent" aria-hidden />
      )}

      <footer className="w-screen bg-[#111] overflow-hidden">
        <section
          ref={revealRef}
          className="bg-[#111] text-white min-h-[60vh] md:h-[60vh] lg:h-[600px] w-screen"
          style={{ transform: isSmallDevice ? 'translateY(0)' : 'translateY(-50%)' }}
          data-sticky-footer
          data-animation-disabled={isSmallDevice}
        >
          <Footer />
        </section>
      </footer>
    </>
  );
}