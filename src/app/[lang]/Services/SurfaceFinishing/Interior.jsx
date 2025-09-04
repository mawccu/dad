//Services/SurfaceFinishing/Interior.jsx
'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const InteriorDesignProjects = () => {
  const projectRefs = useRef([]);
  
  useEffect(() => {
    // Set up GSAP animations for each project card
    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        const image = ref.querySelector('.project-image');
        
        // Mouse enter animation
        const handleMouseEnter = () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.6,
            ease: "power2.out"
          });
        };
        
        // Mouse leave animation
        const handleMouseLeave = () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
          });
        };
        
        ref.addEventListener('mouseenter', handleMouseEnter);
        ref.addEventListener('mouseleave', handleMouseLeave);
        
        // Cleanup
        return () => {
          ref.removeEventListener('mouseenter', handleMouseEnter);
          ref.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);
  
  const projects = [
    {
      id: "st21",
      title: "Fusion Factor",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
    },
    {
      id: "st64", 
      title: "Nature Haven",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
    },
    {
      id: "st76",
      title: "Haute Residences", 
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
    }
  ];
  
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Selected interior design projects
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore more of our carefully curated projects and experience our distinctive and bespoke approach.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="relative group cursor-pointer"
            >
              {/* Image Container - overflow hidden to contain the scaled image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  {/* Project ID */}
                  <div className="flex justify-end">
                    <span className="text-sm font-medium tracking-wider opacity-80">
                      {project.id}
                    </span>
                  </div>
                  
                  {/* Project Title */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorDesignProjects;