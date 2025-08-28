'use client'
import React, { useState } from 'react';
import styles from './style.module.scss'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '../../About' },
  { title: 'Services', href: '../../Services' },
  { title: 'Projects', href: '../../Projects' },
  { title: 'Contact', href: '../../Contact' },
  
];

export default function index() {

    const pathname = usePathname();
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
            <Footer />
        </div>
        <Curve />   
        </motion.div>
    )
}

