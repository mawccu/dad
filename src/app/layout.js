//app/layout.js
import { ProgressProvider } from './components/ProgressProvider';
import ConditionalLayout from './components/ConditionalLayout';
import "./globals.css";
import SmoothScrolling from './components/SmoothScrolling'

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning="true">
      <body suppressHydrationWarning={true}>
        <ProgressProvider>
          <ConditionalLayout>{children}</ConditionalLayout> 
            {/* <SmoothScrolling />  */}
        </ProgressProvider>
      </body>
    </html>
  );
}