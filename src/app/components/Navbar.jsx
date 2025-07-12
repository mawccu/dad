import React from 'react';
import styles from './page.module.css'
import Link  from 'next/link'; 

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div>New Look</div>
            <ul>
                <li className="lis"><Link href="/">Services</Link></li>
                <li className="lis"><Link href="/">Projects</Link></li>
                <li className="lis"><Link href="/">About</Link></li>
                <li className="lis"><Link href="/">Careers</Link></li>
                <li className="lis"><Link href="/">Contact</Link></li>
                <li className="lis"><Link href="/">EN</Link></li>
            </ul>
        </nav>
        // these are supposed to be <Link> arent they
    )
}