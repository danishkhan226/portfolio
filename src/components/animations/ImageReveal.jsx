'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ImageReveal({ src, alt, className, style }) {
  return (
    <div style={{ ...style, position: 'relative', overflow: 'hidden' }} className={className}>
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        style={{ width: '100%', height: '100%' }}
      >
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
