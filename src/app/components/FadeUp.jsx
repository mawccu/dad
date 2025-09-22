// src/app/components/FadeUp.jsx
'use client'
import { motion } from 'framer-motion';

const FadeUp = ({
  children,
  delay = 0,
  duration = 0.8,
  distance = 30,
  exitDuration = 0.2,
  className = "",
  ...props
}) => {
  const variants = {
    initial: { opacity: 0, y: distance, pointerEvents: 'none' }, // 👈 no clicks while hidden
    animate: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
      transition: { duration, delay: 1.6 + delay, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      y: -8,
      pointerEvents: 'none',
      transition: { duration: exitDuration, ease: 'easeInOut', delay: 0 }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
