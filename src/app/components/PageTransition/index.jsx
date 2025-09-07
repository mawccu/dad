'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'

const StairsTransition = () => {
  const stairs = Array.from({ length: 10 }, (_, i) => i)
  
  const stairAnimation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"]
    }
  }

  // Calculate delay for each stair to create wave effect
  const reverseIndex = (index) => {
    const totalSteps = stairs.length
    return totalSteps - index - 1
  }

  return (
    <>
      {stairs.map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className={styles.stair}
        />
      ))}
    </>
  )
}

export default function PageTransition({ children }) {
  const pathname = usePathname()
  const [isRouteChanging, setIsRouteChanging] = useState(false)

  useEffect(() => {
    setIsRouteChanging(true)
    const timeout = setTimeout(() => {
      setIsRouteChanging(false)
    }, 1000) // Match the total animation duration

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        {isRouteChanging && (
          <motion.div
            key="stairs-transition"
            className={styles.stairs}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <StairsTransition />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
