// in app/[lang]/page.jsx - This is now a Server Component

import HomePageClient from './HomePageClient'; // Import your new client component


export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isEnglish = lang === 'en';

  return {
    title: isEnglish
      ? 'New Look Finishing | Coatings & Flooring Specialists in Jordan & KSA'
      : 'New Look للتشطيبات | متخصصون في الطلاء والأرضيات في الأردن والمملكة العربية السعودية',
    description: isEnglish
      ? 'Led by the expertise from the Abdoun Bridge project, New Look delivers master finishing services, including protective coatings, waterproofing, and high-performance flooring solutions.'
      : 'بفضل الخبرة المكتسبة من مشروع جسر عبدون، تقدم New Look خدمات التشطيب الرئيسية، بما في ذلك الطلاءات الواقية، والعزل المائي، وحلول الأرضيات عالية الأداء.',
  };
}

export default function Home() {
  return <HomePageClient />; // Just render the client component
}
