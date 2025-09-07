'use client'
import { motion } from 'framer-motion';

const FadeUp = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  distance = 30,
  className = "",
  ...props 
}) => {
  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: distance,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: 1.6 + delay, // Start after stairs transition (1.4s) + small buffer
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeUpVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
