'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const FAQItem = ({ question, children, isOpen, onToggle, index }) => {
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
  const [openItems, setOpenItems] = useState({ 0: true }); // First item open by default
  const containerRef = useRef(null);

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
      question: "What types of custom flooring systems do you install?",
      content: (
        <div>
          <p className="mb-6 text-lg font-light text-gray-600 leading-relaxed">We specialize in a comprehensive range of custom flooring solutions:</p>
          <ul className="space-y-4 ml-0">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Seamless epoxy flooring systems</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Anti-slip surface treatments</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">High-traffic commercial flooring</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Decorative epoxy finishes</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Protective coatings and waterproofing</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "How long do your flooring systems typically last?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Our flooring systems are designed for lasting durability. With proper maintenance, epoxy flooring can last 10-20 years or more depending on traffic levels and environmental conditions. We engineer our solutions to meet long-term structural expectations while maintaining their aesthetic appeal throughout their lifespan.</p>
      )
    },
    {
      question: "Do you work on both residential and commercial projects?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Yes, we handle projects ranging from private homes and luxury villas to commercial properties, schools, and hotels. Our experience includes high-profile projects like the Mövenpick Dead Sea Hotel and infrastructure work on the Abdoun Bridge. We tailor our approach to meet the specific demands of each project type.</p>
      )
    },
    {
      question: "What is your process for custom flooring installations?",
      content: (
        <div>
          <p className="mb-6 text-lg font-light text-gray-600 leading-relaxed">Our comprehensive process ensures optimal results:</p>
          <ul className="space-y-4 ml-0">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Initial consultation and project assessment</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">On-site evaluation of substrate conditions</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Material mapping and system specification</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Coordination with project teams</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span className="text-lg font-light text-gray-600 leading-relaxed">Precision installation and quality control</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "Do you provide warranties on your flooring work?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Yes, we stand behind our work with comprehensive warranties. Warranty terms vary based on the specific system installed, project conditions, and usage patterns. We'll discuss warranty details during your consultation, ensuring you understand what's covered and for how long.</p>
      )
    },
    {
      question: "How do you ensure quality and durability?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Quality is our foundation. We use only proven, field-tested materials and techniques refined through decades of experience. Every project undergoes thorough site assessment to match materials to specific conditions including traffic patterns, moisture levels, and thermal expansion requirements. Our collaborative approach with engineers and suppliers ensures optimal results.</p>
      )
    },
    {
      question: "Can you work around my business operations or daily schedule?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Absolutely. We understand the importance of minimizing disruption to your operations or daily life. We work closely with clients to schedule installations at convenient times and can often work in phases to reduce impact. Our efficient project management ensures timely completion without compromising quality.</p>
      )
    },
    {
      question: "What maintenance is required for your flooring systems?",
      content: (
        <p className="text-lg font-light text-gray-600 leading-relaxed">Our flooring systems are designed for minimal maintenance. Regular cleaning with appropriate products and periodic inspections are typically sufficient. We provide detailed maintenance guidelines specific to your installation, helping you preserve both the performance and appearance of your floors for years to come.</p>
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
            <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-wide">
              Frequently Asked Questions
            </h1>
            <p className="text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Common questions about our custom flooring services and expertise.
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