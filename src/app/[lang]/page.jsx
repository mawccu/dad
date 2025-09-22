// app/[lang]/page.jsx
'use client';
import Loader from '../components/Loader';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import { useProgress } from '../components/ProgressProvider';

const Mask = dynamic(() => import('../components/Mask'), { ssr: false });
const Header = dynamic(() => import('./components/Header'), { ssr: false });
const Hero = dynamic(() => import('./Hero/page.jsx'), { ssr: false });
const StickyFooter = dynamic(() => import('./components/StickyFooter'), { ssr: false });

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
    reportAsLoaded('mask'); // let progress hit 100 so mask can start
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
  const [loaderExitStarted, setLoaderExitStarted] = useState(false);

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
    return maskReady;
  }, [maskDone, shouldShowMask]);

  // Content reveal policy:
  // - Desktop + mask: content should be visible under the mask immediately.
  // - Mobile + loader: start content fade-in when loader exit begins (cross-fade), and stay visible once finished.
  const contentVisible =
    (isDesktop && shouldShowMask)
      ? true
      : (loaderExitStarted || contentReady);

  return (
    <>
      {/* Mobile loader */}
      {shouldShowLoader && (
        <Loader
          onExitStart={() => setLoaderExitStarted(true)}  // NEW: begin content fade exactly when loader starts exiting
          onFinish={() => setLoaderFinished(true)}        // you already had this path via callback
        />
      )}

      {/* Desktop mask splash */}
      {shouldShowMask && (
        <div style={{ zIndex: 120 }} className="pointer-events-none transition-opacity duration-500">
          <MaskLoad onComplete={() => setMaskDone(true)} />
        </div>
      )}

      {/* mark hero image as loaded */}
      <ImageLoad />

      {/* Content cross-fade wrapper */}
      {contentReady && <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: 'opacity 600ms ease',
          pointerEvents: contentVisible ? 'auto' : 'none',
        }}
      >
        <Header />
        <Hero />
        <StickyFooter />
      </div>}
    </>
  );
}
