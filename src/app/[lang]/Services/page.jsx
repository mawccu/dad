// app/[lang]/Services/page.jsx
'use client';
import Link from 'next/link';
import { useT } from '../i18n/client';
import { useParams } from 'next/navigation';

export default function Services() {
  const { t } = useT('common');
  const { lang } = useParams();

  return (
    <div
      className="
        grid grid-cols-1 md:grid-cols-2 w-full min-h-0
        md:min-h-[calc(100svh-var(--header-h))]   /* fill viewport minus header on laptops+ */
        xl:min-h-[calc(100svh-var(--header-h))]   /* also on big desktops */
      "
      style={{ ['--header-h']: '72px' }}   // 🔧 set to your real header height
    >
      {/* Custom Flooring */}
      <section
        className="
          relative group
          /* single-column: full viewport (iOS-safe), minus header for the first tile */
          min-h-screen min-h-[100svh]
          md:h-full                                /* in 2-col layout, fill the row height */
          bg-[url('/medias/tower/3.png')] bg-cover bg-center
        "
        style={{ minHeight: 'calc(100svh - var(--header-h))' }}
      >
        <Link
          href={`/${lang}/Services/CustomFlooring`}
          aria-label="Navigate to Custom Flooring services"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300" />
          <h2 className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 group-hover:scale-105 transition-transform duration-300">
            {t('services.custom_flooring')}
          </h2>
        </Link>
      </section>

      {/* Surface Finishing */}
      <section
        className="
          relative group
          /* single-column: full viewport (no header subtraction needed) */
          min-h-screen min-h-[100svh]
          md:h-full
          bg-[url('/medias/abdounbridge/bbb.png')] bg-cover
          bg-[position:center_28%] md:bg-[position:center_20%] xl:bg-center  /* crop tuning */
        "
      >
        <Link
          href={`/${lang}/Services/SurfaceFinishing`}
          aria-label="Navigate to Surface Finishing services"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300" />
          <h2 className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 group-hover:scale-105 transition-transform duration-300">
            {t('services.surface_finishing')}
          </h2>
        </Link>
      </section>
    </div>
  );
}
