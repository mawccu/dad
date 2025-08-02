'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return(
        <div className="flex justify-between my-50 mx-8 py-4 border-t border-gray-300">
            <div className="flex gap-2">
                <Link href="#"><img src="/icons/instagram.png" alt="Instagram" className="w-8 h-8" /></Link>
                <Link href="#"><img src="/icons/facebook.png" alt="Facebook" className="w-8 h-8" /></Link>
                <Link href="#"><img src="/icons/twitter.png" alt="Twitter" className="w-8 h-8" /></Link>
                <Link href="#"><img src="/icons/linkedin.png" alt="LinkedIn" className="w-8 h-8" /></Link>
            </div>

            <div className="text-0.75xl">
                <div className="flex gap-3 font-300">
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of use</Link>
                    <Link href="#">Cookie Policy</Link>
                </div>
                <div>
                    <p>COPYRIGHT 2025. ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </div>
    )
}