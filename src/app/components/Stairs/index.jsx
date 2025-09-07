import React from 'react'
import { motion } from 'framer-motion';
import { opacity, expand } from './anim';

export default function Layout({children, backgroundColor = "white", overlayColor = '#1e40af', columnColor = '#1e40af', overlayContent = null}) {
    // Custom gradients for a more refined look
    const overlayGradient = 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)'
    const columnGradient = 'linear-gradient(180deg, #1e3a8a 0%, #3b82f6 100%)'

    const anim = (variants, custom=null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    // Page content animation to sync with transition
    const pageAnimation = {
        initial: { opacity: 0 },
        enter: { 
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: 1.6, // Increased delay so content appears after stairs finish
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 1, // Keep visible during exit
            transition: {
                duration: 0,
                ease: "easeIn"
            }
        }
    }

    const nbOfColumns = 8 // 8 columns for smooth stairs effect
    
    return (
        <div className='page stairs' style={{backgroundColor, position: 'relative', minHeight: '100vh'}}>
            <motion.div {...anim(opacity)} className='transition-background' style={{background: overlayGradient || overlayColor}}/>
            <div className='transition-container'>
                {
                    [...Array(nbOfColumns)].map( (_, i) => {
                        return (
                            <motion.div 
                                key={i} 
                                {...anim(expand, i)} 
                                style={{
                                    background: columnGradient || columnColor,
                                    position: 'absolute',
                                    width: `${100/nbOfColumns}%`,
                                    left: `${(100/nbOfColumns) * i}%`,
                                    top: 0
                                }}
                            />
                        ) 
                    })
                }
            </div>
            <motion.div 
                style={{position: 'relative', zIndex: 1}}
                {...anim(pageAnimation)}
            >
                {children}
            </motion.div>
        </div>
    )
}