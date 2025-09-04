import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { locales } from './settings';

export async function getT(lng, ns = 'common') {
    const i18n = createInstance();
    await i18n 
        .use(initReactI18next)
        .use(resourcesToBackend((lng, ns) => 
        import (`../../../../locales/${lng}/${ns}.json`)
        ))
        .init({
            lng,
            fallbackLng: 'en',
            supportedLngs: locales,
            ns: [ns],
            defaultNS: ns,
            interpolation: { escapeValue: false},
        })
        return i18n.getFixedT(lng, ns);
}