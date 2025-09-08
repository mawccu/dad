// About/page.jsx
'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import ContactCTA from '../Contact/contactCTA';
import StrengthSection from './strength'
import { useT } from '../i18n/client';
import FadeUp from '../../components/FadeUp';
import PageTransition from '../../components/PageTransition';

export default function About() {
  const { t } = useT('common');
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);

  return (
    <div className="bg-white pt-20">
      <div className="py-20">
        {/* Hero Section */}
        <FadeUp delay={0}>
          <section className="max-w-5xl flex justify-center flex-col text-center items-center px-4 sm:px-6 py-8 sm:py-10 mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 text-gray-900 leading-tight max-w-4xl">
              {t('about.hero.title')}
            </h1>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl md:leading-relaxed sm:leading-relaxed leading-relaxed lg:leading-relaxed"
              dangerouslySetInnerHTML={{
                __html:
                  t('about.hero.paragraph1') +
                  ' ' +
                  '<span class="font-600">' +
                  t('about.hero.paragraph2') +
                  '</span>' +
                  ' ' +
                  t('about.hero.paragraph3'),
              }}
            />
          </section>
        </FadeUp>

        {/* Image Section */}
        <FadeUp delay={0.3}>
          <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20 lg:mb-24">
            <Image
              src="/medias/abdounbridge/mm.png"
              alt={t('about.hero.image_alt')}
              width={1080}
              height={540}
              className="shadow-lg object-cover w-full h-auto"
              ref={imageRef}
              priority
            />
          </section>
        </FadeUp>
      </div>

      {/* Vision Section */}
      <FadeUp delay={0.6}>
        <section className="bg-gray-50 py-16 sm:py-20 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Desktop unchanged: lg:text-4xl */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-6 sm:mb-8 text-gray-900">
              {t('about.vision.title')}
            </h2>
            {/* Desktop unchanged: lg:text-xl */}
            <div className="space-y-4 sm:space-y-5 text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              <p>{t('about.vision.p1')}</p>
              <p>{t('about.vision.p2')}</p>
              <p>{t('about.vision.p3')}</p>
            </div>
          </div>
        </section>
      </FadeUp>
      
      
      <FadeUp delay={0.9}>
      <div className="py-16 sm:py-16">
        <StrengthSection
          translation={{
            title: t('about.strength.title'),
            intro: t('about.strength.intro'),
            items: [
              { title: t('about.strength.items.0.title'), description: t('about.strength.items.0.description') },
              { title: t('about.strength.items.1.title'), description: t('about.strength.items.1.description') },
              { title: t('about.strength.items.2.title'), description: t('about.strength.items.2.description') },
            ],
          }}
        />
        </div>
      </FadeUp>

      {/* Location Section */}
      <FadeUp delay={1.2}>
        <section className="bg-gray-50 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Desktop unchanged: lg:text-4xl */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 text-gray-900 text-center">
              {t('about.locations.title')}
            </h2>
            {/* Desktop unchanged: lg:text-xl */}
            <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg lg:text-xl text-center">
              {t('about.locations.p1')}
            </p>

            {/* Keep your responsive image API as-is to avoid desktop changes */}
            <Image
              src="/medias/maps.jpg"
              alt={t('about.locations.map_alt')}
              layout="responsive"
              width={700}
              height={475}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </FadeUp>

      <FadeUp delay={1.5}>
        <ContactCTA />
      </FadeUp>
    </div>
  );
}
