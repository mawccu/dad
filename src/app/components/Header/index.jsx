'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from './RoundedButton';
import Magnetic from './Magnetic';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function index() {
    const headerRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);
    const mainPage = ["/", "/Projects", "/About", "/Contact", "/Services"];

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: pathname === '/' 
                    ? 'top 20%'
                    : 'top 20%',
                end: '+=280',
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out", onComplete: () => setIsActive(false)})}
            }
        })
    }, [])

    return (
        <>
        <div ref={headerRef} className={styles.header} style={{color: pathname === '/' ? 'white' : 'black'}}>
            <div className={styles.logo}>
                <Link href="/"><p className={styles.copyright}>New Look</p></Link>
            </div>
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href="/Projects">Work</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href="/About">About</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href="/Contact">Contact</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                 <Magnetic>
                    <div className={styles.el}>
                        <Link href="/Services">Services</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href="/Arabic">Arabic</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
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
                        <Nav />
                    </div>

                </>
                )}
        </AnimatePresence>
        </>
    )
}