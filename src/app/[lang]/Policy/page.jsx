//Policy/page.jsx

import PolicyPageClient from './PolicyPageClient';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isEnglish = lang === 'en';
  return {
    title: isEnglish
      ? 'Privacy Policy | New Look Finishing'
      : 'سياسة الخصوصية | New Look للتشطيبات',
    description: isEnglish
      ? 'Read New Look Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or use our services.'
      : 'اقرأ سياسة خصوصية New Look لفهم كيفية جمع معلوماتك الشخصية واستخدامها وحمايتها عند زيارتك لموقعنا أو استخدام خدماتنا.',

  };
}

export default function PolicyPage() {
  return <PolicyPageClient />;
}

