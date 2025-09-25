'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useT } from '../i18n/client';
import  Image from 'next/image';

function MobileFooter() {
  // ≤768px (md and below)
  // Vertical socials, larger nav, generous spacing
  const { lang } = useParams();
  const currentLang = lang === 'ar' ? 'ar' : 'en';
  const { t } = useT();

  return (
    <div className="md:hidden flex flex-col gap-6 text-sm">
      {/* Headline */}
      <p className="text-base leading-snug text-gray-200">
        {t('footer.company.tagline')}
      </p>

      {/* Learn more */}
      <p className="text-gray-400">
        <span className="decoration-gray-600">
          {t('footer.company.learn_more')}
        </span>
      </p>

      {/* Nav links — a little bigger + extra spacing below */}
      <nav className="flex flex-col gap-3 text-gray-200 text-lg leading-relaxed pt-2 pb-4">
        <div><Link href={`/${currentLang}`} className="hover:text-white transition-colors">{t('footer.company.home')}</Link></div>
        <div><Link href={`/${currentLang}/About`} className="hover:text-white transition-colors">{t('footer.company.about_us')}</Link></div>
        <div><Link href={`/${currentLang}/Services`} className="hover:text-white transition-colors">{t('footer.services.title')}</Link></div>
        <div><Link href={`/${currentLang}/Projects`} className="hover:text-white transition-colors">{t('footer.company.projects')}</Link></div>
        <div><Link href={`/${currentLang}/Contact`} className="hover:text-white transition-colors">{t('footer.company.contact')}</Link></div>
      </nav>
      {/* Divider + Contact us */}

      {/* Locations & phones */}
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-semibold text-base tracking-wide text-gray-300 pb-4">{t('footer.contact.title')}</h3>

          <p className="text-gray-300">{t('footer.contact.location1')}</p>
          <a
            href="tel:+962795637354"
            className="text-gray-200 hover:text-white transition-colors"
            style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}
          >
            → +962 79 5637354
          </a>
        </div>
        <div>
          <p className="text-gray-300">{t('footer.contact.location2')}</p>
          <a
            href="tel:+966595687465"
            className="text-gray-200 hover:text-white transition-colors"
            style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}
          >
            → +966 59 5687465
          </a>
        </div>
      </div>

        {/* Socials — now vertical */}
      <div className="flex gap-4 text-gray-300">
        <Image src="/icons/facebook.png" alt="Facebook" width={30} height={30} />
        <Image src="/icons/instagram.png" alt="Instagram" width={30} height={30} />
        <Image src="/icons/linkedin.png" alt="LinkedIn" width={30} height={30} />
        <Image src="/icons/twitter.png" alt="Twitter" width={30} height={30} />
      </div>

      {/* Huge brand */}
      <div>
        <h2 className="font-light leading-none text-[8vw] tracking-tight">
          NEW LOOK
        </h2>
      </div>

      {/* Legal */}
      <div className="flex flex-col gap-2 text-gray-400">
        <p>
          <Link href={`/${currentLang}/Policy?section=privacy-policy`} className="hover:text-white transition-colors">{t('footer.legal.privacy_policy')}</Link>
          {' '} / {' '}
          <Link href={`/${currentLang}/Policy?section=terms-of-use`} className="hover:text-white transition-colors">{t('footer.legal.terms_of_use')}</Link>
        </p>
        <p>{t('footer.legal.copyright')}</p>
      </div>

      {/* Credits */}
      <p className="text-gray-400">{t('footer.credits.website_made_by')}</p>
    </div>
  );
}


