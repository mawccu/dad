'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from './Navbar';
import StickyFooter from './StickyFooter';

export default function ConditionalLayout({ children }) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isProjectsPage = pathname.startsWith('/Projects');

    if (isHomePage || isProjectsPage) {
        // Special layout for the home page and projects page, no footer or navbar here
        return (
            <>
                {children}
                <StickyFooter />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <StickyFooter />
        </>
    );
}