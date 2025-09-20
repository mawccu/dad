'use client';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import React from 'react';
import { useProgress } from '../components/ProgressProvider';
import Header from './components/Header';
import StickyFooter from './components/StickyFooter';

const pageVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      when: 'beforeChildren',     // page fades in, then children animate in
      staggerChildren: 0.02,      // harmless even if some children have no variants
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
      when: 'beforeChildren',     // start fading page immediately; children can also exit
    },
  },
};

export default function UnifiedLayoutWrapper({ children }) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const { progress } = useProgress();
  const pathWithoutLang = pathname.replace(/^\/(en|ar)/, '') || '/';

  const pageType = {
    isHome: pathWithoutLang === '/',
    isCareer: pathWithoutLang === '/Careers',
    isServices: pathWithoutLang === '/Services',
    isPolicy:
      pathname.toLowerCase().includes('privacy') ||
      pathname.toLowerCase().includes('policy') ||
      pathname.toLowerCase().includes('/cookie'),
  };

  const showHeader = !pageType.isHome && !pageType.isCareer;
  const footerVisible =
    pageType.isCareer ||
    (!pageType.isHome && !pageType.isPolicy) ||
    (pageType.isHome && progress === 100);
  const mountFooter = !pageType.isPolicy;

  return (
    <div className="flex flex-col min-h-screen relative z-[1]">
      {showHeader && <Header />}

      <div className="relative isolate flex-1">
  <AnimatePresence mode="wait" initial={false}>
    <motion.div
      key={pathname}
      initial={prefersReduced ? false : { opacity: 0, pointerEvents: 'none' }}
      animate={{
        opacity: 1,
        pointerEvents: 'auto',
        transition: prefersReduced ? undefined : { duration: 0.4, ease: 'easeInOut' }
      }}
      exit={{
        opacity: 0,
        pointerEvents: 'none',             // 👈 exiting page can’t be hovered/clicked
        transition: prefersReduced ? undefined : { duration: 0.25, ease: 'easeOut' }
      }}
      className="relative h-full"          // keep normal flow/scroll; no absolute here
      style={{ willChange: 'opacity' }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
  <StickyFooter />
</div>
    </div>
  );
}
