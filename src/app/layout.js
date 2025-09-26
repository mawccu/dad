//app/layout.js
import { ProgressProvider } from './components/ProgressProvider';
import "./globals.css";
import SmoothScrolling from './components/SmoothScrolling';
import React from 'react';
import Script from 'next/script'; // <--- 1. IMPORT SCRIPT COMPONENT

export const metadata = {
  title: { 
    template: '%s | New Look',
    default: 'New Look Finishing | High Quality Interior and Exterior Finishing Services' 
  },
  description: 'Led by the expertise from the Abdoun Bridge project, New Look delivers master finishing services, including protective coatings, waterproofing, and high-performance flooring solutions.',

  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', },
      { url: '/favicon/favicon.ico', rel: 'icon', },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [
      { rel: 'apple-touch-icon-precomposed', url: '/favicon/apple-touch-icon-precomposed.png', },
      { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/favicon/android-chrome-192x192.png', },
      { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/favicon/android-chrome-512x512.png', },
    ],
  },
};

export default function RootLayout({ children }) {
  // Make sure to replace GTM-MRLMS7X5 with your actual GTM ID if it's different
  const gtmId = 'GTM-MRLMS7X5'; 

  return (
    <html suppressHydrationWarning="true">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      </head>

      <body suppressHydrationWarning={true}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        <ProgressProvider>
          {children}
        </ProgressProvider>
      </body>
    </html>
  );
}