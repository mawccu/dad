import { ProgressProvider } from './components/ProgressProvider';
import ConditionalLayout from './components/ConditionalLayout';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true">
      <body>
        <ProgressProvider>
          <ConditionalLayout>{children}</ConditionalLayout> 
          {/* <SmoothScrolling /> */}
        </ProgressProvider>
      </body>
    </html>
  );
}