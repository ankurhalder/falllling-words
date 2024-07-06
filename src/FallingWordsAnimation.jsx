import React from "react";
import { motion } from "framer-motion";

const FallingWordsAnimation = () => {
  const words = [
    "Ankur Halder",
    "ankur",
    "halder",
    "Software Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Django Developer",
    "Python Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "Open Source Contributor",
    "python",
    "github",
    "eduversa",
    "adcomsys",
    "uem",
    "kolkata",
    "development",
    "react",
    "certificate",
    "skills",
  ];

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f0f0f0",
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: `${Math.random() * 100}vw`,
            fontSize: `${1 + Math.random() * 2}rem`,
            fontWeight: "bold",
            color: "#333",
            zIndex: 100,
            perspective: "1000px", // Add perspective for 3D effect
          }}
          initial={{
            opacity: 0, // Start with opacity 0
            rotateX: -90, // Rotate around X-axis to make it 3D
            scale: 0.5, // Start with a smaller scale
          }}
          animate={{
            top: "100vh",
            y: (custom) => `${100 + custom * 50}vh`, // Adjust based on custom prop for parallax effect
            rotateX: 0, // Rotate back to normal
            scale: 1, // Return to normal scale
            opacity: 1, // Fade in
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: Math.random() * 2,
          }}
          custom={Math.random() * 2} // Custom prop for parallax effect
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default FallingWordsAnimation;
