'use client';
import React, { useEffect, useState } from 'react'; 
import Image from 'next/image';

export default function Safeway() {
    return(
        <>
            <div className='py-32'>
                <h1 className="px-16 py-12 text-4xl font-400">Safeway Project</h1>
                <div className="min-h-screen py-12 w-full">
                    <Image
                        src="/medias/img3.jpg"
                        alt="Safeway Project"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </>
    )
}
