import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';

/**
 * SpeechBubble component displays an animated speech bubble
 * with a typewriter effect cycling through introduction phrases.
 * Uses Framer Motion for fade-in animation and react-type-animation
 * for the typing effect. Includes a profile image/icon.
 */
export default function SpeechBubble({
  speechBubble: {
    sequence = ["", 1],
    image = { src: "", alt: "Add Image" }
  } = {} }) {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      className='bubble-container'>
      <div className="speech-bubble">
        <TypeAnimation
          sequence={sequence}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1rem', display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
      {/* Small Profile Icon */}
      <img src={image.src} alt={image.alt} />
    </motion.div>
  )
}
