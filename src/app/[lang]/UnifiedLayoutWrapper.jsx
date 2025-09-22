// dad/src/app/[lang]/UnifiedLayoutWrapper.jsx
'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useProgress } from '../components/ProgressProvider';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./components/Header'), { ssr: false });
const StickyFooter = dynamic(() => import('./components/StickyFooter'), { ssr: false });

export default function UnifiedLayoutWrapper({ children }) {
  const pathname = usePathname();
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
  const footerVisible = !pageType.isHome && !pageType.isPolicy;
    

  return (
    <div className="flex flex-col min-h-screen relative z-[1]">
      <div
        style={{
          opacity: 0,
          transition: 'opacity 0.5s ease-in-out',
          willChange: 'opacity',
          pointerEvents: 'none',
          position: 'relative',
          zIndex: 100, // keep above any transformed siblings
        }}
      >
          

      </div>
      <div className="relative isolate flex-1">
        {showHeader && <Header />}
        {children}
        {footerVisible && <StickyFooter />}
      </div>
    </div>
  );
}
