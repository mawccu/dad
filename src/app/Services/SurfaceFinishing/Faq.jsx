'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const FAQItem = ({ question, children, isOpen, onToggle, index }) => {
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
          className="w-full py-8 px-8 flex items-center justify-between text-left transition-all duration-300 ease-out"
          onClick={onToggle}
        >
          <span className="text-xl font-light text-gray-900 pr-8 leading-relaxed">
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
          <div className="px-8 pb-8 text-gray-700 leading-relaxed text-lg font-light">
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
      question: "What types of surfaces can you finish and protect?",
      content: (
        <div>
          <p className="mb-6 text-lg font-light text-gray-600 leading-relaxed">We provide surface finishing for a wide range of substrates and applications:</p>
          <ul className="space-y-4 ml-0">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Concrete and masonry surfaces</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Steel and metal structures</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Exterior building facades</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Infrastructure elements (bridges, tunnels)</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Interior walls and ceilings</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "What's the difference between surface finishing and regular painting?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Surface finishing goes far beyond aesthetics. We apply technical treatments that provide waterproofing, chemical resistance, thermal protection, and structural integrity. Our finishes are engineered solutions that enhance both performance and longevity, not just appearance.</p>
      )
    },
    {
      question: "Do you provide waterproofing services?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Yes, waterproofing is a core component of our surface finishing expertise. We apply specialized membrane systems, penetrating sealers, and barrier coatings to protect against moisture infiltration and structural damage. This is critical for Jordan's climate conditions.</p>
      )
    },
    {
      question: "What protective coatings do you offer?",
      content: (
        <div>
          <p className="mb-6 text-lg font-light text-gray-600 leading-relaxed">We offer comprehensive protective coating systems:</p>
          <ul className="space-y-4 ml-0">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Anti-corrosion coatings for metal structures</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Chemical-resistant finishes</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Fire-retardant systems</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>

<span className="text-lg font-light text-gray-600 leading-relaxed">UV protection treatments</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Weather barrier systems</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "Do you work on infrastructure projects like bridges and public buildings?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Yes, our experience includes major infrastructure projects like the Abdoun Bridge Project. We understand the unique requirements of public infrastructure including safety standards, environmental resistance, and long-term durability. Our team is equipped for large-scale, complex applications.</p>
      )
    },
    {
      question: "Can you restore and refinish existing surfaces?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Absolutely. We specialize in surface restoration, from removing old coatings and treating substrate damage to applying new protective systems. This approach is often more cost-effective than complete replacement while extending surface life significantly.</p>
      )
    },
    {
      question: "How do you ensure proper surface preparation?",
      content: (
        <div>
          <p className="mb-6 text-lg font-light text-gray-600 leading-relaxed">Surface preparation is critical to our success. Our comprehensive process includes:</p>
          <ul className="space-y-4 ml-0">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Thorough cleaning and contamination removal</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Surface profiling to manufacturer specifications</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Substrate testing and compatibility analysis</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Proper priming according to industry standards</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "What environmental conditions affect your work?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Temperature, humidity, and weather significantly impact surface finishing. We carefully monitor conditions and may delay work to ensure optimal curing and adhesion. Quality is never compromised for speed - proper environmental conditions are essential for long-term performance.</p>
      )
    },
    {
      question: "How long do your surface finishes typically last?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Lifespan varies by system and environment, but our finishes typically provide 10-25 years of protection. Factors include exposure conditions, environmental stress, and maintenance. We provide realistic expectations based on your specific situation and usage requirements.</p>
      )
    },
    {
      question: "Do you provide maintenance contracts for large projects?",
      content: (

<p className="text-lg font-light text-gray-600 leading-relaxed">Yes, for commercial and infrastructure projects, we offer ongoing maintenance programs. This includes regular inspections, preventive touch-ups, and planned refinishing schedules to maintain optimal protection and extend system life.</p>
      )
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <div 
          ref={containerRef}
          className="bg-white"
        >
          <div className="mb-20 text-center">
            <h1 className="text-5xl font-semibold text-gray-900 mb-8 tracking-wide">
              Frequently Asked Quesdsstions
            </h1>
            <p className="text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Common questions about our surface finishing and protective coating services.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                isOpen={openItems === index}
                onToggle={() => toggleItem(index)}
                index={index}
              >
                {item.content}
              </FAQItem>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-xl font-light text-gray-600">
            Still have questions?{' '}
            <a href="/Contact" className="text-gray-900 hover:text-gray-600 font-light underline underline-offset-8 decoration-1 transition-all duration-300">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;