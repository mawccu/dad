'use client';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next, useTranslation } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useEffect, useState } from 'react';

const isRTL = (l) => l === 'ar';

export function I18nClientProvider({ lang, children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log('I18nClientProvider - lang received:', lang);
    i18next
      .use(initReactI18next)
      .use(resourcesToBackend((lng, ns, cb) => {
        console.log('Loading translation file:', `/locales/${lng}/${ns}.json`);
        fetch(`/locales/${lng}/${ns}.json`)
          .then(r => {
            console.log('Translation file response:', r.status, r.ok);
            return r.json();
          })
          .then(d => {
            console.log('Translation data loaded for', lng, ns, ':', d);
            cb(null, d);
          })
          .catch(e => {
            console.error('Translation loading error:', e);
            cb(e);
          });
      }))
      .init({
        lng: lang,
        fallbackLng: lang === 'en' ? 'en' : 'en',
        supportedLngs: ['en', 'ar'],
        ns: ['common'],
        defaultNS: 'common',
        interpolation: { escapeValue: false },
        returnEmptyString: false,
        returnNull: false,
        returnObjects: false,
      })
      .then(() => {
        console.log('i18n initialized for language:', lang);
        setReady(true);
      });
  }, [lang]);

  // set <html lang/dir> client-side (root layout renders <html/>)
  useEffect(() => {
    document.documentElement.lang = lang || 'en';
    document.documentElement.dir  = isRTL(lang) ? 'rtl' : 'ltr';
  }, [lang]);

  if (!ready) return null;
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}

export const useT = (ns = 'common') => {
  const translation = useTranslation(ns);
  return {
    ...translation,
    ready: translation.ready
  };
};
