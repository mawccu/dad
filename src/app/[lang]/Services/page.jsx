import ServicesPageClient from './ServicesPageClient';

export const generateMetadata = async ({ params }) => {
  const { lang } = await params;
  const isEnglish = lang === 'en';

  return {
    title: isEnglish
      ? 'Professional Finishing Services'
      : 'خدمات التشطيبات الاحترافية',
    description: isEnglish
      ? 'New Look offers expert surface finishing, protective coatings, waterproofing, and custom flooring solutions for commercial and residential projects.'
      : 'خدمات التشطيب السطحية الاحترافية ، الطلاءات الواقية ، العزل بأنواعه ، وحلول الأرضيات المتخصصة للمشاريع التجارية والسكنية.',
  };
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}