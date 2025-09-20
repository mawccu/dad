// app/[lang]/page.jsx
'use client';
import Loader from '../components/Loader';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import { useProgress } from '../components/ProgressProvider';
import Mask from '../components/Mask';
import Header from './components/Header';

const Hero = dynamic(() => import('./Hero/page.jsx'), { ssr: false });

function useDeviceType() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
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

function MaskLoad({ onComplete }) {
  const { reportAsLoaded } = useProgress();
  useEffect(() => {
    // report early so progress can hit 100% and Mask video can start
    reportAsLoaded('mask');
  }, [reportAsLoaded]);
  return <Mask onComplete={onComplete} />;
}

function ImageLoad() {
  const { reportAsLoaded } = useProgress();
  useEffect(() => { reportAsLoaded('heroImage'); }, [reportAsLoaded]);
  return null;
}

export default function Home() {
  const [maskDone, setMaskDone] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false);

  // Fade visibility flags (wrappers always mounted)
  const [headerVisible, setHeaderVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  // NEW: gate that opens 1s after ready

  const { setExpected } = useProgress();
  const { isDesktop } = useDeviceType();
  const { isInitialVisit } = useInitialVisit();
  const { isInitialMount } = useInitialWebsiteMount();

  const shouldShowMask = isInitialVisit && isDesktop;
  const shouldShowLoader = !isDesktop && isInitialMount;

  // Seed progress once
  useEffect(() => {
    const keys = ['heroImage'];
    if (shouldShowMask) keys.push('mask');
    setExpected(keys);
  }, [shouldShowMask, setExpected]);

  // Ready when: (desktop) mask done or not used, AND (mobile) loader finished or not used
  const contentReady = useMemo(() => {
    const maskReady = maskDone || !shouldShowMask;
    const loaderReady = !shouldShowLoader || loaderFinished;
    return maskReady && loaderReady;
  }, [maskDone, shouldShowMask, shouldShowLoader, loaderFinished]);

 

  // Run fades when the gate opens (double rAF to guarantee first paint at opacity:0)
  useEffect(() => {
    if (!contentReady) {
      setHeaderVisible(false);
      setHeroVisible(false);
      return;
    }
    setHeaderVisible(false);
    setHeroVisible(false);
    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => {
        setHeaderVisible(true);
        setHeroVisible(true);
      });
      return () => cancelAnimationFrame(id2);
    });
    return () => cancelAnimationFrame(id1);
  }, [contentReady]);

  return (
    <>
      {/* Mobile loader */}

      {shouldShowLoader && <Loader onFinish={() => setLoaderFinished(true)} />}

      {/* Desktop mask splash */}
      {shouldShowMask && 
      (
      <div style={{zIndex: 120}}><MaskLoad onComplete={() => setMaskDone(true)} /></div>
      )}

      {/* Mark hero image as loaded */}
      <ImageLoad />

      {/* HEADER: always mounted; fades via opacity (wrapper has its own stacking context) */}
      <div
        style={{
          opacity: headerVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          willChange: 'opacity',
          pointerEvents: headerVisible ? 'auto' : 'none',
          position: 'relative',
          zIndex: 100, // keep above any transformed siblings
        }}
      >
        <Header />
      </div>

      {/* HERO: always mounted; fades via opacity */}
      <div
        style={{
          position: 'relative',
          opacity: heroVisible ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
          willChange: 'opacity',
          pointerEvents: heroVisible ? 'auto' : 'none',
          transform: 'translateZ(0)', // OK here (not on header wrapper)
        }}
      >
        <Hero />
      </div>
    </>
  );
}
