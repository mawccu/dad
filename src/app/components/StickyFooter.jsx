//components/StickyFooter.jsx
//components/StickyFooter.jsx
import React from 'react';
import Link from 'next/link';

// Content component for the sticky footer
function FooterContent() {
    return (
        <div className='bg-gray-900 text-white py-12 px-8 h-full w-full flex flex-col justify-between'>
            <FooterNav />
            <FooterBottom />
        </div>
    );
}

// Navigation section
const FooterNav = () => {
    return (
        <div className='flex justify-between items-start'>
            <div className='flex gap-20'>
                <div className='flex flex-col gap-3'>
                    <h3 className='mb-4 uppercase text-gray-400 font-semibold'>Services</h3>
                    <Link href="/Services" className='hover:text-gray-300 transition-colors'>All Services</Link>
                    <Link href="/Services/SurfaceFinishing" className='hover:text-gray-300 transition-colors'>Protective Coatings</Link>
                    <Link href="/Services/CustomFlooring" className='hover:text-gray-300 transition-colors'>Custom Flooring</Link>
                    <Link href="/Services/SurfaceFinishing" className='hover:text-gray-300 transition-colors'>Waterproofing</Link>
                    <Link href="/Services/SurfaceFinishing" className='hover:text-gray-300 transition-colors'>Surface Treatments</Link>
                </div>
                
                <div className='flex flex-col gap-3'>
                    <h3 className='mb-4 uppercase text-gray-400 font-semibold'>Company</h3>
                    <Link href="/About" className='hover:text-gray-300 transition-colors'>About Us</Link>
                    <Link href="/Projects" className='hover:text-gray-300 transition-colors'>Projects</Link>
                    <Link href="/Careers" className='hover:text-gray-300 transition-colors'>Careers</Link>
                    <Link href="/Contact" className='hover:text-gray-300 transition-colors'>Contact</Link>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3 className='mb-4 uppercase text-gray-400 font-semibold'>Contact</h3>
                    <p className='text-gray-300'>Amman, Jordan</p>
                    <a href="tel:+962000000000" className='hover:text-gray-300 transition-colors'>+962 00 0000000</a>
                    <a href="mailto:info@newlook-jo.com" className='hover:text-gray-300 transition-colors'>info@newlook-jo.com</a>
                </div>
            </div>

            {/* Company Logo/Name */}
            <div className='text-right'>
                <Link href="/" className='text-4xl font-semibold'>New Look</Link>
                <p className='text-gray-400 m-2 max-w-xs'>Master Finishers with a Legacy of Excellence in Jordan</p>
                <Link href="/About/Rami" className='text-gray-400 hover:text-gray-100 transition-colors'>Learn more about Rami Hamad (coming soon)</Link>
            </div>
        </div>
    );
};

// Bottom section with social links and copyright
const FooterBottom = () => {
    return (
        <div className='flex justify-between items-end mt-12 pt-8 border-t border-gray-700'>
            <div className='flex items-center gap-6'>
                <h2 className='text-[8vw] md:text-[6rem] font-light leading-none'>New Look</h2>
            </div>
            
            <div className='text-right'>
                {/* Social Links */}
                <div className="flex gap-4 mb-4 justify-end">
                    <Link href="#" className="hover:opacity-70 transition-opacity">
                        <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">
                        <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">
                        <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">
                        <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                    </Link>
                </div>

                {/* Legal Links */}
                <div className="flex gap-4 text-sm text-gray-400 mb-2">
                    <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
                    <Link href="#" className="hover:text-gray-300">Terms of Use</Link>
                    <Link href="#" className="hover:text-gray-300">Cookie Policy</Link>
                </div>
                
                <p className='text-sm text-gray-400'>©2025 New Look. All Rights Reserved</p>
            </div>
        </div>
    );
};

// Main Sticky Footer Component
export default function StickyFooter() {
    return (
        <div 
            className='relative h-[800px]' 
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
                <div
                    className='sticky z-10 top-[calc(100vh-800px)] h-[800px]'
                >
                    <FooterContent />
                </div>
            </div>
        </div>
    );
}

