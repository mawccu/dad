//Projects/HeroSlider.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';


const images = [
  {src:  '/medias/img1.jpg', link: '/Projects/Villa01'},
  {src:  '/medias/img2.jpg', link: '/Projects/Movenpick'},
  {src:  '/medias/img3.jpg', link: '/Projects/Safeway'},
  {src:  '/medias/img4.jpg', link: '/Projects/AbdounBridge'},
];
export default function HeroSlider() {
  const router = useRouter();


  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const imageRefs = useRef([]);
  const timerCircleRef = useRef(null);
  const timerAnimationRef = useRef(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const [, forceUpdate] = useState(0); // to trigger re-render on move

  // Initial image fade
  useEffect(() => {
    gsap.set(imageRefs.current, { autoAlpha: 0 });
    gsap.to(imageRefs.current[current], { autoAlpha: 1, duration: 0.8 });
  }, [current]);

  // Auto-slide timer
  useEffect(() => {
    const interval = setInterval(() => goToNext(), 5000);
    return () => clearInterval(interval);
  }, [current]);

  // Circle stroke animation
  useEffect(() => {
    const circle = timerCircleRef.current;
    const r = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * r;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    timerAnimationRef.current?.kill();
    timerAnimationRef.current = gsap.fromTo(
      circle,
      { strokeDashoffset: circumference },
      { strokeDashoffset: 0, duration: 5, ease: 'linear', repeat: -1 }
    );

    return () => timerAnimationRef.current?.kill();
  }, [current]);

  // Mouse tracking
  useEffect(() => {
    const move = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      cursorRef.current.x = e.clientX - rect.left;
      cursorRef.current.y = e.clientY - rect.top;
      forceUpdate(n => n + 1);
    };
    const el = containerRef.current;
    el.addEventListener('mousemove', move);
    return () => el.removeEventListener('mousemove', move);
  }, []);

  const goToNext = () => {
    const next = (current + 1) % images.length;
    gsap.to(imageRefs.current[current], { autoAlpha: 0, duration: 0.8 });
    gsap.to(imageRefs.current[next], { autoAlpha: 1, duration: 0.8 });
    setCurrent(next);
  };

  return (
    <div
      ref={containerRef}
      onClick={goToNext}
      style={{
        width: '100vw',
        height: 'calc(100vh - 75px)',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000',
        cursor: 'none' /* hide native cursor */,
      }}
    >
      {/* Slides */}
      {images.map(({ src, link }, i) => (
  <div
    key={i}
    style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: i === current ? 'auto' : 'none' }}
  >
    <img
      ref={el => (imageRefs.current[i] = el)}
      src={src}
      alt={`Slide ${i}`}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: i === current ? 1 : 0,
        transition: 'opacity 0.8s ease',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
      draggable={false}
    />
    {i === current && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          router.push(link);
        }}
        
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          fontSize: '1.2rem',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          cursor: 'pointer',
          fontWeight: '600',
          color: 'white',
          userSelect: 'none',
          transition: 'background-color 0.3s ease',
          textDecoration: 'underline',
          textUnderlineOffset: '0.4em',
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)'}
      >
        View Project
      </button>
    )}
  </div>
))}

      {/* Cursor-following timer circle */}
<svg
  width="40"
  height="40"
  style={{
    position: 'absolute',
    left: `${cursorRef.current.x - 20}px`,  // half of 40
    top: `${cursorRef.current.y - 20}px`,
    pointerEvents: 'none',
    stroke: 'black',
    strokeWidth: 5,
    fill: 'white',
    borderRadius: '50%',
  }}
>
  <circle
    ref={timerCircleRef}
    cx="20"
    cy="20"
    r="18"
    strokeLinecap="round"
    transform="rotate(-90 20 20)"
  />
</svg>
    </div>
  );
}
