'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm'
import Footer from './Footer'


export default function Testimonials(){
    const [isHovered, setIsHovered] = React.useState(false)
    const router = useRouter()

    const imageRef1 = React.useRef(null);
    const imageRef2 = React.useRef(null);
    const imageRef3 = React.useRef(null);
    const imageRef4 = React.useRef(null);

    return(
        <>
            <div className="min-h-screen flex items-center justify-center px-8 pt-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
                        Turning dreams into reality:
                    </h1>
                    
                    <h2 className="text-3xl font-semibold text-gray-800 mb-12">
                        With the expertise of the Project Manager behind the 
                        <span className="text-blue-600 font-bold underline decoration-2 underline-offset-4"> <br />Abdoun Bridge Project.</span>
                    </h2>

                    <p className="text-1.5xl text-gray-800 leading-relaxed mb-8 text-center font-400">
                        Based in Amman, Jordan, we are a finishing company with a strong foothold in the Gulf region and a reputation for delivering real, tangible results.
                        Specializing in coatings, waterproofing, surface treatments, and painting, we ensure every project meets the highest standards and leaves a lasting impact.
                    </p>
                    
                    <p className="text-1.5xl text-gray-800 leading-relaxed text-center mb-16 font-400">
                        Led by <span className="font-semibold underline text-blue-700"><a href="#">Rami</a></span>, who managed the finishing operations on the Abdoun Bridge, our company brings decades of hands-on experience across the Middle East. Whether in Amman or the
                        Gulf, we're committed to delivering uncompromising quality, ensuring precision and excellence in every task we undertake.
                    </p>

                    <div>
                    <p className="text-center pb-25 text-1.5xl text-gray-800"
                        onClick={() => router.push("/projects")}
                    >
                    <strong className="underline cursor-pointer hover:text-gray-500 transition-colors">Discover our projects</strong>
                    </p>
            </div>
                </div>
            </div>

            <div className="flex justify-center items-center min-height-[calc(100vh-75px)]">
                {/* First Image Container */}
                <div className="w-[960px] h-[872px] relative overflow-hidden"
                        onMouseEnter={() => {
                            setIsHovered(true);
                            gsap.to(imageRef1.current, {
                                scale: 1.1,
                                duration: 0.3,
                                ease: 'power2.out',
                            })
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false);
                            gsap.to(imageRef1.current, {
                                scale: 1,
                                duration: 0.3,
                                ease: 'power2.out',
                            })
                        }}
                >
                    <Image
                        ref={imageRef1}
                        src="/medias/img1.jpg"
                        alt="Protective Coatings"
                        fill={true}
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <h3 className="text-5xl font-light tracking-wide mb-6">Protective Coatings</h3>
                            <p className="text-3xl font-light">Redefining protection with advanced coating solutions</p>
                        </div>
                    </div>
                    
                    {/* Bottom text */}
                    <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className="text-3xl font-light underline underline-offset-4 cursor-pointer hover:text-gray-500"
                            onClick={() => router.push("/projects/protective-coatings")}
                            >
                                Protective Coatings Services</p>
                        </div>
                    </div>
                </div>

                {/* Second Image Container */}
                <div className="w-[960px] h-[872px] relative overflow-hidden"
                onMouseEnter={() => {
                            setIsHovered(true);
                            gsap.to(imageRef2.current, {
                                scale: 1.1,
                                duration: 0.3,
                                ease: 'power2.out',
                            })
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false);
                            gsap.to(imageRef2.current, {
                                scale: 1,
                                duration: 0.3,
                                ease: 'power2.out',
                            })
                        }}
                >
                    <Image
                        ref={imageRef2}
                        src="/medias/placeholder.png"
                        alt="Epoxy Solutions"
                        fill={true}
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <h3 className="text-5xl font-light tracking-wide mb-6">Flooring Solutions</h3>
                            <p className="text-3xl font-light">Advanced Flooring systems for lasting durability</p>
                        </div>
                    </div>

                    {/*Bottom text Second Image*/}
                    <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className="text-3xl font-light underline underline-offset-4 cursor-pointer hover:text-gray-500"
                            onClick={() => router.push("/projects/epoxy")}
                            >
                                Decorative Epoxy Services
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="min-h-screen flex items-center justify-center px-8 ">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-semibold text-gray-800 leading-tight mb-20">
                        Our expertise
                    </h1>
                       
                    <h2 className="text-2xl font-400 text-gray-700 mb-12">
                        We specialize in the final, crucial layer of every project, ensuring precision and durability. With years of hands-on
                        experience and collaboration with top engineers and suppliers, we guarantee a streamlined process from start to finish.
                    </h2>

                    <p className="text-2xl text-gray-700 font-400 text-center ">
                        Whether it's new construction or renovating existing spaces, from luxury homes to commercial 
                        properties, our work showcases the attention to detail and quality that defines us.
                    </p>

                </div>
            </div>

            <div>
                <p 
                className="text-center text-2xl underline -mt-20 underline-offset-4 cursor-pointer hover:text-gray-500"
                onClick={() => router.push("/about")}
                >
                    Learn more about New Look
                </p>
            </div>
                    
            


            {/** Third Image */}
            <div className="flex justify-center items-center mt-60">
                <div 
                    className="w-[960px] h-[872px] relative overflow-hidden"
                    onMouseEnter={() => {
                        setIsHovered(true);
                        gsap.to(imageRef3.current, {
                            scale: 1.1,
                            duration: 0.3,
                            ease: 'power2.out',
                        })
                    }}

                    onMouseLeave={() => {
                        setIsHovered(false);
                        gsap.to(imageRef3.current, {
                            scale: 1,
                            duration: 0.3,
                            ease: 'power2.out',
                        })
                    }}
                >
                    <Image
                        ref={imageRef3}
                        src="/medias/placeholder.png"
                        alt="New Look Team"
                        fill={true}
                    />
                    {/* Text Overlay */}

                    {/*Upper text first image */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center text-2xl font-500">
                            <p>Limited Offer</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <h3 className="text-5xl font-500 tracking-wide mb-6">Elevate your Space</h3>
                            <p className="text-2xl font-light">Enjoy a complimentary initial consultation on your desired project.</p>
                        </div>
                    </div>

                    {/*Bottom text Second Image*/}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className="text-2xl font-light underline underline-offset-8 cursor-pointer hover:text-gray-500"
                            onClick={() => router.push("/projects/epoxy")}
                            >
                                Register now
                            </p>
                        </div>
                    </div>
                </div>

                <div 
                    className="w-[960px] h-[872px] relative overflow-hidden"
                    onMouseEnter={() => {
                        setIsHovered(true);
                        gsap.to(imageRef4.current, {
                            scale: 1.1,
                            duration: 0.3,
                            ease: 'power2.out',
                        })
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                        gsap.to(imageRef4.current, {
                            scale: 1,
                            duration: 0.3,
                            ease: 'power2.out',
                        })
                    }}
                >
                    <Image
                        ref={imageRef4}
                        src="/medias/placeholder.png"
                        alt="New Look Team"
                        fill={true}
                    />
                    {/* Text Overlay */}

                    {/*Upper text second image*/}

                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white">
                        <p className="text-2xl font-500">
                            Coming Soon
                        </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <h3 className="text-5xl font-light tracking-wide mb-6">Epoxy Solutions</h3>
                            <p className="text-3xl font-light">Advanced Epoxy systems for lasting durability</p>
                        </div>
                    </div>

                    {/*Bottom text Second Image*/}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className="text-2xl font-light underline underline-offset-8 cursor-pointer hover:text-gray-500"
                            onClick={() => router.push("/projects/epoxy")}
                            >
                                Follow our journey
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Partners Section */}
            <div className="min-h-screen flex items-center justify-center px-8 py-8 -mt-20">
                <div className="max-w-6xl mx-auto text-center">

                    <h1 className="text-4xl font-semibold text-gray-800 leading-tight mb-8">
                        Trusted Credentials & Collaborations
                    </h1>

                    <h2 className="text-2xl font-400 text-gray-700 mb-12">
                        Over the years, we've had the privilege of working alongside some of the most respected names in the industry.
                        These collaborations have shaped the quality and precision of the work we deliver.
                    </h2>

                    {/* Partner Logos, add l&t, savito, sipes*/}
                    <div className="flex justify-center space-x-12 mb-16">
                        {/* Partner 1 */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/medias/placeholder.png"
                                alt="Al Manaseer"
                                width={150}
                                height={50}
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        {/* Partner 2 */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/medias/placeholder.png"
                                alt="Another Partner"
                                width={150}
                                height={50}
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />

                        </div>
                        {/* Partner 3 */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/medias/placeholder.png"
                                alt="Abdoun Bridge"
                                width={150}
                                height={50}
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>

                    </div>

                </div>

            </div>

            {/* Autograph Section - insert hand-drawn animation for Rami's signature*/}

            {/* Contact Form Section */}
            <div className="-py-24">
                <ContactForm />
            </div>
        </>
    )
}
