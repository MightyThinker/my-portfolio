import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';

/**
 * SpeechBubble component displays an animated speech bubble
 * with a typewriter effect cycling through introduction phrases.
 * Uses Framer Motion for fade-in animation and react-type-animation
 * for the typing effect. Includes a profile image/icon.
 */
export default function SpeechBubble() {
  return (
    <motion.div
      animate={{opacity : [0,1]}}
      transition={{ duration: 1.5 }}
      className='bubble-container'>
        <div className="speech-bubble">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I am Pratyush Kumar.',
              1000, // wait 1s before starting the next sequence
              'I am a Full Stack Java Developer.',
              1000, // wait 1s before writing another sequence
              "This website has been created using Vite+React with framer-motion and ThreeJS.",
              1000, // wait 1s before starting the another sequence
              "All 3D Logos have been created using Blender 4.5.",
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1rem', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        {/* Small Profile Icon */}
        <img src="/favicon.ico" alt="Speech Bubble" />
    </motion.div>
  )
}
