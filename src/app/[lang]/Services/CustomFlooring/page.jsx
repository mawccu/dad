//Services/CustomFlooring/page.jsx
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import FAQ from './Faq';
import { useT } from '../../i18n/client';
import { useParams } from 'next/navigation';

export default function CustomFlooring() {
  const router = useRouter();
  const { lang } = useParams();
  const { t } = useT('common');

  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const imageRef5 = useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src="/medias/safeway/2.png"
          alt={t('services.custom_flooring_page.hero_alt')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h3 className={`mb-6 ${lang === 'ar' ? 'text-5xl' : 'text-5xl'} font-semibold tracking-wide`}>
              {t('services.custom_flooring_page.hero_title')}
            </h3>
            <p className={`${lang === 'ar' ? 'text-2xl' : 'text-2xl'} font-light`}>
              {t('services.custom_flooring_page.hero_subtitle')}
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-white">
          <p
            className={`cursor-pointer ${lang === 'ar' ? 'text-2xl' : 'text-xl'} font-light underline underline-offset-8 transition-colors duration-200 hover:text-gray-400`}
            onClick={() => router.push(`/${lang}/Contact?reason=consultation`)}
          >
            {t('services.custom_flooring_page.cta_free_consultation')}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-32 text-center min-h-screen">
        <h1 className={`${lang === 'ar' ? 'text-4xl' : 'text-4xl'} font-semibold mb-32`}>
          {t('services.custom_flooring_page.intro_title')}
        </h1>
        <p className={`${lang === 'ar' ? 'text-2xl' : 'text-2xl'} font-light leading-relaxed mb-8`}>
          {t('services.custom_flooring_page.intro_p1')}
        </p>
        <p className={`${lang === 'ar' ? 'text-2xl' : 'text-2xl'} font-light leading-relaxed mb-8`}>
          {t('services.custom_flooring_page.intro_p2')}
        </p>
      </div>

      <div className="flex justify-center items-center py-32">
        <div
          className="w-[960px] h-[100vh] relative overflow-hidden group cursor-pointer"
          onMouseEnter={() => setIsHovered('first')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="absolute inset-0 bg-gray-800">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/medias/floor2.jpg')" }}
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-50 transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center px-8 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
              <h3 className={`${lang === 'ar' ? 'text-5xl' : 'text-5xl'} font-light tracking-wide mb-12 opacity-90`}>
                {t('services.custom_flooring_page.panel1_title')}
              </h3>
              <div className="space-y-4">
                {[
                  t('services.custom_flooring_page.panel1_items.0'),
                  t('services.custom_flooring_page.panel1_items.1'),
                  t('services.custom_flooring_page.panel1_items.2'),
                  t('services.custom_flooring_page.panel1_items.3'),
                  t('services.custom_flooring_page.panel1_items.4'),
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center justify-center ${lang === 'ar' ? 'text-2xl' : 'text-2xl'} font-light opacity-90 transform transition-all duration-300`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-2 h-2 bg-white rounded-full ${lang === 'ar' ? 'ml-4' : 'mr-4'} group-hover:bg-yellow-400 transition-colors duration-300`} />
                    <span className="group-hover:text-yellow-100 transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white group-hover:border-opacity-20 transition-all duration-300 pointer-events-none" />
        </div>

        <div
          className="w-[960px] h-[100vh] relative overflow-hidden group cursor-pointer"
          onMouseEnter={() => setIsHovered('second')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="absolute inset-0 bg-gray-200">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/medias/8.png')" }}
            />
          </div>
          <div className="absolute inset-0 bg-white bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-8 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
              <h3 className={`${lang === 'ar' ? 'text-5xl' : 'text-5xl'} font-light tracking-wide mb-12 text-gray-800 opacity-90`}>
                {t('services.custom_flooring_page.panel2_title')}
              </h3>
              <div className="space-y-6">
                {[
                  { title: t('services.custom_flooring_page.panel2_items.0.title'), desc: t('services.custom_flooring_page.panel2_items.0.desc') },
                  { title: t('services.custom_flooring_page.panel2_items.1.title'), desc: t('services.custom_flooring_page.panel2_items.1.desc') },
                  { title: t('services.custom_flooring_page.panel2_items.2.title'), desc: t('services.custom_flooring_page.panel2_items.2.desc') },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`transform transition-all duration-300 ${lang === 'ar' ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <h4 className={`${lang === 'ar' ? 'text-2xl' : 'text-2xl'} font-medium text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300`}>
                      {item.title}
                    </h4>
                    <p className={`${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light text-gray-600 opacity-80 group-hover:opacity-100 transition-all duration-300`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute top-8 right-8 w-16 h-16 border-2 border-gray-400 opacity-30 group-hover:opacity-60 group-hover:rotate-45 transition-all duration-500" />
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-gray-400 opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500" />
        </div>
      </div>

      <div className="min-h-screen">
        <FAQ />
      </div>

      <div className="py-32">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <div>
            <h2 className={`${lang === 'ar' ? 'text-4xl' : 'text-4xl'} text-gray-1000 font-semibold`}>
              {t('services.custom_flooring_page.projects_title')}
            </h2>
            <p className={`${lang === 'ar' ? 'text-2xl' : 'text-2xl'} text-gray-900 mb-4`}>
              {t('services.custom_flooring_page.projects_subtitle')}
            </p>
          </div>
        </div>

        <div className="flex gap-6 mb-16 px-12">
          <div
            className="relative flex-1 h-[260px] overflow-hidden cursor-pointer rounded-lg"
            onMouseEnter={() => {
              setIsHovered(true);
              gsap.to(imageRef3.current, {
                scale: 1.1,
                duration: 0.6,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              gsap.to(imageRef3.current, {
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
              });
            }}
            onClick={() => router.push(`/${lang}/Projects/Safeway`)}
          >
            <Image
              src="/medias/safeway/1.png"
              fill={true}
              alt={t('services.custom_flooring_page.card_alt')}
              ref={imageRef3}
              className="object-cover"
            />
            <div className="absolute inset-0 flex p-4 items-center justify-between flex-col text-white">
              <p className={`${lang === 'ar' ? 'text-2xl' : 'text-2xl'} font-bold text-shadow-md`}>
                {t('services.custom_flooring_page.card1_title')}
              </p>
              <p className={`${lang === 'ar' ? 'text-xl' : 'text-xl'} font-semibold text-shadow-md`}>
                {t('services.custom_flooring_page.card1_subtitle')}
              </p>
            </div>
          </div>

          <div
            className="relative flex-1 h-[260px] overflow-hidden cursor-pointer rounded-lg"
            onMouseEnter={() => {
              setIsHovered(true);
              gsap.to(imageRef4.current, {
                scale: 1.1,
                duration: 0.6,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              gsap.to(imageRef4.current, {
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
              });
            }}
            onClick={() => router.push(`/${lang}/Projects/Movenpick`)}
          >
            <Image
              src="/medias/Movenpick/Movenpick.png"
              fill={true}
              alt={t('services.custom_flooring_page.card_alt')}
              ref={imageRef4}
              className="object-cover"
            />
            <div className="absolute p-4 inset-0 flex items-center justify-between flex-col text-white">
              <p className={`${lang === 'ar' ? 'text-2xl' : 'text-2xl'} font-bold text-shadow-md`}>
                {t('services.custom_flooring_page.card2_title')}
              </p>
              <p className={`${lang === 'ar' ? 'text-xl' : 'text-xl'} text-shadow-md font-semibold`}>
                {t('services.custom_flooring_page.card2_subtitle')}
              </p>
            </div>
          </div>
          
          <div
            className="relative flex-1 h-[260px] overflow-hidden cursor-pointer rounded-lg"
            onMouseEnter={() => {
              setIsHovered(true);
              gsap.to(imageRef5.current, {
                scale: 1.1,
                duration: 0.6,
                ease: 'power2.out',
              });
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              gsap.to(imageRef5.current, {
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
              });
            }}
            onClick={() => router.push(`/${lang}/Projects/Expeditors`)}
          >
            <Image
              src="/medias/ex/3.png"
              fill={true}
              alt={t('services.custom_flooring_page.card_alt')}
              ref={imageRef5}
              className="object-cover"
            />
            <div className="absolute p-4 inset-0 flex items-center justify-between flex-col text-white">
              <p className={`${lang === 'ar' ? 'text-2xl' : 'text-2xl'} font-bold text-shadow-md`}>
                {t('services.custom_flooring_page.card3_title')}
              </p>
              <p className={`${lang === 'ar' ? 'text-xl' : 'text-xl'} text-shadow-md font-semibold`}>
                {t('services.custom_flooring_page.card3_subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}