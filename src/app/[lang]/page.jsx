//[lang]/page.jsx
'use client';
import Loader from '../components/Loader';
import { useEffect, useState } from 'react';
import { useProgress } from '../components/ProgressProvider';
import Mask from '../components/Mask';
import Image from 'next/image';
import Hero from './Hero/page.jsx'
import StickyFooter from './components/StickyFooter';
import Header from './components/Header'
import { useT } from './i18n/client';


// Custom hook for device detection
function useDeviceType() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      // Consider desktop as 1024px and above (lg breakpoint)
      // This means mobile (< 768px) and tablet (768px - 1023px) will show loader
      setIsDesktop(width >= 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return { isDesktop };
}

// Custom hook for initial visit tracking
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

// Custom hook for tracking very first website mount (any page)
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
  }, [])
  
  return shouldShow ? <Mask onComplete={onComplete} /> : null;
}

function ImageLoad(){
  const { reportAsLoaded } = useProgress();

  useEffect(() => {
    reportAsLoaded('heroImage')
  },[])
  return null; // Don't render anything initially
}

function HeavyComponent() {
  const { reportAsLoaded } = useProgress();

  useEffect(() => {
    setTimeout(() => {
      reportAsLoaded('heavyComponent');
    }, 1500);
  }, []);

  return null; // Don't render anything initially
}

function APIComponent() {
  const { reportAsLoaded } = useProgress();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone/Asia/Amman')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        reportAsLoaded('api'); //report back to the context
      })
      .catch(() => reportAsLoaded('api')); //report back to the context
  }, []);

  return null; // Don't render anything initially
}

export default function Home() {
    const [maskDone, setMaskDone] = useState(false);
    const { progress } = useProgress(); // Get progress to control content visibility
    const { t } = useT('common'); // translations available
    const { isDesktop } = useDeviceType();
    const { isInitialVisit } = useInitialVisit();
    const { isInitialMount } = useInitialWebsiteMount();
    const [showHeader, setShowHeader] = useState(false); 

    // Device-based loading strategy:
    // Desktop (≥1024px) + Initial Visit = Mask animation
    // Mobile/Tablet (<1024px) + Initial Website Mount = Loader with progress
    const shouldShowMask = isInitialVisit && isDesktop;
    const shouldShowLoader = !isDesktop && isInitialMount;

    // Check if content should be ready (mask done or loader complete)
    const contentReady = (maskDone || !shouldShowMask) && (!shouldShowLoader || progress === 100);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHeader(true);
        }, 3000); // 3 second delay

        return () => clearTimeout(timer);
    }, []);

  // Debug logging
  useEffect(() => {
    // console.log('🔍 DEVICE DEBUG: isDesktop:', isDesktop, 'shouldShowLoader:', shouldShowLoader, 'shouldShowMask:', shouldShowMask);
    // console.log('🔍 MOUNT DEBUG: isInitialMount:', isInitialMount, 'isInitialVisit:', isInitialVisit);
    // console.log('🔍 PROGRESS DEBUG: progress:', progress, 'maskDone:', maskDone);
  }, [maskDone, isInitialVisit, isDesktop, shouldShowMask, shouldShowLoader, progress, isInitialMount]);

  return (
    <>
      {/* Show Loader ONLY on initial website mount for mobile/tablet devices */}
      {shouldShowLoader && <Loader />}
      
      <MaskLoad 
        shouldShow={shouldShowMask}
        onComplete={() => {
          // console.log('🔍 HOME DEBUG: Mask animation completed, setting maskDone to true');
          setMaskDone(true);
        }} 
      />
      <HeavyComponent />
      <APIComponent />
      <ImageLoad />
      
      {/* FIXED: Header with fade animation - always render but control visibility */}
      {contentReady && (
        <div style={{ 
          position: 'relative', 
          zIndex: 99999,
          opacity: showHeader ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}>
          <Header />
        </div>
      )}
      
      {/* Content visibility: Show when loader completes (mobile/tablet) OR when mask is done (desktop) OR when neither is needed */}
      {(!shouldShowLoader || progress === 100) && (!shouldShowMask || maskDone) && (
        <>
          <div className="h-screen w-full relative overflow-hidden">
            <Image
              src="/medias/abdounbridge/ss.png"
              fill={true}
              alt="Hero Image"
              className="object-cover"
              priority
              fetchPriority="high"
            />
          </div>
           <Hero /> 
        </>
      )}
    </>
  );
}