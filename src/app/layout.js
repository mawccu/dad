import { ProgressProvider } from './components/ProgressProvider';
import "./globals.css";
import { Inter } from 'next/font/google'; // Import Inter from next/font/google

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning="true">
      <body>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}
