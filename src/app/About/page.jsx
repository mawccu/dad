//About/page.jsx
'use client'
import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';



const StrengthCard = ({ strength, index, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="bg-white p-6 border-l-4 border-gray-800 hover:border-blue-600 transition-colors duration-300"
    >
      <h3 className="text-lg font-medium mb-3 text-gray-900">
        {strength.title}
      </h3>
      <p className="text-gray-700 leading-relaxed text-sm">
        {strength.description}
      </p>
    </motion.div>
  );
};

export default function About() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-30px" });

  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  const [isHovered, setIsHovered] = React.useState(false)
  

  const strengths = [
    {
      title: "Local Presence",
      description: "Based in Amman, we're firmly rooted in Jordan. We understand the local landscape, materials, and project requirements, giving us a distinct advantage in delivering tailored solutions."
    },
    {
      title: "Deep Field Expertise", 
      description: "With decades of hands-on experience, Rami has led key finishing projects across the country, including the Abdoun Bridge and the Mövenpick Dead Sea Hotel."
    },
    {
      title: "Scope of Work",
      description: "From private villas to infrastructure-scale projects, our finishing systems scale with precision, regardless of size or complexity."
    },
    {
      title: "Effective Collaboration",
      description: "We work closely with engineers, suppliers, and site crews to ensure seamless project execution. Our collaborative approach guarantees quality results."
    },
    {
      title: "Materials That Make Sense",
      description: "We prioritize performance over trends. Our material selections are grounded in proven effectiveness and long-term durability, ensuring lasting results."
    },
    {
      title: "Site-Tested Systems",
      description: "Every technique and system we employ has been proven on real job sites. Our methods are field-tested and refined through practical application."
    }
  ];

  return (
    <div className="bg-white">
      <div className="min-h-screen py-20">
        {/* Hero Section */}
        <section className="max-w-5xl flex justify-center flex-col text-center items-center px-6 py-12 mx-auto">
          <h1 className="text-4xl font-medium mb-6 text-gray-900 leading-tight max-w-4xl">
            Master Finishers with a Legacy of Excellence in Jordan
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
            New Look is led by <span className="font-600">Rami Hamad</span>, who oversaw finishing works on the Abdoun Bridge, one of Jordan's landmark infrastructure projects. Our team specializes in coatings, waterproofing, and final-phase treatments that stand the test of time. From private residences to public structures, we're the invisible force behind surfaces that last.
          </p>
        </section>

        {/* Image Section */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <Image src='/medias/placeholder.png' alt='Rami Hamad' width={1920} height={1080} className="shadow-lg" ref={imageRef} />
        </section>
      </div>

      {/* Philosophy Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-medium mb-8 text-gray-900">Our Philosophy</h2>
          <div className="space-y-5 text-gray-700 text-xl leading-relaxed">
            <p>At New Look, our focus is simple: deliver work that lasts and do it right the first time. Every project we take on is tailored to the client's needs and the demands of the site. We pay special attention not only to the aesthetics but also to creating an immersive and captivating experience.</p>
            <p>We believe good work starts with a clear purpose. Every project has its own context: site conditions, client needs, budget realities and timeline pressure. We consider all of that before we even lift a brush.</p>
            <p>We embrace new challenges as opportunities for growth and innovation.</p>
          </div>
        </div>
      </section>

      {/* Our Strengths Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 
            ref={titleRef}
            className="text-4xl font-medium mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Strengths
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <StrengthCard
                key={index}
                strength={strength}
                index={index}
                className="bg-white p-6 border-l-4 border-gray-800 hover:border-blue-600 transition-colors duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-medium mb-6 text-gray-900">Where we've made our mark</h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-xl text-center">
            Based in Amman, Jordan, we've brought precision finishing to sites across Amman, Aqaba, The Dead Sea, and beyond.
          </p>
          
          <Image 
          src="/medias/maps.jpg"
          alt="Map of project locations"
          layout="responsive"
          width={700}
          height={475}
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        </div>
      </section>


      {/* Project Previews Section, add pictures from the current villa dad is working on and have them blurred. */}
      <section className="mx-auto max-w-7xl py-16 px-8">
       
          <h2 className="text-4xl text-center">Project Previews</h2>
          <p className="text-xl text-center font-350">Before every finish goes live, it lives in our specs and mockups. Here's a sneak peak at upcoming villa refurbishments and protective coating systems, straight from our field journals.</p>
      </section>

      <div className="flex gap-6 py-16 mb-16 px-8 max-w-5xl ">
          <div className="relative rounded-lg overflow-hidden cursor-pointer" 
            onMouseEnter={() => {
              setIsHovered(true)
              gsap.to(imageRef2.current, {
                        scale: 1.1,
                        duration: 0.6,
                        ease: 'power2.out',
                      })
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              gsap.to(imageRef2.current, {
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
              })
            }}
          >
            <Image
              src="/medias/placeholder.png"
              width={540}
              height={360}
              alt="Project Preview"
              ref={imageRef2}
              className="object-cover"
                />

              {/* Text Overlay 1*/}
              <div className="absolute inset-0 flex items-center justify-between flex-col text-white">
                  <p className="m-4 text-2xl">New Look</p>
                  <p className="m-4 text-xl">Coming Soon</p>
              </div>
      </div>

          <div className="relative rounded-lg overflow-hidden cursor-pointer" 
           onMouseEnter={() => {
                  setIsHovered(true);
                  gsap.to(imageRef3.current, {
                    scale: 1.1,
                    duration: 0.6,
                    ease: 'power2.out',
                  })
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  gsap.to(imageRef3.current, {
                    scale: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                  })
                }}
          >
            <Image
              src="/medias/placeholder.png"
              width={540}
              height={360}
              alt="Project Preview"
              ref={imageRef3}
              className="object-cover"
                />

              {/* Text Overlay 2*/}
              <div className="absolute inset-0 flex items-center justify-between flex-col text-white">
                  <p className="m-4 text-2xl">New Look</p>
                  <p className="m-4 text-xl">Coming Soon</p>
              </div>
        </div>
      </div>
    </div>
  );
}
