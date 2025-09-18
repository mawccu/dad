// 4. app/[lang]/page.jsx - Simplified Home Page (remove Header logic)
'use client';
import Loader from '../components/Loader';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useProgress } from '../components/ProgressProvider';
import Mask from '../components/Mask';
import Header from './components/Header';
const Hero = dynamic(() => import('./Hero/page.jsx'), { ssr: false });

function useDeviceType() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return { isDesktop };
}

function useInitialVisit() {
  const [isInitialVisit, setIsInitialVisit] = useState(false);
  
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHome');
    if (!hasVisited) {
      setIsInitialVisit(true);
      sessionStorage.setItem('hasVisitedHome', 'true');
    }
  }, []);
  
  return { isInitialVisit };
}

function useInitialWebsiteMount() {
  const [isInitialMount, setIsInitialMount] = useState(false);
  
  useEffect(() => {
    const hasEverVisited = sessionStorage.getItem('hasVisitedWebsite');
    if (!hasEverVisited) {
      setIsInitialMount(true);
      sessionStorage.setItem('hasVisitedWebsite', 'true');
    }
  }, []);
  
  return { isInitialMount };
}

function MaskLoad({ onComplete, shouldShow }) {
  const { reportAsLoaded } = useProgress()

  useEffect(() => {
    reportAsLoaded('mask')
    console.log('Mask reported as loaded');
  }, [])
  
  return shouldShow ? <Mask onComplete={onComplete} /> : null;
}


function ImageLoad(){
  const { reportAsLoaded } = useProgress();

  useEffect(() => {
    reportAsLoaded('heroImage')
  },[])
  return null;
}

function HeavyComponent() {
  const { reportAsLoaded } = useProgress();

  useEffect(() => {
    setTimeout(() => {
      reportAsLoaded('heavyComponent');
    }, 1500);
  }, []);

  return null;
}

export default function Home() {
  const [maskDone, setMaskDone] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [visible, setVisible] = useState(false);
  const { progress } = useProgress();
  const { isDesktop } = useDeviceType();
  const { isInitialVisit } = useInitialVisit();
  const { isInitialMount } = useInitialWebsiteMount();
  
  const shouldShowMask = isInitialVisit && isDesktop;
  const shouldShowLoader = !isDesktop && isInitialMount;
  const contentReady = (maskDone || !shouldShowMask) && (!shouldShowLoader || progress === 100);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowHeader(true);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    if (contentReady) {
      setShowHeader(true);
      setVisible(true);
    }
  }, [contentReady]);


  return (
    <>
      {shouldShowLoader && <Loader />}
      
      <MaskLoad 
        shouldShow={shouldShowMask}
        onComplete={() => setMaskDone(true)} 
      />
      <HeavyComponent />
      <ImageLoad />
      
      {contentReady && (
        <div style={{ 
          opacity: showHeader ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}>
          <Header />
        </div>
      )}
      {contentReady &&
          <div style={{ 
          position: 'relative',
          opacity: visible ? 1 : 0,
          transition: 'opacity 2s ease-in-out'
        }}>
            <Hero />
        </div>}
    </>
  );
}

