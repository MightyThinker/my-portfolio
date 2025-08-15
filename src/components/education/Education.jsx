import React from 'react';
import './Education.css';
import { motion } from 'motion/react';
import EducationSvg from './EducationSvg';
import { useSectionInView } from '@reusable/useSectionInView';

export default function Education() {

  const myEducationData = [
    {
      "degree": "Bachelor of Technology",
      "field": "Computer Science and Engineering",
      "institution": "Nalanda College of Engineering, Chandi",
      "institutionUrl": "https://ncechandi.ac.in/",
      "affiliation": "Aryabhatta Knowledge University, Patna",
      "affiliationUrl": "https://akubihar.ac.in/EN/Default.aspx",
      "session": "2018-2022",
      "result": "7.91 CGPA"
    },
    {
      "degree": "Senior Secondary",
      "field": "Physics, Chemistry, Mathematics, English, Hindi, Physical Education",
      "institution": "St. Xavier's Jr./Sr. School, Goshala, Muzaffarpur",
      "institutionUrl": "https://www.facebook.com/people/St-Xavier-JrSr-School/100084138383751/",
      "affiliation": "Central Board of Secondary Education, New Delhi",
      "affiliationUrl": "https://www.cbse.gov.in/cbsenew/cbse.html",
      "session": "2016-2018",
      "result": "77%"
    },
    {
      "degree": "Higher Secondary",
      "field": "English, Hindi, Mathematics, Science, Social Science, Information Technology",
      "institution": "St. Xavier's Jr./Sr. School, Goshala, Muzaffarpur",
      "institutionUrl": "https://www.facebook.com/people/St-Xavier-JrSr-School/100084138383751/",
      "affiliation": "Central Board of Secondary Education, New Delhi",
      "affiliationUrl": "https://www.cbse.gov.in/cbsenew/cbse.html",
      "session": "2015-2016",
      "result": "10 CGPA"
    }
  ];

  // Animation hooks for left & right sections (triggered when in view)
    const { ref: leftRef, controls: leftControls } = useSectionInView({ threshold: 0.5 });
    const { ref: rightRef, controls: rightControls } = useSectionInView({ threshold: 0.5 });

  // Container variants for left section (slides in from right)
  const leftSectionVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        when: "beforeChildren",
        duration: 1,
        staggerChildren: 1 // animate each child in sequence
      }
    }
  };

  // Each item comes from left
  const listVariant = {
    hidden: { x: -40, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  // Each education item animates bottom-to-top
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.25, ease: "easeOut" } }
  };

  // Right section variants (slides in from left)
  const rightSectionVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 15, duration: 1 }
    }
  };

  return (
    <div className="education">
      <motion.div ref={leftRef} initial="hidden" animate={leftControls} variants={leftSectionVariants} className="eSection left">
        <h1 className='eTitle'>Education Details</h1>
        <div className="education-details">
          {myEducationData.map((edu, index) => (
            <motion.div variants={listVariant} key={index} className="education-item">
              <motion.h3 variants={itemVariants} className="education-degree"><span className="left-param">Degree: </span><span className='right-param'>{edu.degree}</span></motion.h3>
              <motion.p variants={itemVariants} className="education-institution"><span className="left-param">College: </span>
                <a className='right-param' href={edu.institutionUrl} target="_blank" rel="noopener noreferrer">
                  {edu.institution}🔗
                </a>
              </motion.p>
              <motion.p variants={itemVariants} className="education-affiliation"><span className="left-param">Affiliation: </span>
                <a className='right-param' href={edu.affiliationUrl} target="_blank" rel="noopener noreferrer">
                  {edu.affiliation}🔗
                </a>
              </motion.p>
              <motion.p variants={itemVariants} className="education-field"><span className="left-param">Area of Study: </span><span className='right-param'>{edu.field}</span></motion.p>
              <motion.p variants={itemVariants} className="education-session"><span className="left-param">Session: </span><span className='right-param'>{edu.session}</span></motion.p>
              <motion.p variants={itemVariants} className="education-result"><span className="left-param">Result: </span><span className='right-param'>{edu.result}</span></motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div ref={rightRef} initial="hidden" animate={rightControls} variants={rightSectionVariants} className="eSection right">
        <EducationSvg />
      </motion.div>
    </div>
  )
}
