// app/projects/tag/page.jsx
'use client';
import Image from "next/image";
import MasonryGrid from './mansory';
import ContactCTA from '../../Contact/contactCTA';
import { useT } from '../../i18n/client';
import { useParams } from 'next/navigation';

export default function TAG() {
  const { t } = useT('common');
  const { lang } = useParams();

  return (
    <main className="w-full overflow-hidden py-6 sm:py-8 lg:py-10" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="px-4 sm:px-6 lg:px-6 pt-20 sm:pt-32 lg:pt-40 pb-4">
        <h1 className={`font-450 text-start ${lang === 'ar' ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
          {t('projects.TAG.title')}
        </h1>
      </section>

      <section className="relative w-full h-[50vh] sm:h-[70vh] lg:h-[100vh]">
        <Image
          src="/medias/tag/111.png"
          alt={t('projects.TAG.hero_alt')}
          fill
          className="object-cover object-top lg:content-fit"
          sizes="100vw"
          priority
        />
      </section>

      <section className="px-4 sm:px-6 lg:px-6 pt-20 sm:pt-32 lg:pt-40 pb-8 sm:pb-12 lg:pb-15 max-w-full sm:max-w-4xl lg:max-w-5xl ms-auto text-start">
        <h2 className={`pb-4 font-medium ${lang === 'ar' ? 'text-2xl sm:text-2xl lg:text-3xl' : 'text-xl sm:text-xl lg:text-2xl'}`}>
          {t('projects.TAG.section1_title')}
        </h2>
        <p className={`font-400 leading-relaxed text-gray-500 ${lang === 'ar' ? 'text-lg sm:text-lg lg:text-xl' : 'text-base sm:text-base lg:text-lg'}`}>
          {t('projects.TAG.section1_body')}
        </p>
      </section>

      <MasonryGrid />

      <section className="px-4 sm:px-6 lg:px-6 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-15 max-w-full sm:max-w-4xl lg:max-w-5xl ms-auto text-start">
        <h2 className={`pb-4 font-medium ${lang === 'ar' ? 'text-2xl sm:text-2xl lg:text-3xl' : 'text-xl sm:text-xl lg:text-2xl'}`}>
          {t('projects.TAG.section2_title')}
        </h2>
        <p className={`font-400 leading-relaxed text-gray-500 ${lang === 'ar' ? 'text-lg sm:text-lg lg:text-xl' : 'text-base sm:text-base lg:text-lg'}`}>
          {t('projects.TAG.section2_body')}
        </p>
      </section>

      
    </main>
  );
}