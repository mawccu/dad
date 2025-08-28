'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import HeroSlider from './HeroSlider';
import { useRouter } from 'next/navigation';
import ContactForm from '../components/ContactForm';

const projects = [
  { 
    src: '/medias/img1.jpg', 
    link: '/Projects/Villa01', 
    category: ['flooring', 'surface finishing'],
    name: 'Villa 01'
  },
  { 
    src: '/medias/img2.jpg', 
    link: '/Projects/Movenpick', 
    category: ['flooring'],
    name: 'Movenpick Hotel'
  },
  {
    src: '/medias/img3.jpg',
    link: '/Projects/Safeway',
    category: ['flooring'],
    name: 'Safeway Center'
  },
  { 
    src: '/medias/img4.jpg', 
    link: '/Projects/AbdounBridge', 
    category: ['surface finishing', 'legacy'],
    name: 'Abdoun Bridge'
  },
  { 
    src: '/medias/img5.jpg',
    link: '/Projects/Placeholder',
    category: ['surface finishing'],
    name: 'Modern Residence'
  },
  {
    src: '/medias/img5.jpg',
    link: '/Projects/NCC',
    category: ['surface finishing'],
    name: 'NCC'
  },
  {
    src: '/medias/img5.jpg',
    link: '/Projects/Expeditors',
    category: ['flooring'],
    name: 'Expeditors'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const router = useRouter();

  // Filter the projects based on selected category
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p =>
        p.category.map(c => c.toLowerCase()).includes(filter.toLowerCase())
      );

  return (
    <>

      {/* Category Filter Buttons */}
      <div className="min-h-[100vh]">
        <p className="pt-24 text-4xl text-center">Our Projects</p>
        <div className="flex gap-8 text-xl font-400 px-12 mt-16">

          {['All', 'Flooring', 'Surface Finishing', 'Legacy'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`transition-colors duration-300 ${
                filter === category
                  ? 'text-black underline underline-offset-4 '
                  : 'text-black hover:text-gray-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <hr className="border-t border-gray-500 mx-12 my-4" />


        {/* Projects Grid */}
        <div className="max-w-8xl mx-auto px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="relative group h-[300px] overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => router.push(project.link)}
              >
                <Image
                  src={project.src}
                  alt={project.name}
                  fill={true}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-300" />

                {/* Project Name */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center px-4 drop-shadow-lg">
                    {project.name}
                  </h3>
                </div>

                {/* Category Display on Hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium capitalize">
                    {project.category.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen py-40">
        <ContactForm />
      </div>
    </>
  );
}
