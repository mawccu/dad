import React from 'react';
import styles from './page.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div>New Look</div>
            <ul>
                <li className="lis">Services</li>
                <li className="lis">Projects</li>
                <li className="lis">About</li>
                <li className="lis">Careers</li>
                <li className="lis">Contact</li>
                <li className="lis">EN</li>
            </ul>
        </nav>
        // these are supposed to be <Link> arent they
    )
}