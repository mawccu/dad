// Services/SurfaceFinishing/page.jsx
'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import FAQ from './Faq';
import { useT } from '../../i18n/client';
import { useParams } from 'next/navigation';
import FadeUp from '../../../components/FadeUp';

export default function SurfaceFinishing() {
  const router = useRouter();
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const imageRef5 = useRef(null);
  const { lang } = useParams();
  const { t } = useT('common');

  const [isHovered, setIsHovered] = useState(null);

  return (
    <FadeUp delay={0}>
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* HERO */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src="/medias/abdounbridge/bbb.png"
          alt={t('services.surface_finishing_page.hero_alt')}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Center Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h3
              className={`mb-4 sm:mb-6 ${
                lang === 'ar'
                  ? 'text-3xl sm:text-4xl lg:text-5xl'
                  : 'text-3xl sm:text-4xl lg:text-5xl'
              } font-semibold tracking-wide`}
            >
              {t('services.surface_finishing_page.hero_title')}
            </h3>
            <p
              className={`${
                lang === 'ar'
                  ? 'text-lg sm:text-xl lg:text-2xl'
                  : 'text-lg sm:text-xl lg:text-2xl'
              } font-light max-w-2xl mx-auto`}
            >
              {t('services.surface_finishing_page.hero_subtitle')}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 transform text-white px-4">
          <p
            className={`cursor-pointer ${
              lang === 'ar'
                ? 'text-lg sm:text-xl lg:text-2xl'
                : 'text-base sm:text-lg lg:text-xl'
            } font-light underline underline-offset-8 transition-colors duration-200 whitespace-nowrap hover:text-gray-400 text-center`}
            onClick={() => router.push(`/${lang}/Contact?reason=consultation`)}
          >
            {t('services.surface_finishing_page.cta_free_consultation')}
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
        <h1
          className={`${
            lang === 'ar'
              ? 'text-2xl sm:text-3xl lg:text-4xl'
              : 'text-2xl sm:text-3xl lg:text-4xl'
          } font-semibold mb-16 sm:mb-24 lg:mb-32`}
        >
          {t('services.surface_finishing_page.intro_title')}
        </h1>

        <p
          className={`${
            lang === 'ar'
              ? 'text-lg sm:text-xl lg:text-2xl'
              : 'text-lg sm:text-xl lg:text-2xl'
          } font-light sm:leading-relaxed leading-relaxed lg:leading-relaxed mb-6 sm:mb-8`}
        >
          {t('services.surface_finishing_page.intro_p1')}
        </p>

        <p
          className={`${
            lang === 'ar'
              ? 'text-lg sm:text-xl lg:text-2xl'
              : 'text-lg sm:text-xl lg:text-2xl'
          } font-light sm:leading-relaxed leading-relaxed lg:leading-relaxed mb-6 sm:mb-8`}
        >
          {t('services.surface_finishing_page.intro_p2')}
        </p>
      </div>

      {/* TWO PANELS */}
      <div className="flex flex-col lg:flex-row justify-center items-center py-16 sm:py-24 lg:py-16">
        {/* Panel 1 */}
        <div
          className="w-full lg:w-[960px] h-[50vh] sm:h-[60vh] lg:h-[100vh] relative overflow-hidden group cursor-pointer"
          onMouseEnter={() => setIsHovered('first')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="absolute inset-0 bg-gray-800">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/medias/tower/2.png')" }}
            />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />

          <div className="absolute inset-0 flex items-center justify-center text-white z-10">
            <div className="text-center px-4 sm:px-6 lg:px-8 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
              <h3
                className={`${
                  lang === 'ar'
                    ? 'text-xl sm:text-2xl lg:text-5xl'
                    : 'text-xl sm:text-2xl lg:text-5xl'
                } font-light tracking-wide mb-4 sm:mb-6 lg:mb-12 opacity-90`}
              >
                {t('services.surface_finishing_page.panel1_title')}
              </h3>

              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                {[
                  t('services.surface_finishing_page.panel1_items.0'),
                  t('services.surface_finishing_page.panel1_items.1'),
                  t('services.surface_finishing_page.panel1_items.2'),
                  t('services.surface_finishing_page.panel1_items.3'),
                  t('services.surface_finishing_page.panel1_items.4'),
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center justify-center ${
                      lang === 'ar'
                        ? 'text-sm sm:text-base lg:text-2xl'
                        : 'text-sm sm:text-base lg:text-2xl'
                    } font-light opacity-90 transform transition-all duration-300`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full ${
                        lang === 'ar' ? 'ml-2 sm:ml-3 lg:ml-4' : 'mr-2 sm:mr-3 lg:mr-4'
                      } group-hover:bg-yellow-400 transition-colors duration-300`}
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
          className="w-full lg:w-[960px] h-[50vh] sm:h-[60vh] lg:h-[100vh] relative overflow-hidden group cursor-pointer"
          onMouseEnter={() => setIsHovered('second')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="absolute inset-0 bg-gray-200">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/medias/ncc/3.png')" }}
            />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-40 transition-all duration-300" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 sm:px-6 lg:px-8 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
              <h3
                className={`${
                  lang === 'ar'
                    ? 'text-xl sm:text-2xl lg:text-5xl'
                    : 'text-xl sm:text-2xl lg:text-5xl'
                } font-400 tracking-wide mb-4 sm:mb-6 lg:mb-12 text-white opacity-100`}
              >
                {t('services.surface_finishing_page.panel2_title')}
              </h3>

              <div className="space-y-2 sm:space-y-3 lg:space-y-6">
                {[
                  {
                    title: t('services.surface_finishing_page.panel2_items.0.title'),
                    desc: t('services.surface_finishing_page.panel2_items.0.desc'),
                  },
                  {
                    title: t('services.surface_finishing_page.panel2_items.1.title'),
                    desc: t('services.surface_finishing_page.panel2_items.1.desc'),
                  },
                  {
                    title: t('services.surface_finishing_page.panel2_items.2.title'),
                    desc: t('services.surface_finishing_page.panel2_items.2.desc'),
                  },
                  {
                    title: t('services.surface_finishing_page.panel2_items.3.title'),
                    desc: t('services.surface_finishing_page.panel2_items.3.desc'),
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`transform transition-all duration-300  ${
                      lang === 'ar'
                        ? 'group-hover:-translate-x-2'
                        : 'group-hover:translate-x-2'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <h4
                      className={`${
                        lang === 'ar'
                          ? 'text-sm sm:text-base lg:text-3xl'
                          : 'text-sm sm:text-base lg:text-2xl'
                      } font-medium text-white mb-1 group-hover:text-gray-900 transition-colors duration-300`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`${
                        lang === 'ar'
                          ? 'text-xs sm:text-sm lg:text-2xl'
                          : 'text-xs sm:text-sm lg:text-xl'
                      } font-400 text-white opacity-80 group-hover:opacity-100 transition-all duration-300`}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="min-h-screen">
        <FAQ />
      </div>

      {/* PROJECT CARDS — fixed for mobile */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 text-center">
          <div>
            <h2
              className={`${
                lang === 'ar'
                  ? 'text-2xl sm:text-3xl lg:text-4xl'
                  : 'text-2xl sm:text-3xl lg:text-4xl'
              } text-gray-900 font-semibold mb-8 sm:mb-10 lg:mb-12`}
            >
              {t('services.surface_finishing_page.projects_title')}
            </h2>
            <p
              className={`${
                lang === 'ar'
                  ? 'text-lg sm:text-xl lg:text-2xl'
                  : 'text-lg sm:text-xl lg:text-2xl'
              } text-gray-900 font-350`}
            >
              {t('services.surface_finishing_page.projects_subtitle')}
            </p>
          </div>
        </div>

        {/* Use grid: 1 col on mobile, 3 cols on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-8 lg:px-12">
          {/* Card 1 */}
          <div
            className="relative h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden cursor-pointer rounded-lg"
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
            onClick={() => router.push(`/${lang}/Projects/AbdounBridge`)}
          >
            <Image
              src="/medias/abdounbridge/mm.png"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              alt="Project Preview"
              ref={imageRef3}
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
                {t('services.surface_finishing_page.card1_title')}
              </p>
              <p
                className={`text-shadow-md font-semibold ${
                  lang === 'ar'
                    ? 'text-base sm:text-lg lg:text-xl'
                    : 'text-sm sm:text-base lg:text-xl'
                }`}
              >
                {t('services.surface_finishing_page.card1_subtitle')}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden cursor-pointer rounded-lg"
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
            onClick={() => router.push(`/${lang}/Projects/NCC`)}
          >
            <Image
              src="/medias/ncc/1.png"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              alt="Project Preview"
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
                {t('services.surface_finishing_page.card2_title')}
              </p>
              <p
                className={`text-shadow-md font-semibold ${
                  lang === 'ar'
                    ? 'text-base sm:text-lg lg:text-xl'
                    : 'text-sm sm:text-base lg:text-xl'
                }`}
              >
                {t('services.surface_finishing_page.card2_subtitle')}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden cursor-pointer rounded-lg"
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
            onClick={() => router.push(`/${lang}/Projects/Villa04`)}
          >
            <Image
              src="/medias/villa/1.png"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              alt="Project Preview"
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
                {t('services.surface_finishing_page.card3_title')}
              </p>
              <p
                className={`text-shadow-md font-semibold ${
                  lang === 'ar'
                    ? 'text-base sm:text-lg lg:text-xl'
                    : 'text-sm sm:text-base lg:text-xl'
                }`}
              >
                {t('services.surface_finishing_page.card3_subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </FadeUp>
  );
}
