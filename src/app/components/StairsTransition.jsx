'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const expand = {
    initial: {
        height: "100vh",
        top: 0
    },
    enter: (i) => ({    
        height: "0vh",
        transition: {
            duration: 0.7,
            delay: 0.08 * i,
            ease: [0.76, 0, 0.24, 1],
        }
    }),
    exit: (i) => ({
        height: "100vh",
        transition: {
            duration: 0.7,
            delay: 0.08 * (7 - i), // Reverse order for exit
            ease: [0.76, 0, 0.24, 1]
        }
    })
}

const opacity = {
    initial: {
        opacity: 1 // Start visible to cover content
    },
    enter: {
        opacity: 0,
        transition: {
            duration: 0.4,
            delay: 1.4 // Hide after stairs complete
        }
    },
    exit: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    }
}

const textAnimation = {
    initial: {
        opacity: 0,
        scale: 0.8,
        y: 20
    },
    enter: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: -10,
        transition: {
            duration: 0.3,
            delay: 0.6, // Start fading out after being visible for a while
            ease: "easeIn"
        }
    }
}

export default function StairsTransition({ children }) {
    const pathname = usePathname();
    const [isInitialMount, setIsInitialMount] = useState(true);
    const overlayGradient = 'linear-gradient(135deg, #000000 0%, #333333 50%, #666666 100%)'
    const columnGradient = 'linear-gradient(180deg, #000000 0%, #ffffff 100%)'

    // Track initial mount to prevent transition on first load
    useEffect(() => {
        setIsInitialMount(false);
    }, []);

    const anim = (variants, custom=null) => {
        return {
            initial: isInitialMount ? false : "initial", // Skip initial animation on first mount
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    const nbOfColumns = 8

    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname} className="stairs-wrapper" style={{position: 'relative', minHeight: '100vh'}}>
                {/* Stairs Animation Layer */}
                <motion.div {...anim(opacity)} className='transition-background' style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100vh',
                    background: overlayGradient,
                    zIndex: 999997,
                    pointerEvents: 'none',
                    top: 0,
                    left: 0
                }}/>
                
                <div className='transition-container' style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    left: 0,
                    top: 0,
                    pointerEvents: 'none',
                    zIndex: 999998,
                }}>
                    {
                        [...Array(nbOfColumns)].map( (_, i) => {
                            return (
                                <motion.div 
                                    key={i} 
                                    {...anim(expand, i)} 
                                    style={{
                                        background: columnGradient,
                                        position: 'absolute',
                                        width: `${100/nbOfColumns}%`,
                                        left: `${(100/nbOfColumns) * i}%`,
                                        top: 0,
                                        borderRight: '1px solid rgba(255,255,255,0.1)',
                                    }}
                                />
                            ) 
                        })
                    }
                </div>
                
                {/* Page Content */}
                <motion.div 
                    initial={isInitialMount ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
                    animate={{ 
                        opacity: 1,
                        visibility: 'visible',
                        transition: isInitialMount ? {} : {
                            opacity: { duration: 0.4, delay: 1.5, ease: "easeOut" },
                            visibility: { delay: 1.5 }
                        }
                    }}
                    exit={{ 
                        opacity: 0,
                        visibility: 'hidden',
                        transition: {
                            opacity: { duration: 0.4, ease: "easeIn" },
                            visibility: { duration: 0 }
                        }
                    }}
                    style={{position: 'relative', zIndex: 1}}
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
