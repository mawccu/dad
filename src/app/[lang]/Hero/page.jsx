//src/app/Hero/page.jsx
'use client';
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';
import ContactCTA from '../Contact/contactCTA';
import { useT } from '../i18n/client';
import FadeUp from '../../components/FadeUp';
import { Trans } from 'react-i18next';

export default function Hero(){
    const [isHovered, setIsHovered] = React.useState(false);
    const { t, ready } = useT('common');
    const router = useRouter();
    const { lang } = useParams();

    // Don't render until translations are ready
    if (!ready) {
        return <div className="h-[100vh] flex items-center justify-center">
            <div className="text-center">Loading...</div>
        </div>;
    }

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

    const navbarHeight = 80; // Adjust based on your navbar height
    return(
        <>  
            <div className="flex flex-col items-center justify-center w-full">
                <div className="h-screen w-full relative overflow-hidden">
                <Image
                src="/medias/abdounbridge/ss.png"
                fill={true}
                alt="Hero Image"
                className="object-cover"
                />
            </div>
            </div>
            {/* Hero Section */}
                <div className="min-h-[100vh] md:min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-full sm:max-w-4xl lg:max-w-6xl mx-auto text-center">
                        <h1 className={`font-semibold leading-tight text-gray-800 text-2xl sm:text-2xl lg:mb-2 lg:text-3xl`}>
                            {t('heroPage.lead')} 
                        </h1>

                        <h2 className="font-semibold text-gray-800 mb-8 sm:mb-10 lg:leading-relaxed lg:mb-12 max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto text-xl sm:text-2xl lg:text-3xl">
                            <Trans
                                t={t}
                                i18nKey="heroPage.bridgeLine1"
                                components={{
                                    bridgeLink: (
                                        <Link  className="text-blue-600 font-bold underline decoration-2 cursor-pointer underline-offset-8 hover:text-blue-400 transition-colors" href={`/${lang}/Projects/AbdounBridge`}>
                                            <span />
                                        </Link>
                                    )
                                }}
                            />
                        </h2>

                        <p className={`lg:leading-relaxed mb-6 sm:mb-7 lg:mb-8 text-center font-light ${lang === 'ar' ? 'text-base sm:text-xl lg:text-1.5xl' : 'text-base sm:text-lg lg:text-1.5xl'}`}>
                            {t("heroPage.p1")}
                        </p>

                        <p className={`lg:leading-relaxed text-center mb-12 sm:mb-16 lg:mb-32 font-light ${lang === 'ar' ? 'text-base sm:text-xl lg:text-1.5xl' : 'text-base sm:text-lg lg:text-1.5xl'}`}>
                            <Trans
                                i18nKey="heroPage.p2"
                                t={t}
                                components={{rami: <strong className="font-semibold underline underline-offset-8" />}}
                            />
                        </p>

                        <p className={`text-center text-gray-800 cursor-pointer ${lang === 'ar' ? 'text-lg sm:text-xl lg:text-2xl' : 'text-base sm:text-lg lg:text-1.5xl'}`}
                            onClick={() => router.push(`/${lang}/Projects`)}
                        >
                            <span className="underline cursor-pointer font-500 hover:text-gray-400 transition-colors underline-offset-8">{t('heroPage.cta.discover')}</span>
                        </p>
                    </div>
                </div>

            {/* Image Cards Section - Mobile: Stack, Desktop: Side by side */}
                <div className="flex flex-col lg:flex-row justify-center items-center min-h-[100vh]">
                {/* First Image Container */}
                <div className="w-full h-[50vh] sm:h-[60vh] lg:w-[960px] lg:h-[100vh] relative overflow-hidden"
                        onMouseEnter={() => {
                            setIsHovered(true);
                            gsap.to(imageRef1.current, {
                                scale: 1.05,
                                duration: 0.5,
                                ease: 'power2.out',
                            })
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false);
                            gsap.to(imageRef1.current, {
                                scale: 1,
                                duration: 0.5,
                                ease: 'power2.out',
                            })
                        }}
                >
                    <Image
                        ref={imageRef1}
                        src="/medias/abdounbridge/111.png"
                        alt="Protective Coatings"
                        fill={true}
                        sizes="(max-width: 1023px) 100vw, 960px"
                        className="object-cover"
                    />
                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white px-4">
                        <div className="text-center">
                            <h3 className={`font-light tracking-wide mb-2 sm:mb-4 lg:mb-6 drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-lg sm:text-3xl lg:text-5xl' : 'text-base sm:text-2xl lg:text-5xl'}`} style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>{t("heroPage.cards.coatings.title")}</h3>
                            <p className={`font-light drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-sm sm:text-xl lg:text-3xl' : 'text-xs sm:text-lg lg:text-3xl'}`} style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>{t("heroPage.cards.coatings.subtitle")}</p>
                        </div>
                    </div>
                    
                    {/* Bottom text */}
                    <div className="absolute bottom-8 sm:bottom-12 lg:bottom-40 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className={`font-light underline underline-offset-8 cursor-pointer hover:text-gray-300 transition-colors drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-sm sm:text-lg lg:text-2xl' : 'text-xs sm:text-base lg:text-2xl'}`}
                            style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}
                            onClick={() => router.push(`/${lang}/Services/SurfaceFinishing`)}
                            >
                                {t("heroPage.cards.coatings.cta")}</p>
                        </div>
                    </div>
                </div>

                {/* Second Image Container */}
                <div className="w-full h-[50vh] sm:h-[60vh] lg:w-[960px] lg:h-[100vh] relative overflow-hidden"
                onMouseEnter={() => {
                            setIsHovered(true);
                            gsap.to(imageRef2.current, {
                                scale: 1.05,
                                duration: 0.5,
                                ease: 'power2.out',
                            })
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false);
                            gsap.to(imageRef2.current, {
                                scale: 1,
                                duration: 0.5,
                                ease: 'power2.out',
                            })
                        }}
                >
                    <Image
                        ref={imageRef2}
                        src="/medias/ex/1.png"
                        alt="Epoxy Solutions"
                        fill={true}
                        sizes="(max-width: 1023px) 100vw, 960px"
                        className="object-cover"
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white px-4">
                        <div className="text-center">
                            <h3 className={`font-light tracking-wide mb-2 sm:mb-4 lg:mb-6 drop-shadow-sm whitespace-nowrap ${lang === 'ar' ? 'text-lg sm:text-3xl lg:text-5xl' : 'text-base sm:text-2xl lg:text-5xl'}`} style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>{t("heroPage.cards.flooring.title")}</h3>
                            <p className={`font-light drop-shadow-sm whitespace-nowrap ${lang === 'ar' ? 'text-sm sm:text-xl lg:text-3xl' : 'text-xs sm:text-lg lg:text-3xl'}`} style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>{t("heroPage.cards.flooring.subtitle")}</p>
                        </div>
                    </div>

                    {/*Bottom text Second Image*/}
                    <div className="absolute bottom-8 sm:bottom-12 lg:bottom-40 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className={`font-light underline underline-offset-8 cursor-pointer hover:text-gray-300 transition-colors drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-sm sm:text-lg lg:text-2xl' : 'text-xs sm:text-base lg:text-2xl'}`}
                            style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}
                            onClick={() => router.push(`/${lang}/Services/CustomFlooring`)}
                            >
                                {t("heroPage.cards.flooring.cta")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expertise Section */}
                <div className="min-h-[100vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:min-h-[80vh] lg:min-h-[100vh] sm:py-16 lg:py-50">
                <div className="max-w-full sm:max-w-4xl lg:max-w-5xl mx-auto text-center">
                    <h1 className={`font-semibold text-gray-800 leading-tight mb-12 sm:mb-16 lg:mb-20 mt-0 text-2xl sm:text-3xl lg:text-4xl`}>
                        {t("heroPage.expertise.title")}
                    </h1>
                       
                    <h2 className={`font-light mb-8 sm:mb-10 lg:mb-12 text-lg sm:text-2xl lg:text-2xl`}>
                        {t("heroPage.expertise.p1")}
                    </h2>

                    <p className={` font-light text-center mb-20 sm:mb-30 lg:mb-40 text-lg sm:text-2xl lg:text-2xl`}>
                        {t("heroPage.expertise.p2")}
                    </p>
                </div>
                <div>
                    <p 
                    className={`text-center underline underline-offset-8 font-500 cursor-pointer hover:text-gray-500 text-lg sm:text-2xl lg:text-2xl`}
                    onClick={() => router.push(`/${lang}/About`)}
                    >
                        {t("heroPage.expertise.cta")}
                    </p>
                </div>
            </div>

                <div className="flex flex-col lg:flex-row justify-center items-center min-h-[100vh]">
                <div 
                    className="w-full h-[50vh] sm:h-[60vh] lg:w-[960px] lg:h-[100vh] relative overflow-hidden"
                    onMouseEnter={() => {
                        setIsHovered(true);
                        gsap.to(imageRef3.current, {
                            scale: 1.05,
                            duration: 0.5,
                            ease: 'power2.out',
                        })
                    }}

                    onMouseLeave={() => {
                        setIsHovered(false);
                        gsap.to(imageRef3.current, {
                            scale: 1,
                            duration: 0.5,
                            ease: 'power2.out',
                        })
                    }}
                >
                    <Image
                        ref={imageRef3}
                        src="/medias/movenpick/2.png"
                        alt="New Look Team"
                        fill={true}
                        sizes="(max-width: 1023px) 100vw, 960px"
                        className="object-cover"
                    />

                    {/*Upper text first image */}
                    <div className="absolute top-5 sm:top-8 lg:top-20 left-1/2 transform -translate-x-1/2 text-white">
                        <div className={`text-center font-500 drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-sm sm:text-lg lg:text-2xl' : 'text-xs sm:text-base lg:text-2xl'}`} style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
                            <p>{t("heroPage.offer.label")}</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-white px-4">
                        <div className="text-center">
                            <h3 className={`font-500 tracking-wide mb-2 sm:mb-4 lg:mb-6 drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-lg sm:text-3xl lg:text-5xl' : 'text-base sm:text-2xl lg:text-5xl'}`} style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>{t("heroPage.offer.title")}</h3>
                            <p className={`font-light drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-sm sm:text-xl lg:text-2xl' : 'text-xs sm:text-lg lg:text-2xl'}`} style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>{t("heroPage.offer.subtitle")}</p>
                        </div>
                    </div>

                    {/*Bottom text Second Image*/}
                    <div className="absolute bottom-5 sm:bottom-8 lg:bottom-20 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className={`font-light underline underline-offset-8 cursor-pointer hover:text-gray-300 transition-colors drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-sm sm:text-lg lg:text-2xl' : 'text-xs sm:text-base lg:text-2xl'}`}
                            style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}
                            onClick={() => router.push(`/${lang}/Contact`)}
                            >
                                {t("heroPage.offer.cta")}
                            </p>
                        </div>
                    </div>
                </div>

                <div 
                    className="w-full h-[50vh] sm:h-[60vh] lg:w-[960px] lg:h-[100vh] relative overflow-hidden"
                    onMouseEnter={() => {
                        setIsHovered(true);
                        gsap.to(imageRef4.current, {
                            scale: 1.05,
                            duration: 0.5,
                            ease: 'power2.out',
                        })
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                        gsap.to(imageRef4.current, {
                            scale: 1,
                            duration: 0.5,
                            ease: 'power2.out',
                        })
                    }}
                >
                    <Image
                        ref={imageRef4}
                        src="/medias/s.png"
                        alt="New Look Team"
                        fill={true}
                        sizes="(max-width: 1023px) 100vw, 960px"
                        className="object-cover"
                    />

                    {/*Upper text second image*/}

                    <div className="absolute top-5 sm:top-8 lg:top-20 left-1/2 transform -translate-x-1/2 text-white">
                        <p className={`font-500 drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-sm sm:text-lg lg:text-2xl' : 'text-xs sm:text-base lg:text-2xl'}`} style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
                            {t("heroPage.epoxy.label")}
                        </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-white px-4">
                        <div className="text-center">
                            <h3 className={`font-light tracking-wide mb-2 sm:mb-4 lg:mb-6 drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-lg sm:text-3xl lg:text-5xl' : 'text-base sm:text-2xl lg:text-5xl'}`} style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>{t("heroPage.epoxy.title")}</h3>
                            <p className={`font-light drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-sm sm:text-xl lg:text-3xl' : 'text-xs sm:text-lg lg:text-3xl'}`} style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>{t("heroPage.epoxy.subtitle")}</p>
                        </div>
                    </div>

                    {/*Bottom text Second Image*/}
                    <div className="absolute bottom-5 sm:bottom-8 lg:bottom-20 left-1/2 transform -translate-x-1/2 text-white">
                        <div className="text-center">
                            <p 
                            className={`font-light underline underline-offset-8 cursor-pointer hover:text-gray-300 transition-colors drop-shadow-lg whitespace-nowrap ${lang === 'ar' ? 'text-sm sm:text-lg lg:text-2xl' : 'text-xs sm:text-base lg:text-2xl'}`}
                            style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}
                            onClick={() => router.push("https://linkedin.com/NewLook")}
                            >
                                {t("heroPage.epoxy.cta")}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Partners Section */}
            <div className="min-h-[100vh] sm:min-h-[100vh] md:min-h-[100vh] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-32 sm:py-30 md:py-40 lg:py-32 mt-0 sm:mt-0 lg:mt-0">
            <div className="max-w-7xl text-center">

                {/* Section Heading */}
                <h1 className={`font-semibold text-gray-800 leading-tight mb-6 sm:mb-7 lg:mb-8 ${lang === 'ar' ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
                {t("heroPage.partners.title")}
                </h1>

                <h2 className={`font-light mb-8 sm:mb-10 lg:mb-12 max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto ${lang === 'ar' ? 'text-lg sm:text-2xl lg:text-2xl' : 'text-lg sm:text-xl lg:text-2xl'}`}>
                {t("heroPage.partners.subtitle")}
                </h2>

                {/* Partner Logos - Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                
                {/* Partner 1 */}
                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4  lg:text-lg ${lang === 'ar' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>Al Manaseer</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                    <a
                    href="https://mgc-gas.jo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    >
                    <Image
                        src="/medias/partner/manaseer.jpeg"
                        alt="Al Manaseer"
                        fill
                        sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"    
                        className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                    />
                    </a>
                    </div>
                </div>

                {/* Partner 2 */}
                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4 ${lang === 'ar' ? 'text-base sm:text-lg lg:text-lg' : 'text-sm sm:text-base lg:text-lg'}`}>Saveto Vetonit</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                    <a
                    href="https://www.saveto.com/brand/vetonit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    >
                    <Image
                        src="/medias/partner/vetonit.png"
                        alt="Saveto Vetonit"
                        fill
                        sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                        className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                    />
                    </a>
                    </div>
                </div>

                {/* Partner 3 */}
                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4 ${lang === 'ar' ? 'text-base sm:text-lg lg:text-lg' : 'text-sm sm:text-base lg:text-lg'}`}>Sipes</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                        <a
                        href="https://www.facebook.com/SipesJo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                        >
                        <Image
                            src="/medias/partner/sipes.png"
                            alt="Sipes"
                            fill
                            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                            className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                        />
                        </a>
                    </div>
                </div>

                {/* Partner 4 */}
                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4 ${lang === 'ar' ? 'text-base sm:text-lg lg:text-lg' : 'text-sm sm:text-base lg:text-lg'}`}>Larsen & Toubro</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                        <a
                        href="https://www.larsentoubro.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                        >
                        <Image
                            src="/medias/partner/larsen.jpeg"
                            alt="Larsen & Toubro"
                            fill
                            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                            className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                        />
                        </a>
                    </div>
                </div>

                {/* Partner 4 */}
                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4 ${lang === 'ar' ? 'text-base sm:text-lg lg:text-lg' : 'text-sm sm:text-base lg:text-lg'}`}>Laticrete</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                        <a
                        href="https://me.laticrete.com/?gad_source=1&gad_campaignid=21408879056&gbraid=0AAAAADNSEJ5utRjmeu09jPgPru9xd-2fy&gclid=CjwKCAjw_fnFBhB0EiwAH_MfZn2IK1uEyfBf0Im48gxBCeRYHHHhdBcLrxDSGiGQqxcsTp3aMLpnNBoCAF0QAvD_BwE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                        >
                        <Image
                            src="/medias/partner/laticrete.png"
                            alt="Laticrete"
                            fill
                            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                            className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                        />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4 ${lang === 'ar' ? 'text-base sm:text-lg lg:text-lg' : 'text-sm sm:text-base lg:text-lg'}`}>Al Jazeera Paints</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                        <a
                        href="https://jazeerapaints.com/sa_en?srsltid=AfmBOorBBf_GoCLjezYMNm_tQeqUxmMS8AXrls3Mn8tr-5AmyGq8Kx7d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                        >
                        <Image
                            src="/medias/partner/aljazeerapaints.jpeg"
                            alt="Al Jazeera Paints"
                            fill
                            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                            className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                        />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4 ${lang === 'ar' ? 'text-base sm:text-lg lg:text-lg' : 'text-sm sm:text-base lg:text-lg'}`}>SIKA (Formerly BASF)</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                        <a
                        href="https://www.basf.com/global/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                        >
                        <Image
                            src="/medias/partner/basf.png"
                            alt="BASF"
                            fill
                            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                            className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                        />
                        </a>
                    </div>
                </div>

                {/* Partner 4 */}
                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4 ${lang === 'ar' ? 'text-base sm:text-lg lg:text-lg' : 'text-sm sm:text-base lg:text-lg'}`}>MAPEI</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                        <a
                        href="https://www.mapei.com//"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                        >
                        <Image
                            src="/medias/partner/mapei.png"
                            alt="MAPEI"
                            fill
                            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                            className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                        />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4 ${lang === 'ar' ? 'text-base sm:text-lg lg:text-lg' : 'text-sm sm:text-base lg:text-lg'}`}>TAG Group</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                        <a
                    href="https://www.tag-gu.global/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    >
                    <Image
                        src="/medias/partner/tag.jpg"
                        alt="Talal Abu Ghazaleh & Co."
                        fill
                        sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                        className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                    />
                    </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4 ${lang === 'ar' ? 'text-base sm:text-lg lg:text-lg' : 'text-sm sm:text-base lg:text-lg'}`}>LAMA</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                    <a
                    href="https://lamawp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    >
                    <Image
                        src="/medias/partner/lama.png"
                        alt="LAMA"
                        fill
                        sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                        className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                    />
                    </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4 ${lang === 'ar' ? 'text-base sm:text-lg lg:text-lg' : 'text-sm sm:text-base lg:text-lg'}`}>IKK Group</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                    <a
                    href="https://www.ikkgroup.com/nweb/ikk-companies-v2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    >
                    <Image
                        src="/medias/partner/ikk.png"
                        alt="Isam Khairi Kabbani Group"
                        fill
                        sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                        className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                    />
                    </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className={`font-medium text-gray-700 mb-3 sm:mb-4 ${lang === 'ar' ? 'text-base sm:text-lg lg:text-lg' : 'text-sm sm:text-base lg:text-lg'}`}>SAPAC</p>
                    <div className="relative w-full h-24 sm:h-32 lg:h-40">
                        <a
                        href="https://sapac.com.sa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                        >
                        <Image
                            src="/medias/partner/sapac.png"
                            alt="SAPAC"
                            fill
                            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                            className="object-contain rounded-lg opacity-100 hover:opacity-80 transition-opacity shadow-md cursor-pointer hover:shadow-lg"
                        />
                        </a>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Autograph Section - insert hand-drawn animation for Rami's signature*/}

            {/* Contact Form Section */}
                <ContactCTA />
        </>
    )
}