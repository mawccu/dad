//components/ConditionalLayout.jsx
'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from './Navbar';
import StairsTransition from './StairsTransition';
import { useProgress } from './ProgressProvider';

export default function ConditionalLayout({ children }) {
    const pathname = usePathname();
    // Remove language prefix for path checking
    const pathWithoutLang = pathname.replace(/^\/(en|ar)/, '') || '/';
    const isHomePage = pathWithoutLang === '/';
    const { progress } = useProgress();
    const isServicesPage = pathWithoutLang === '/Services';
    const isCareerPage = pathWithoutLang === '/Careers';

    // Career page layout - minimal with transition
    if (isCareerPage) {
        return (
            <StairsTransition>
                <div style={{position: 'relative', zIndex: 1, minHeight: '100vh'}}>
                    {children}
                </div>
            </StairsTransition>
        );
    }
    
    // Home page layout - with transition
    if (isHomePage) {
        return (
            <StairsTransition>
                <div style={{position: 'relative', zIndex: 1, minHeight: '100vh'}}>
                    {children}
                </div>
            </StairsTransition>
        );
    }

    // Default layout for all other pages with transition
    return (
        <StairsTransition>
            <div style={{position: 'relative', zIndex: 1, minHeight: '100vh'}}>
                {/* Navbar is commented out but available if needed */}
                {/* <div style={{ position: 'relative', zIndex: 9997 }}>
                    <Navbar />
                </div> */}
                <main className="min-h-screen">
                    {children}
                </main>
            </div>
        </StairsTransition>
    );
}