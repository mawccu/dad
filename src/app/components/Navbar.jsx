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
        background: 'rgba(255, 0, 0, 0.8)', // RED BACKGROUND FOR DEBUGGING
        backdropFilter: 'blur(10px)',
        padding: '1rem 0',
        zIndex: 99999, // EXTREMELY HIGH Z-INDEX
        boxSizing: 'border-box',
        pointerEvents: 'auto', // ALWAYS AUTO FOR DEBUGGING
        border: '3px solid red', // RED BORDER FOR VISIBILITY
        minHeight: '60px' // ENSURE IT HAS HEIGHT
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
        background: 'rgba(0, 255, 0, 0.5)' // GREEN BACKGROUND FOR DEBUGGING
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

  // DEBUG: Log current page
  useEffect(() => {
    console.log('🔍 NAVBAR DEBUG: Current page pathname:', window.location.pathname);
    console.log('🔍 NAVBAR DEBUG: Navbar component mounted');
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      if (servicesRef.current && navbarRef.current) {
        const servicesRect = servicesRef.current.getBoundingClientRect();
        const navbarRect = navbarRef.current.getBoundingClientRect();
        
        console.log('🔍 NAVBAR DEBUG: Services rect:', servicesRect);
        console.log('🔍 NAVBAR DEBUG: Navbar rect:', navbarRect);
        
        setNavbarBottom(`${navbarRect.bottom}px`);
        setServicesRect(servicesRect);
        
        const servicesCenter = servicesRect.left + (servicesRect.width / 2);
        const viewportCenter = window.innerWidth / 2;
        setContentOffset(servicesCenter - viewportCenter);
        
        console.log('🔍 NAVBAR DEBUG: Content offset calculated:', servicesCenter - viewportCenter);
      }
    };

    updatePositions();
    
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  useEffect(() => {
    console.log('🔍 NAVBAR DEBUG: isHovered changed to:', isHovered);
    console.log('🔍 NAVBAR DEBUG: dropdownRef.current exists:', !!dropdownRef.current);
    
    if (!dropdownRef.current) return;

    // DEBUG: Check dropdown element properties
    const dropdown = dropdownRef.current;
    console.log('🔍 NAVBAR DEBUG: Dropdown element styles before animation:', {
      display: window.getComputedStyle(dropdown).display,
      visibility: window.getComputedStyle(dropdown).visibility,
      opacity: window.getComputedStyle(dropdown).opacity,
      zIndex: window.getComputedStyle(dropdown).zIndex,
      position: window.getComputedStyle(dropdown).position,
      top: window.getComputedStyle(dropdown).top,
      pointerEvents: window.getComputedStyle(dropdown).pointerEvents
    });

    gsap.to(dropdownRef.current, {
      duration: 0.5,
      ease: 'power2.inOut',
      opacity: isHovered ? 1 : 0,
      y: isHovered ? 0 : -20,
      pointerEvents: isHovered ? 'auto' : 'none',
      onComplete: () => {
        console.log('🔍 NAVBAR DEBUG: Animation complete. Final opacity:', window.getComputedStyle(dropdown).opacity);
      }
    });
  }, [isHovered]);

  const handleMouseEnter = () => {
    console.log('🔍 NAVBAR DEBUG: Mouse entered Services');
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log('🔍 NAVBAR DEBUG: Mouse left Services');
    setIsHovered(false);
  };

  // DEBUG: Check for conflicting elements
  useEffect(() => {
    const checkConflictingElements = () => {
      const allElements = document.querySelectorAll('*');
      const highZIndexElements = Array.from(allElements).filter(el => {
        const zIndex = window.getComputedStyle(el).zIndex;
        return zIndex !== 'auto' && parseInt(zIndex) > 1000;
      });
      
      console.log('🔍 NAVBAR DEBUG: Elements with high z-index:', highZIndexElements.map(el => ({
        element: el.tagName,
        class: el.className,
        zIndex: window.getComputedStyle(el).zIndex,
        position: window.getComputedStyle(el).position
      })));
    };

    // Check after component mounts and after a short delay
    setTimeout(checkConflictingElements, 1000);
  }, []);

  return (
    <>
      <nav 
        className={styles.navbar} 
        ref={navbarRef} 
        style={{ 
          zIndex: 99997,
          backgroundColor: 'white',
          border: '2px solid blue' // BLUE BORDER FOR DEBUGGING
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
                backgroundColor: isHovered ? 'yellow' : 'transparent' // YELLOW WHEN HOVERED
              }}
          >
              <Link 
                onClick={(e) => e.preventDefault()}
                href="/Services"
                style={{
                  padding: '20px 40px 50px 40px',
                  margin: '-20px -40px -50px -40px',
                  display: 'inline-block',
                  color: isHovered ? 'red' : 'black' // RED WHEN HOVERED
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