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
            filter: "blur(1px)", // Add a slight blur effect
            opacity: 1,
          }}
          animate={{
            top: "100vh",
            y: (custom) => `${100 + custom * 50}vh`, // Adjust based on custom prop for parallax effect
            rotate: `${(Math.random() - 0.5) * 20}deg`,
            scale: 1,
            opacity: 0, // Fade out
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
