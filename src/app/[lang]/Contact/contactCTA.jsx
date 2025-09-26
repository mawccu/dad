'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useT } from '../i18n/client';
import { useParams, useRouter } from 'next/navigation';

export default function ContactCTA() {
  const { t } = useT('common');

  return (
    <div className="relative w-full h-[90vh] lg:h-[110vh]">
      {/* Background image */}
      <Image
        src="/medias/img10.webp"
        fill
        sizes="100vw"
        className="object-cover"
        alt={t('contact1.cta.background_alt')}
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <ParallaxText />
    </div>
  );
}

function ParallaxText() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const { t } = useT('common');
  const { lang } = useParams();
  const router = useRouter();

  useLayoutEffect(() => {
    // Register ScrollTrigger inside the effect
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !textRef.current) return;

    let scrollTriggerInstance = null;

    // Check if we're on desktop
    const isDesktop = window.matchMedia("(min-width: 1280px)").matches;

    if (isDesktop) {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top+=350",
        end: () => {
          const vh = window.innerHeight * 0.6;
          const available = containerRef.current.offsetHeight - 100;
          return `+=${Math.max(0, Math.min(vh, available))}`;
        },
        pin: textRef.current,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        id: "cta-pin"
      });

      // Refresh ScrollTrigger after creation
      ScrollTrigger.refresh();
    }

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full text-white"
    >
      <div
        ref={textRef}
        className={`
          relative z-10
          flex flex-col sm:flex-row
          ${lang === 'ar' ? 'sm:flex-row-reverse' : ''}
          justify-between sm:items-center
          px-4 sm:px-10
          py-16 sm:py-24 lg:py-40
          gap-8 sm:gap-10
        `}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Left blurb */}
        <p
          className={`
            font-300 drop-shadow-sm
            ${lang === 'ar'
              ? 'text-base sm:text-xl lg:text-2xl'
              : 'text-sm sm:text-lg lg:text-xl'}
          `}
        >
          {t('contact1.cta.interested')}
          <br />
          {t('contact1.cta.lets_connect')}
        </p>

        {/* Right heading + button */}
        <div
          className={`
            flex flex-col
            ${lang === 'ar' ? 'items-start text-right' : 'items-start text-left'}
            pr-0 sm:pr-12 lg:pr-80
            gap-4
          `}
        >
          <h1
            className={`
              font-300 leading-tight drop-shadow-sm
              ${lang === 'ar'
                ? 'text-2xl sm:text-4xl lg:text-5xl'
                : 'text-xl sm:text-3xl lg:text-4xl'}
            `}
          >
            {t('contact1.cta.feel_free')}
            <br />
            {t('contact1.cta.love_to_hear')}
          </h1>

          <button
            className={`
              font-300 rounded-full
              px-4 py-2 sm:px-5 sm:py-3
              bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white
              hover:from-blue-600 hover:via-blue-700 hover:to-blue-800
              transition-all duration-300
              relative z-50 cursor-pointer
              whitespace-nowrap
              ${lang === 'ar' ? 'text-base sm:text-xl text-center' : 'text-sm sm:text-1.5xl'}
            `}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              router.push(`/${lang}/Contact`);
            }}
          >
            {t('contact1.cta.button_text')}
          </button>
        </div>
      </div>
    </div>
  );
}
