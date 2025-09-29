// app/[lang]/layout.jsx 
import '../globals.css';
import { I18nClientProvider } from './i18n/client';
import UnifiedLayoutWrapper from './UnifiedLayoutWrapper.jsx';
import SmoothScrolling from '../components/SmoothScrolling.jsx';

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params; // ← WICHTIG: await params
  const isEnglish = lang === 'en';
  const base = 'https://www.newlookjo.com';
  const homePath = isEnglish ? '/en' : '/ar';

  return {
    metadataBase: new URL(base),           // ← important for absolute URLs

    title: {
      template: isEnglish ? `%s | New Look` : `%s | New Look للتشطيبات`,
      default: isEnglish
        ? 'New Look Finishing | High Quality Interior and Exterior Finishing Services'
        : 'New Look للتشطيبات | خدمات التشطيب الداخلي والخارجي عالية الجودة',
    },
    description: isEnglish
      ? 'Led by the expertise from the Abdoun Bridge project, New Look delivers master finishing services, including protective coatings, waterproofing, and high-performance flooring solutions.'
      : 'بخبرة مستمدة من مشروع جسر عبدون، تقدم شركة New Look خدمات تشطيبات احترافية تشمل الطلاءات الواقية ، وأنظمة العزل المختلفة ، وحلول الأرضيات عالية الأداء.',
    
    alternates: {
      canonical: `${base}${homePath}`,
      languages: {
        'x-default': `${base}/en`,
        en: `${base}/en`,
        ar: `${base}/ar`,
      },
    },

      // Let Google show large image previews and full snippets
    robots: {
      index: true,
      follow: true,
      maxImagePreview: 'large',
      maxSnippet: -1,
      maxVideoPreview: -1,
    },

     openGraph: {
      type: 'website',
      url: `${base}${homePath}`,
      siteName: 'New Look',
      locale: isEnglish ? 'en' : 'ar',
      title: isEnglish ? 'New Look — Finishing Specialists' : 'New Look للتشطيبات',
      description: isEnglish
        ? 'Protective coatings, waterproofing, and performance flooring.'
        : 'طلاءات واقية، عزل، وأرضيات عالية الأداء.',
      images: [
        {
          url: `${base}/icons/titlepic.png`, // your existing image in /public/icons
          width: 1200,
          height: 630,
          alt: 'New Look',
        },
      ],
    },


    icons: {
      icon: [
        { url: '/favicon/favicon-32x32.png', sizes: '32x32', },
        { url: '/favicon/favicon-16x16.png', sizes: '16x16', },
        { url: '/favicon/favicon.ico', rel: 'icon', },
      ],
      apple: '/favicon/apple-touch-icon.png',
      other: [
        { rel: 'apple-touch-icon-precomposed', url: '/favicon/apple-touch-icon-precomposed.png', },
        { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/favicon/android-chrome-192x192.png', },
        { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/favicon/android-chrome-512x512.png', },
      ],
    },
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  return (
    <I18nClientProvider lang={lang}>
      <UnifiedLayoutWrapper>
        {children}
      </UnifiedLayoutWrapper>
    </I18nClientProvider>
  );
}