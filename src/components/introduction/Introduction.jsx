import React from 'react'
import './Introduction.css';
import SpeechBubble from './SpeechBubble';

export default function Introduction() {
  return (
    <div className="introduction">

      {/* Left Section */}
      <div className="iSection left">

        {/* Intro */}
        <h1 className="iTitle">
          I'm <br/>
          <span>Pratyush Kumar!</span>
        </h1>

        {/* Professional Summary */}
        <div className="prof-summary">
          <h3>Full Stack Java Developer</h3>
          <p>
            Full Stack Developer with 3+ years of experience in building scalable applications using ReactJS, Spring Boot, MySQL/MongoDB, and Kafka. Proficient in designing microservices, optimizing APIs, and deploying solutions on AWS. Passionate about clean architecture, efficient problem-solving, and end-to-end development.
          </p>
        </div>

        {/* Scroll bar */}
        <a href='#skills' className='scroll'>
          <svg width="32" height="56" viewBox="0 0 32 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="30" height="54" rx="15" stroke="#999" stroke-width="2"/> {/* Outer rect circle */}
            <rect x="14" y="9" width="4" height="9" rx="2" fill="#999"/> {/* Inner scroll wheel */}
          </svg>
        </a>
      </div>

      {/* Right Section */}
      <div className="iSection right">

        {/* Social Profile Section */}
        <div className="social-prof">
          <a href="https://www.linkedin.com/in/mighty-thinker/" target="_blank" rel="noopener noreferrer">
            <img src='https://img.icons8.com/fluency/30/linkedin.png' alt='LinkedIn' />
          </a>
          <a href="https://github.com/MightyThinker" target="_blank" rel="noopener noreferrer">
          <img src='https://img.icons8.com/fluency/30/github.png' alt='GitHub' />
          </a>
          <a href="mailto:pratyush1002@gmail.com">
            <img src='https://img.icons8.com/fluency/30/gmail.png' alt='E-Mail' />
          </a>
          <a href="https://www.instagram.com/_pratyush_kumar_/" target="_blank" rel="noopener noreferrer">
            <img src='https://img.icons8.com/fluency/30/instagram-new.png' alt='Instagram' />
          </a>
          <div className="follow-text-container">
            <div className="follow-text">FOLLOW ME</div>
          </div>
        </div>

        {/* Speech Bubble */}
        <SpeechBubble />

        {/* Download Resume */}
        <a href="https://drive.google.com/file/d/1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <div className='download-btn' >
            <img src='https://img.icons8.com/fluency/30/resume.png' alt='Download Resume' />
            RÉSUMÉ
          </div>
        </a>

        {/* Contact Button Rotating */}
        <a href="#contacts" className='contact-link'>
          <div className="contact-button">
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
          </div>
        </a>

      </div>

      {/* 3D Image Background */}
      <div className="bgImg">
        <div className="intr-img">
          <img src="/Pratyush_NoBG.png" alt="Pratyush_Photo" />
        </div>
      </div>
    </div>
  )
}
