//[lang]/components/StickyFooter.jsx
'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useT } from '../i18n/client';

// Content component for the sticky footer
function FooterContent() {
    const { lang } = useParams();
    
    return (
        <div className='bg-gray-900 text-white py-12 px-8 h-full w-full flex flex-col justify-between' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
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
        <div className={`flex justify-between items-start ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex ${lang === 'ar' ? 'gap-20 flex-row-reverse' : 'gap-20'}`}>
                <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'text-right' : ''}`}>
                    <h3 className={`mb-4 uppercase text-gray-400 font-semibold ${lang === 'ar' ? 'text-lg' : ''}`}>
                        {t('footer.services.title')}
                    </h3>
                    <Link href={`/${currentLang}/Services`} className='hover:text-gray-300 transition-colors'>
                        {t('footer.services.all_services')}
                    </Link>
                    <Link href={`/${currentLang}/Services/SurfaceFinishing`} className='hover:text-gray-300 transition-colors'>
                        {t('footer.services.protective_coatings')}
                    </Link>
                    <Link href={`/${currentLang}/Services/CustomFlooring`} className='hover:text-gray-300 transition-colors'>
                        {t('footer.services.custom_flooring')}
                    </Link>
                    <Link href={`/${currentLang}/Services/SurfaceFinishing`} className='hover:text-gray-300 transition-colors'>
                        {t('footer.services.waterproofing')}
                    </Link>
                    <Link href={`/${currentLang}/Services/SurfaceFinishing`} className='hover:text-gray-300 transition-colors'>
                        {t('footer.services.surface_treatments')}
                    </Link>
                </div>
                
                <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'text-right' : ''}`}>
                    <h3 className={`mb-4 uppercase text-gray-400 font-semibold ${lang === 'ar' ? 'text-lg' : ''}`}>
                        {t('footer.company.title')}
                    </h3>
                    <Link href={`/${currentLang}/About`} className='hover:text-gray-300 transition-colors'>
                        {t('footer.company.about_us')}
                    </Link>
                    <Link href={`/${currentLang}/Projects`} className='hover:text-gray-300 transition-colors'>
                        {t('footer.company.projects')}
                    </Link>
                    <Link href={`/${currentLang}/Careers`} className='hover:text-gray-300 transition-colors'>
                        {t('footer.company.careers')}
                    </Link>
                    <Link href={`/${currentLang}/Contact`} className='hover:text-gray-300 transition-colors'>
                        {t('footer.company.contact')}
                    </Link>
                </div>

                <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'text-right' : ''}`}>
                    <h3 className={`mb-4 uppercase text-gray-400 font-semibold ${lang === 'ar' ? 'text-lg' : ''}`}>
                        {t('footer.contact.title')}
                    </h3>
                    <p className='text-gray-300'>{t('footer.contact.location')}</p>
                    <a href="tel:+962000000000" className='hover:text-gray-300 transition-colors'>
                        {t('footer.contact.phone')}
                    </a>
                    <a href="mailto:info@newlook-jo.com" className='hover:text-gray-300 transition-colors'>
                        {t('footer.contact.email')}
                    </a>
                </div>
            </div>

            {/* Company Logo/Name */}
            <div className={`${lang === 'ar' ? 'text-right' : 'text-right'}`}>
                <p className={`text-gray-400 m-2 ${lang === 'ar' ? 'text-lg' : ''}`}>
                    {t('footer.company.tagline')}
                </p>
                <Link href="/About/RamiHamad" onClick={(e) => e.preventDefault()} 
                className={`text-gray-400 hover:text-gray-100 transition-colors`}>
                    {t('footer.company.learn_more')}
                </Link>
            </div>
        </div>
    );
};

// Bottom section with social links and copyright
const FooterBottom = () => {
    const { lang } = useParams();
    const { t } = useT();
    
    return (
        <div className={`relative flex justify-between items-end mt-12 pt-8 border-t border-gray-700 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className='flex items-center gap-6'>
                <h2 className={`${lang === 'ar' ? 'text-[6vw] md:text-[4rem]' : 'text-[8vw] md:text-[6rem]'} font-light leading-none`}>
                    {t('footer.company.brand_name')}
                </h2>
            </div>
            
            <div className={`${lang === 'ar' ? 'text-left' : 'text-right'}`}>
                {/* Social Links */}
                <div className={`flex gap-4 mb-4 ${lang === 'ar' ? 'justify-start' : 'justify-end'}`}>
                    <Link href="#" className="hover:opacity-70 transition-opacity">
                        <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">
                        <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">
                        <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">
                        <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                    </Link>
                </div>

                {/* Legal Links - Updated to route to Policy page */}
                <div className={`flex gap-4 text-sm text-gray-400 mb-2 ${lang === 'ar' ? 'justify-start' : ''}`}>
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
                
                <p className={`text-sm text-gray-400 ${lang === 'ar' ? 'text-base text-right' : 'text-right'}`}>
                    {t('footer.legal.copyright')}
                </p>
            </div>

            {/* Website made by - positioned at absolute bottom */}
            <p className={`absolute top-[95%] left-1/2 transform -translate-x-1/2 text-sm text-gray-400 ${lang === 'ar' ? 'text-base' : ''}`}>
                {t('footer.credits.website_made_by')}
            </p>
        </div>
    );
};

// Main Sticky Footer Component
export default function StickyFooter() {
    return (
        <div 
            className='relative h-[800px]' 
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
                <div
                    className='sticky z-10 top-[calc(100vh-800px)] h-[800px]'
                >
                    <FooterContent />
                </div>
            </div>
        </div>
    );
}
