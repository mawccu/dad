'use client'
import { useRef, useEffect, useState } from 'react';
import styles from './page.module.css';
import { useProgress } from './ProgressProvider';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Mask(){
    const container = useRef(null)
    const stickyMask = useRef(null)
    const videoRef = useRef(null);
    const { progress } = useProgress();
    const [isAnimationComplete, setIsAnimationComplete] = useState(false)

    const initialMaskSize = 1;
    const TargetMaskSize = 30.9 // mask end-result
    const easing = 0.15;
    let easedScrollProgress = 0;

    useEffect(() => {
        requestAnimationFrame(animate) //It's a built-in browser function that tells the browser: "Hey, call this function 
        // again before the next repaint"
    }, [])

    useEffect(() => {
        if(progress === 100) {
            videoRef.current.play().catch(console.error);
        }
    })

    const animate = () => {
        const maskSizeProgress = TargetMaskSize * getScrollProgress();
        stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + '%';
        
        const tolerance = 0.1;
        if(Math.abs(maskSizeProgress - TargetMaskSize) < tolerance) {
            setIsAnimationComplete(true)
        }
        
        if(!isAnimationComplete) {
            requestAnimationFrame(animate) // this ensures the mask size is updated 
            // continuously with the scroll progress
        }
    }
    
    useEffect(() => {
        if(isAnimationComplete) {
            console.log("animation has completed")
            ScrollTrigger.create({
                trigger: container.current,
                start: 'bottom top',
                end: '+=1',
                onEnter:() =>{
                    //console.log("The navbar is now the top of the user's screen.")
                    container.current.style.display = 'none';
                    
                },
                onLeave: () => {
                    //console.log("navbar is now pinned.")
                }
            })
        }
    }, [isAnimationComplete])

    const getScrollProgress = () => {
        if(!stickyMask.current || !container.current) return 0;

        const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return Math.max(0, Math.min(1, easedScrollProgress))
    }
    
    return(
        <>
            <main className={styles.main}>
                <div className={styles.container} ref={container}>
                    <div className={styles.stickyMask} ref={stickyMask}>
                        <video 
                            playsInline
                            preload="metadata"
                            muted
                            loop 
                            ref={videoRef}
                            >

                            <source src="medias/bo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </main>
        </>
    )
}