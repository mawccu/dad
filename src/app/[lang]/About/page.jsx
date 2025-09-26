// in app/[lang]/About/page.jsx
import AboutPageClient from './AboutPageClient'; // Import your new client component

export default function About() {
  return <AboutPageClient />;
}
export async function generateMetadata({ params }) {
    const { lang } = params;
    const isEnglish = lang === 'en';
  
    return {
        title: isEnglish
            ? 'About Our Company & Expertise | New Look Finishing'
            : 'عن شركتنا وخبراتنا | New Look للتشطيبات',
        description: isEnglish
            ? 'Learn about New Look Finishing, led by Eng. Rami Hamad. Our legacy of excellence is built on major infrastructure projects like the Wadi-Abdoun Bridge.'
            : 'تعرف على شركة New Look للتشطيبات بقيادة المهندس رامي حمد. إرثنا من التميز مبني على مشاريع بُنَى تحتية كبرى مثل مشروع جسر وادي عبدون.',
    };
}

