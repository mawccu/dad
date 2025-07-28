import React, { useState, useEffect } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle smooth opening animation
  const handleOpen = () => {
    setIsOpen(true);
    // Trigger animation after mounting
    setTimeout(() => setIsVisible(true), 10);
  };

  // Handle smooth closing animation
  const handleClose = () => {
    setIsVisible(false);
    // Remove from DOM after animation completes
    setTimeout(() => setIsOpen(false), 300);
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="p-8 font-sans bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Modern Interface
        </h1>
        <p className="mb-8 text-gray-600 text-lg leading-relaxed">
          Experience seamless interactions with our beautifully crafted modal system. 
          Click below to see the smooth animation in action.
        </p>
        
        <button
          onClick={handleOpen}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50 transition-all duration-300 ease-out"
        >
          <span className="relative z-10">Discover More</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Overlay with smooth animations */}
      {isOpen && (
        <div
          onClick={handleClose}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
            isVisible 
              ? 'bg-black/40 backdrop-blur-sm' 
              : 'bg-black/0 backdrop-blur-none'
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl transition-all duration-300 ease-out transform ${
              isVisible 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-8'
            }`}
          >
            {/* Modern close button */}
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content with padding and styling */}
            <div className="p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Enhanced Experience
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                This modal features smooth opacity transitions, scale animations, and modern glassmorphism effects. 
                The backdrop blur creates depth while maintaining focus on the content.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-medium rounded-xl hover:from-gray-200 hover:to-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all duration-200 transform hover:scale-105"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;