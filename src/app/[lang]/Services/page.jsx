//Services/page.jsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useT } from '../i18n/client';
import { useParams } from 'next/navigation';
import FadeUp from '../../components/FadeUp';
  
export default function Services() {
  const { t } = useT('common');
  const { lang } = useParams();

  return (
    <FadeUp delay={0}>
      <div className="relative w-full min-h-screen flex flex-col md:flex-row">
        {/* Custom Flooring Section */}
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen group">
        <Image
          src="/medias/tower/3.png"
          alt={t('services.custom_flooring.alt')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300">
          <Link 
            href={`/${lang}/Services/CustomFlooring`}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Navigate to Custom Flooring services"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center px-4 group-hover:scale-105 transition-transform duration-300">
              {t('services.custom_flooring')}
            </h2>
          </Link>
        </div>
      </div>

      {/* Surface Finishing Section */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen group">
        <Image
          src="/medias/abdounbridge/bbb.png"
          alt="Surface Finishing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300">
          <Link 
            href={`/${lang}/Services/SurfaceFinishing`}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Navigate to Surface Finishing services"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center px-4 group-hover:scale-105 transition-transform duration-300">
              {t('services.surface_finishing')}
            </h2>
          </Link>
        </div>
      </div>
    </div>
    </FadeUp>
  );
}