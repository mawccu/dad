//app/layout.js
import { ProgressProvider } from './components/ProgressProvider';
import "./globals.css";
import SmoothScrolling from './components/SmoothScrolling'
import React from 'react';


export const metadata = {
  title: 'New Look',
  description: 'New Look Company for Finishing and Maintenance',
   icons: {
    icon: [
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        url: '/favicon/favicon.ico',
        rel: 'icon',
      },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon/android-chrome-512x512.png',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  

  return (
    <html suppressHydrationWarning="true">
    
      <body suppressHydrationWarning={true}>
          <ProgressProvider>
            
              {children}
          </ProgressProvider>
      </body>
    </html>
  );
}