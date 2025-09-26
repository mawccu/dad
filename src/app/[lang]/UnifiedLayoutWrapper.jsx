// dad/src/app/[lang]/UnifiedLayoutWrapper.jsx
'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./components/Header'), { ssr: false });
const StickyFooter = dynamic(() => import('./components/StickyFooter'), { ssr: false });
const ContactButton = dynamic(() => import('./components/ContactButton'), { ssr: false });

export default function UnifiedLayoutWrapper({ children }) {
  const pathname = usePathname();
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
    <div>
      <div>
        {showHeader && <Header />}
        {children}
        <ContactButton show={!pageType.isHome} />
        {footerVisible && <StickyFooter />}
      </div>
    </div>
  );
}
