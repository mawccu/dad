'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import FAQ from './faq'; // Import the FAQ component
import InteriorDesignProjects from './Interior.jsx'; // Import the Interior Design Projects component

export default function SurfaceFinishing() {
  const router = useRouter();
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const imageRef5 = useRef(null);

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    
    <>
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        <Image
          src="/medias/img9.jpg"
          alt="Epoxy Solutions"
          fill
          className="object-cover"
          priority
        />

        {/* Center Text Overlay, change photo*/}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h3 className="mb-6 text-5xl font-semibold tracking-wide">
              Surface Finishing Solutions
            </h3>
            <p className="text-2xl font-light">
              Protective & decorative coatings built for lasting performance and aesthetics
            </p>
          </div>
        </div>

        {/* Bottom CTA, make the Consultation move the user to the ContactForm area, and have it already input a 'reason: consultation or whatevs'
        , just like the Contact Page */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-white">
          <p
            className="cursor-pointer text-xl font-light underline underline-offset-4 transition-colors duration-200 hover:text-gray-400"
            onClick={() => router.push('/Contact?reason=consultation')}
          >
            Get a free consultation
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-32 text-center min-h-screen">
        <h1 className="text-4xl font-semibold mb-32">
          High-performance surface treatments for walls, facades, and exposed elements
        </h1>

        <p className="text-2xl font-light leading-relaxed mb-8">
            At New Look, our surface finishing solutions are engineered to protect, preserve, and elevate.
            From UV-resistant coatings on exterior walls to decorative renderings for interior accents, we adapt each system to fit the climate, exposure,
            and aesthetic goals of the space. These finishes are more than surface-deep, extending the life of the material while defining its character
            and style.
        </p>

        <p className="text-2xl font-light leading-relaxed mb-8">
          Every application begins with an on-site assessment and material mapping. We coordinate directly with project leads to ensure
          finish compatibility and execution precision. The result: surfaces that meet structural expectations while elevating the space's
          visual tone without compromise. Our team maintains a consistent dialogue with architects and contractors throughout, aligning aesthetic goals with technical requirements.
        </p>
    </div>


        <div className="flex justify-center items-center py-32">
            {/* First Image Container, change photo */}
            <div 
                className="w-[960px] h-[872px] relative overflow-hidden group cursor-pointer"
                onMouseEnter={() => setIsHovered('first')}
                onMouseLeave={() => setIsHovered(null)}
            >
                {/* Background Image */}
                <div className="absolute inset-0 bg-gray-800">
                    <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                            backgroundImage: "url('/medias/001.jpg')",
                        }}
                    />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                    <div className="text-center px-8 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                        <h3 className="text-5xl font-light tracking-wide mb-12 opacity-90">
                            Exceptional Expertise
                        </h3>
                        <div className="space-y-4">
                            {[
                                'Interior Walls',
                                'Exterior Facades',
                                'Wet zones & spas',
                                'Rooftops & parapets',
                                'Architectural Features'
                            ].map((item, index) => (
                                <div 
                                    key={item}
                                    className="flex items-center justify-center text-2xl font-light opacity-90 transform transition-all duration-300"
                                    style={{
                                        transitionDelay: `${index * 100}ms`
                                    }}
                                >
                                    <div className="w-2 h-2 bg-white rounded-full mr-4 group-hover:bg-yellow-400 transition-colors duration-300" />
                                    <span className="group-hover:text-yellow-100 transition-colors duration-300">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white group-hover:border-opacity-20 transition-all duration-300 pointer-events-none" />
            </div>

            {/* Second Image Container */}
            <div 
                className="w-[960px] h-[872px] relative overflow-hidden group cursor-pointer"
                onMouseEnter={() => setIsHovered('second')}
                onMouseLeave={() => setIsHovered(null)}
            >
                {/* Background Image */}
                <div className="absolute inset-0 bg-gray-200">
                    <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                            backgroundImage: "url('/medias/floor2.jpg')",
                        }}
                    />
                </div>

                {/* Light Overlay for contrast */}
                <div className="absolute inset-0 bg-white bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center px-8 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                        <h3 className="text-5xl font-light tracking-wide mb-12 text-gray-800 opacity-90">
                            Premium Solutions
                        </h3>
                        <div className="space-y-6">
                            {[
                                { title: 'Protective Coatings', desc: 'Weather-resistant exterior systems' },
                                { title: 'Decorative Finishes', desc: 'Aesthetic surface treatments' },
                                { title: 'Anti-Corrosion Systems', desc: 'Long-lasting protection systems' },
                                { title: 'Waterproofing & Fireproofing', desc: 'Critical safety and durability systems' }
                            ].map((item, index) => (
                                <div 
                                    key={item.title}
                                    className="transform transition-all duration-300 group-hover:translate-x-2"
                                    style={{
                                        transitionDelay: `${index * 150}ms`
                                    }}
                                >
                                    <h4 className="text-2xl font-medium text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                                        {item.title}
                                    </h4>
                                    <p className="text-lg font-light text-gray-600 opacity-80 group-hover:opacity-100 transition-all duration-300">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-16 h-16 border-2 border-gray-400 opacity-30 group-hover:opacity-60 group-hover:rotate-45 transition-all duration-500" />
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-gray-400 opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500" />
            </div>
        </div>
 

  <div className="min-h-screen">
  <FAQ />
</div>

<div className="py-32">
  <div className="max-w-6xl mx-auto px-4 py-8 text-center">
    <div>
      <h2 className="text-4xl text-gray-1000 font-semibold mb-12">Selected Surface Finishing Projects</h2>
      <p className="text-2xl text-gray-900">Explore more of our carefully curated projects and experience our distinctive and bespoke approach</p>
    </div>
  </div>

  {/* Remove the max-width container for images and use full width */}
  <div className="flex gap-6 mb-16 px-12">
    <div className="relative flex-1 h-[260px] overflow-hidden cursor-pointer" 
      onMouseEnter={() => {
        setIsHovered(true)
        gsap.to(imageRef3.current, {
          scale: 1.1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        gsap.to(imageRef3.current, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onClick={() => router.push('/Projects/AbdounBridge')}
    >
      <Image
        src="/medias/placeholder.png"
        fill={true}
        alt="Project Preview"
        ref={imageRef3}
        className="object-cover"
      />
      <div className="absolute inset-0 flex p-4 items-center justify-between flex-col text-white">
        <p className="text-2xl font-bold text-shadow-md">Abdoun Bridge Project</p>
        <p className="text-xl font-semibold text-shadow-md">Legacy-Project: Thorough Surface Coatings</p>
      </div>
    </div>

    <div className="relative flex-1 h-[260px] overflow-hidden cursor-pointer" 
      onMouseEnter={() => {
        setIsHovered(true);
        gsap.to(imageRef4.current, {
          scale: 1.1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        gsap.to(imageRef4.current, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onClick={() => router.push('/Projects/Placeholder')}
    >
      <Image
        src="/medias/placeholder.png"
        fill={true}
        alt="Project Preview"
        ref={imageRef4}
        className="object-cover"
      />
      <div className="absolute p-4 inset-0 flex items-center justify-between flex-col text-white">
        <p className="text-2xl font-bold text-shadow-md">Placeholder</p>
        <p className="text-xl text-shadow-md font-semibold">Placeholder</p>
      </div>
    </div>
    
    <div className="relative flex-1 h-[260px] overflow-hidden cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        gsap.to(imageRef5.current, {
          scale: 1.1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        gsap.to(imageRef5.current, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onClick={() => router.push('/Projects/Villa-01')}
    >
      <Image
        src="/medias/placeholder.png"
        fill={true}
        alt="Project Preview"
        ref={imageRef5}
        className="object-cover"
      />
      <div className="absolute p-4 inset-0 flex items-center justify-between flex-col text-white">
        <p className="text-2xl font-bold text-shadow-md">Luxury Villa 01</p>
        <p className="text-xl text-shadow-md font-semibold">Interior Surface Coating</p>
      </div>
    </div>
  </div>
</div>



<InteriorDesignProjects />

    </>
  );
}
