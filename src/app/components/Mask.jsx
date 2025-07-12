'use client'
import { useRef, useEffect } from 'react';
import styles from './page.module.css';
import { useProgress } from './ProgressProvider';

export default function Mask(){
    const container = useRef(null)
    const stickyMask = useRef(null)
    const videoRef = useRef(null);
    const { progress } = useProgress();

    const initialMaskSize = 1;
    const TargetMaskSize = 30.9 // mask end-result
    const easing = 0.15;
    let easedScrollProgress = 0;

    useEffect(() => {
        requestAnimationFrame(animate) //It’s a built-in browser function that tells the browser: "Hey, call this function again before the next repaint”
    }, [])

    useEffect(() => {
        if(progress === 100 && videoRef.current) {
            videoRef.current.play().catch(console.error);
        }
    })


    const animate = () => {
        const maskSizeProgress = TargetMaskSize * getScrollProgress();
        stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + '%';
        requestAnimationFrame(animate)
    }
    
    const getScrollProgress = () => {
        const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return easedScrollProgress
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