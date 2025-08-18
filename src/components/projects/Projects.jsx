import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { motion, useInView, useScroll, useTransform } from 'motion/react';

export default function Projects() {

  const myProjectsData = [
    {
      id: "prj-1",
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
      id: "prj-2",
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
      id: "prj-3",
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

  const ref = useRef(null);
  const [containerDistance, setContainerDistance] = useState(0);

  // Get the scroll position of the container when resizing
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  // Get the scroll position of the container
  const { scrollYProgress } = useScroll({ target: ref });

  // Calculate the x translation based on scroll position
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * myProjectsData.length]
  );

  // Animation
  const imgVariant = {
    hidden: { opacity: 0, x: -50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
  };

  const aboutVariant = {
    hidden: { opacity: 0, x: 50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.25
      }
    }
  };

  // List item component for each project
  const ListItem = ({ item }) => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });
    return (
      <div className="p-item" ref={ref}>

        {/* Project/Product Image */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imgVariant}
          className="p-img"
        >
          <img src={item.image} alt={item.title} />
        </motion.div>

        {/* Project/Product Details */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={aboutVariant}
          className="p-about"
        >
          <motion.h2 variants={aboutVariant}>{item.title}</motion.h2>
          <motion.p variants={aboutVariant}>Tech: {item.techStack.join(", ")}</motion.p>
          <motion.ul variants={aboutVariant}>
            {item.description.map((desc, index) => (
              <motion.li key={index} variants={aboutVariant}>{desc}</motion.li>
            ))}
          </motion.ul>
          <motion.a variants={aboutVariant} href={item.url} target="_blank" rel="noopener noreferrer">
            <button>View on GitHub</button>
          </motion.a>
        </motion.div>
      </div>
    )
  };

  return (
    <div className="projects" ref={ref}>
      <motion.div className="p-list" style={{ x: xTranslate }}>

        {/* This div will be the space for the projects to scroll into view */}
        <div className='p-empty-space'
          style={{
            width: window.innerWidth - containerDistance
          }}
        />

        {/* Here the list of all projects data */}
        {myProjectsData.map((project) => (
          <ListItem key={project.id} item={project} />
        ))}
      </motion.div>

      {/* This section will be the vertical space for the projects to scroll into view and number of section tag below will be equal to (number of projects) and also change the height of .position in css file to (number of project *100vh) */}
      <section />
      <section />
      <section />
    </div>
  )
}
