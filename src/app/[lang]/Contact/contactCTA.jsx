//'[lang]/Contact/contactCTA.jsx
'use client'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useT } from '../i18n/client';
import { useParams, useRouter } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA(){
  const { t } = useT('common');

  return(
    <div className="relative w-full h-[70vh] sm:h-[90vh] lg:h-[100vh]">
      <Image
        src="/medias/img10.webp"
        fill
        sizes="100vw"
        className="object-cover"
        alt={t('contact1.cta.background_alt')}
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <ParallaxText />
    </div>
  )
}

function ParallaxText() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const { t } = useT('common');
  const { lang } = useParams();
  const router = useRouter();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;


  useEffect(() => {
    // Clean up previous ScrollTriggers
    const cleanup = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

    // Only enable pinning on desktop to keep mobile/tablet smooth
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 350px',
        end: 'bottom bottom',
        pin: textRef.current,
        pinSpacing: false,
      });
      ScrollTrigger.refresh();

      return () => {
        st && st.kill();
        cleanup();
      };
    } else {
      // No pinning on smaller screens
      return cleanup;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        w-full relative
        h-[90vh] sm:h-[110vh] lg:h-[120vh]
        text-white
      "
    >
      <Image
        src="/medias/img10.webp"
        fill
        sizes="100vw"
        priority
        className={`object-cover ${isMobile ? 'object-right' : ''}`}
        alt={t('contact1.cta.background_alt')}
      />
      <div className="absolute inset-0 bg-black/40" />

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
            style={{ pointerEvents: 'all' }}
          >
            {t('contact1.cta.button_text')}
          </button>
        </div>
      </div>
    </div>
  );
}
