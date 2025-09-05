//[lang]/ConditionalHeaderWrapper.jsx
'use client';
import { usePathname } from 'next/navigation';
import Header from './components/Header';
import StickyFooter from './components/StickyFooter';
import { useProgress } from '../components/ProgressProvider';

export default function ConditionalHeaderWrapper({ children }) {
    const pathname = usePathname();
    // Remove language prefix for path checking
    const pathWithoutLang = pathname.replace(/^\/(en|ar)/, '') || '/';
    const isHomePage = pathWithoutLang === '/';
    const { progress } = useProgress();
    const isCareerPage = pathWithoutLang === '/Careers';

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

    // Default layout for all other pages
    return (
        <>
            {!isHomePage && <Header />}
            {children}
            <StickyFooter />
        </>
    );
}