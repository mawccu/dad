// src/app/sitemap.js
export default function sitemap() {
  const base = 'https://www.newlookjo.com';
  const locales = ['en', 'ar'];
  const now = new Date();

  // Top-level pages under /[lang]
  const top = [
    '',                // -> /en  /ar (home)
    '/Hero',
    '/About',
    '/Careers',
    '/Contact',
    '/Policy',
    '/Projects',
    '/Services',
  ];

  // About subpages
  const about = [
    '/About/RamiHamad',
  ];

  // Project detail pages (from your /[lang]/Projects/* folders)
  const projects = [
    '/Projects/AbdounBridge',
    '/Projects/BusinessParkTower',
    '/Projects/Expeditors',
    '/Projects/Movenpick',
    '/Projects/NCC',
    '/Projects/Safeway',
    '/Projects/TAG',
    '/Projects/Villa04',
  ];

  // Services subpages
  const services = [
    '/Services/CustomFlooring',
    '/Services/SurfaceFinishing',
  ];

  const paths = [...top, ...about, ...projects, ...services];

  const priorityFor = (p) => {
    if (p === '') return 1.0;                   // home
    if (p === '/Projects' || p === '/Services') return 0.9;
    if (p.startsWith('/Projects/')) return 0.8; // detail pages
    return 0.7;                                  // everything else
  };

  const alternates = (p) => ({
    languages: Object.fromEntries(
      locales.map((l) => [l, `${base}/${l}${p}`])
    ),
  });

  const entries = [];
  for (const p of paths) {
    for (const l of locales) {
      entries.push({
        url: `${base}/${l}${p}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: priorityFor(p),
        alternates: alternates(p),
      });
    }
  }

  return entries;
}
