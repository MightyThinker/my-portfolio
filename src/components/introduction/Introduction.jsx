import React from 'react'
import './Introduction.css'

export default function Introduction() {
  return (
    <div className="introduction">

      {/* Left Section */}
      <div className="iSection left">

        {/* Title */}
        <h1 className="iTitle">
          Hi There,
          <br />
          <span>I'm Pratyush Kumar!</span>
        </h1>

        {/* Professional Summary */}
        <div className="prof-summary">
          <h2>Full Stack Java Developer</h2>
          <p>
            Full Stack Java Developer with 3 years of experience delivering end-to-end web applications using ReactJS, Spring Boot, and MySQL/MongoDB. Improved API efficiency by 30%, integrated responsive UIs, and built reusable microservices with Kafka-based centralized logging. Experienced with AWS (Lambda, DynamoDB, CloudWatch, Amazon Connect), OAuth2, Redis caching, circuit breaker patterns, and Agile delivery across multi-environment deployments.
          </p>
        </div>

        {/* Scroll bar */}
        <a href='#skills'>
          <svg width="32" height="56" viewBox="0 0 32 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="30" height="54" rx="15" stroke="#999" stroke-width="2"/> {/* Outer rect circle */}
            <rect x="14" y="9" width="4" height="9" rx="2" fill="#999"/> {/* Inner scroll wheel */}
          </svg>
        </a>
      </div>

      {/* Right Section */}
      <div className="iSection right"></div>
    </div>
  )
}
