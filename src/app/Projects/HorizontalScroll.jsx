import React, { useEffect, useRef } from 'react';

const SimpleHorizontalScroll = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    
    if (!container || !scroller) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when container is in view
      if (containerTop <= 0 && containerTop > -containerHeight + windowHeight) {
        const scrollProgress = Math.abs(containerTop) / (containerHeight - windowHeight);
        const maxScroll = scroller.scrollWidth - scroller.clientWidth;
        const scrollLeft = scrollProgress * maxScroll;
        
        scroller.scrollLeft = scrollLeft;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    { id: 1, title: 'Project One', color: '#FF6B6B', description: 'Modern architecture with clean lines' },
    { id: 2, title: 'Project Two', color: '#4ECDC4', description: 'Contemporary design meets functionality' },
    { id: 3, title: 'Project Three', color: '#45B7D1', description: 'Minimalist approach to living spaces' },
    { id: 4, title: 'Project Four', color: '#96CEB4', description: 'Natural materials and sustainable design' },
    { id: 5, title: 'Project Five', color: '#FFEAA7', description: 'Bold colors in urban environments' },
    { id: 6, title: 'Project Six', color: '#DDA0DD', description: 'Innovative solutions for modern living' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Content Above */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover our collection of innovative projects that showcase modern design 
            principles and cutting-edge architecture. Each project tells a unique story 
            of creativity and craftsmanship.
          </p>
        </div>
      </section>

      {/* Horizontal Scroll Container */}
      <section 
        ref={containerRef}
        className="h-[300vh] relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div 
            ref={scrollerRef}
            className="flex h-full overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-screen h-full flex items-center justify-center p-8"
                style={{ backgroundColor: slide.color }}
              >
                <div className="text-center text-white max-w-md">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg opacity-90">{slide.description}</p>
                  <div className="mt-8 w-32 h-32 bg-white bg-opacity-20 rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold">{slide.id}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Below */}
      <section className="py-20 px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Ready to Start Your Project?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe in collaborative design that brings your vision to life. 
                Our team works closely with clients to understand their needs and 
                create spaces that reflect their personality and lifestyle.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ready to discuss your next project? We'd love to hear from you 
                and explore how we can bring your ideas to reality.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SimpleHorizontalScroll;