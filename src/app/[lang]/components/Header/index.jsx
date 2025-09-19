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

       
       

    const getLangFromPath = (path) => {
        if (path.startsWith('/en')) return 'en';
        if (path.startsWith('/ar')) return 'ar';
        return 'en'; // default to English if no lang prefix
    }

     function activePage(path) {
        return pathname === path ? styles.active : '';
    }

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  // scope to the header, and auto-revert on unmount / re-renders
  const ctx = gsap.context(() => {
    const el = button.current;
    if (!el) return;

    if (window.innerWidth >= 1024) {
      const st = ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top 20%',
        end: '+=280',
        onLeave: () => {
          gsap.to(el, { scale: 1, duration: 0.25, ease: "power1.out" });
        },
        onEnterBack: () => {
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
  }, headerRef);

  return () => ctx.revert();
}, [pathname]);


    const [navbarHeight, setNavbarHeight] = useState(0);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [currentLang, setCurrentLang] = useState(getLangFromPath(pathname));


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
    }

    useEffect(() => {
        if (headerRef.current) {
            setNavbarHeight(headerRef.current.offsetHeight);
        }
        const initialNavbarOffset = headerRef.current.offsetTop;

        const handleScroll = () => {
            if(window.scrollY > initialNavbarOffset) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); }
    }, []);

    const isServicesPage = pathname.startsWith(`/${currentLang}/Services`);
    const isMainPage = () => {
        return pathname === `/${currentLang}` || pathname === '/' || pathname === `/en` || pathname === `/ar` || isServicesPage;
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
        {isNavbarFixed && <div style={{height: navbarHeight}}></div>} {/* Placeholder to prevent layout shift */}

        <div ref={headerRef} className={`${styles.header} ${isNavbarFixed ? styles.fixed : ''}`} style={{color: isMainPage() ? 'black' : 'black'}}>
                <div className={styles.logo}>
                    <Link href={createLangLink('/')}><p className={styles.copyright}>New Look</p></Link>

                </div>
            <div className={styles.nav}>
                    <div className={styles.el}>
                        <Link href={createLangLink('/Services')}>{t('nav.services')}</Link>
                        <div className={styles.indicator}></div>
                        <div className={activePage(`/${currentLang}/Services`)}></div>
                    </div>
                    <div className={styles.el}>
                        <Link href={createLangLink('/Projects')}>{t('nav.projects')}</Link>
                        <div className={styles.indicator}></div>
                        <div className={activePage(`/${currentLang}/Projects`)}></div>
                    </div>
              
                    <div className={styles.el}>
                        <Link href={createLangLink('/Contact')}>{t('nav.contact')}</Link>
                        <div className={styles.indicator}></div>
                        <div className={activePage(`/${currentLang}/Contact`)}></div>
                    </div>
                    <div className={styles.el}>
                        <Link href={createLangLink('/About')}>{t('nav.about')}</Link>
                        <div className={styles.indicator}></div>
                        <div className={activePage(`/${currentLang}/About`)}></div>
                    </div>
            </div>
                    <div className={`${styles.el} cursor-pointer`}>
                        <button
                            className={`${currentLang === "en" ? styles.activeLang : ""} text-gray-400 px-2 text-xl hover:text-gray-900 hover:font-300 transition-all duration-300 ease-in-out`}
                            onClick={() => switchLang("en")}
                        >
                            EN
                        </button>
                        |
                        <button
                            className={`${currentLang === "ar" ? styles.activeLang : ""} text-gray-400 px-2 text-xl hover:text-gray-900 hover:font-300 transition-all duration-300 ease-in-out`}
                            onClick={() => switchLang("ar")}
                        >
                            AR
                        </button>
                    </div>
        </div>
        
       {isMobile && <div ref={button} className={styles.headerButtonContainer} data-lang={currentLang}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>}

        


       {isMobile && <AnimatePresence mode="wait">
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
        </AnimatePresence>}
        </>
    )
}