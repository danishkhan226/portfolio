'use client';

import { motion } from 'framer-motion';

export default function SplitText({ text, delay = 0, className = '', style = {} }) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 45,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: 'inline-flex', perspective: '1000px', ...style }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span 
          key={wordIndex} 
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              variants={child}
              whileHover={{ 
                y: 0,
                scale: 1.2,
                rotate: [0, -25, 20, -15, 10, -5, 0],
                color: 'var(--primary)',
                textShadow: [
                  "0 0 0px var(--primary)",
                  "0 0 30px var(--primary)",
                  "0 0 0px var(--primary)"
                ],
                transition: { 
                  duration: 0.8, 
                  ease: "easeOut",
                  rotate: { duration: 1, ease: "anticipate" }
                }
              }}
              style={{ 
                display: 'inline-block', 
                transformOrigin: 'top center'
              }}
            >
              {letter}
            </motion.span>
          ))}
          {/* Add a space after the word if it's not the last word */}
          {wordIndex < words.length - 1 && (
            <span style={{ display: 'inline-block', whiteSpace: 'pre' }}> </span>
          )}
        </span>
      ))}
    </motion.span>
  );
}
