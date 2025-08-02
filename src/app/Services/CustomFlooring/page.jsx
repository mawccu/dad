'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CustomFlooring() {
  const router = useRouter();

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

      <div></div>
    </>
  );
}
