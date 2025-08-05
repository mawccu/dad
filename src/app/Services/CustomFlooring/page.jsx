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
                        src="/medias/img1.jpg"
                        alt="Protective Coatings"
                        fill={true}
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <h3 className="text-5xl font-light tracking-wide mb-6">Protective Coatings</h3>
                            <p className="text-3xl font-light">Redefining protection with advanced coating solutions</p>
                        </div>
                    </div>
                    
                    {/* Bottom text */}
                    <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className="text-3xl font-light underline underline-offset-4 cursor-pointer hover:text-gray-500"
                            onClick={() => router.push("/projects/protective-coatings")}
                            >
                                Protective Coatings Services</p>
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
                        src="/medias/placeholder.png"
                        alt="Epoxy Solutions"
                        fill={true}
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <h3 className="text-5xl font-light tracking-wide mb-6">Flooring Solutions</h3>
                            <p className="text-3xl font-light">Advanced Flooring systems for lasting durability</p>
                        </div>
                    </div>

                    {/*Bottom text Second Image*/}
                    <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className="text-3xl font-light underline underline-offset-4 cursor-pointer hover:text-gray-500"
                            onClick={() => router.push("/projects/epoxy")}
                            >
                                Decorative Epoxy Services
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
}
