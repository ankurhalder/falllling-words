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
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", // Add subtle text shadow
          }}
          initial={{
            opacity: 0,
            y: "-10vh", // Start slightly above the top of the screen
            scale: 0.5, // Start small
          }}
          animate={{
            y: "100vh",
            rotate: `${(Math.random() - 0.5) * 360}deg`,
            scale: 1,
            opacity: 1,
            transitionEnd: {
              opacity: 0, // Fade out at end of animation
            },
          }}
          transition={{
            duration: 4 + Math.random() * 3, // Randomize duration
            ease: "easeOut", // Smooth easing with a gradual slowdown
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
