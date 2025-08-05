'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';


// 
export default function CustomFlooring() {
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

        {/* Center Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h3 className="mb-6 text-5xl font-semibold tracking-wide">
              Custom Flooring
            </h3>
            <p className="text-2xl font-light">
              Advanced Flooring systems for lasting durability
            </p>
          </div>
        </div>

        {/* Bottom CTA, make the Consultation move the user to the ContactForm area, and have it already input a 'reason: consultation or whatevs'
        , just like the Contact Page */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-white">
          <p
            className="cursor-pointer text-xl font-light underline underline-offset-4 transition-colors duration-200 hover:text-gray-400"
            onClick={() => router.push('/projects/epoxy')}
          >
            Get a free consultation
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-32 text-center min-h-screen">
        <h1 className="text-3xl font-semibold mb-32">
          Tailored Flooring Finishes services for exclusive residences, private homes, and modern villas
        </h1>

        <p className="text-xl font-light leading-relaxed mb-8">
            New Look delivers tailored flooring systems designed for performance, durability, and aesthetic consistency.
             From seamless epoxy layers to specialized coatings, our solutions are matched to the specific technical demands of each site traffic,
              moisture, thermal expansion, and substrate behavior.

        </p>

        <p className="text-xl font-light leading-relaxed mb-8">
              Every application begins with an on-site assessment and material mapping. We coordinate directly with project leads to ensure
              finish compatibility and execution precision. The result: surfaces that meet structural expectations while elevating the space's
              visual tone without compromise.
        </p>
      </div>


      <div className="flex justify-center items-center">
                {/* First Image Container */}
                <div className="w-[960px] h-[872px] relative overflow-hidden"
                        onMouseEnter={() => {
                            setIsHovered(true);
                            gsap.to(imageRef1.current, {
                                scale: 1.1,
                                duration: 0.3,
                                ease: 'power2.out',
                            })
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false);
                            gsap.to(imageRef1.current, {
                                scale: 1,
                                duration: 0.3,
                                ease: 'power2.out',
                            })
                        }}
                >
                    <Image
                        ref={imageRef1}
                        src="/medias/001.jpg"
                        alt="Protective Coatings"
                        fill={true}
                        
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <h3 className="text-5xl font-light tracking-wide mb-12">Exceptional Expertise</h3>
                            <ul className="text-2xl font-light list-disc list-inside">
                              <li>Modern Villas</li>
                              <li>Big box systems</li>
                              <li>Residential Communities</li>
                              <li>Private Homes</li>
                              <li>Schools</li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/* Second Image Container */}
                <div className="w-[960px] h-[872px] relative overflow-hidden"
                onMouseEnter={() => {
                            setIsHovered(true);
                            gsap.to(imageRef2.current, {
                                scale: 1.1,
                                duration: 0.3,
                                ease: 'power2.out',
                            })
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false);
                            gsap.to(imageRef2.current, {
                                scale: 1,
                                duration: 0.3,
                                ease: 'power2.out',
                            })
                        }}
                >
                    <Image
                        ref={imageRef2}
                        src="/medias/floor2.jpg"
                        alt="Epoxy Solutions"
                        fill={true}
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <p className="text-2xl font-light mb-8 text-gray-800">Anti-slip Systems</p>
                            <p className="text-2xl font-light mb-8 text-gray-800">High-traffic areas</p>
                            <p className="text-2xl font-light mb-8 text-gray-800">Decorative Epoxy</p>
                        </div>
                    </div>

                   
                </div>
            </div>

<div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-32 text-center">
          <div>
              <h2 className="text-4xl text-gray-1000 font-semibold mb-12">Selected Flooring Projects</h2>
              <p className="text-2xl text-gray-900">Explore more of our carefully curated projects and experience our distinctive and bespoke approach</p>
          </div>

 {/**                        project cards like the storm one, movenpick, some random villa and the school thing, its fine if there's none just make up something or leave it, 2 projects minimum, have each one link to the project description, since its only a few projects in the whole website make a seperate page for each. then make the FAQ and then the free consultation area and then footer, consider if u should make a seperate FAQ for each service.
 */}         

         </div>

          <div className="flex gap-6 mb-16 px-8 max-w-5xl ">
          <div className="relative" 
            onMouseEnter={() => {
              setIsHovered(true)
              gsap.to(imageRef2.current, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: 'power2.out',
                      })
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              gsap.to(imageRef2.current, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
              })
            }}
          >
            <Image
              src="/medias/movenpick.jpg"
              width={500}
              height={240}
              alt="Project Preview"
              ref={imageRef2}
              className="object-cover rounded-lg shadow-lg"
                />

              {/* Text Overlay 1*/}
              <div className="absolute inset-0 flex items-center justify-between flex-col text-white">
                  <p className="m-4 text-2xl">Mövenpick Hotels & Resorts</p>
                  <p className="m-4 text-xl">Interior Kitchen Flooring</p>
              </div>
      </div>

          <div className="relative" 
           onMouseEnter={() => {
                  setIsHovered(true);
                  gsap.to(imageRef3.current, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  gsap.to(imageRef3.current, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }}
          >
            <Image
              src="/medias/placeholder.png"
              width={500}
              height={240}
              alt="Project Preview"
              ref={imageRef3}
                />

              {/* Text Overlay 2*/}
              <div className="absolute inset-0 flex items-center justify-between flex-col text-white">
                  <p className="m-4 text-2xl">Safeway</p>
                  <p className="m-4 text-xl">High-traffic Epoxy Flooring</p>
              </div>
        </div>
      </div>
</div>
    </>
  );
}
