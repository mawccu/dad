//components/Mask.jsx
'use client'
import { useRef, useEffect, useState } from 'react';
import styles from './page.module.css';
import { useProgress } from './ProgressProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Mask({ onComplete }){
    const container = useRef(null)
    const stickyMask = useRef(null)
    const videoRef = useRef(null);
    const { progress } = useProgress();
    const [isAnimationComplete, setIsAnimationComplete] = useState(false)
    const [shouldShow, setShouldShow] = useState(false); // Add state to control visibility
    const animationFrameRef = useRef(null);

    const initialMaskSize = 1;
    const TargetMaskSize = 30.9 // mask end-result
    const easing = 0.15;
    let easedScrollProgress = 0;

    // Show mask only after loader reaches 100%
    useEffect(() => {
        if (progress === 100) {
            setShouldShow(true);
        }
    }, [progress]);

    useEffect(() => {
        const startAnimation = () => {
            // Only start animation after component mounts and refs are available
            if (stickyMask.current && container.current) {
                animationFrameRef.current = requestAnimationFrame(animate);
            }
        };
        
        // Only start animation if mask should be shown
        if (shouldShow) {
            startAnimation();
        }
        
        // Cleanup animation frame on unmount
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [shouldShow]) // Add shouldShow as dependency

    useEffect(() => {
        if(progress === 100 && videoRef.current && shouldShow) {
            videoRef.current.play().catch(console.error);
        }
    }, [progress, shouldShow]) // Added shouldShow as dependency

    const animate = () => {
        // Add null checks before accessing refs
        if (!stickyMask.current || !container.current) {
            return;
        }

        const maskSizeProgress = TargetMaskSize * getScrollProgress();
        stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + '%';
        
     
        const tolerance = 0.1;
        if(Math.abs(maskSizeProgress - TargetMaskSize) < tolerance) {
            if (!isAnimationComplete) {
                setIsAnimationComplete(true);
                onComplete?.();
            }
        }
        
        if(!isAnimationComplete) {
            animationFrameRef.current = requestAnimationFrame(animate) // Store the animation frame ID
        }
    }
    
    useEffect(() => {
        let scrollTriggerInstance = null;
        
        if(isAnimationComplete && container.current) {
            console.log("animation has completed")
            const containerElement = container.current; // Store reference
            
            scrollTriggerInstance = ScrollTrigger.create({
                trigger: containerElement,
                start: 'bottom top',
                end: '+=1',
                onEnter:() =>{
                    //console.log("The navbar is now the top of the user's screen.")
                    if (containerElement && containerElement.style) {
                        containerElement.style.display = 'none';
                    }
                },
                onLeave: () => {
                    //console.log("navbar is now pinned.")
                }
            })
        }
        
        // Clean up ScrollTrigger on unmount or when dependencies change
        return () => {
            if (scrollTriggerInstance) {
                scrollTriggerInstance.kill();
            }
        };
    }, [isAnimationComplete])

    const getScrollProgress = () => {
        if(!stickyMask.current || !container.current) return 0;

        const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
        
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return Math.max(0, Math.min(1, easedScrollProgress))
    }
    
    // Don't render anything until loader is complete
    if (!shouldShow) {
        return null;
    }
    
    return(
        <>
            <main className={styles.main}>
                <div className={styles.container} ref={container}>
                    <div className={styles.stickyMask} ref={stickyMask}>
                        <video 
                            playsInline
                            preload="none"
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