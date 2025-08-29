//About/Rami/page.jsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollSection from './ScrollSection'

export default function RamiHamad() {
    return (
        <div className="text-center">
            <div className="min-h-screen flex flex-col items-center justify-center p-20">
                <h1 className="text-5xl font-600">Rami Hamad - Founder & Lead Finishing Engineer</h1>
                <p className="m-4 text-xl text-gray-900 font-400">
                    Decades in the field. A legacy built on precision, integrity, and the final layer that lasts.
                </p>
                <p className="m-4 text-lg font-300 max-w-5xl mx-auto">
                    Rami Hamad began his career in civil works before specializing in high‑end finishing. As Project Manager on the Abdoun Bridge and site lead for Mövenpick Dead Sea Hotel, he honed an obsessive eye for coatings, waterproofing, and surface integrity. Today he leads New Look with the same hands‑on rigor he's applied to Jordan's landmark projects.
                </p>
                <section className="max-w-6xl">
                    <Image 
                        src="/medias/placeholder.png" 
                        alt="Rami Hamad" 
                        className="mx-auto mb-8" 
                        width={1920} 
                        height={540}
                    />
                </section>
            </div>
            <ScrollSection />
        </div>
    );
}