'use client'
import { useRef, useEffect } from 'react';
import styles from './page.module.css';

export default function Mask(){
    const container = useRef(null)
    const stickyMask = useRef(null)

    const initialMaskSize = 1;
    const TargetMaskSize = 30.9 // mask end-result
    const easing = 0.15;
    let easedScrollProgress = 0;

    useEffect(() => {
        requestAnimationFrame(animate) //It’s a built-in browser function that tells the browser: "Hey, call this function again before the next repaint”
    }, [])

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
                        <video autoPlay muted loop>
                            <source src="medias/nature.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </main>
        </>
    )
}