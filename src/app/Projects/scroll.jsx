import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollRef.current;
    
    if (!container || !scrollContainer) return;

    // Force ScrollTrigger to start immediately by creating a minimal scroll
    const forceScrollTriggerStart = () => {
      // Save current scroll position
      const currentScroll = window.pageYOffset;
      
      // Scroll down 1px to trigger ScrollTrigger
      window.scrollTo(0, currentScroll + 1);
      
      // Immediately scroll back to original position
      requestAnimationFrame(() => {
        window.scrollTo(0, currentScroll);
      });
    };

    const initializeScrollTrigger = () => {
      // Kill existing triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Calculate scroll width
      const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;
      
      // Create the horizontal scroll animation
      const horizontalScroll = gsap.to(scrollContainer, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollWidth + window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // Force refresh and enable immediately
          onRefresh: () => {
            ScrollTrigger.refresh();
          },
          onToggle: (self) => {
            // Ensure it's active when it should be
            if (self.isActive) {
              gsap.set(scrollContainer, { x: 0 });
            }
          }
        }
      });

      // Section animations
      gsap.utils.toArray('.scroll-section').forEach((section, index) => {
        const content = section.querySelector('.section-content');
        if (content) {
          gsap.fromTo(content, 
            {
              opacity: 0.7,
              scale: 0.95,
            },
            {
              opacity: 1,
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "left 70%",
                end: "right 30%",
                scrub: 1,
                containerAnimation: horizontalScroll,
                invalidateOnRefresh: true
              }
            }
          );
        }
      });

      // Force ScrollTrigger to be active
      ScrollTrigger.refresh();
      
      // Force a tiny scroll to activate everything
      setTimeout(() => {
        forceScrollTriggerStart();
      }, 50);
    };

    // Wait for everything to be ready before initializing
    const setupAnimation = () => {
      if (document.readyState === 'complete') {
        setTimeout(initializeScrollTrigger, 0);
      } else {
        window.addEventListener('load', () => {
          setTimeout(initializeScrollTrigger, 100);
        });
      }
    };

    setupAnimation();

    // Additional backup initialization
    setTimeout(() => {
      initializeScrollTrigger();
      setTimeout(forceScrollTriggerStart, 100);
    }, 200);

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div ref={scrollRef} className="flex h-full w-[400vw]">
        
        {/* Section 1 */}
        <div className="flex p-8 scroll-section w-screen h-full justify-between gap-32">
          <div className="section-content">
            <Image 
              src="/medias/placeholder.png"
              alt="Abdoun Bridge"
              width={1000}
              height={1080}
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="section-content">
            <h2 className="text-6xl font-bold text-white">Abdoun Bridge, Amman</h2>
            <div className="text-lg max-w-3xl text-gray-300">   
              <p className="text-xl text-white mb-6">Protective Coatings & Surface Systems</p>
              <p>As part of the iconic Abdoun Bridge development, New look was involved in delivering high-performance
                coating systems that ensure long-term surface durability in one of Jordan's most prestigious infrastructure projects.
              </p>
              <p>Project led by our founder, Rami Hamad, in a subcontractor capacity through SIPES. His expertise in finishing and coating systems ensured
                strict adherence to technical and aesthetic standards.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex p-8 scroll-section w-screen h-full justify-between gap-8">
          <div className="section-content">
            <Image 
              src="/medias/placeholder.png"
              alt="Mövenpick"
              width={1000}
              height={1080}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="section-content">
            <h2 className="text-6xl font-bold text-white mb-6">Section 2</h2>
            <p className="text-lg text-gray-300">This is the second section of the horizontal scroll.</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex p-8 scroll-section w-screen h-full justify-between gap-8">
          <div className="section-content">
            <Image 
              src="/medias/placeholder.png"
              alt="West Amman Villa"
              width={1000}
              height={1080}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="section-content">
            <h2 className="text-6xl font-bold text-white mb-6">Section 3</h2>
            <p className="text-lg text-gray-300">This is the third section of the horizontal scroll.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;