// app/[lang]/page.jsx
'use client';
import Loader from '../components/Loader';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState, useRef } from 'react';
import { useProgress } from '../components/ProgressProvider';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const Mask   = dynamic(() => import('../components/Mask'),   { ssr: false });
const Header = dynamic(() => import('./components/Header'),  { ssr: false });
const Hero   = dynamic(() => import('./Hero/page.jsx'),      { ssr: false });
const StickyFooter = dynamic(() => import('./components/StickyFooter'), { ssr: false });

const log = (...a) => console.log('%c[HOME]', 'color:#06b6d4;font-weight:bold', ...a);

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
  const once = useRef(false);

  useEffect(() => { reportAsLoaded('mask'); }, [reportAsLoaded]);

  // rAF-debounced refresh
  const requestRefresh = () => {
    if (requestRefresh._id) cancelAnimationFrame(requestRefresh._id);
    requestRefresh._id = requestAnimationFrame(() => {
      requestRefresh._id = null;
      ScrollTrigger.refresh();
    });
  };

  return (
    <Mask
      onComplete={() => {
        if (once.current) return;
        once.current = true;
        onComplete?.();
        window.__MASK_ACTIVE__ = false;
        window.dispatchEvent(new CustomEvent('mask:done'));
        requestRefresh();
      }}
    />
  );
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

  const shouldShowMask   = isInitialVisit && isDesktop;
  const shouldShowLoader = !isDesktop && isInitialMount;

  // --- Debug: expose helpers
  useEffect(() => {
    window.__dumpST__ = () => {
      const all = ScrollTrigger.getAll();
      console.log('[ST] count=', all.length, all);
      const sf = all.find(s => s.vars?.id === 'sticky-footer' || s.vars?.trigger?.hasAttribute?.('data-sticky-footer'));
      return sf || all;
    };
    window.__vh = () => window.innerHeight;
    window.__sh = () => document.documentElement.scrollHeight;
  }, []);
  // ---

  useEffect(() => {
    log('mount', { isDesktop, isInitialVisit, isInitialMount, shouldShowMask, shouldShowLoader });
  }, [isDesktop, isInitialVisit, isInitialMount, shouldShowMask, shouldShowLoader]);

  // announce mask open
  useEffect(() => {
    if (shouldShowMask) {
      window.__MASK_ACTIVE__ = true;
      window.dispatchEvent(new CustomEvent('mask:open'));
      log('mask:open dispatched');
    }
  }, [shouldShowMask]);

  // first-paint safety refreshes
  useEffect(() => {
    const raf = requestAnimationFrame(() => { log('RAF -> ST.refresh'); ScrollTrigger.refresh(); });
    const t = setTimeout(() => { log('250ms -> ST.refresh'); ScrollTrigger.refresh(); }, 250);
    const onLoad = () => { log('window.load -> ST.refresh'); ScrollTrigger.refresh(); };
    window.addEventListener('load', onLoad);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); window.removeEventListener('load', onLoad); };
  }, []);

  // refresh when splash/loader done
  useEffect(() => {
    if (maskDone || loaderExitStarted) {
      log('maskDone/loaderExitStarted changed', { maskDone, loaderExitStarted });
      ScrollTrigger.refresh();
    }
  }, [maskDone, loaderExitStarted]);

  // progress seeds
  useEffect(() => {
    const keys = ['heroImage'];
    if (shouldShowMask) keys.push('mask');
    log('setExpected()', keys);
    setExpected(keys);
  }, [shouldShowMask, setExpected]);

  const contentReady = useMemo(() => {
    const maskReady = maskDone || !shouldShowMask;
    const ready = maskReady;
    log('contentReady computed', { maskDone, shouldShowMask, ready });
    return ready;
  }, [maskDone, shouldShowMask]);

  const contentVisible =
    (isDesktop && shouldShowMask) ? true : (loaderExitStarted || contentReady);

  useEffect(() => {
    log('render-state', { maskDone, loaderExitStarted, contentReady, contentVisible });
  });

  return (
    <>
      {shouldShowLoader && (
        <Loader
          onExitStart={() => { log('Loader onExitStart'); setLoaderExitStarted(true); }}
          // NOTE: if you don’t have setLoaderFinished defined, remove onFinish or define that state.
          // onFinish={() => setLoaderFinished(true)}
        />
      )}

      {shouldShowMask && (
        <div style={{ zIndex: 120 }} className="pointer-events-none transition-opacity duration-500">
          <MaskLoad onComplete={() => { log('MaskLoad onComplete -> setMaskDone(true)'); setMaskDone(true); }} />
        </div>
      )}

      <ImageLoad />

      {contentReady && (
        <div
          style={{
            opacity: contentVisible ? 1 : 0,
            transition: 'opacity 600ms ease',
            pointerEvents: contentVisible ? 'auto' : 'none',
          }}
        >
          <Header />
          <Hero />
          <StickyFooter />
        </div>
      )}
    </>
  );
}
