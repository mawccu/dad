//components/Header/nav/index.jsx
'use client'
import React, { useState } from 'react';
import styles from './style.module.scss'
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import { useParams } from 'next/navigation'


export default function index({ navTranslations }) {
    const { lang } = useParams();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLang) => {
        let newPath = pathname;
        
        if (lang === 'en' && newLang === 'ar') {
            newPath = pathname.replace('/en', '/ar');
        } else if (lang === 'ar' && newLang === 'en') {
            newPath = pathname.replace('/ar', '/en');
        }
        
        router.push(newPath);
    };

    const navItems = [
        { title: navTranslations?.home || 'Home', href: `/${lang}` },
        { title: navTranslations?.about || 'About', href: `/${lang}/About` },
        { title: navTranslations?.services || 'Services', href: `/${lang}/Services` },
        { title: navTranslations?.projects || 'Projects', href: `/${lang}/Projects` },
        { title: navTranslations?.contact || 'Contact', href: `/${lang}/Contact` },
    ];

    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={menuSlide}
          className={styles.menu}
        >
        <div className={styles.body}>
            <div onMouseLeave={() => setSelectedIndicator(pathname)} className={styles.nav}>
                <div className={styles.header}>
                    <p>Navigation</p>
                </div>
                {
                    navItems.map( (data, index) => {
                        return <Link
                            key={index}    
                            data={{ ...data, index }}
                            isActive={selectedIndicator === data.href}
                            setSelectedIndicator={setSelectedIndicator}
                        />
                    })
                }
            </div>
            <div className={styles.languageSection}>
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
            </div>
            <Footer />
        </div>
        <Curve />   
        </motion.div>
    )
}

