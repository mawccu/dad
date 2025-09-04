//Projects/page.jsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ContactForm from '../Contact/ContactCTA';
import { useT } from '../i18n/client';
import { useParams } from 'next/navigation';



export default function Projects() {
  const [filter, setFilter] = useState('all');
  const router = useRouter();
  const { t } = useT('common');
  const { lang } = useParams();

  const projects = [
  { 
    src: '/medias/img1.jpg', 
    link: `/${lang}/Projects/Villa04`, 
    category: { en: ['surface finishing'], ar: ['مشاريع التشطيبات'] },
    name: { en: 'Villa 04', ar: 'ڤيلا عميش' }
  },
  {
    src: '/medias/img2.jpg',
    link: `/${lang}/Projects/Movenpick`,
    category: { en: ['flooring'], ar: ['مشاريع الأرضيات'] },
    name: { en: 'Movenpick Hotel', ar: 'فندق موفنبيك' }
  },
  {
    src: '/medias/img3.jpg',
    link: `/${lang}/Projects/Safeway`,
    category: { en: ['flooring'], ar: ['مشاريع الأرضيات'] },
    name: { en: 'Safeway Center', ar: 'أسواق السيفوي' }
  },
  {
    src: '/medias/img4.jpg',
    link: `/${lang}/Projects/AbdounBridge`,
    category: { en: ['surface finishing', 'legacy'], ar: ['مشاريع التشطيبات', 'المشاريع المميزة'] },
    name: { en: 'Abdoun Bridge', ar: 'جسر عبدون' }
  },
  { 
    src: '/medias/img5.jpg',
    link: `/${lang}/Projects/TAG`,
    category: { en: ['surface finishing'], ar: ['مشاريع التشطيبات'] },
    name: { en: 'Talal Abu Ghazaleh Group', ar: 'مجموعة طلال أبو غزالة' }
  },
  {
    src: '/medias/img5.jpg',
    link: `/${lang}/Projects/NCC`,
    category: { en: ['surface finishing'], ar: ['مشاريع التشطيبات'] },
    name: { en: 'Northern Cement Company', ar: 'شركة اسمنت الشمالية' }
  },
  {
    src: '/medias/img5.jpg',
    link: `/${lang}/Projects/Expeditors`,
    category: { en: ['flooring'], ar: ['مشاريع الأرضيات'] },
    name: { en: 'Expeditors', ar: 'Expeditors' }
  },
  {
    src: '/medias/img5.jpg',
    link: `/${lang}/Projects/BusinessParkTower`,
    category: { en: ['flooring', 'legacy', 'surface finishing'], ar: ['مشاريع الأرضيات', 'المشاريع المميزة', 'مشاريع التشطيبات'] },
    name: { en: 'Business Park Tower', ar: 'برج مجمع المشاريع' }
  }
];


  // Define category mapping for filtering
  const categoryMap = {
    'all': 'all',
    'flooring': lang === 'ar' ? 'مشاريع الأرضيات' : 'flooring',
    'surface_finishing': lang === 'ar' ? 'مشاريع التشطيبات' : 'surface finishing',
    'legacy': lang === 'ar' ? 'المشاريع المميزة' : 'legacy'
  };

  // Filter the projects based on selected category
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p =>
        p.category[lang]?.map(c => c.toLowerCase()).includes(categoryMap[filter].toLowerCase())
      );

  return (
    <>

      {/* Category Filter Buttons */}
      <div className="min-h-[100vh]">
        <p className="pt-24 text-4xl text-center">{t('projects.title')}</p>
        <div className={`flex gap-8 text-xl font-400 px-12 mt-16 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>

          {['all', 'flooring', 'surface_finishing', 'legacy'].map((category) => (
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
        <hr className="border-t border-gray-500 mx-12 my-4" />


        {/* Projects Grid */}
        <div className="max-w-8xl mx-auto px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="relative group h-[300px] overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                onClick={() => router.push(project.link)}
              >
                <Image
                  src={project.src}
                  alt={project.name[lang] || project.name.en}
                  fill={true}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-300" />

                {/* Project Name */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center px-4 drop-shadow-lg">
                    {project.name[lang] || project.name.en}
                  </h3>
                </div>

                {/* Category Display on Hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium capitalize">
                    {project.category[lang]?.join(', ') || project.category.en?.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen py-40">
        <ContactForm />
      </div>
    </>
  );
}
