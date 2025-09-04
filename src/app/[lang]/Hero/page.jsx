//src/app/Hero/page.jsx
'use client';
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm'
import { useT } from '../i18n/client';

export default function Hero(){
    const [isHovered, setIsHovered] = React.useState(false)

    const { t } = useT('common');
    const router = useRouter();
    const { lang } = useParams();

    const contactFormTranslations = {
        title: t('contact.form_hero.title'),
        subtitle : t('contact.form_hero.subtitle'),
        location: t('contact.form.labels.location'),
        email: t('contact.form.labels.email'),
        name: t('contact.form.labels.name'),
        phone: t('contact.form.labels.phone'),
        details: t('contact.form.labels.details'),
    }

    const imageRef1 = React.useRef(null);
    const imageRef2 = React.useRef(null);
    const imageRef3 = React.useRef(null);
    const imageRef4 = React.useRef(null);

    return(
        <>
            <div className="h-[100vh] flex items-center justify-center px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
                        {t('heroPage.lead')} 
                    </h1>
                    
                    <h2 className="text-3xl font-semibold text-gray-800 mb-12 max-w-4xl mx-auto">
                        
                        {t("heroPage.bridgeLine1")} 
                        <Link href={`/${lang}/Projects/AbdounBridge`}>
                        <span className="text-blue-600 font-bold underline decoration-2 cursor-pointer underline-offset-8">
                        {t("heroPage.bridgeLine2")}</span></Link>
                        
                    </h2>

                    <p className="text-1.5xl text-gray-800 leading-relaxed mb-8 text-center font-400">
                        {t("heroPage.p1")}
                    </p>
                    
                    <p className="text-1.5xl text-gray-800 leading-relaxed text-center mb-16 font-400">
                        {t("heroPage.p2")}
                        <span className="font-semibold underline underline-offset-8">{t("heroPage.p3")}</span>
                        {t("heroPage.p4")}
                    </p>

                    <div>
                    <p className="text-center text-1.5xl text-gray-800"
                        onClick={() => router.push("/../Projects")}
                    >
                    <strong className="underline cursor-pointer hover:text-gray-500 transition-colors underline-offset-8">{t('heroPage.cta.discover')}</strong>
                    </p>
            </div>
                </div>
            </div>

            <div className="flex justify-center items-center h-[100vh]">
                {/* First Image Container */}
                <div className="w-[960px] h-[100vh] relative overflow-hidden"
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
                            <h3 className="text-5xl font-light tracking-wide mb-6">{t("heroPage.cards.coatings.title")}</h3>
                            <p className="text-3xl font-light">{t("heroPage.cards.coatings.subtitle")}</p>
                        </div>
                    </div>
                    
                    {/* Bottom text */}
                    <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className="text-2xl font-light underline underline-offset-8 cursor-pointer hover:text-gray-500"
                            onClick={() => router.push("/../Services/SurfaceFinishing")}
                            >
                                {t("heroPage.cards.coatings.cta")}</p>
                        </div>
                    </div>
                </div>

                {/* Second Image Container */}
                <div className="w-[960px] h-[100vh] relative overflow-hidden"
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
                            <h3 className="text-5xl font-light tracking-wide mb-6">{t("heroPage.cards.flooring.title")}</h3>
                            <p className="text-3xl font-light">{t("heroPage.cards.flooring.subtitle")}</p>
                        </div>
                    </div>

                    {/*Bottom text Second Image*/}
                    <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className="text-2xl font-light underline underline-offset-8 cursor-pointer hover:text-gray-500"
                            onClick={() => router.push("/../Services/CustomFlooring")}
                            >
                                {t("heroPage.cards.flooring.cta")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[100vh] flex flex-col items-center justify-start px-8 py-50">

                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-semibold text-gray-800 leading-tight mb-20">
                        {t("heroPage.expertise.title")}
                    </h1>
                       
                    <h2 className="text-2xl font-400 text-gray-700 mb-12">
                        {t("heroPage.expertise.p1")}
                    </h2>

                    <p className="text-2xl text-gray-700 font-400 text-center mb-40">
                        {t("heroPage.expertise.p2")}
                    </p>
                </div>
                <div>
                    <p 
                    className="text-center text-2xl underline underline-offset-8 cursor-pointer hover:text-gray-500"
                    onClick={() => router.push("/../About")}
                    >
                        {t("heroPage.expertise.cta")}
                    </p>
                </div>
            </div>

            
                    
            {/** Third Image */}
            <div className="flex justify-center items-center h-[100vh] ">
                <div 
                    className="w-[960px] h-[100vh] relative overflow-hidden"
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
                            <p>{t("heroPage.offer.label")}</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <h3 className="text-5xl font-500 tracking-wide mb-6">{t("heroPage.offer.title")}</h3>
                            <p className="text-2xl font-light">{t("heroPage.offer.subtitle")}</p>
                        </div>
                    </div>

                    {/*Bottom text Second Image*/}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className="text-2xl font-light underline underline-offset-8 cursor-pointer hover:text-gray-500"
                            onClick={() => router.push("/../Contact")}
                            >
                                {t("heroPage.offer.cta")}
                            </p>
                        </div>
                    </div>
                </div>

                <div 
                    className="w-[960px] h-[100vh] relative overflow-hidden"
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
                            {t("heroPage.epoxy.label")}
                        </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <h3 className="text-5xl font-light tracking-wide mb-6">{t("heroPage.epoxy.title")}</h3>
                            <p className="text-3xl font-light">{t("heroPage.epoxy.subtitle")}</p>
                        </div>
                    </div>

                    {/*Bottom text Second Image*/}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className="text-2xl font-light underline underline-offset-8 cursor-pointer hover:text-gray-500"
                            onClick={() => router.push("https://linkedin.com/NewLook")}
                            >
                                {t("heroPage.epoxy.cta")}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

    {/* Partners Section */}
            <div className="min-h-screen flex items-center justify-center px-8 py-16 bg-gray-50">
            <div className="max-w-7xl text-center">

                {/* Section Heading */}
                <h1 className="text-4xl font-semibold text-gray-800 leading-tight mb-8">
                {t("heroPage.partners.title")}
                </h1>

                <h2 className="text-2xl font-400 text-gray-700 mb-12 max-w-4xl mx-auto">
                {t("heroPage.partners.subtitle")}
                </h2>

                {/* Partner Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
                
                {/* Partner 1 */}
                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium text-gray-700 mb-4">Al Manaseer</p>
                    <div className="relative w-full h-40">
                    <a
                    href="https://mgc-gas.jo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        src="/medias/img3.jpg"
                        alt="L&T"
                        fill
                        className="object-contain rounded-lg opacity-80 hover:opacity-100 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                    />
                    </a>
                    </div>
                </div>

                {/* Partner 2 */}
                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium text-gray-700 mb-4">Saveto Vetonit</p>
                    <div className="relative w-full h-40">
                    <a
                    href="https://www.saveto.com/brand/vetonit"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        src="/medias/img3.jpg"
                        alt="L&T"
                        fill
                        className="object-contain rounded-lg opacity-80 hover:opacity-100 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                    />
                    </a>
                    </div>
                </div>

                {/* Partner 3 */}
                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium text-gray-700 mb-4">Sipes</p>
                    <div className="relative w-full h-40">
                        <a
                        href="https://www.saveto.com/brand/vetonit"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            src="/medias/img3.jpg"
                            alt="L&T"
                            fill
                            className="object-contain rounded-lg opacity-80 hover:opacity-100 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                        />
                        </a>
                    </div>
                </div>

                {/* Partner 4 */}
                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium text-gray-700 mb-4">Larsen & Toubro</p>
                    <div className="relative w-full h-40">
                        <a
                        href="https://www.saveto.com/brand/vetonit"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            src="/medias/img3.jpg"
                            alt="L&T"
                            fill
                            className="object-contain rounded-lg opacity-80 hover:opacity-100 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                        />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium text-gray-700 mb-4">L&T</p>
                    <div className="relative w-full h-40">
                        <a
                    href="https://www.saveto.com/brand/vetonit"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        src="/medias/img3.jpg"
                        alt="L&T"
                        fill
                        className="object-contain rounded-lg opacity-80 hover:opacity-100 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                    />
                    </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium text-gray-700 mb-4">L&T</p>
                    <div className="relative w-full h-40">
                    <a
                    href="https://www.saveto.com/brand/vetonit"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        src="/medias/img3.jpg"
                        alt="L&T"
                        fill
                        className="object-contain rounded-lg opacity-80 hover:opacity-100 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                    />
                    </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium text-gray-700 mb-4">L&T</p>
                    <div className="relative w-full h-40">
                    <a
                    href="https://www.saveto.com/brand/vetonit"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        src="/medias/img3.jpg"
                        alt="L&T"
                        fill
                        className="object-contain rounded-lg opacity-80 hover:opacity-100 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                    />
                    </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium text-gray-700 mb-4">L&T</p>
                    <div className="relative w-full h-40">
                        <a
                        href="https://www.saveto.com/brand/vetonit"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            src="/medias/img3.jpg"
                            alt="L&T"
                            fill
                            className="object-contain rounded-lg opacity-80 hover:opacity-100 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                        />
                        </a>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Autograph Section - insert hand-drawn animation for Rami's signature*/}

            {/* Contact Form Section */}
            <div className="py-24">
                <ContactForm translations={contactFormTranslations}/>
            </div>
        </>
    )
}
