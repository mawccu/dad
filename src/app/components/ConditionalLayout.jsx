//components/ConditionalLayout.jsx
'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from './Navbar';
import StickyFooter from './StickyFooter';
import { useProgress } from './ProgressProvider';

export default function ConditionalLayout({ children }) {
    const pathname = usePathname();
    // Remove language prefix for path checking
    const pathWithoutLang = pathname.replace(/^\/(en|ar)/, '') || '/';
    const isHomePage = pathWithoutLang === '/';
    const { progress } = useProgress();
    const isServicesPage = pathWithoutLang === '/Services';
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
            {/* Navbar is commented out but available if needed */}
            {/* <div style={{ position: 'relative', zIndex: 9997 }}>
                <Navbar />
            </div> */}
            <main className="min-h-screen">
                {children}
            </main>
            <StickyFooter />
        </>
    );
}