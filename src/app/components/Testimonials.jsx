import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useState } from 'react';

export default function Testimonials(){
    const [isHovered, setIsHovered] = React.useState(false)
    const router = useRouter()

    const imageRef1 = React.useRef(null);
    const imageRef2 = React.useRef(null);

    const handleMouseEnter = () => {setIsHovered(true)}
    const handleMouseLeave = () => {setIsHovered(false)}
    
        
        
    return(
        <>
        
            <div className="min-h-screen flex items-center justify-center px-8 py-8">
            <div className="max-w-5xl mx-auto text-center">
                
                <h1 className="text-6xl font-bold text-gray-800 mb-4 leading-tight">
                Turning dreams into reality:
                </h1>
                
            
                <h2 className="text-4xl font-semibold text-gray-700 mb-12">
                With the expertise of the Project Manager behind the 
                <span className="text-blue-600 font-bold underline decoration-2 underline-offset-4"> <br />Abdoun Bridge Project.</span>
                </h2>

                
                <p className="text-2xl text-gray-800 leading-relaxed mb-8 text-center">
                Based in Amman, Jordan, we are a finishing company with a strong foothold in the Gulf region and a reputation for delivering real, tangible results.
                 Specializing in coatings, waterproofing, surface treatments, and painting, we ensure every project meets the highest standards and leaves a lasting impact.
                </p>
                
                <p className="text-2xl text-gray-800 leading-relaxed text-center">
                    Led by Rami, who managed the finishing operations on the Abdoun Bridge, our company brings decades of hands-on experience across the Middle East. Whether in Amman or the
                     Gulf, we're committed to delivering uncompromising quality, ensuring precision and excellence in every task we undertake.
                    
                </p>
                
            </div>
            </div>

            <div className="">
                <p className="text-center pb-25 text-2xl text-gray-800">
                    <u onClick={() => router.push("/projects")}
                        className="cursor-pointer hover:text-gray-500 transition-colors"
                    ><strong>Discover our projects</strong>
                    </u>
                </p>
            </div>

            <div className="justify-center items-center flex mt-36">
                <div className="w-[960px] h-[872px] relative overflow-hidden">
                    <Image
                        ref={imageRef1}
                        onMouseEnter= {() => {
                            setIsHovered(true);
                            gsap.to(imageRef1.current, {
                                scale: 1.1,
                                duration: 0.5,
                                ease: 'power1.out',

                            })
                        }}
                        
                        onMouseLeave={() => {
                            setIsHovered(false);
                            gsap.to(imageRef1.current, {
                                scale: 1,
                                duration: 0.5,
                                ease: 'power1.out',
                            })
                        }}
                        src="/medias/placeholder.png"
                        alt="Abdoun Bridge Project"
                        objectFit="cover"
                        width={960}
                        height={1080}
                        className="object-cover h-full"
                    />
                </div>
                <div className="w-[960px] h-[872px] relative overflow-hidden">
                <Image
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
                    ref={imageRef2}
                    src="/medias/placeholder.png"
                    alt="Abdoun Bridge Project"
                    objectFit="cover"
                    width={960}
                    height={1080}
                    className="object-cover h-full"
                    
                />
                </div>
            </div>
            {/* 
            first -> Protective Coatings 
            second -> Epoxy Solutions 
            */
            }
            <div className="w-full h-[200vh] bg-white"></div>
        </>
    )
}

