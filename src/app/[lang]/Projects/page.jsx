//Projects/page.jsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ContactCTA from '../Contact/contactCTA'; 
import { useT } from '../i18n/client';
import { useParams } from 'next/navigation';
import FadeUp from '../../components/FadeUp';


export default function Projects() {
  const [filter, setFilter] = useState('all');
  const router = useRouter();
  const { t } = useT('common');
  const { lang } = useParams();

  const projects = [
  
  {
    src: '/medias/movenpick/Movenpick.png',
    blueprint: '/medias/movenpick/blue.png', 
    link: `/${lang}/Projects/Movenpick`,
    category: { en: ['flooring'], ar: ['مشاريع الأرضيات'] },
    name: { en: 'Mövenpick Hotel', ar: 'فندق موفنبيك' }
  },
  {
    src: '/medias/abdounbridge/bb (2).jpg',
    blueprint: '/medias/abdounbridge/bb (2).jpg', 
    link: `/${lang}/Projects/AbdounBridge`,
    category: { en: ['surface finishing', 'legacy'], ar: ['مشاريع التشطيبات', 'المشاريع المميزة'] },
    name: { en: 'Abdoun Bridge', ar: 'جسر عبدون' }
  },
  {
    src: '/medias/safeway/11.png',
    blueprint: '/medias/safeway/blue.png',
    link: `/${lang}/Projects/Safeway`,
    category: { en: ['flooring'], ar: ['مشاريع الأرضيات'] },
    name: { en: 'Safeway Center', ar: 'أسواق السيفوي' }
  },
 
  { 
    src: '/medias/tag/2.png',
    blueprint: '/medias/tag/blue.png',
    link: `/${lang}/Projects/TAG`,
    category: { en: ['surface finishing'], ar: ['مشاريع التشطيبات'] },
    name: { en: 'Talal Abu Ghazaleh Group', ar: 'مجموعة طلال أبو غزالة' }
  },
  {
    src: '/medias/tower/1.png',
    blueprint: '/medias/tower/blue.png', 
    link: `/${lang}/Projects/BusinessParkTower`,
    category: { en: ['flooring', 'legacy', 'surface finishing'], ar: ['مشاريع الأرضيات', 'المشاريع المميزة', 'مشاريع التشطيبات'] },
    name: { en: 'Business Park Tower', ar: 'برج مجمع المشاريع' }
  },
  { 
    src: '/medias/villa/1.png', 
    blueprint: '/medias/villa/blue.png', 
    link: `/${lang}/Projects/Villa04`, 
    category: { en: ['surface finishing'], ar: ['مشاريع التشطيبات'] },
    name: { en: 'Villa 04', ar: 'ڤيلا عميش' }
  },
  {
    src: '/medias/ncc/1.png',
    blueprint: '/medias/ncc/blue.png', 
    link: `/${lang}/Projects/NCC`,
    category: { en: ['surface finishing'], ar: ['مشاريع التشطيبات'] },
    name: { en: 'Northern Cement Company', ar: 'شركة اسمنت الشمالية' }
  },
  {
    src: '/medias/ex/3.png',
    blueprint: '/medias/ex/blue.png',
    link: `/${lang}/Projects/Expeditors`,
    category: { en: ['flooring'], ar: ['مشاريع الأرضيات'] },
    name: { en: 'Expeditors', ar: 'Expeditors' }
  },
  
];

  const categoryMap = {
    'all': 'all',
    'flooring': lang === 'ar' ? 'مشاريع الأرضيات' : 'flooring',
    'surface_finishing': lang === 'ar' ? 'مشاريع التشطيبات' : 'surface finishing',
    'legacy': lang === 'ar' ? 'المشاريع المميزة' : 'legacy'
  };

  const categories = lang === 'ar'
    ? Object.keys(categoryMap).reverse()
    : Object.keys(categoryMap);

  const mobileCategories = Object.keys(categoryMap);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p =>
        p.category[lang]?.map(c => c.toLowerCase()).includes(categoryMap[filter].toLowerCase())
      );

  return (
    <>

      {/* Category Filter Buttons */}
        <div className="min-h-[100vh]">
          <p className="pt-12 sm:pt-20 lg:pt-20 xl:pt-28 2xl:pt-30 text-2xl sm:text-3xl lg:text-4xl text-center px-4">{t('projects.title')}</p>
          
          {/* Mobile: 2 filters per line */}
          <div className="sm:hidden px-4 mt-8">
            <div className={`grid grid-cols-2 gap-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`} style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
            {mobileCategories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`text-base font-400 transition-colors duration-300 py-2 px-3 text-center rounded-lg border ${
                  filter === category
                    ? 'text-white bg-black border-black'
                    : 'text-black bg-white border-gray-300 hover:bg-gray-50'
                }`}
              >
                {t(`projects.categories.${category}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Tablet: Wrap on small screens */}
        <div className={`hidden sm:flex lg:hidden flex-wrap gap-4 text-lg font-400 px-6 mt-12 justify-center ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`transition-colors duration-300 ${
                filter === category
                  ? 'text-black underline underline-offset-4'
                  : 'text-black hover:text-gray-400'
              }`}
            >
              {t(`projects.categories.${category}`)}
            </button>
          ))}
        </div>

        {/* Desktop: Original Layout (UNCHANGED) */}
        <div className={`hidden lg:flex gap-8 text-xl font-400 px-12 mt-16 ${lang === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`transition-colors duration-300 ${
                filter === category
                  ? 'text-black underline underline-offset-4 '
                  : 'text-black hover:text-gray-400'
              }`}
            >
              {t(`projects.categories.${category}`)}
            </button>
          ))}
        </div>
        
        <hr className="border-t border-gray-500 mx-4 sm:mx-6 lg:mx-12 my-4" />


        {/* Projects Grid */}
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="relative group h-[250px] sm:h-[280px] lg:h-[300px] overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 rounded-lg border"
                onClick={() => router.push(project.link)}
              >
                {/* Original Image */}
                <Image
                  src={project.src}
                  alt={project.name[lang] || project.name.en}
                  fill={true}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Blueprint Overlay - Hidden by default, shown on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-95 transition-all duration-500 bg-blue-900">
                  <Image
                    src={project.blueprint}
                    alt={`${project.name[lang] || project.name.en} Blueprint`}
                    fill={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  
                  {/* Blueprint Grid Overlay */}
                  <div className="absolute inset-0 opacity-30" 
                       style={{
                         backgroundImage: `
                           linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                         `,
                         backgroundSize: '20px 20px'
                       }}>
                  </div>

                  {/* Engineering Corner Lines */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-300"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-300"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-300"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-300"></div>

                  {/* Technical Specifications Overlay */}
                  <div className="absolute top-2 sm:top-3 lg:top-4 left-8 sm:left-10 lg:left-12 text-blue-300 text-xs font-mono">
                    <div>PROJ-{String(index + 1).padStart(3, '0')}</div>
                  </div>

                  {/* Engineering Stamp */}
                  <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 right-8 sm:right-10 lg:right-12 text-cyan-300 text-xs font-mono opacity-70">
                    <div>{new Date().getFullYear()}</div>
                  </div>
                </div>

                {/* Overlay for readability (only on non-blueprint) */}
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity duration-500" />

                {/* Project Name */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-lg sm:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-bold text-center px-3 sm:px-4 drop-shadow-lg group-hover:text-cyan-300 group-hover:opacity-60 transition-colors duration-500">
                    {project.name[lang] || project.name.en}
                  </h3>
                </div>

                {/* Category Display - Modified for Blueprint Style */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent group-hover:from-blue-900 group-hover:to-transparent p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex justify-between items-end">
                    <p className="text-white group-hover:text-cyan-300 text-xs sm:text-sm font-medium font-mono transition-colors duration-500">
                      {project.category[lang]?.join(' | ') || project.category.en?.join(' | ')}
                    </p>
                    <p className="text-white group-hover:text-cyan-300 text-xs font-mono opacity-70 transition-colors duration-500">
                      BLUEPRINT MODE
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        <div className="py-8 sm:py-16 lg:py-20">
        </div>
    </>
  );
}
