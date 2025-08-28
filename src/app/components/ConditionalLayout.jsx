'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from './Navbar';
import StickyFooter from './StickyFooter';
import { useProgress } from './ProgressProvider';
import Header from './Header';

export default function ConditionalLayout({ children }) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const { progress } = useProgress();
    const isServicesPage = pathname === '/Services';
    const isCareerPage = pathname === '/Careers';

    if (isCareerPage) {
        // Special layout for the career page, navbar here
        return (
            <>
                <Header />
                {children}
                <StickyFooter />
            </>
        );
    }
    if (isHomePage) {
        // Special layout for the home page, navbar here
        return (
            <>
                {children}
                {progress === 100 && <StickyFooter />}
            </>
        );
    }

    return (
        <>
            <Header />
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