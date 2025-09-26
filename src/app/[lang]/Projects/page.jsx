// in app/[lang]/Projects/page.jsx

import ProjectsPageClient from './ProjectsPageClient'; 

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const isEnglish = lang === 'en';

    return {
        title: isEnglish 
            ? 'Our Project Portfolio | New Look Finishing' 
            : 'معرض مشاريعنا | New Look للتشطيبات',
        description: isEnglish
            ? 'Explore our portfolio of finishing projects, from luxury villas to major infrastructure like the Abdoun Bridge and commercial sites for Mövenpick Hotels.'
            : 'اكتشف معرض مشاريعنا للتشطيبات ، من الفلل الفاخرة إلى المشاريع الهندسية الكبرى مثل جسر عبدون ومواقع تجارية لفنادق موفنبيك.',
    };
}

export default function ProjectsPage() {
    return <ProjectsPageClient />;
}