import { ProgressProvider } from './components/ProgressProvider';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true">
      <body>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}