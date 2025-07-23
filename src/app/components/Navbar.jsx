'use client'
import React from 'react';
import styles from './page.module.css'
import Link  from 'next/link'; 

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div><Link href="/">New Look</Link></div>
            <ul>
                <li className="lis"><Link href="/Services">Services</Link></li>
                <li className="lis"><Link href="/Projects">Projects</Link></li>
                <li className="lis"><Link href="/About">About</Link></li>
                <li className="lis"><Link href="/Careers">Careers</Link></li>
                <li className="lis"><Link href="/Contact">Contact</Link></li>
                <li className="lis"><Link href="/">EN</Link></li>
            </ul>
        </nav>
        // nextils or sm for the language switcher
        // also, fix the navbar ul elements font weight, it should be a tad bit smaller
    )
}
