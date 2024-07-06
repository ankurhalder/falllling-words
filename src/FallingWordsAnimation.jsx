import React from "react";
import { motion } from "framer-motion";

const FallingWordsAnimation = () => {
  const words = [
    "Hello",
    "World",
    "Framer",
    "Motion",
    "Animation",
    "React",
    "JavaScript",
    "Web",
    "Developer",
    "Code",
    "Design",
    "UI/UX",
    "OpenAI",
    "Technology",
    "Innovation",
    "Creative",
    "Engineer",
    "Frontend",
    "Backend",
    "Full-stack",
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
            opacity: 1,
          }}
          initial={{
            opacity: 0, // Start invisible
            y: "-5vh", // Offset initial position slightly above top
          }}
          animate={{
            y: "100vh", // Move to bottom of screen
            rotate: `${(Math.random() - 0.5) * 360}deg`, // Random rotation
            scale: [1, 0.8, 1], // Add a slight bounce effect
            opacity: [1, 0.5, 1], // Fade in and out slightly
          }}
          transition={{
            duration: 4 + Math.random() * 2, // Randomize duration
            ease: "easeInOut", // Smooth easing
            repeat: Infinity,
            repeatType: "mirror",
            delay: Math.random() * 2,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default FallingWordsAnimation;
