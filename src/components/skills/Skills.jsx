import React from 'react';
import './Skills.css';
import { SpringBootLogo } from './SpringBootLogo';
import LogoContainer from './LogoContainer';
import { motion } from 'motion/react';
import { useSectionInView } from '@reusable/useSectionInView';

/**
 * Skills component displays the user's technical skills and 3D logo grid.
 * - Left section: Animated list of categorized skills.
 * - Right section: Animated 3D logo grid (LogoContainer).
 * Uses Framer Motion for entrance animations and a custom hook for in-view detection.
 */
export default function Skills() {

  // Array of skill categories and their respective skills
  const mySkillSets = [
    {
      id: "sp-1",
      name: "Languages",
      skills: ["Java", "JavaScript", "SQL"]
    },
    {
      id: "sp-2",
      name: "Frontend",
      skills: ["ReactJS", "Framer-Motion", "ThreeJS", "Material UI", "Bootstrap"]
    },
    {
      id: "sp-3",
      name: "Backend & Frameworks",
      skills: ["Spring Boot", "Spring Security", "Spring Data JPA", "RESTful APIs"]
    },
    {
      id: "sp-4",
      name: "Databases",
      skills: ["MySQL", "MongoDB", "Redis", "H2"]
    },
    {
      id: "sp-5",
      name: "Messaging & Logging",
      skills: ["Apache Kafka", "Log4j"]
    },
    {
      id: "sp-6",
      name: "Authentication & Architecture",
      skills: ["OAuth2", "API Gateway", "Eureka", "Load Balancer", "Circuit Breaker", "Microservices"]
    },
    {
      id: "sp-7",
      name: "Testing",
      skills: ["JUnit", "Mockito"]
    },
    {
      id: "sp-8",
      name: "Cloud & AWS Services",
      skills: ["Amazon Connect", "AWS Lambda", "CloudWatch", "DynamoDB", "IAM"]
    },
    {
      id: "sp-9",
      name: "Tools",
      skills: ["Git", "Maven", "Postman", "Swagger", "Blender 4.5"]
    },
    {
      id: "sp-10",
      name: "IDEs & OS",
      skills: ["VS Code", "Eclipse", "Linux", "Windows"]
    },
    {
      id: "sp-11",
      name: "Project Management",
      skills: ["Agile", "JIRA"]
    }
  ];

  // Animation hooks for left & right sections (triggered when in view)
  const { ref: leftRef, controls: leftControls } = useSectionInView({ threshold: 0.5 });
  const { ref: rightRef, controls: rightControls } = useSectionInView({ threshold: 0.5 });

  // Animation variants for left section (fade in from top)
  const leftVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.25 } }
  };

  // Animation variants for right section (fade in from bottom)
  const rightVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.25 } }
  };

  // Animation variants for each skill item (fade in from left)
  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } }
  };




  return (
    <div className="skills">
      {/* Left Section: Skill list with animation */}
      <motion.div 
        ref={leftRef}
        className="sSection left"
        initial="hidden"
        animate={leftControls}
        variants={leftVariants}
      >
        <h1 className='sTitle'>Technical Skills</h1><br />
        <motion.ul className="skill-list">
          {mySkillSets.map((skillSet) => (
            <motion.li key={skillSet.id} className="skill-set" variants={skillItemVariants}>
              <span className="skill-name">{skillSet.name}:</span>
              <span className="skill-values"> {skillSet.skills.join(", ")}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>


      {/* Right Section: 3D Logo grid with animation */}
      <motion.div ref={rightRef}
        className="sSection right"
        initial="hidden"
        animate={rightControls}
        variants={rightVariants}
      >
        <LogoContainer />
      </motion.div>
    </div>
  )
}
