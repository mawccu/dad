//About/page.jsx
'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import ContactCTA from '../Contact/ContactCTA';
import StrengthSection from './strength'
import { useT } from '../i18n/client';

export default function About() {
  const { t } = useT('common');

  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  
  const translation = {
        title: t('about.strength.title'),
        intro: t('about.strength.intro'),
        items: [
          {
            title: t('about.strength.items.0.title'),
            description: t('about.strength.items.0.description'),
          },
          {
            title: t('about.strength.items.1.title'),
            description: t('about.strength.items.1.description'),
          },
          {
            title: t('about.strength.items.2.title'),
            description: t('about.strength.items.2.description'),
          },
        ],
      };
  
  return (
    <div className="bg-white pt-20">
      <div className="min-h-screen py-20">
        {/* Hero Section */}
        <section className="max-w-5xl flex justify-center flex-col text-center items-center px-6 py-12 mx-auto">
          <h1 className="text-4xl font-medium mb-6 text-gray-900 leading-tight max-w-4xl">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.hero.paragraph1') + ' ' + '<span class="font-600">' + t('about.hero.paragraph2') + '</span>' + ' ' + t('about.hero.paragraph3') }}>
          </p>
        </section>

        {/* Image Section */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <Image 
            src='/medias/img5.jpg' 
            alt={t('about.hero.image_alt')} width={1920} 
            height={1080} 
            className="shadow-lg" 
            ref={imageRef} 
            />
        </section>
      </div>

      {/* Philosophy Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-medium mb-8 text-gray-900">{t('about.vision.title')}</h2>
          <div className="space-y-5 text-gray-700 text-xl leading-relaxed">
            <p>{t('about.vision.p1')}</p>
            <p>{t('about.vision.p2')}</p>
            <p>{t('about.vision.p3')}</p>
          </div>
        </div>
      </section>

      <StrengthSection translation ={translation} />

      {/* Location Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-medium mb-6 text-gray-900 text-center">{t('about.locations.title')}</h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-xl text-center">
            {t('about.locations.p1')}
          </p>

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

  <ContactCTA />

    </div>
  );
}
