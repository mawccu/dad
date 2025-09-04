//[lang]/ConditionalHeaderWrapper.jsx
'use client';
import { usePathname } from 'next/navigation';
import Header from './components/Header';

export default function ConditionalHeaderWrapper({ children }) {
    const pathname = usePathname();
    // Remove language prefix for path checking
    const pathWithoutLang = pathname.replace(/^\/(en|ar)/, '') || '/';
    const isHomePage = pathWithoutLang === '/';

    return (
        <>
            {!isHomePage && <Header />}
            {children}
        </>
    );
}
