import React from 'react'
import { motion } from 'framer-motion';
import { opacity, expand } from './anim';

export default function Layout({children, backgroundColor, overlayColor = '#1e40af', columnColor = '#1e40af', overlayContent = null}) {
    // overlayColor is kept for backward-compat but overlayGradient takes precedence
    const overlayGradient = 'linear-gradient(135deg, #000000 0%, #ffffff 100%)'
    const columnGradient = 'linear-gradient(180deg, #000000 0%, #ffffff 100%)'

    const anim = (variants, custom=null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    const nbOfColumns = 5
    return (
        <div className='page stairs' style={{backgroundColor}}>
            <motion.div {...anim(opacity)} className='transition-background' style={{background: overlayGradient || overlayColor}}/>
            <div className='transition-container'>
                {
                    [...Array(nbOfColumns)].map( (_, i) => {
                        return (
                            <motion.div key={i} {...anim(expand, i)} style={{background: columnGradient || columnColor}}/>
                        ) 
                    })
                }
            </div>
            <motion.div {...anim(opacity)} className='transition-overlay'>
                {overlayContent ?? <span className='transition-text'>NEW LOOK</span>}
            </motion.div>
            {
                children
            }
        </div>
    )
}