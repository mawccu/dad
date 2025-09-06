//components/Header/index.jsx
'use client';
//Header.jsx
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from './RoundedButton';
import Magnetic from './Magnetic';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useT } from '../../i18n/client';
import { useParams } from 'next/navigation';

export default function index() {
    const headerRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const button = useRef(null);
    const { t } = useT('common');
    const { lang } = useParams();

    const switchLanguage = (newLang) => {
        let newPath = pathname;
        
        if (lang === 'en' && newLang === 'ar') {
            newPath = pathname.replace('/en', '/ar');
        } else if (lang === 'ar' && newLang === 'en') {
            newPath = pathname.replace('/ar', '/en');
        }
        
        router.push(newPath);
    };

    // Helper function to create language-aware links
    const createLangLink = (path) => {
        return `/${lang}${path}`;
    };

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  // scope to the header, and auto-revert on unmount / re-renders
  const ctx = gsap.context(() => {
    const el = button.current;
    if (!el) return;

    // Only apply scroll trigger on desktop
    if (window.innerWidth >= 1024) {
      const st = ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top 20%',
        end: '+=280',
        onLeave: () => {
          gsap.to(el, { scale: 1, duration: 0.25, ease: "power1.out" });
        },
        onEnterBack: () => {
          // avoid state churn inside scroll callback; do the scale only
          gsap.to(el, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
            // if you must close the menu, defer the state update
            onComplete: () => requestAnimationFrame(() => setIsActive(false)),
          });
        },
      });

      return () => st.kill();
    }
    // On mobile, the button is always visible via CSS
  }, headerRef);

  return () => ctx.revert();
}, [pathname]);

    const isServicesPage = pathname.startsWith(`/${lang}/Services`);
    // Helper function to check if we're on the main page
    const isMainPage = () => {
        return pathname === `/${lang}` || pathname === '/' || pathname === `/en` || pathname === `/ar` || isServicesPage;
    };

    const navTranslations = {
        home: t('nav.home'),
        about: t('nav.about'),
        services: t('nav.services'),
        projects: t('nav.projects'),
        contact: t('nav.contact'),
    };

    return (
        <>
        <div ref={headerRef} className={styles.header} style={{color: isMainPage() ? 'white' : 'black'}}>
            <div className={styles.logo}>
                <Link href={createLangLink('/')}><p className={styles.copyright}>New Look</p></Link>
            </div>
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href={createLangLink('/Services')}>{t('nav.services')}</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href={createLangLink('/Projects')}>{t('nav.projects')}</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href={createLangLink('/Contact')}>{t('nav.contact')}</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                 
                
                <Magnetic>
                    <div className={styles.el}>
                        <Link href={createLangLink('/About')}>{t('nav.about')}</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <button
                            className={lang === "en" ? styles.activeLang : ""}
                            onClick={() => switchLanguage("en")}
                        >
                            EN
                        </button>
                        |
                        <button
                            className={lang === "ar" ? styles.activeLang : ""}
                            onClick={() => switchLanguage("ar")}
                        >
                            AR
                        </button>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
        </div>
        
        <div ref={button} className={styles.headerButtonContainer} data-lang={lang}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && (
                <>
                    <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate= {{
                        opacity: 1,
                        backdropFilter: "blur(6px)",
                        transition: {
                            delay: 0.2,
                            duration: 0.3 // delay on entrance
                        }}
                    }
                    exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: {duration: 0.3}}} //immediate disappearance
                    className="fixed inset-0 bg-black/40 z-[9998]"
                    onClick={() => setIsActive(false)}
                    ></motion.div>
                    <div className="fixed right-0 top-0 z-[9999]">
                        <Nav navTranslations={navTranslations} onClose={() => setIsActive(false)} />
                    </div>
                </>
                )}
        </AnimatePresence>
        </>
    )
}