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
        "alternateName": ["New Look JO", "newlookjo", "New Look", "New Look Finishing", "NewLook للتشطيبات"],
        "url": "https://www.newlookjo.com",
        "logo": "https://www.newlookjo.com/favicon/android-chrome-192x192.png",
        "sameAs": [
          // add your real profiles if you have them:
          "https://www.facebook.com/…",
          "https://www.instagram.com/…",
          "https://www.linkedin.com/company/…"
        ]
      })}
      </Script>

      <Script id="ld-site" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "NewLookJO",
        "alternateName": ["New Look JO", "newlookjo", "New Look", "New Look Finishing", "NewLook للتشطيبات"],
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