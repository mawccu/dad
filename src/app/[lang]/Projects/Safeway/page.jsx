// app/projects/safeway/page.jsx
'use client';
import Image from "next/image";
import MasonryGrid from './mansory';
import ContactCTA from '../../Contact/ContactCTA';
import { useT } from '../../i18n/client';
import { useParams } from 'next/navigation';

export default function Safeway() {
  const { t } = useT('common');
  const { lang } = useParams();

  return (
    <main className="w-full overflow-hidden py-10" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="px-6 pt-40 pb-4">
        <h1 className={`font-450 text-start ${lang === 'ar' ? 'text-5xl' : 'text-4xl'}`}>
          {t('projects.safeway.title')}
        </h1>
      </section>

      <section className="relative w-full h-[100vh]">
        <Image
          src="/medias/placeholder.png"
          alt={t('projects.safeway.hero_alt')}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>

      <section className="px-6 pt-40 pb-15 max-w-5xl ms-auto text-start">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className={`pb-4 font-medium ${lang === 'ar' ? 'text-3xl' : 'text-2xl'}`}>
          {t('projects.safeway.section1_title')}
        </h2>
        <p className={`font-400 leading-relaxed text-gray-500 ${lang === 'ar' ? 'text-xl' : 'text-lg'}`}>
          {t('projects.safeway.section1_body')}
        </p>
      </section>

      <MasonryGrid />

      <section className="px-6 pt-20 pb-15 max-w-5xl ms-auto text-start">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className={`pb-4 font-medium ${lang === 'ar' ? 'text-3xl' : 'text-2xl'}`}>
          {t('projects.safeway.section2_title')}
        </h2>
        <p className={`font-400 leading-relaxed text-gray-500 ${lang === 'ar' ? 'text-xl' : 'text-lg'}`}>
          {t('projects.safeway.section2_body')}
        </p>
      </section>
      
      <ContactCTA />
      
    </main>
  );
}
