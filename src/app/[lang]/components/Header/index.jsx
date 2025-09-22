// Header index.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from './nav';
import Rounded from './RoundedButton';
import Link from 'next/link';
import { useT } from '../../i18n/client';

export default function Header() {
  const headerRef = useRef(null);
  const sentinelRef = useRef(null);
  const button = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { t } = useT('common');
  const { lang } = useParams();

  const getLangFromPath = (path) => {
    if (path.startsWith('/en')) return 'en';
    if (path.startsWith('/ar')) return 'ar';
    return 'en';
  };

  const [currentLang, setCurrentLang] = useState(getLangFromPath(pathname));

  function activePage(path) {
    return pathname === path ? styles.active : '';
  }

  // Close mobile menu on route change
  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  // Measure header height (for spacer) and update on resize
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setNavbarHeight(headerRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Flip to fixed exactly when header top hits viewport top
  useEffect(() => {
    const header = headerRef.current;
    const sentinel = sentinelRef.current;
    if (!header || !sentinel) return;

    // Ensure we have initial height
    setNavbarHeight(header.offsetHeight);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel leaves viewport (not intersecting), header has reached top
        setIsNavbarFixed(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '-1px 0px 0px 0px', // flip right at the top edge
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    // Handle refresh mid-page (observer callback usually fires immediately, but this is safe)
    // If the sentinel is above the viewport, set fixed.
    // (No-op here since the callback already sets it, but left for clarity.)
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setCurrentLang(getLangFromPath(pathname));
  }, [pathname]);

  const switchLang = (newLang) => {
    setCurrentLang(newLang); // instant UI feedback
    let newPath = '';
    if (/^\/(en|ar)(\/|$)/.test(pathname)) {
      newPath = pathname.replace(/^\/(en|ar)/, `/${newLang}`);
    } else {
      newPath = `/${newLang}${pathname === '/' ? '' : pathname}`;
    }
    router.push(newPath);
  };

  const createLangLink = (path) => {
    const base = `/${currentLang}`;
    return `${base}${path === '/' ? '' : path}`;
  };

  const isServicesPage = pathname.startsWith(`/${currentLang}/Services`);
  const isMainPage = () => {
    return (
      pathname === `/${currentLang}` ||
      pathname === '/' ||
      pathname === `/en` ||
      pathname === `/ar` ||
      isServicesPage
    );
  };

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : false;

  const navTranslations = {
    home: t('nav.home'),
    about: t('nav.about'),
    services: t('nav.services'),
    projects: t('nav.projects'),
    contact: t('nav.contact'),
  };

  return (
    <>
      {/* SENTINEL: sits immediately above the header */}
      <div ref={sentinelRef} aria-hidden />

      <div
        ref={headerRef}
        className={`${styles.header} ${isNavbarFixed ? styles.navbarFixed : ''}`}
        style={{ color: isMainPage() ? 'black' : 'black' }}
      >
        <div className={styles.logo}>
          <Link href={createLangLink('/')}>
            <p className={styles.copyright}>New Look</p>
          </Link>
        </div>

        <div className={styles.nav}>
          <div className={`${styles.el} ${pathname === `/${currentLang}/About` ? styles.isActive : ''}`}>
            <Link href={createLangLink('/About')}>{t('nav.about')}</Link>
            <div className={styles.indicator} />
          </div>
          <div className={`${styles.el} ${pathname === `/${currentLang}/Services` ? styles.isActive : ''}`}>
            <Link href={createLangLink('/Services')}>{t('nav.services')}</Link>
            <div className={styles.indicator} />
          </div>
          <div className={`${styles.el} ${pathname === `/${currentLang}/Projects` ? styles.isActive : ''}`}>
            <Link href={createLangLink('/Projects')}>{t('nav.projects')}</Link>
            <div className={styles.indicator}></div>
          </div>
          <div className={`${styles.el} ${pathname === `/${currentLang}/Contact` ? styles.isActive : ''}`}>
            <Link href={createLangLink('/Contact')}>{t('nav.contact')}</Link>
            <div className={styles.indicator} />
          </div>
          
        </div>

        {!isMobile && <div className={`${styles.el} cursor-pointer`}>
          <button
            className={`${
              currentLang === 'en' ? styles.activeLang : ''
            } text-gray-400 px-2 text-xl hover:text-gray-900 hover:font-300 transition-all duration-300 ease-in-out`}
            onClick={() => switchLang('en')}
          >
            EN
          </button>
          |
          <button
            className={`${
              currentLang === 'ar' ? styles.activeLang : ''
            } text-gray-400 px-2 text-xl hover:text-gray-900 hover:font-300 transition-all duration-300 ease-in-out`}
            onClick={() => switchLang('ar')}
          >
            AR
          </button>
        </div>}


        {isMobile && (
        <div ref={button} className={styles.mobileActions} data-lang={currentLang}>
          <Rounded onClick={() => setIsActive(!isActive)}
           className={`${styles.button}`}
           aria-label="Menu"
           >
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
          </Rounded>
        </div>
      )}
      </div>

      {isNavbarFixed && <div style={{ height: navbarHeight }} />}

      {isMobile && (
        <AnimatePresence mode="wait">
          {isActive && (
            <>
              <motion.div
                initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                animate={{
                  opacity: 1,
                  backdropFilter: 'blur(6px)',
                  transition: { delay: 0.2, duration: 0.3 },
                }}
                exit={{ opacity: 0, backdropFilter: 'blur(0px)', transition: { duration: 0.3 } }}
                className="fixed inset-0 bg-black/40 z-[9998]"
                onClick={() => setIsActive(false)}
              />
              <div className="fixed right-0 top-0 z-[9999]">
                <Nav navTranslations={navTranslations} onClose={() => setIsActive(false)} />
              </div>
            </>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
