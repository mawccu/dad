'use client'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA(){
    return(
        <div className="relative w-full h-[100vh]">
            <Image src="/medias/placeholder.png" fill className="object-cover" alt="Expeditors bathroom project hero"></Image>
            <div className="absolute inset-0 bg-black/20" />
            <ParallaxText />
        </div>
    )
}

function ParallaxText() {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Clean up function to kill previous ScrollTriggers
    const cleanup = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    
    // Create the sticky effect with proper settings
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 350px',
      end: 'bottom 1000px',
      pin: textRef.current,
      pinSpacing: false,
    });

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    return cleanup;
  }, []);

  return (
    <>
    
      
      <div ref={containerRef} className="w-full relative h-[120vh] text-white">
        <Image 
          src="/medias/img10.webp"
          fill
          priority
          className="object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div ref={textRef} className="flex justify-between">
            <p className="px-4 sm:px-10 text-lg font-300 sm:text-xl py-20 sm:py-40 drop-shadow-sm">
                Interested?
                <br/>
                Let's connect.
            </p>
            <div className="flex flex-col items-start text-left pr-10 sm:pr-80 py-20 sm:py-40">
                <h1 className="text-2xl sm:text-4xl font-300 leading-tight mb-4 drop-shadow-sm">

                    Feel free to reach out.
                    <br />
                    We would love to hear from you.
                </h1>
                <button className="text-base sm:text-1.5xl font-300 rounded-full p-3 sm:p-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300">

                    Contact us
                </button>
            </div>
        </div>
      </div>

     
    </>
  );
}