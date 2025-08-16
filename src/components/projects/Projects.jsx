import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Projects() {

  const myProjectsData = [
    {
      title: "3D Animated Portfolio",
      techStack: ["ReactJS + Vite", "Three.js", "Framer-Motion", "Blender 4.5"],
      description: [
        "Developed an interactive 3D portfolio using Three.js for immersive visuals and animations.",
        "Used Framer Motion for smooth, scroll-based transitions and entrance effects.",
        "Created custom 3D logo models from SVG in Blender 4.5, optimized for high performance.",
        "Showcases professional skills, projects, and links in a modern, responsive design."
      ],
      image: "/3D-Portfolio-website.png",
      url: "https://github.com/MightyThinker/my-portfolio"
    },
    {
      title: "Inventory Management System",
      techStack: ["ReactJS", "ElectronJS", "Spring Boot", "H2 Database"],
      description: [
        "Built a desktop inventory tracking app using ReactJS + ElectronJS for offline compatibility.",
        "Implemented backend with Spring Boot and H2 database for quick setup and zero dependencies.",
        "Optimized for offline-first usage, ideal for small business and retail environments.",
        "Modular architecture allows future cloud sync and analytics features (in development)."
      ],
      image: "/inventory-management-system.png",
      url: "https://github.com/MightyThinker/Inventory-Management-System"
    },
    {
      title: "Video Transcription Generator",
      techStack: ["Python", "SpeechRecognition", "PyDub", "ffmpeg"],
      description: [
        "Created a Python tool to convert videos into text transcripts via audio extraction.",
        "Used FFmpeg and PyDub to automate audio processing and formatting.",
        "Generated structured text outputs using SpeechRecognition library.",
        "Added logging and retry mechanisms for robust and maintainable processing."
      ],
      image: "/transcript-generation.png",
      url: "https://github.com/MightyThinker/TranscriptGeneration"
    }
  ];

  const ListItem = ({ item }) => { 
    return(
      <div className="pItem">
        <div className="pImg">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="pAbout">
          <h2>{item.title}</h2>
          <p>Tech: {item.techStack.join(", ")}</p>
          <ul>
            {item.description.map((desc, index) => (
              <li className='pDescItem' key={index}>{desc}</li>
            ))}
          </ul>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <button>View on GitHub</button>
          </a>
        </div>
      </div>
    )
  };

  const ref = useRef(null);
  const [containerDistance, setContainerDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target : ref });

  useEffect(() => {
    if(ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
    }
  }, []);

  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * (myProjectsData.length - 1)]);

  return (
    <div className="projects" ref={ref}>
      <div style={{ width: window.innerWidth - containerDistance }} />
      <motion.div className="pList" style={{ x: xTranslate }}>
        {myProjectsData.map((project) => (
          <ListItem key={project.title} item={project} />
        ))}
      </motion.div>
      <section />
      <section />
    </div>
  )
}
