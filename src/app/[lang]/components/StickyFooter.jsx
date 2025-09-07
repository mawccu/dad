// [lang]/components/StickyFooter.jsx
'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useT } from '../i18n/client';

/* ───────────────── helpers ───────────────── */

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    window.addEventListener('orientationchange', check);
    return () => {
      window.removeEventListener('resize', check);
      window.removeEventListener('orientationchange', check);
    };
  }, []);
  return isDesktop;
}

/** Detects whether any ancestor of node has transform/filter/perspective that breaks sticky */
function hasTransformedAncestor(node) {
  let el = node?.parentElement;
  while (el) {
    const cs = window.getComputedStyle(el);
    if (
      cs.transform && cs.transform !== 'none' ||
      cs.perspective && cs.perspective !== 'none' ||
      cs.filter && cs.filter !== 'none' ||
      cs.contain && cs.contain.includes('paint') // sometimes also breaks
    ) return true;
    el = el.parentElement;
  }
  return false;
}

/** Best-effort check that sticky actually sticks (not just supported). */
function useStickyHealth(stickyRef) {
  const [ok, setOk] = useState(true);
  useEffect(() => {
    if (!stickyRef.current) return;

    // If any ancestor is transformed, sticky won't work.
    if (hasTransformedAncestor(stickyRef.current)) {
      setOk(false);
      return;
    }

    // Quick feature probe: does the UA claim to support sticky?
    const supports = CSS && CSS.supports && CSS.supports('position', 'sticky');
    if (!supports) {
      setOk(false);
      return;
    }

    // Sanity: keep it true; if later you still see issues you can add scroll tests here.
    setOk(true);
  }, [stickyRef]);
  return ok;
}

/* ──────────────── content ──────────────── */

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

        <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'text-right' : ''}`}>
          <h3 className={`mb-2 sm:mb-4 uppercase text-gray-400 font-semibold ${lang === 'ar' ? 'text-base sm:text-lg' : 'text-base'}`}>
            {t('footer.company.title')}
          </h3>
          <Link href={`/${currentLang}/About`} className="hover:text-gray-300 transition-colors">
            {t('footer.company.about_us')}
          </Link>
          <Link href={`/${currentLang}/Projects`} className="hover:text-gray-300 transition-colors">
            {t('footer.company.projects')}
          </Link>
          <Link href={`/${currentLang}/Careers`} className="hover:text-gray-300 transition-colors">
            {t('footer.company.careers')}
          </Link>
          <Link href={`/${currentLang}/Contact`} className="hover:text-gray-300 transition-colors">
            {t('footer.company.contact')}
          </Link>
        </div>

        <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'text-right' : ''}`}>
          <h3 className={`mb-2 sm:mb-4 uppercase text-gray-400 font-semibold ${lang === 'ar' ? 'text-base sm:text-lg' : 'text-base'}`}>
            {t('footer.contact.title')}
          </h3>
          <p className="text-gray-300">{t('footer.contact.location')}</p>
          <a href="tel:+962000000000" className="hover:text-gray-300 transition-colors">
            {t('footer.contact.phone')}
          </a>
          <a href="mailto:info@newlook-jo.com" className="hover:text-gray-300 transition-colors">
            {t('footer.contact.email')}
          </a>
        </div>
      </div>

      <div className={`${lang === 'ar' ? 'text-right' : 'text-right'} hidden sm:block`}>
        <p className={`text-gray-400 m-2 ${lang === 'ar' ? 'text-base sm:text-lg' : 'text-base'}`}>
          {t('footer.company.tagline')}
        </p>
        <Link
          href="/About/RamiHamad"
          onClick={(e) => e.preventDefault()}
          className="text-gray-400 hover:text-gray-100 transition-colors"
        >
          {t('footer.company.learn_more')}
        </Link>
      </div>
    </div>
  );
};

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
        <div className={`flex gap-3 sm:gap-4 mb-2 sm:mb-4 ${lang === 'ar' ? 'justify-start' : 'justify-end'}`}>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            <img src="/icons/instagram.png" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            <img src="/icons/facebook.png" alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            <img src="/icons/twitter.png" alt="Twitter" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Link>
        </div>

        <div className={`flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2 ${lang === 'ar' ? 'justify-start' : 'justify-end'}`}>
          <Link href={`/${lang}/Policy?section=privacy-policy`} className="hover:text-gray-300 transition-colors">
            {t('footer.legal.privacy_policy')}
          </Link>
          <Link href={`/${lang}/Policy?section=terms-of-use`} className="hover:text-gray-300 transition-colors">
            {t('footer.legal.terms_of_use')}
          </Link>
          <Link href={`/${lang}/Policy?section=cookie-policy`} className="hover:text-gray-300 transition-colors">
            {t('footer.legal.cookie_policy')}
          </Link>
        </div>

        <p className="text-xs sm:text-sm text-gray-400 text-right">
          {t('footer.legal.copyright')}
        </p>
      </div>

      <p className="absolute top-[96%] left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-gray-400">
        {t('footer.credits.website_made_by')}
      </p>
    </div>
  );
};

/* ─────────────── main ─────────────── */
(function () {
  const sf = document.querySelector('[data-sticky-probe]') || null;
  let el = sf;
  while (el && el.parentElement) {
    el = el.parentElement;
    const cs = getComputedStyle(el);
    if (cs.transform !== 'none' || cs.perspective !== 'none' || cs.filter !== 'none') {
      console.log('Transformed ancestor:', el, cs.transform, cs.perspective, cs.filter);
      break;
    }
  }
})()
export default function StickyFooter() {
  const isDesktop = useIsDesktop();

  // Use a ref to detect transformed ancestors and decide if sticky is safe.
  const stickyRef = useRef(null);
  const stickyHealthy = useStickyHealth(stickyRef);

  // heights
  const H_MOBILE = 560;
  const H_TABLET = 680;
  const H_DESKTOP = 800;

  // Pick the target height for current viewport width.
  const targetHeight = useMemo(() => {
    if (typeof window === 'undefined') return H_DESKTOP;
    const w = window.innerWidth;
    if (w >= 1024) return H_DESKTOP;
    if (w >= 640) return H_TABLET;
    return H_MOBILE;
  }, []);

  // FALLBACK: if sticky is broken, render normal footer (no spacer → no gap)
  if (true) {
    return (
      <div className="relative">
        <FooterContent />
      </div>
    );
  }

  // MOBILE/TABLET: normal footer (avoid white space issues entirely there)
  if (!isDesktop) {
    return (
      <div className="relative">
        <FooterContent />
      </div>
    );
  }

  // DESKTOP + healthy sticky → keep the effect
  return (
    <div
      className="relative"
      style={{ height: `${targetHeight}px`, clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div
        className="relative -top-[100vh]"
        // use dvh if available; fallback to vh
        style={{
          height: `calc((var(--vh, 1vh) * 100) + ${targetHeight}px)`,
        }}
      >
        <div
          ref={stickyRef}
          className="sticky z-10"
          style={{
            top: `calc((var(--vh, 1vh) * 100) - ${targetHeight}px)`,
            height: `${targetHeight}px`,
          }}
        >
          <FooterContent />
        </div>
      </div>
    </div>
  );
}
