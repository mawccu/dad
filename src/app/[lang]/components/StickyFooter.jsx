// [lang]/components/StickyFooter.jsx
'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useT } from '../i18n/client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Content component for the sticky footer
function FooterContent() {
  const { lang } = useParams();

  return (
    <div
      className="
        bg-gray-900 text-white
        py-10 px-4
        sm:py-12 sm:px-8
        h-full w-full
        flex flex-col justify-between
      "
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <FooterNav />
      <FooterBottom />
    </div>
  );
}

// Navigation section
const FooterNav = () => {
  const { lang } = useParams();
  const { t } = useT();
  const currentLang = lang === 'ar' ? 'ar' : 'en';

  return (
    <div
      className={`
        flex ${lang === 'ar' ? 'flex-row-reverse' : ''}
        items-start
        justify-between
        gap-8 sm:gap-10 lg:gap-0
        flex-col lg:flex-row
      `}
    >
      {/* Columns */}
      <div
        className={`
          flex ${lang === 'ar' ? 'flex-row-reverse' : ''}
          gap-10 sm:gap-16 lg:gap-20
          w-full lg:w-auto
          flex-wrap lg:flex-nowrap
        `}
      >
        <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'text-right' : ''}`}>
          <h3 className={`mb-2 sm:mb-4 uppercase text-gray-400 font-semibold ${lang === 'ar' ? 'text-base sm:text-lg' : 'text-base'}`}>
            {t('footer.services.title')}
          </h3>
          <Link href={`/${currentLang}/Services`} className="hover:text-gray-300 transition-colors">
            {t('footer.services.all_services')}
          </Link>
          <Link href={`/${currentLang}/Services/SurfaceFinishing`} className="hover:text-gray-300 transition-colors">
            {t('footer.services.protective_coatings')}
          </Link>
          <Link href={`/${currentLang}/Services/CustomFlooring`} className="hover:text-gray-300 transition-colors">
            {t('footer.services.custom_flooring')}
          </Link>
          <Link href={`/${currentLang}/Services/SurfaceFinishing`} className="hover:text-gray-300 transition-colors">
            {t('footer.services.waterproofing')}
          </Link>
          <Link href={`/${currentLang}/Services/SurfaceFinishing`} className="hover:text-gray-300 transition-colors">
            {t('footer.services.surface_treatments')}
          </Link>
        </div>

        <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'text-right items-start' : ''}`}>
          <h3 className={`mb-2 sm:mb-4 uppercase text-gray-400 font-semibold ${lang === 'ar' ? 'text-base sm:text-lg' : 'text-base'}`}>
            {t('footer.company.title')}
          </h3>
          <Link href={`/${currentLang}/About`} className="hover:text-gray-300 transition-colors">
            {t('footer.company.about_us')}
          </Link>
          <Link href={`/${currentLang}/Projects`} className="hover:text-gray-300 transition-colors">
            {t('footer.company.projects')}
          </Link>
        
          <Link href={`/${currentLang}/Contact`} className="hover:text-gray-300 transition-colors">
            {t('footer.company.contact')}
          </Link>
        </div>
        {/* Contact Info */}
        <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'text-right items-start' : ''}`}>
          <h3 className={`mb-2 sm:mb-4 uppercase text-gray-400 font-semibold ${lang === 'ar' ? 'text-base sm:text-lg' : 'text-base'}`}>
            {t('footer.contact.title')}
          </h3>
          <p>{t('footer.contact.location')}</p>
          <a href="tel:+962795637354" className="hover:text-gray-300 transition-colors" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>
            +962 79 5637354
          </a>
          <a href="tel:+966595687465" className="hover:text-gray-300 transition-colors" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>
            +966 59 5687465
          </a>
          <a href="mailto:info@newlook-jo.com" className="hover:text-gray-300 transition-colors">
            {t('footer.contact.email')}
          </a>
        </div>
      </div>

      {/* Company Logo/Name - Hidden on mobile */}
      <div className={`${lang === 'ar' ? 'text-right' : 'text-left'} hidden sm:block`}>
        <p className={`text-gray-400 m-2  ${lang === 'ar' ? 'text-base sm:text-lg' : 'text-base'}`}>
          {t('footer.company.tagline')}
        </p>
        <span
          
          disabled={true}
          onClick={(e) => e.preventDefault()}
          className="text-gray-400 hover:text-gray-100 transition-colors md:px-2"
        >
          {t('footer.company.learn_more')}
        </span>
      </div>
    </div>
  );
};

// Bottom section with social links and copyright
const FooterBottom = () => {
  const { lang } = useParams();
  const { t } = useT();

  return (
    <div
      className={`
        relative flex ${lang === 'ar' ? 'flex-row-reverse' : ''}
        justify-between items-end
        mt-10 sm:mt-12
        pt-6 sm:pt-8
        border-t border-gray-700
        gap-4 sm:gap-8
        flex-col-reverse sm:flex-row
      `}
    >
      <div className="flex items-center flex-shrink-0">
        <h2 className={`${lang === 'ar' ? 'text-[12vw] sm:text-[5vw] lg:text-[4rem]' : 'text-[14vw] sm:text-[6vw] lg:text-[6rem]'} font-light leading-none`}>
          {t('footer.company.brand_name')}
        </h2>
      </div>

      <div className={`${lang === 'ar' ? 'text-left' : 'text-right'} w-full sm:w-auto flex-shrink-0`}>
        {/* Social Links */}
        <div className={`flex gap-3 sm:gap-4 mb-2 sm:mb-4 ${lang === 'ar' ? 'justify-start' : 'justify-end'}`}>
          <Link
            href="https://www.instagram.com/newlook_jo/?next=%2Fdirect%2Ft%2F117471066306121%2F"
            className="hover:opacity-70 transition-opacity"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/icons/instagram.png" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100064126295491"
            className="hover:opacity-70 transition-opacity"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/icons/facebook.png" alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8" />
          </Link>

          <Link
            href="https://x.com/NewLook_jo"
            className="hover:opacity-70 transition-opacity"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/icons/twitter.png" alt="Twitter" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/rami-s-hamad-09821a59/"
            className="hover:opacity-70 transition-opacity"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8" />
          </Link>
        </div>

        {/* Legal Links */}
        <div className={`flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2 ${lang === 'ar' ? 'justify-start' : 'justify-end'}`}>
          <Link
            href={`/${lang}/Policy?section=privacy-policy`}
            className="hover:text-gray-300 transition-colors"
          >
            {t('footer.legal.privacy_policy')}
          </Link>
          <Link
            href={`/${lang}/Policy?section=terms-of-use`}
            className="hover:text-gray-300 transition-colors"
          >
            {t('footer.legal.terms_of_use')}
          </Link>
          <Link
            href={`/${lang}/Policy?section=cookie-policy`}
            className="hover:text-gray-300 transition-colors"
          >
            {t('footer.legal.cookie_policy')}
          </Link>
        </div>

        <p className={`text-xs sm:text-sm text-gray-400 ${lang === 'ar' ? 'text-right' : 'text-right'}`}>
          {t('footer.legal.copyright')}
        </p>
      </div>

      {/* Website made by - absolute line stays centered */}
      <p className="absolute top-[96%] left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-gray-400">
        {t('footer.credits.website_made_by')}
      </p>
    </div>
  );
};

// Main Sticky Footer Component
// Main Sticky Footer Component


export default function StickyFooter() {
  const rangeRef = useRef(null);
  const revealRef = useRef(null);

  
  return (
    <div className="relative h-[560px] sm:h-[680px] lg:h-[680px]">
      {/* MAKE THIS ABSOLUTE + TRANSLATE INSTEAD OF relative + -top */}
      <div
        ref={rangeRef}
        className="
          absolute inset-0
          h-[calc(100dvh+560px)]
          sm:h-[calc(100dvh+680px)]
          lg:h-[calc(100dvh+680px)]
          translate-y-[-100dvh]
          will-change-transform
          [transform:translateZ(0)]
          pointer-events-none
        "
        style={{ contain: 'paint' }}
      >
        <div
          className="
            sticky z-10
            top-[calc(100dvh-560px)]
            sm:top-[calc(100dvh-680px)]
            lg:top-[calc(100dvh-680px)]
            h-[560px] sm:h-[680px] lg:h-[680px]
          "
        >
          {/* animate this wrapper; re-enable pointer events for its content */}
          <div
            ref={revealRef}
            className="h-full will-change-transform [transform:translateZ(0)] pointer-events-auto"
          >
            <FooterContent />
          </div>
        </div>
      </div>
    </div>
  );
}