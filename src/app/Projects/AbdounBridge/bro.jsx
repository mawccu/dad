'use client'
import React from 'react';
import { Star, Shield, Cog } from 'lucide-react';
import Image from 'next/image';

export default function WhyTilesuite() {
  return (
    <>
        <div className="relative min-h-screen">
            <Image src="/medias/img10.webp" fill className="object-cover" priority />

        </div>
        <div className="flex justify-between items-center py-60 px-20 text-black">
            <div>
                <h1 className="text-4.5xl mb-8">Why Tilesuite?</h1>
                <p className="text-lg max-w-md line-clamp-3">
                    Our experienced team consists of highly 
                    qualified professionals who are characterized by their passion for perfection and their attention to detail

                </p>
            </div>
            <div className="flex items-start flex-col px-60 text-left relative">
                <hr className="border-t border-gray-300 mb-4 w-[45%]" />
                <h1 className="text-5xl">Quality</h1>
            </div>
        </div>

        <div className="relative min-h-screen py-60">
            <Image src="/medias/img10.webp" fill className="object-cover" priority />

        </div>
    </>
  );
}