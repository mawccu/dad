'use client';
import React, { useEffect, useRef } from 'react';

const HorizontalScroll = ({ slides = [], outroText = "Shaping Timeless space with contemporary vision" }) => {
  const stickyRef = useRef(null);
  const slidesContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    // Dynamically import GSAP and Lenis to avoid SSR issues
    const loadScripts = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const Lenis = (await import('@studio-freight/lenis')).default;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      const stickySection = stickyRef.current;
      const slidesContainer = slidesContainerRef.current;
      const slider = sliderRef.current;
      const slideElements = slidesRef.current.filter(Boolean);

      if (!stickySection || !slidesContainer || !slider || slideElements.length === 0) {
        return;
      }

      // Force a reflow to ensure proper measurements
      slider.style.display = 'none';
      slider.offsetHeight; // Force reflow
      slider.style.display = '';
      
      const stickyHeight = window.innerHeight * 6;
      const totalMove = slidesContainer.offsetWidth - slider.offsetWidth;
      const slideWidth = slider.offsetWidth;
      
      console.log('Debug measurements:', {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        sliderWidth: slideWidth,
        slidesContainerWidth: slidesContainer.offsetWidth,
        totalMove: totalMove,
        slidesCount: slideElements.length
      });

      // Initialize all images with proper transform
      slideElements.forEach((slide) => {
        const title = slide.querySelector('.title h1');
        const image = slide.querySelector('img');
        
        if (title) {
          gsap.set(title, { y: -200 });
        }
        
        if (image) {
          gsap.set(image, {
            x: 0,
            scale: 1.35,
            force3D: true,
            transformOrigin: "center center"
          });
        }
      });

      let currentVisibleIndex = null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const currentIndex = Array.from(slideElements).indexOf(entry.target);
            const titles = Array.from(slideElements).map((slide) => 
              slide.querySelector(".title h1")
            ).filter(Boolean);

            if (entry.intersectionRatio >= 0.25) {
              currentVisibleIndex = currentIndex;
              titles.forEach((title, index) => {
                gsap.to(title, {
                  duration: 0.5,
                  y: index === currentIndex ? 0 : 200,
                  ease: "power2.out",
                  overwrite: true,
                });
              });
            } else if (
              entry.intersectionRatio < 0.25 && currentVisibleIndex === currentIndex
            ) {
              const prevIndex = currentIndex - 1;
              currentVisibleIndex = prevIndex >= 0 ? prevIndex : null;

              titles.forEach((title, index) => {
                gsap.to(title, {
                  y: index === prevIndex ? 0 : -200,
                  duration: 0.5,
                  ease: "power2.out",
                  overwrite: true,
                });
              });
            }
          });
        },
        {
          root: slider,
          threshold: [0, 0.25],
        }
      );

      slideElements.forEach((slide) => observer.observe(slide));

      // Add window resize handler
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      
      window.addEventListener('resize', handleResize);

      // Ensure page starts at the very top
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const scrollTrigger = ScrollTrigger.create({
        trigger: stickySection,
        start: 'top top',
        end: `+=${stickyHeight}px`,
        scrub: 1,
        pinSpacing: true,
        pin: true,
        anticipatePin: 1, // This helps with smooth pinning
        refreshPriority: -1, // Lower priority to ensure proper initialization
        onUpdate: (self) => {
          const progress = self.progress;
          const currentTotalMove = slidesContainer.offsetWidth - slider.offsetWidth;
          const currentSlideWidth = slider.offsetWidth;
          const mainMove = progress * currentTotalMove;

          gsap.set(slidesContainer, {
            x: -mainMove,
            force3D: true
          });

          const currentSlide = Math.floor(mainMove / currentSlideWidth);
          const slideProgress = (mainMove % currentSlideWidth) / currentSlideWidth;

          slideElements.forEach((slide, index) => {
            const image = slide.querySelector("img");
            if (image) {
              let parallaxAmount = 0;
              
              if (index === currentSlide) {
                parallaxAmount = slideProgress * currentSlideWidth * 0.25;
              } else if (index === currentSlide + 1) {
                parallaxAmount = (slideProgress - 1) * currentSlideWidth * 0.25;
              }
              
              parallaxAmount = Math.round(parallaxAmount * 100) / 100;
              
              gsap.set(image, {
                x: parallaxAmount,
                scale: 1.35,
                force3D: true,
                transformOrigin: "center center"
              });
            }
          });
        }
      });

      // Force page to start at top after ScrollTrigger is created
      setTimeout(() => {
        window.scrollTo(0, 0);
        ScrollTrigger.refresh();
      }, 50);

      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        observer.disconnect();
        scrollTrigger.kill();
        lenis.destroy();
      };
    };

    loadScripts();
  }, [slides.length]); // Changed dependency to slides.length

  // Default slides if none provided
  const defaultSlides = [
    {
      image: "/medias/img5.jpg",
      title: "Tamareed",
      subtitle: "Bazooka"
    },
    {
      image: "/medias/img1.jpg",
      title: "Schwarzneggers",
      subtitle: "No Frames"
    },
    {
      image: "/medias/img2.jpg",
      title: "Curtainengers",
      subtitle: "Black Slaves"
    },
    {
      image: "/medias/img3.jpg",
      title: "Jack somadick",
      subtitle: "Modern Flow"
    },
    {
      image: "/medias/img4.jpg",
      title: "Minimal Design",
      subtitle: "Natural Light"
    }
  ];

  const slidesToRender = slides.length > 0 ? slides : defaultSlides;

  return (
    <>
      <style jsx>{`
        /* Global reset and prevent horizontal scroll */
        * {
          box-sizing: border-box;
        }
        
        html {
          overflow-x: hidden;
          width: 100%;
        }
        
        body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .horizontal-scroll-body {
          width: 100vw;
          height: 700vh;
          font-family: "Gilroy", sans-serif;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          position: relative;
        }

        .horizontal-scroll-section {
          position: relative;
          width: 100vw;
          height: 100vh;
          padding: 0;
          margin: 0;
          overflow: hidden;
        }

        .horizontal-scroll-outro {
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          overflow: hidden;
        }

        .horizontal-scroll-outro h1 {
          color: white;
          text-transform: uppercase;
          font-size: 60px;
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 0.9;
          margin: 0;
          padding: 0;
        }

        .horizontal-scroll-sticky {
          background-color: transparent;
          overflow: hidden;
        }

        .horizontal-scroll-slider {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .horizontal-scroll-slides {
          position: absolute;
          top: 0;
          left: 0;
          width: ${slidesToRender.length * 100}vw;
          height: 100vh;
          display: flex;
          will-change: transform;
          transform: translateX(0);
        }

        .horizontal-scroll-slide {
          position: relative;
          width: 100vw;
          height: 100vh;
          flex-shrink: 0;
        }

        .horizontal-scroll-img {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          padding: 20px;
          box-sizing: border-box;
        }

        .horizontal-scroll-img img {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translateX(0) scale(1.35);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          border-radius: 8px;
        }

        .horizontal-scroll-title {
          position: absolute;
          bottom: 1.5em;
          left: 1.5em;
          width: max-content;
          height: 200px;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          z-index: 2;
          margin: 0;
          padding: 0;
        }

        .horizontal-scroll-title h1 {
          position: relative;
          color: #fff;
          text-transform: uppercase;
          font-size: 85px;
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 0.9;
          will-change: transform;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 768px) {
          .horizontal-scroll-img {
            padding: 15px;
          }
          
          .horizontal-scroll-title h1 {
            font-size: 50px;
          }
          
          .horizontal-scroll-outro h1 {
            font-size: 40px;
          }
        }

        @media (max-width: 480px) {
          .horizontal-scroll-img {
            padding: 10px;
          }
          
          .horizontal-scroll-title h1 {
            font-size: 35px;
          }
          
          .horizontal-scroll-outro h1 {
            font-size: 28px;
          }
        }
      `}</style>
      
      <div className="horizontal-scroll-body">
        <section 
          ref={stickyRef}
          className="horizontal-scroll-section horizontal-scroll-sticky"
        >
          <div 
            ref={sliderRef}
            className="horizontal-scroll-slider"
          >
            <div 
              ref={slidesContainerRef}
              className="horizontal-scroll-slides"
            >
              {slidesToRender.map((slide, index) => (
                <div 
                  key={index}
                  ref={el => slidesRef.current[index] = el}
                  className="horizontal-scroll-slide"
                >
                  <div className="horizontal-scroll-img">
                    <img src={slide.image} alt={`${slide.title} ${slide.subtitle}`} />
                  </div>
                  <div className="horizontal-scroll-title title">
                    <h1>
                      {slide.title} <br /> {slide.subtitle}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="horizontal-scroll-section horizontal-scroll-outro">
          <h1>{outroText}</h1>
        </section>
      </div>
    </>
  );
};

export default HorizontalScroll;