//app/layout.js
import { ProgressProvider } from './components/ProgressProvider';
import ConditionalLayout from './components/ConditionalLayout';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning="true">
      <body suppressHydrationWarning={true}>
        <ProgressProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </ProgressProvider>
      </body>
    </html>
  );
}