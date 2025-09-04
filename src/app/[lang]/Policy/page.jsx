//components/Policy/page.jsx
'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const PolicyPage = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get('section');

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [section]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="pt-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Policies</h1>
          <p className="text-gray-600 text-lg">
            Our commitment to transparency and your rights
          </p>
        </div>
      </div>

      

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Privacy Policy Section */}
        <section id="privacy-policy" className="mb-20">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h2>
            <p className="text-gray-500 mb-2">Last updated: 01 Jan 2025</p>
            <p className="text-gray-500 mb-8">Reading time: 3 minutes</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to protecting your privacy and ensuring that your personal information is handled in a safe 
                  and responsible way. This Privacy Policy outlines the types of personal information we collect, how we use that 
                  information, and how we keep it safe.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Who we are</h3>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy together with the Terms of Use form an entire legal Agreement between New Look Construction 
                  Company and you as a user. The Agreement applies to our website located at newlook-jo.com. If you have any 
                  questions you can contact us at info@newlook-jo.com.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What personal information do we collect?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We collect personal information that you provide to us when you interact with our website, such as your name, 
                  email address, and phone number. We also collect information about your use of our website, such as your IP 
                  address, browser type, and pages visited.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How do we use your information?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use your personal information to provide you with our services, respond to your inquiries, and improve our 
                  website. We may also use your information to send you promotional materials, but only if you have consented 
                  to receive them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at info@newlook-jo.com or +962 00 0000000.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms of Use Section */}
        <section id="terms-of-use" className="mb-20">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h2>
            <p className="text-gray-500 mb-2">Last updated: 01 Jan 2025</p>
            <p className="text-gray-500 mb-8">Reading time: 4 minutes</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this 
                  agreement. These Terms of Use may be updated from time to time without notice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Use License</h3>
                <p className="text-gray-700 leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on New Look's website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Disclaimer</h3>
                <p className="text-gray-700 leading-relaxed">
                  The materials on New Look's website are provided on an 'as is' basis. New Look makes no warranties, expressed 
                  or implied, and hereby disclaims and negates all other warranties including without limitation, implied 
                  warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of 
                  intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitations</h3>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall New Look or its suppliers be liable for any damages (including, without limitation, damages 
                  for loss of data or profit, or due to business interruption) arising out of the use or inability to use the 
                  materials on New Look's website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  All construction services are subject to separate written agreements. Website content is for informational 
                  purposes only and does not constitute a binding offer for services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Governing Law</h3>
                <p className="text-gray-700 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of Jordan and you 
                  irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cookie-policy" className="mb-20">
  <div className="bg-white rounded-lg shadow-sm p-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h2>
    <p className="text-gray-500 mb-2">Last updated: 01 Jan 2025</p>
    <p className="text-gray-500 mb-8">Reading time: 2 minutes</p>

    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed">
        Our website uses cookies to improve your browsing experience. Cookies are small 
        text files stored on your device that help us remember your preferences, analyze 
        site traffic, and provide a smoother experience.
      </p>

      <p className="text-gray-700 leading-relaxed">
        We use three types of cookies: <strong>essential cookies</strong> that are required 
        for basic site functionality, <strong>analytics cookies</strong> that help us understand 
        how visitors use the site, and <strong>functional cookies</strong> that remember your 
        preferences.
      </p>

      <p className="text-gray-700 leading-relaxed">
        You can manage or disable cookies through your browser settings. Please note that 
        disabling cookies may limit some features of our website.
      </p>
    </div>
  </div>
</section>

      </div>

    </div>
  );
};

export default PolicyPage;