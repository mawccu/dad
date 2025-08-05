'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import gsap from 'gsap';

const Dropdown = React.forwardRef((props, ref) => {
  return (
    <div 
      className={styles.dropdown} 
      ref={ref}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      style={{
        position: 'fixed',
        top: props.navbarBottom,
        left: '0',
        width: '100vw',
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(5px)',
        padding: '1rem 0',
        zIndex: 999,
        boxSizing: 'border-box'
      }}
      >
      <div 
        className={styles.dropdownContent}
        style={{
          transform: `translateX(${props.contentOffset}px)`
        }}
      >
        <Link className={styles.link} href="/Services/SurfaceFinishing">Surface Finishing</Link>
        <Link className={styles.link} href="/Services/CustomFlooring">Custom Flooring</Link>
      </div>
    </div>
  );
});

// Fixed bridge component - only covers Services button area
const HoverBridge = ({ navbarBottom, onMouseEnter, onMouseLeave, servicesRect }) => {
  if (!servicesRect) return null;
  
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'fixed',
        top: navbarBottom,
        left: `${servicesRect.left}px`,
        width: `${servicesRect.width}px`,
        height: '1rem', // Bridge height
        zIndex: 998,
        pointerEvents: 'auto',
        background: 'transparent'
      }}
    />
  );
};

export default function Navbar() {
  const dropdownRef = useRef(null);
  const servicesRef = useRef(null);
  const navbarRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [navbarBottom, setNavbarBottom] = useState('64px');
  const [contentOffset, setContentOffset] = useState(0);
  const [servicesRect, setServicesRect] = useState(null);


  useEffect(() => {
    const updatePositions = () => {
      if (servicesRef.current && navbarRef.current) {
        const servicesRect = servicesRef.current.getBoundingClientRect();
        const navbarRect = navbarRef.current.getBoundingClientRect();
        
        setNavbarBottom(`${navbarRect.bottom}px`);
        setServicesRect(servicesRect);
        
        // Calculate where to center the content under Services button
        const servicesCenter = servicesRect.left + (servicesRect.width / 2);
        const viewportCenter = window.innerWidth / 2;
        setContentOffset(servicesCenter - viewportCenter);
      }
    };

    updatePositions();
    
    // Update positions on window resize
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  useEffect(() => {
    if (!dropdownRef.current) return;

    gsap.to(dropdownRef.current, {
      duration: 0.5,
      ease: 'power2.inOut',
      opacity: isHovered ? 1 : 0,
      y: isHovered ? 0 : -20,
      pointerEvents: isHovered ? 'auto' : 'none',
    });
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <nav className={styles.navbar} ref={navbarRef}>
        <div><Link href="/">New Look</Link></div>
        <ul>
          <li 
              ref={servicesRef}
              className={styles.lis}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                position: 'relative'
              }}
          >
              <Link 
                href="/Services"
                style={{
                  padding: '20px 40px 50px 40px',
                  margin: '-20px -40px -50px -40px',
                  display: 'inline-block'
                }}
                >Services</Link>
              
              <Dropdown 
                ref={dropdownRef} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                navbarBottom={navbarBottom}
                contentOffset={contentOffset}
              />
          </li>
          <li className={styles.lis}><Link href="/Projects">Projects</Link></li>
          <li className={styles.lis}><Link href="/About">About</Link></li>
          <li className={styles.lis}><Link href="/Careers">Careers</Link></li>
          <li className={styles.lis}><Link href="/Contact">Contact</Link></li>
          <li className={styles.lis}><Link href="/">EN</Link></li>
        </ul>
      </nav>
      
      {/* Bridge positioned outside navbar to avoid interference */}
      <HoverBridge 
        navbarBottom={navbarBottom}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        servicesRect={servicesRect}
      />
    </>
  );
}