//Services/CustomFlooring/Faq.jsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useT } from '../../i18n/client';
import { useParams } from 'next/navigation';

const FAQItem = ({ question, children, isOpen, onToggle, index, lang }) => {
  const contentRef = useRef(null);
  const chevronRef = useRef(null);

   useEffect(() => {
      const content = contentRef.current;
      const chevron = chevronRef.current;
  
      if(!content || !chevron) return;
  
      if (isOpen) {
  
        content.style.height = 'auto';
        const height = content.offsetHeight;
        content.style.height = '0px';
  
        requestAnimationFrame(() => {
          content.style.transition = 'height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          content.style.height = height + 'px';
          content.style.opacity = '1';
        });
  
        chevron.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        chevron.style.transform = 'rotate(180deg)';
      } else {
        content.style.transition = 'height 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)';
        content.style.height = '0px';
        content.style.opacity = '0';
        
        chevron.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        chevron.style.transform = 'rotate(0deg)';
      }
    }, [isOpen]);

  return (
    <div className="mb-4 last:mb-0">
      <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:bg-gray-100">
        <button
          className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-between text-start transition-all duration-300 ease-out"
          onClick={onToggle}
        >
          <span className={`${lang === 'ar' ? 'text-base sm:text-lg lg:text-2xl' : 'text-sm sm:text-base lg:text-xl'} font-light text-gray-900 ${lang === 'ar' ? 'pl-4 sm:pl-6 lg:pl-8' : 'pr-4 sm:pr-6 lg:pr-8'} leading-relaxed`}>
            {question}
          </span>
          <div ref={chevronRef} className="flex-shrink-0">
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
          </div>
        </button>
        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className={`px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 text-gray-700 leading-relaxed ${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-lg'} font-light`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState(0); // First item open by default
  const containerRef = useRef(null);
  const { lang } = useParams();
  const { t } = useT('common');

  useEffect(() => {
      // Animate container on mount
      const container = containerRef.current;
      if(container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(50px)';
        requestAnimationFrame(() => {
          container.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          container.style.opacity = '1';
          container.style.transform = 'translateY(0)';
        })
      }
    }, []);
  
    const toggleItem = (index) => {
      // If the clicked item is already open, close it; otherwise, open it
      setOpenItems(openItems === index ? null : index);
    };

  const faqData = [
    {
      question: t('services.custom_flooring_faq.items.0.question'),
      content: (
        <div>
          <p className={`mb-4 sm:mb-6 ${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-lg'} font-light text-gray-600 leading-relaxed`}>
            {t('services.custom_flooring_faq.items.0.intro')}
          </p>
          <ul className="space-y-3 sm:space-y-4 ml-0">
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index} className="flex items-start">
                <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full mt-2 sm:mt-3 ${lang === 'ar' ? 'ml-3 sm:ml-4' : 'mr-3 sm:mr-4'} flex-shrink-0`}></span>
                <span className={`${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-lg'} font-light text-gray-600 leading-relaxed`}>
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
        <p className={`${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.1.content')}
        </p>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.2.question'),
      content: (
        <p className={`${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.2.content')}
        </p>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.3.question'),
      content: (
        <div>
          <p className={`mb-4 sm:mb-6 ${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-lg'} font-light text-gray-600 leading-relaxed`}>
            {t('services.custom_flooring_faq.items.3.intro')}
          </p>
          <ul className="space-y-3 sm:space-y-4 ml-0">
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index} className="flex items-start">
                <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full mt-2 sm:mt-3 ${lang === 'ar' ? 'ml-3 sm:ml-4' : 'mr-3 sm:mr-4'} flex-shrink-0`}></span>
                <span className={`${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-lg'} font-light text-gray-600 leading-relaxed`}>
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
        <p className={`${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.4.content')}
        </p>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.5.question'),
      content: (
        <p className={`${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.5.content')}
        </p>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.6.question'),
      content: (
          <p className={`mb-4 sm:mb-6 ${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.6.content')}
        </p>
      )
    },
    {
      question: t('services.custom_flooring_faq.items.7.question'),
      content: (
          <p className={`mb-4 sm:mb-6 ${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-lg'} font-light text-gray-600 leading-relaxed`}>
          {t('services.custom_flooring_faq.items.7.content')}
        </p>
      )
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-24 bg-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={containerRef}
          className="bg-white"
        >
          <div className="mb-8 sm:mb-10 lg:mb-12 2xl:mb-20 text-center">
            <h1 className={`${lang === 'ar' ? 'text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl' : 'text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl'} font-semibold text-gray-900 mb-4 sm:mb-6 lg:mb-4 2xl:mb-6 tracking-wide`}>
              {t('services.custom_flooring_faq.title')}
            </h1>
            <p className={`${lang === 'ar' ? 'text-sm sm:text-base lg:text-xl 2xl:text-xl' : 'text-sm sm:text-base lg:text-xl 2xl:text-2xl'} font-300 text-gray-900 max-w-3xl mx-auto leading-relaxed`}>
              {t('services.custom_flooring_faq.subtitle')}
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                isOpen={openItems === index}
                onToggle={() => toggleItem(index)}
                index={index}
                lang={lang}
              >
                {item.content}
              </FAQItem>
            ))}
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <p className={`${lang === 'ar' ? 'text-base sm:text-lg lg:text-2xl' : 'text-sm sm:text-base lg:text-xl'} font-light text-gray-600`}>
            {lang === 'ar' ? 'هل لديك أسئلة أخرى؟' : 'Still have questions?'}{' '}
            <a href={`/${lang}/Contact`} className="text-gray-900 hover:text-gray-600 font-light underline underline-offset-8 decoration-1 transition-all duration-300">
              {lang === 'ar' ? 'تواصل مع فريقنا' : 'Contact our team'}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;