import ContactPageClient from './ContactPageClient';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isEnglish = lang === 'en';

  return {
    title: isEnglish
      ? 'Contact Us | New Look Finishing'
      : 'اتصل بنا | New Look للتشطيبات',
    description: isEnglish
      ? 'Reach out to New Look Finishing for a free initial consultation on your project, and further assistance. We serve Jordan and Saudi Arabia.'
      : 'تواصل معنا للحصول على استشارة مجانية حول مشروعك ، أو للمزيد من المساعدة. نحن نخدم الأردن ، والسعودية .',
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}