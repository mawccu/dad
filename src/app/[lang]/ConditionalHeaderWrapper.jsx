//[lang]/ConditionalHeaderWrapper.jsx
'use client';
import { usePathname } from 'next/navigation';
import Header from './components/Header';
import { useProgress } from '../components/ProgressProvider';
import dynamic from 'next/dynamic';
const StickyFooter = dynamic(() => import('./components/StickyFooter'), { ssr: false });

export default function ConditionalHeaderWrapper({ children }) {
    const pathname = usePathname();
    // Remove language prefix for path checking
    const pathWithoutLang = pathname.replace(/^\/(en|ar)/, '') || '/';
    const isHomePage = pathWithoutLang === '/';
    const { progress } = useProgress();
    const isCareerPage = pathWithoutLang === '/Careers';
    const isPolicyPage = pathname.toLowerCase().includes('privacy') || pathname.toLowerCase().includes('policy') || pathname.toLowerCase().includes('/cookie');
    // Career page layout - minimal with footer
    if (isCareerPage) {
        return (
            <>
                {children}
                <StickyFooter />
            </>
        );
    }
    
    // Home page layout - conditional footer based on progress
    if (isHomePage) {
        return (
            <>
                {children}
                {progress === 100 && <StickyFooter />}
            </>
        );
    }
    if (isPolicyPage) {
        return (
            <>
                {!isHomePage && <Header />}
                {children}
            </>
        );
    }

    // Default layout for all other pages
    return (
        <>
            {!isHomePage && <Header />}
            {children}
            <StickyFooter />
        </>
    );
}