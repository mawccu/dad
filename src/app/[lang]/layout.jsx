import '../globals.css';
import { I18nClientProvider } from './i18n/client';
import ConditionalHeaderWrapper from './ConditionalHeaderWrapper';

export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function LangLayout({ children, params }) {
  // This layout doesn't render <html>; that's only in the root layout.
  // The provider will set document.documentElement.lang/dir on the client.
  const { lang } = await params;
  return (
    <I18nClientProvider lang={lang}>
      <ConditionalHeaderWrapper>
        {children}
      </ConditionalHeaderWrapper>
    </I18nClientProvider>
  );
}
