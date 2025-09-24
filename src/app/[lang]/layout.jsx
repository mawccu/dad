// app/[lang]/layout.jsx 
import '../globals.css';
import { I18nClientProvider } from './i18n/client';
import UnifiedLayoutWrapper from './UnifiedLayoutWrapper.jsx';
import SmoothScrolling from '../components/SmoothScrolling.jsx';

export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  return (
    <I18nClientProvider lang={lang}>
      <UnifiedLayoutWrapper>
        {children}
      </UnifiedLayoutWrapper>
    </I18nClientProvider>
  );
}
