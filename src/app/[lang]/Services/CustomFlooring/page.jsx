// Services/CustomFlooring/page.jsx
'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import FAQ from './Faq';
import { useT } from '../../i18n/client';
import { useParams } from 'next/navigation';
import FadeUp from '../../../components/FadeUp';

export default function CustomFlooring() {
  const router = useRouter();
  const { lang } = useParams();
  const { t } = useT('common');

  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const imageRef5 = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeUp delay={0}>
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* HERO */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src="/medias/safeway/2.png"
          alt={t('services.custom_flooring_page.hero_alt')}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3
              className={`mb-4 sm:mb-6 font-semibold tracking-wide ${
                lang === 'ar'
                  ? 'text-2xl sm:text-4xl lg:text-5xl'
                  : 'text-xl sm:text-3xl lg:text-5xl'
              }`}
            >
              {t('services.custom_flooring_page.hero_title')}
            </h3>
            <p
              className={`font-light ${
                lang === 'ar'
                  ? 'text-lg sm:text-xl lg:text-2xl'
                  : 'text-base sm:text-lg lg:text-2xl'
              }`}
            >
              {t('services.custom_flooring_page.hero_subtitle')}
            </p>
          </div>
        </div>

        {/* CTA (kept on one line) */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 transform text-white px-4">
          <p
            className={`cursor-pointer font-light underline underline-offset-8 transition-colors duration-200 hover:text-gray-400 text-center whitespace-nowrap ${
              lang === 'ar'
                ? 'text-base sm:text-lg lg:text-2xl'
                : 'text-sm sm:text-base lg:text-xl'
            }`}
            onClick={() => router.push(`/${lang}/Contact?reason=consultation`)}
          >
            {t('services.custom_flooring_page.cta_free_consultation')}
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
        <h1
          className={`font-semibold mb-16 sm:mb-24 ${
            lang === 'ar'
              ? 'text-2xl sm:text-3xl lg:text-4xl'
              : 'text-xl sm:text-2xl lg:text-4xl'
          }`}
        >
          {t('services.custom_flooring_page.intro_title')}
        </h1>
        <p
          className={`font-light leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6 sm:mb-8 ${
            lang === 'ar'
              ? 'text-lg sm:text-xl lg:text-2xl'
              : 'text-base sm:text-lg lg:text-2xl'
          }`}
        >
          {t('services.custom_flooring_page.intro_p1')}
        </p>
        <p
          className={`font-light leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6 sm:mb-8 ${
            lang === 'ar'
              ? 'text-lg sm:text-xl lg:text-2xl'
              : 'text-base sm:text-lg lg:text-2xl'
          }`}
        >
          {t('services.custom_flooring_page.intro_p2')}
        </p>
      </div>

      {/* TWO PANELS */}
      <div className="flex flex-col lg:flex-row justify-center items-center py-16 sm:py-24">
        {/* Panel 1 */}
        <div
          className="w-full h-[50vh] sm:h-[60vh] lg:w-[960px] lg:h-[100vh] relative overflow-hidden group cursor-pointer"
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
          <div className="absolute inset-0 flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
            <div className="text-center transform transition-transform duration-300 group-hover:translate-y-[-10px]">
              <h3
                className={`font-light tracking-wide mb-6 sm:mb-8 lg:mb-12 opacity-90 ${
                  lang === 'ar'
                    ? 'text-2xl sm:text-4xl lg:text-5xl'
                    : 'text-xl sm:text-3xl lg:text-5xl'
                }`}
              >
                {t('services.custom_flooring_page.panel1_title')}
              </h3>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                {[
                  t('services.custom_flooring_page.panel1_items.0'),
                  t('services.custom_flooring_page.panel1_items.1'),
                  t('services.custom_flooring_page.panel1_items.2'),
                  t('services.custom_flooring_page.panel1_items.3'),
                  t('services.custom_flooring_page.panel1_items.4'),
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center justify-center font-light opacity-90 transform transition-all duration-300 ${
                      lang === 'ar'
                        ? 'text-base sm:text-lg lg:text-2xl'
                        : 'text-sm sm:text-base lg:text-2xl'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full group-hover:bg-yellow-400 transition-colors duration-300 ${
                        lang === 'ar' ? 'ml-2 sm:ml-3 lg:ml-4' : 'mr-2 sm:mr-3 lg:mr-4'
                      }`}
                    />
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

        {/* Panel 2 */}
        <div
          className="w-full h-[50vh] sm:h-[60vh] lg:w-[960px] lg:h-[100vh] relative overflow-hidden group cursor-pointer"
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
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center transform transition-transform duration-300 group-hover:translate-y-[-10px]">
              <h3
                className={`font-light tracking-wide mb-6 sm:mb-8 lg:mb-12 text-gray-800 opacity-90 ${
                  lang === 'ar'
                    ? 'text-2xl sm:text-4xl lg:text-5xl'
                    : 'text-xl sm:text-3xl lg:text-5xl'
                }`}
              >
                {t('services.custom_flooring_page.panel2_title')}
              </h3>
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {[
                  {
                    title: t('services.custom_flooring_page.panel2_items.0.title'),
                    desc: t('services.custom_flooring_page.panel2_items.0.desc'),
                  },
                  {
                    title: t('services.custom_flooring_page.panel2_items.1.title'),
                    desc: t('services.custom_flooring_page.panel2_items.1.desc'),
                  },
                  {
                    title: t('services.custom_flooring_page.panel2_items.2.title'),
                    desc: t('services.custom_flooring_page.panel2_items.2.desc'),
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`transform transition-all duration-300 ${
                      lang === 'ar' ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <h4
                      className={`font-medium text-gray-800 mb-1 sm:mb-2 group-hover:text-gray-900 transition-colors duration-300 ${
                        lang === 'ar'
                          ? 'text-lg sm:text-xl lg:text-2xl'
                          : 'text-base sm:text-lg lg:text-2xl'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`font-light text-gray-600 opacity-80 group-hover:opacity-100 transition-all duration-300 ${
                        lang === 'ar'
                          ? 'text-base sm:text-lg lg:text-xl'
                          : 'text-sm sm:text-base lg:text-lg'
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 border-gray-400 opacity-30 group-hover:opacity-60 group-hover:rotate-45 transition-all duration-500" />
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-400 opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500" />
        </div>
      </div>

      {/* FAQ */}
        <FAQ />

      {/* PROJECT CARDS — fixed for mobile */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 text-center">
          <div>
            <h2
              className={` ${
                lang === 'ar'
                  ? 'text-2xl sm:text-3xl lg:text-4xl'
                  : 'text-xl sm:text-2xl lg:text-4xl'
              } text-gray-900 font-semibold mb-8 sm:mb-10 lg:mb-12`}
            >
              {t('services.custom_flooring_page.projects_title')}
            </h2>
            <p
              className={`${
                lang === 'ar'
                  ? 'text-lg sm:text-xl lg:text-2xl'
                  : 'text-base sm:text-lg lg:text-2xl'
              } text-gray-900 font-350`}
            >
              {t('services.custom_flooring_page.projects_subtitle')}
            </p>
          </div>
        </div>

        {/* Use grid: 1 col on mobile, 3 cols on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-8 lg:px-12">
          {/* Card 1 */}
          <div
            className="relative h-[220px] sm:h-[220px] lg:h-[260px] overflow-hidden cursor-pointer rounded-lg"
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
              src="/medias/safeway/11.png"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              alt={t('services.custom_flooring_page.card_alt')}
              ref={imageRef3}
              className="object-cover"
            />
            <div className="absolute inset-0 flex p-3 sm:p-4 items-center justify-between flex-col text-white">
              <p
                className={`font-bold text-shadow-md ${
                  lang === 'ar'
                    ? 'text-lg sm:text-xl lg:text-2xl'
                    : 'text-base sm:text-lg lg:text-2xl'
                }`}
              >
                {t('services.custom_flooring_page.card1_title')}
              </p>
              <p
                className={`font-semibold text-shadow-md ${
                  lang === 'ar'
                    ? 'text-base sm:text-lg lg:text-xl'
                    : 'text-sm sm:text-base lg:text-xl'
                }`}
              >
                {t('services.custom_flooring_page.card1_subtitle')}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative h-[220px] sm:h-[220px] lg:h-[260px] overflow-hidden cursor-pointer rounded-lg"
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
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              alt={t('services.custom_flooring_page.card_alt')}
              ref={imageRef4}
              className="object-cover"
            />
            <div className="absolute p-3 sm:p-4 inset-0 flex items-center justify-between flex-col text-white">
              <p
                className={`font-bold text-shadow-md ${
                  lang === 'ar'
                    ? 'text-lg sm:text-xl lg:text-2xl'
                    : 'text-base sm:text-lg lg:text-2xl'
                }`}
              >
                {t('services.custom_flooring_page.card2_title')}
              </p>
              <p
                className={`text-shadow-md font-semibold ${
                  lang === 'ar'
                    ? 'text-base sm:text-lg lg:text-xl'
                    : 'text-sm sm:text-base lg:text-xl'
                }`}
              >
                {t('services.custom_flooring_page.card2_subtitle')}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative h-[220px] sm:h-[220px] lg:h-[260px] overflow-hidden cursor-pointer rounded-lg"
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
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              alt={t('services.custom_flooring_page.card_alt')}
              ref={imageRef5}
              className="object-cover"
            />
            <div className="absolute p-3 sm:p-4 inset-0 flex items-center justify-between flex-col text-white">
              <p
                className={`font-bold text-shadow-md ${
                  lang === 'ar'
                    ? 'text-lg sm:text-xl lg:text-2xl'
                    : 'text-base sm:text-lg lg:text-2xl'
                }`}
              >
                {t('services.custom_flooring_page.card3_title')}
              </p>
              <p
                className={`text-shadow-md font-semibold ${
                  lang === 'ar'
                    ? 'text-base sm:text-lg lg:text-xl'
                    : 'text-sm sm:text-base lg:text-xl'
                }`}
              >
                {t('services.custom_flooring_page.card3_subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </FadeUp>
  );
}
