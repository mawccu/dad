'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
// /medias/placeholder.png
const images = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    title: 'Mountain Vista',
    description: 'Breathtaking mountain landscapes'
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop',
    title: 'Forest Path',
    description: 'Serene forest walkways'
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop',
    title: 'Ocean Waves',
    description: 'Endless ocean horizons'
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=500&fit=crop',
    title: 'Desert Dunes',
    description: 'Golden sand formations'
  }
];

export default function GSAPImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);
  const overlaysRef = useRef([]);
  const dotsRef = useRef([]);
  const timelineRef = useRef(null);
  const autoplayRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP timeline
    timelineRef.current = gsap.timeline({ paused: true });
    
    // Set initial states
    gsap.set(slidesRef.current, { 
      opacity: 0,
      scale: 1.1,
      rotationY: 15
    });
    
    gsap.set(overlaysRef.current, { 
      y: 100,
      opacity: 0
    });

    // Show first slide
    gsap.set(slidesRef.current[0], { 
      opacity: 1,
      scale: 1,
      rotationY: 0
    });
    
    gsap.set(overlaysRef.current[0], { 
      y: 0,
      opacity: 1
    });

    // Start autoplay
    startAutoplay();

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (isPlaying) {
        nextSlide();
      }
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const animateSlide = (from, to, direction = 1) => {
    const tl = gsap.timeline();

    // Animate out current slide
    tl.to(slidesRef.current[from], {
      opacity: 0,
      scale: 0.9,
      rotationY: direction * -15,
      duration: 0.6,
      ease: "power2.inOut"
    })
    .to(overlaysRef.current[from], {
      y: 100,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut"
    }, 0);

    // Animate in new slide
    tl.fromTo(slidesRef.current[to], 
      {
        opacity: 0,
        scale: 1.1,
        rotationY: direction * 15
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        ease: "power2.out"
      }, 0.2)
    .fromTo(overlaysRef.current[to],
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, 0.4);

    // Animate dots
    gsap.to(dotsRef.current[from], {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      duration: 0.3
    });
    
    gsap.to(dotsRef.current[to], {
      scale: 1.2,
      backgroundColor: "rgba(255, 255, 255, 1)",
      duration: 0.3
    });
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % images.length;
    animateSlide(currentSlide, nextIndex, 1);
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + images.length) % images.length;
    animateSlide(currentSlide, prevIndex, -1);
    setCurrentSlide(prevIndex);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      const direction = index > currentSlide ? 1 : -1;
      animateSlide(currentSlide, index, direction);
      setCurrentSlide(index);
    }
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div 
        ref={sliderRef}
        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black group"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        {/* Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Slide Overlay */}
            <div
              ref={(el) => (overlaysRef.current[index] = el)}
              className="absolute bottom-0 left-0 right-0 p-8 text-white"
            >
              <h3 className="text-3xl font-bold mb-2 text-shadow">
                {image.title}
              </h3>
              <p className="text-lg opacity-90 text-shadow">
                {image.description}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Autoplay Toggle */}
        <button
          onClick={toggleAutoplay}
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-white transition-all duration-300"
            style={{
              width: `${((currentSlide + 1) / images.length) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Dots Pagination */}
      <div className="flex justify-center items-center space-x-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            ref={(el) => (dotsRef.current[index] = el)}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4 text-white/80">
        <span className="text-2xl font-bold text-white">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <span className="mx-2">/</span>
        <span>{String(images.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}