//Policy/PrivacyPageClient.jsx
'use client';
import React, { useEffect } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import { useT } from '../i18n/client';

const PolicyPageClient = () => {
  const { lang } = useParams();
  const { t } = useT('common');
  const searchParams = useSearchParams();
  const section = searchParams.get('section');

  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        // small delay so layout is ready before scrolling
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
    }
  }, [section]);

  return (
    <div className="min-h-screen bg-gray-50" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="pt-24 sm:pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6 py-4">
          {/* Keep desktop (lg) text the same: 4xl */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('policy.header.title')}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            {t('policy.header.subtitle')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6 py-8 sm:py-10 lg:py-12">
        {/* Privacy Policy */}
        <section
          id="privacy-policy"
          className="mb-12 sm:mb-16 lg:mb-20 scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-40"
        >
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
            {/* Keep desktop (lg) text the same: 3xl */}
            <h2 className="text-2xl sm:text-2.5xl lg:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2">
              {t('policy.privacy_policy.title')}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mb-1.5 sm:mb-2">
              {t('policy.privacy_policy.last_updated')}
            </p>
            <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-7 lg:mb-8">
              {t('policy.privacy_policy.reading_time')}
            </p>

            <div className="space-y-6 sm:space-y-7 lg:space-y-8">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i}>
                  <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {t(`policy.privacy_policy.sections.${i}.subtitle`)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-base lg:text-base">
                    {t(`policy.privacy_policy.sections.${i}.body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms of Use */}
        <section
          id="terms-of-use"
          className="mb-12 sm:mb-16 lg:mb-20 scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-40"
        >
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-2.5xl lg:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2">
              {t('policy.terms_of_use.title')}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mb-1.5 sm:mb-2">
              {t('policy.terms_of_use.last_updated')}
            </p>
            <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-7 lg:mb-8">
              {t('policy.terms_of_use.reading_time')}
            </p>

            <div className="space-y-6 sm:space-y-7 lg:space-y-8">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i}>
                  <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {t(`policy.terms_of_use.sections.${i}.subtitle`)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-base lg:text-base">
                    {t(`policy.terms_of_use.sections.${i}.body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Policy */}
        <section
          id="cookie-policy"
          className="mb-12 sm:mb-16 lg:mb-20 scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-40"
        >
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-2.5xl lg:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2">
              {t('policy.cookie_policy.title')}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mb-1.5 sm:mb-2">
              {t('policy.cookie_policy.last_updated')}
            </p>
            <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-7 lg:mb-8">
              {t('policy.cookie_policy.reading_time')}
            </p>

            <div className="space-y-5 sm:space-y-6">
              {[0, 1, 2].map((i) => (
                <p
                  key={i}
                  className="text-gray-700 leading-relaxed text-base sm:text-base lg:text-base"
                >
                  {t(`policy.cookie_policy.sections.${i}.body`)}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PolicyPageClient;
