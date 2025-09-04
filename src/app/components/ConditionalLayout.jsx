//components/ConditionalLayout.jsx
'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from './Navbar';
import { useProgress } from './ProgressProvider';

export default function ConditionalLayout({ children }) {
    const pathname = usePathname();
    // Remove language prefix for path checking
    const pathWithoutLang = pathname.replace(/^\/(en|ar)/, '') || '/';
    const isHomePage = pathWithoutLang === '/';
    const { progress } = useProgress();
    const isServicesPage = pathWithoutLang === '/Services';
    const isCareerPage = pathWithoutLang === '/Careers';

    // Career page layout - minimal
    if (isCareerPage) {
        return (
            <>
                {children}
            </>
        );
    }
    
    // Home page layout - just children
    if (isHomePage) {
        return (
            <>
                {children}
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
        </>
    );
}