//Services/CustomFlooring/Faq.jsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { useT } from '../../i18n/client';
import { useParams } from 'next/navigation';

const FAQItem = ({ question, children, isOpen, onToggle, index, lang }) => {
  const contentRef = useRef(null);
  const chevronRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out'
      });
      gsap.to(chevronRef.current, {
        rotation: 180,
        duration: 0.5,
        ease: 'power3.out'
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.inOut'
      });
      gsap.to(chevronRef.current, {
        rotation: 0,
        duration: 0.5,
        ease: 'power3.out'
      });
    }
  }, [isOpen]);

  return (
    <div className="mb-4 last:mb-0">
      <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:bg-gray-100">
        <button
          className="w-full py-8 px-8 flex items-center justify-between text-start transition-all duration-300 ease-out"
          onClick={onToggle}
        >
          <span className={`${lang === 'ar' ? 'text-2xl' : 'text-xl'} font-light text-gray-900 ${lang === 'ar' ? 'pl-8' : 'pr-8'} leading-relaxed`}>
            {question}
          </span>
          <div ref={chevronRef} className="flex-shrink-0">
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </button>
        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className={`px-8 pb-8 text-gray-700 leading-relaxed ${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState({ 0: true }); // First item open by default
  const containerRef = useRef(null);
  const { lang } = useParams();
  const { t } = useT('common');

  useEffect(() => {
    // Animate container on mount
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: t('services.custom_flooring_faq.items.0.question'),
      content: (
        <div>
          <p className={`mb-6 ${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light text-gray-600 leading-relaxed`}>
            {t('services.custom_flooring_faq.items.0.intro')}
          </p>
          <ul className="space-y-4 ml-0">
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index} className="flex items-start">
                <span className={`w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 ${lang === 'ar' ? 'ml-4' : 'mr-4'} flex-shrink-0`}></span>
                <span className={`${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light text-gray-600 leading-relaxed`}>
                  {t(`services.custom_flooring_faq.items.0.bullets.${index}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.1.question'),
      content: (
        <p className={`${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.1.content')}
        </p>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.2.question'),
      content: (
        <p className={`${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.2.content')}
        </p>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.3.question'),
      content: (
        <div>
          <p className={`mb-6 ${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light text-gray-600 leading-relaxed`}>
            {t('services.custom_flooring_faq.items.3.intro')}
          </p>
          <ul className="space-y-4 ml-0">
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index} className="flex items-start">
                <span className={`w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 ${lang === 'ar' ? 'ml-4' : 'mr-4'} flex-shrink-0`}></span>
                <span className={`${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light text-gray-600 leading-relaxed`}>
                  {t(`services.custom_flooring_faq.items.3.bullets.${index}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.4.question'),
      content: (
        <p className={`${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.4.content')}
        </p>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.5.question'),
      content: (
        <p className={`${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.5.content')}
        </p>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.6.question'),
      content: (
        <p className={`${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.6.content')}
        </p>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.7.question'),
      content: (
        <p className={`${lang === 'ar' ? 'text-xl' : 'text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.7.content')}
        </p>
      )
    }
  ];

  return (
    <div className="py-24 bg-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto px-8">
        <div 
          ref={containerRef}
          className="bg-white"
        >
          <div className={`mb-20 ${lang === 'ar' ? 'text-center' : 'text-center'}`}>
            <h1 className={`${lang === 'ar' ? 'text-4xl' : 'text-4xl'} font-light text-gray-900 mb-8 tracking-wide`}>
              {t('services.custom_flooring_faq.title')}
            </h1>
            <p className={`${lang === 'ar' ? 'text-2xl' : 'text-2xl'} font-light text-gray-600 max-w-3xl ${lang === 'ar' ? 'mx-auto' : 'mx-auto'} leading-relaxed`}>
              {t('services.custom_flooring_faq.subtitle')}
            </p>
          </div>
          
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                isOpen={openItems[index] || false}
                onToggle={() => toggleItem(index)}
                index={index}
                lang={lang}
              >
                {item.content}
              </FAQItem>
            ))}
          </div>
        </div>
        
        <div className={`mt-20 ${lang === 'ar' ? 'text-right' : 'text-center'}`}>
          <p className={`${lang === 'ar' ? 'text-xl' : 'text-xl'} font-light text-gray-600`}>
            Still have questions?{' '}
            <a href={`/${lang}/Contact`} className="text-gray-900 hover:text-gray-600 font-light underline underline-offset-8 decoration-1 transition-all duration-300">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;