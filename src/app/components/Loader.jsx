'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useProgress } from './ProgressProvider';

export default function Loader() {
  const { progress } = useProgress();
  const loaderRef = useRef(null);
  const percentRef = useRef(null);
  const progressBarRef = useRef(null);

  // Animate % text and loader exit
  useEffect(() => {
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

    if (progress === 100 && loaderRef.current) {
      const tl = gsap.timeline({
        delay: 0.4,
        onComplete: () => {
          loaderRef.current.style.display = 'none';
        },
      });

      tl.to(loaderRef.current, {
        yPercent: -100,
        ease: 'power4.inOut',
        duration: 1.2,
      });
    }
  }, [progress]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="text-[4rem] sm:text-[6rem] font-bold tracking-tight leading-none" ref={percentRef}>
        0
      </div>

      <div className="w-[60%] h-[2px] bg-white bg-opacity-10 mt-6 relative overflow-hidden">
        <div
          ref={progressBarRef}
          className="absolute top-0 left-0 h-full bg-white"
          style={{ width: '0%' }}
        />
      </div>

      <div className="mt-4 text-xs opacity-40 tracking-widest uppercase">Preparing experience</div>
    </div>
  );
}
