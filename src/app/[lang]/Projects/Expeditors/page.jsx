// app/projects/expeditors/page.jsx
'use client';
import Image from "next/image";
import MasonryGrid from './mansory';
import ContactCTA from '../../Contact/ContactCTA';
import { useT } from '../../i18n/client';
import { useParams } from 'next/navigation';

export default function Expeditors() {
  const { t } = useT('common');
  const { lang } = useParams();
  return (
    <main className="w-full overflow-hidden py-10" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="px-6 pt-40 pb-4">
        <h1 className={`font-450 text-start ${lang === 'ar' ? 'text-5xl' : 'text-4xl'}`}>
          {t('projects.expeditors.title')}
        </h1>
      </section>
      
     <section className="relative w-full h-[60vh] md:h-[100vh]">
  <Image
    src="/medias/img9.jpg"
    alt={t('projects.expeditors.hero_alt')}
    fill
    className="object-cover" 
    sizes="100vw"
    priority
  />
</section>
      <section className="px-6 pt-40 pb-15 max-w-5xl ms-auto text-start">
        <h2 className={`pb-4 font-medium ${lang === 'ar' ? 'text-3xl' : 'text-2xl'}`}>
          {t('projects.expeditors.section1_title')}
        </h2>
        <p className={`font-400 leading-relaxed text-gray-500 ${lang === 'ar' ? 'text-xl' : 'text-lg'}`}>
          {t('projects.expeditors.section1_body')}
        </p>
      </section>
      
      <MasonryGrid />
      
      <section className="px-6 pt-20 pb-15 max-w-5xl ms-auto text-start">
        <h2 className={`pb-4 font-medium ${lang === 'ar' ? 'text-3xl' : 'text-2xl'}`}>
          {t('projects.expeditors.section2_title')}
        </h2>
        <p className={`font-400 leading-relaxed text-gray-500 ${lang === 'ar' ? 'text-xl' : 'text-lg'}`}>
          {t('projects.expeditors.section2_body')}
        </p>
      </section>
      
      <ContactCTA />
    </main>
  );
}