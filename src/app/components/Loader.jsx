'use client';
import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useProgress } from './ProgressProvider';

export default function Loader() {
  const { progress } = useProgress();
  const loaderRef = useRef(null);
  const percentRef = useRef(null);
  const progressBarRef = useRef(null);


  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Cleanup function to restore scrolling if component unmounts unexpectedly
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Show loader when progress begins
  useEffect(() => {
    if (progress > 0 && loaderRef.current) {
      loaderRef.current.style.display = 'flex';
      loaderRef.current.style.opacity = '1';
    }
  }, [progress]);

  // Animate % text and progress bar
  useEffect(() => {
    if (progress > 0) {
      if (percentRef.current) {
        gsap.to(percentRef.current, {
          textContent: progress,
          duration: 0.8,
          ease: 'power3.out',
          snap: { textContent: 1 },
        });
      }

      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          width: `${progress}%`,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    }

    if (progress === 100 && loaderRef.current) {
      const tl = gsap.timeline({
        delay: 0.4,
        onComplete: () => {
          loaderRef.current.style.display = 'none';
          // Restore scrolling after loader is completely hidden
          document.body.style.overflow = 'auto';
        },
      });

      tl.to(loaderRef.current, { 
        opacity: 0,
        ease: 'power4.inOut',
        duration: 2.2,
      });
    }
  }, [progress]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-white text-black z-50 flex-col items-center justify-center overflow-hidden"
      style={{ display: 'none', opacity: 0 }} // Start hidden
    >
      <div className="text-[4rem] sm:text-[6rem] font-bold tracking-tight leading-none" ref={percentRef}>
        0
      </div>
      <div className="w-[60%] h-[2px] bg-white bg-opacity-10 mt-6 relative overflow-hidden">
        <div
          ref={progressBarRef}
          className="absolute top-0 left-0 h-full bg-black"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}