function FooterNav() {
  const { lang } = useParams();
  const { t } = useT();
  const currentLang = lang === 'ar' ? 'ar' : 'en';

  // Desktop / tablet (≥ md): keep your original sections
  return (
    <div
      className={`
        hidden md:flex ${lang === 'ar' ? 'flex-row-reverse' : ''}
        items-start justify-between
        gap-8 lg:gap-0
        flex-col lg:flex-row
      `}
    >
      <div
        className={`
          flex ${lang === 'ar' ? 'flex-row-reverse' : ''}
          gap-12 lg:gap-20
          w-full lg:w-auto
          flex-wrap lg:flex-nowrap
        `}
      >
        {/* Services (kept on ≥md) */}
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

        {/* Company */}
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

        {/* Contact */}
        <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'text-right' : ''}`}>
          <h3 className={`mb-2 sm:mb-4 uppercase text-gray-400 font-semibold ${lang === 'ar' ? 'text-base sm:text-lg' : 'text-base'}`}>
            {t('footer.contact.title')}
          </h3>
          <p className="text-gray-300">{t('footer.contact.location1')}</p>
          <a href="tel:+962795637354" className="hover:text-gray-300 transition-colors" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>
            +962 79 563 7354
          </a>
          <p className="text-gray-300">{t('footer.contact.location2')}</p>
          <a href="tel:+966595687465" className="hover:text-gray-300 transition-colors" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>
            +966 59 568 7465
          </a>
          <a href="mailto:info@newlookjo.com" className="hover:text-gray-300 transition-colors">
            {t('footer.contact.email')}
          </a>
        </div>
      </div>

      {/* Tagline & learn more */}
      <div className={`${lang === 'ar' ? 'text-right' : 'text-right'} text-sm hidden md:block`}>
        <p className={`text-gray-400 m-2 ${lang === 'ar' ? 'text-sm' : 'text-sm'}`}>
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
}

function FooterBottom() {
  const { lang } = useParams();
  const { t } = useT();

  return (
    <>
      {/* Desktop / tablet (≥md) */}
      <div
        className={`
          hidden md:flex ${lang === 'ar' ? 'flex-row-reverse' : ''}
          justify-between items-end
          mt-16 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24
          pt-12 md:pt-8 lg:pt-16 2xl:pt-20
          border-t border-gray-700
          gap-4 md:gap-8
          flex-col-reverse md:flex-row
        `}
      >
        <div className="flex items-center flex-shrink-0">
          <h2 className={`${lang === 'ar' ? 'text-[16vw] md:text-[8vw] lg:text-[6rem]' : 'text-[18vw] md:text-[9vw] lg:text-[7rem]'} font-light leading-none`}>
            {t('footer.company.brand_name')}
          </h2>
        </div>

        <div className={`${lang === 'ar' ? 'text-left' : 'text-right'} w-full md:w-auto flex-shrink-0`}>
          <div className={`flex gap-3 md:gap-4 mb-2 md:mb-4 ${lang === 'ar' ? 'justify-start' : 'justify-end'}`}>
            <Link href="https://www.instagram.com/newlookjo911/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/icons/instagram.png" alt="Instagram" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100064126295491" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/icons/facebook.png" alt="Facebook" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Link>
            <Link href="https://x.com/NewLook_jo" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/icons/twitter.png" alt="Twitter" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/icons/linkedin.png" alt="LinkedIn" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </Link>
          </div>

          <div className={`flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm text-gray-400 mb-1 md:mb-2 ${lang === 'ar' ? 'justify-start' : 'justify-end'}`}>
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

          <p className="text-xs md:text-sm text-gray-400 text-right">
            {t('footer.legal.copyright')}
          </p>
        </div>

        <p className="absolute top-[96%] left-1/2 transform -translate-x-1/2 text-xs md:text-sm text-gray-400">
          {t('footer.credits.website_made_by')}
        </p>
      </div>

      {/* Mobile version handled entirely in <MobileFooter /> */}
    </>
  );
}

export default function Footer() {
  const { lang } = useParams();
  const { t } = useT();
  const currentLang = lang === 'ar' ? 'ar' : 'en';

  return (
    <div
      className="
        bg-gray-900 text-white
        py-10 px-5
        sm:py-10 sm:px-8
        lg:py-12 xl:py-14 2xl:py-16
        min-h-[60vh]
        h-full w-full
        flex flex-col gap-10
      "
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Mobile (≤768px) */}
      <MobileFooter />

      {/* Desktop / Tablet (≥768px) */}
      <div className="hidden md:block">
        <FooterNav />
        <FooterBottom />
      </div>
    </div>
  );
}
