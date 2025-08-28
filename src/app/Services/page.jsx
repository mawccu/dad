'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="relative w-full h-[100vh] flex">
      {/* Left side image */}
      <div className="relative w-1/2 h-full">
        <Link href="/Services/CustomFlooring">
          <Image
            src="/medias/placeholder.png"
            alt="Custom Flooring"
            fill
            className="object-cover cursor-pointer"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black/30">
          Custom Flooring
        </div>
        </Link>
        
      </div>

      {/* Right side image */}
      <div className="relative w-1/2 h-full">
        <Link href="/Services/SurfaceFinishing">
          <Image
            src="/medias/placeholder.png"
            alt="Surface Finishing"
            fill
            className="object-cover cursor-pointer"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black/30">
          Surface Finishing
        </div>
        </Link>
        
      </div>
    </div>
  );
}
