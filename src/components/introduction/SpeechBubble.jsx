import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';

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
              1000 // wait 1s before writing another sequence"
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1rem', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <img src="/favicon.ico" alt="Speech Bubble" />
    </motion.div>
  )
}
