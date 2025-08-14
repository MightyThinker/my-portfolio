import React, { Suspense } from 'react'
import './Introduction.css';
import SpeechBubble from './SpeechBubble';
import { motion } from 'motion/react';
import { useSectionInView } from '@reusable/useSectionInView';
import { Canvas } from '@react-three/fiber';
import Shape from './Shape';

// Main Introduction component for the landing section
export default function Introduction() {

  // Custom hook to handle section in-view animations
  const { ref, controls } = useSectionInView({ threshold: 0.3 });

  // Animation variants for the left section (slide in from left)
  const iSectionLeft = {
    hidden : { x: -100, opacity: 0 },
    visible : { x: 0, opacity: 1, transition : { duration: 1, ease: "easeInOut" } }
  }

  // Animation variants for the right section (slide in from right)
  const iSectionRight = {
    hidden : { x: 100, opacity: 0 },
    visible : { x:0, opacity:1, transition : { duration: 1, ease: "easeInOut" } }
  }

  // Animation variants for the social profile icons (fade in from top with stagger)
  const socialProfileVariants = {
    hidden : {
      y : -100,
      opacity:0,
    },
    visible : {
      y : 0,
      opacity : 1,
      transition : {
        duration : 1,
        staggerChildren : 0.2,
        ease: "backIn",
      }
    }
  };

  return (
    <div ref={ref} className="introduction">

      {/* Left Section: Greeting, summary, and scroll indicator */}
      <motion.div variants={iSectionLeft} initial="hidden" animate={controls} className="iSection left">

        {/* Main greeting and name */}
        <h1 className="iTitle">
          Hi There, <br/>
          <span>I'm Pratyush Kumar!</span>
        </h1>

        {/* Professional Summary */}
        <div className="prof-summary">
          <h3>Full Stack Java Developer</h3>
          <p>
            Full Stack Developer with 3+ years of experience in building scalable applications using ReactJS, Spring Boot, MySQL/MongoDB, and Kafka. Proficient in designing microservices, optimizing APIs, and deploying solutions on AWS. Passionate about clean architecture, efficient problem-solving, and end-to-end development.
          </p>
        </div>

        {/* Animated scroll-down indicator */}
        <motion.a animate={{ y:[0,5], opacity:[0,1,0]}} transition={{ duration: 4, ease: "easeInOut", repeat: Infinity}} href='#skills' className='scroll'>
          <svg width="32" height="56" viewBox="0 0 32 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="30" height="54" rx="15" stroke="#999" stroke-width="2"/> {/* Outer rect circle */}
            <motion.rect animate={{y:[0,9]}} transition={{ duration: 4, ease: "easeInOut", repeat: Infinity}} x="14" y="9" width="4" height="9" rx="2" fill="#999"/> {/* Inner scroll wheel */}
          </svg>
        </motion.a>
      </motion.div>

      {/* Right Section: Social links, speech bubble, resume, and contact button */}
      <motion.div variants={iSectionRight} initial="hidden" animate={controls} className="iSection right">

        {/* Social Profile Section with animated icons and "FOLLOW ME" text */}
        {/* Image source: https://img.icons8.com/3d-fluency/30/<icon_name>.png */}
        <motion.div variants={socialProfileVariants} initial="hidden" animate={controls} className="social-prof">
          <motion.a variants={socialProfileVariants} href="https://www.linkedin.com/in/mighty-thinker/" target="_blank" rel="noopener noreferrer">
            <img src='/icons8-linkedin-30.png' alt='LinkedIn' />
          </motion.a>
          <motion.a variants={socialProfileVariants} href="https://github.com/MightyThinker" target="_blank" rel="noopener noreferrer">
            <img src='/icons8-github-30.png' alt='GitHub' />
          </motion.a>
          <motion.a variants={socialProfileVariants} href="https://t.me/MightyThinker" target="_blank" rel="noopener noreferrer">
            <img src='/icons8-telegram-30.png' alt='Telegram' />
          </motion.a>
          <motion.a variants={socialProfileVariants} href="https://www.instagram.com/_pratyush_kumar_/" target="_blank" rel="noopener noreferrer">
            <img src='/icons8-instagram-30.png' alt='Instagram' />
          </motion.a>
          <motion.div variants={socialProfileVariants} className="follow-text-container">
            <div className="follow-text">FOLLOW ME</div>
          </motion.div>
        </motion.div>

        {/* Speech bubble component (could be a quote or message) */}
        <SpeechBubble />

        {/* Download Resume Button */}
        <a href="/Pratyush_FullStack_Profile_Updated.pdf" download={"Pratyush_FullStack_Resume.pdf"} className='downoad-link' target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.75 }} className='download-btn' >
            <img src='https://img.icons8.com/fluency/30/resume.png' alt='Download Resume' />
            RÉSUMÉ
          </motion.div>
        </a>

        {/* Rotating Contact Button with SVG text and arrow */}
        <a href="#contacts" className='contact-link'>
          <motion.div
            animate={{ rotate: [0,360] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            className="contact-button">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="46%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </a>

      </motion.div>

      {/* 3D Object with Background Image Section */}
      <div className="bgImg">
        {/* 3D Shape */}
        <Canvas>
          <Suspense fallback="Loading...">
            <Shape />
          </Suspense>
        </Canvas>

        {/* Intro Image */}
        <div className="intr-img">
          <img src="/Pratyush_NoBG.png" alt="Pratyush_Photo" />
        </div>
      </div>
    </div>
  )
}
