// 3. app/[lang]/UnifiedLayoutWrapper.jsx - Merge ConditionalLayout + ConditionalHeaderWrapper
'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import StairsTransition from '../components/StairsTransition';
import { useProgress } from '../components/ProgressProvider';
import Header from './components/Header';
import dynamic from 'next/dynamic';
const StickyFooter = dynamic(() => import('./components/StickyFooter'), { ssr: false });

export default function UnifiedLayoutWrapper({ children }) {
  const pathname = usePathname();
  const pathWithoutLang = pathname.replace(/^\/(en|ar)/, '') || '/';
  const { progress } = useProgress();
  
  // Define page types
  const pageType = {
    isHome: pathWithoutLang === '/',
    isCareer: pathWithoutLang === '/Careers',
    isServices: pathWithoutLang === '/Services',
    isPolicy: pathname.toLowerCase().includes('privacy') || 
              pathname.toLowerCase().includes('policy') || 
              pathname.toLowerCase().includes('/cookie')
  };

  // Determine what to show
  const showHeader = !pageType.isHome && !pageType.isCareer;
  const showFooter = pageType.isCareer || 
                     (!pageType.isHome && !pageType.isPolicy) || 
                     (pageType.isHome && progress === 100);

  return (
    <StairsTransition>
      <div className="flex flex-col min-h-screen relative z-[1]">
        {showHeader && <Header />}
        <main className="flex-1">
          {children}
        </main>
        {showFooter && <StickyFooter />}
      </div>
    </StairsTransition>
  );
}