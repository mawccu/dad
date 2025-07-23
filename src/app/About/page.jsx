import React from 'react';
import Image from 'next/image';
import { Building2, Award, Settings, Users, Hammer, TestTube } from 'lucide-react';

export default function About() {
  const strengths = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Local Presence",
      description: "Based in Amman, we're firmly rooted in Jordan. We understand the local landscape, materials, and project requirements, giving us a distinct advantage in delivering tailored solutions."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Deep Field Expertise", 
      description: "With decades of hands-on experience, Rami has led key finishing projects across the country, including the Abdoun Bridge and the Mövenpick Dead Sea Hotel. Our expertise spans from specialized coatings to complex surface treatments."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Scope of Work",
      description: "From private villas to infrastructure-scale projects, our finishing systems scale with precision, regardless of size or complexity. We adapt our approach to meet each project's unique demands."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Effective Collaboration",
      description: "We work closely with engineers, suppliers, and site crews to ensure seamless project execution. Our collaborative approach guarantees quality results and professional standards."
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Materials That Make Sense",
      description: "We prioritize performance over trends. Our material selections are grounded in proven effectiveness and long-term durability, ensuring lasting results for every project."
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Site-Tested Systems",
      description: "Every technique and system we employ has been proven on real job sites. Our methods are field-tested and refined through practical application, not just theoretical concepts."
    }
  ];

  return (
    <div>
      <div className="flex items-center flex-col justify-center pt-[40px] py-24 min-h-screen">
        <h1 className="text-4.5xl font-semibold mb-8">Master Finishers with a Legacy of Excellence in Jordan</h1>
        <p className="text-2xl font-350 max-w-5xl text-center leading-[1.5]">New Look is led by Rami Hamad, who oversaw finishing works on the Abdoun Bridge, one of Jordan's landmark infrastructure projects. Our team specializes in coatings, waterproofing, and final-phase treatments that stand the test of time. From private residences to public structures, we're the invisible force behind surfaces that last</p>
      </div>

      <div className="p-16">
        <Image 
          src="/medias/placeholder.png" 
          alt="Rami Hamad" 
          width={960}
          height={540}
          className="object-cover w-full h-[90vh]"
        />
      </div>

      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="font-semibold text-4.5xl py-4">Our Philosophy</h1>
        <p className="text-2xl font-350 max-w-5xl text-center leading-[1.5] py-4">At New Look, our focus is simple: deliver work that lasts and do it right the first time. Every project we take on is tailored to the clients's needs and the demands of the site. We pay special attention not only to the aesthetics but also to creating an immersive and captivating experience.</p>
        <p className="text-2xl font-350 max-w-5xl text-center leading-[1.5] py-4">We believe good work starts with a clear purpose. Every project has its own context: site conditions, client needs, budget realities and timeline pressure. We consider all of that before we even lift a brush.</p>
        <p className="text-2xl font-350 max-w-5xl text-center leading-[1.5] py-4">We embrace new challenges as opportunities for growth and innovation.</p>
      </div>

      {/* Our Strengths Section */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4.5xl font-semibold text-center mb-16">Our Strengths</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {strengths.map((strength, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="mb-4 text-gray-700">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {strength.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-cyan-100 bg-opacity-50 py-16 px-8 flex flex-col justify-center items-center">
        <h1 className="font-semibold text-4.5xl py-4">Where we've made our mark</h1>
        <p className="text-2xl font-350 max-w-5xl text-center leading-[1.5] py-4">Based in Amman, Jordan, we've brought precision finishing to sites accross <span className="font-400">Amman, Aqaba, The Dead Sea, and beyond.</span></p>
        <div className="">
          <Image 
            src="/medias/maps.jpg"
            alt="Map of Projects"
            width={960}
            height={540}
            className="object-cover max-w-[80%] shadow-lg h-[90vh] mt-8"
          />
        </div>
      </div>
    </div>
  )
}