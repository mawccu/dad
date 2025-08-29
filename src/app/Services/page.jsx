//Services/page.jsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row">
      {/* Custom Flooring Section */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen group">
        <Image
          src="/medias/placeholder.png"
          alt="Custom Flooring Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
          <Link 
            href="/Services/CustomFlooring"
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Navigate to Custom Flooring services"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center px-4 group-hover:scale-105 transition-transform duration-300">
              Custom Flooring
            </h2>
          </Link>
        </div>
      </div>

      {/* Surface Finishing Section */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen group">
        <Image
          src="/medias/placeholder.png"
          alt="Surface Finishing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
          <Link 
            href="/Services/SurfaceFinishing"
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Navigate to Surface Finishing services"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center px-4 group-hover:scale-105 transition-transform duration-300">
              Surface Finishing
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}