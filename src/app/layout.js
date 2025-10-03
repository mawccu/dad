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
  metadataBase: new URL('https://www.newlookjo.com'),
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon.ico', rel: 'icon' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [
      { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/favicon/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/favicon/android-chrome-512x512.png' },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://www.newlookjo.com',
    siteName: 'New Look',
    title: 'New Look — Finishing Specialists',
    description: 'Protective coatings, waterproofing, and performance flooring.',
    images: [
      { url: '/icons/titlepic.png', width: 1200, height: 630, alt: 'New Look' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Look — Finishing Specialists',
    description: 'Protective coatings, waterproofing, and performance flooring.',
    images: ['/icons/titlepic.png'],
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

      <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NewLookJO",
        "alternateName": ["New Look JO", "new look jo", "newlookjo", "New Look", "New Look Finishing", "NewLook للتشطيبات"],
        "url": "https://www.newlookjo.com",
        "logo": "https://www.newlookjo.com/favicon/android-chrome-192x192.png",
        "sameAs": [
          // add your real profiles if you have them:
          "https://www.facebook.com/profile.php?id=100064126295491",
          "https://www.instagram.com/newlookjo911/"
        ]
      })}
      </Script>
    
      <Script id="ld-site" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "NewLookJO",
        "alternateName": ["New Look JO", "newlookjo", "new look jo", "New Look", "New Look Finishing", "NewLook للتشطيبات"],
        "url": "https://www.newlookjo.com",
        "inLanguage": ["en", "ar"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.newlookjo.com/en?search={query}",
          "query-input": "required name=query"
        }
      })}
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