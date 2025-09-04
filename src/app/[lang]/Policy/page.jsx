//components/Policy/page.jsx
'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useT } from '../i18n/client';

const PolicyPage = () => {
  const { lang } = useParams();
  const { t } = useT('common');
  const searchParams = useSearchParams();
  const section = searchParams.get('section');

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [section]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="pt-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('policy.header.title')}</h1>
          <p className="text-gray-600 text-lg">
            {t('policy.header.subtitle')}
          </p>
        </div>
      </div>



      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Privacy Policy Section */}
        <section id="privacy-policy" className="mb-20">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('policy.privacy_policy.title')}</h2>
            <p className="text-gray-500 mb-2">{t('policy.privacy_policy.last_updated')}</p>
            <p className="text-gray-500 mb-8">{t('policy.privacy_policy.reading_time')}</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.privacy_policy.sections.0.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.privacy_policy.sections.0.body')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.privacy_policy.sections.1.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.privacy_policy.sections.1.body')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.privacy_policy.sections.2.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.privacy_policy.sections.2.body')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.privacy_policy.sections.3.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.privacy_policy.sections.3.body')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.privacy_policy.sections.4.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.privacy_policy.sections.4.body')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.privacy_policy.sections.5.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.privacy_policy.sections.5.body')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms of Use Section */}
        <section id="terms-of-use" className="mb-20">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('policy.terms_of_use.title')}</h2>
            <p className="text-gray-500 mb-2">{t('policy.terms_of_use.last_updated')}</p>
            <p className="text-gray-500 mb-8">{t('policy.terms_of_use.reading_time')}</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.terms_of_use.sections.0.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.terms_of_use.sections.0.body')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.terms_of_use.sections.1.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.terms_of_use.sections.1.body')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.terms_of_use.sections.2.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.terms_of_use.sections.2.body')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.terms_of_use.sections.3.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.terms_of_use.sections.3.body')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.terms_of_use.sections.4.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.terms_of_use.sections.4.body')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('policy.terms_of_use.sections.5.subtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('policy.terms_of_use.sections.5.body')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Policy Section */}
        <section id="cookie-policy" className="mb-20">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('policy.cookie_policy.title')}</h2>
            <p className="text-gray-500 mb-2">{t('policy.cookie_policy.last_updated')}</p>
            <p className="text-gray-500 mb-8">{t('policy.cookie_policy.reading_time')}</p>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                {t('policy.cookie_policy.sections.0.body')}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {t('policy.cookie_policy.sections.1.body')}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {t('policy.cookie_policy.sections.2.body')}
              </p>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};

export default PolicyPage;