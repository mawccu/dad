//[lang]/Contact/contactCTA.jsx
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
    const { lang } = useParams();

    return(
        <div className="relative w-full h-[100vh]">
            <Image src="/medias/placeholder.png" fill className="object-cover" alt={t('contact1.cta.background_alt')}></Image>
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
          alt={t('contact1.cta.background_alt')}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div ref={textRef} className={`flex ${lang === 'ar' ? 'flex-row-reverse' : ''} justify-between`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <p className={`px-4 sm:px-10 font-300 py-20 sm:py-40 drop-shadow-sm ${lang === 'ar' ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`}>
                {t('contact1.cta.interested')}
                <br/>
                {t('contact1.cta.lets_connect')}
            </p>
            <div className={`flex flex-col items-start pr-10 sm:pr-80 py-20 sm:py-40 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <h1 className={`font-300 leading-tight mb-4 drop-shadow-sm ${lang === 'ar' ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-4xl'}`}>
                    {t('contact1.cta.feel_free')}
                    <br />
                    {t('contact1.cta.love_to_hear')}
                </h1>
                <button 
                    className={`font-300 rounded-full p-3 sm:p-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300 relative z-50 cursor-pointer ${lang === 'ar' ? 'text-lg sm:text-xl' : 'text-base sm:text-1.5xl'}`}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log("Button Clicked!")
                        console.log("Language:", lang)
                        console.log("Target route:", `/${lang}/contact`)
                        router.push(`/${lang}/Contact`)
                    }}
                    style={{ pointerEvents: 'all' }}
                >
                    {t('contact1.cta.button_text')}
                </button>
            </div>
        </div>
      </div>

     
    </>
  );
}