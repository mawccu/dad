//components/Navbar.jsx
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
        background: 'rgba(255, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 0',
        zIndex: 99999,
        boxSizing: 'border-box',
        pointerEvents: 'auto',
        border: '3px solid red',
        minHeight: '60px'
      }}
    >
      <div
        className={styles.dropdownContent}
        style={{
          transform: `translateX(${props.contentOffset}px)`,
          color: 'white',
          fontWeight: 'bold'
        }}
      >
        <Link className={styles.link} href="/Services/SurfaceFinishing" style={{color: 'white'}}>Surface Finishing</Link>
        <Link className={styles.link} href="/Services/CustomFlooring" style={{color: 'white'}}>Custom Flooring</Link>
      </div>
    </div>
  );
});
Dropdown.displayName = 'Dropdown';

const HoverBridge = ({ navbarBottom, onMouseEnter, onMouseLeave, servicesRect, isVisible }) => {
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
        height: '1rem',
        zIndex: 99998,
        pointerEvents: 'auto',
        background: 'rgba(0, 255, 0, 0.5)'
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
  
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);



  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    setNavbarHeight(navbar.offsetHeight);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const updatePositions = () => {
      if (servicesRef.current && navbarRef.current) {
        const srvRect = servicesRef.current.getBoundingClientRect();
        const navRect = navbarRef.current.getBoundingClientRect();
      
        setNavbarBottom(`${navRect.bottom}px`);
        setServicesRect(srvRect);
        
        const srvCenter = srvRect.left + (srvRect.width / 2);
        const vpCenter = window.innerWidth / 2;
        setContentOffset(srvCenter - vpCenter);
      }
    };

    updatePositions();
    
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

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);


  useEffect(() => {
    const checkConflictingElements = () => {
      const allElements = document.querySelectorAll('*');
      const highZIndexElements = Array.from(allElements).filter(el => {
        const zIndex = window.getComputedStyle(el).zIndex;
        return zIndex !== 'auto' && parseInt(zIndex) > 1000;
      });
      console.log('High z-index elements:', highZIndexElements.map(el => ({
        element: el.tagName,
        class: el.className,
        zIndex: window.getComputedStyle(el).zIndex,
        position: window.getComputedStyle(el).position
      })));
    };
    setTimeout(checkConflictingElements, 1000);
  }, []);

  return (
    <>
      {isNavbarFixed && <div style={{ height: `${navbarHeight}px` }} />}

      <nav 
        className={`${styles.navbar} ${isNavbarFixed ? styles.navbarFixed : ''}`}
        ref={navbarRef} 
        style={{ 
          zIndex: 99997,
          backgroundColor: 'white',
          border: '2px solid blue'
        }}
      >
        <div><Link href="/">New Look</Link></div>
        <ul>
          <li 
            ref={servicesRef}
            className={styles.lis}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              backgroundColor: isHovered ? 'yellow' : 'transparent'
            }}
          >
            <Link 
              onClick={(e) => e.preventDefault()}
              href="/Services"
              style={{
                padding: '20px 40px 50px 40px',
                margin: '-20px -40px -50px -40px',
                display: 'inline-block',
                color: isHovered ? 'red' : 'black'
              }}
            >Services</Link>
            
            <Dropdown 
              ref={dropdownRef} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              navbarBottom={navbarBottom}
              contentOffset={contentOffset}
              isVisible={isHovered}
            />
          </li>
          <li className={styles.lis}><Link href="/Projects">Projects</Link></li>
          <li className={styles.lis}><Link href="/About">About</Link></li>
          <li className={styles.lis}><Link href="/Careers">Careers</Link></li>
          <li className={styles.lis}><Link href="/Contact">Contact</Link></li>
          <li className={styles.lis}><Link href="/">EN</Link></li>
        </ul>
      </nav>
      
      <HoverBridge 
        navbarBottom={navbarBottom}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        servicesRect={servicesRect}
        isVisible={isHovered}
      />
    </>
  );
}
