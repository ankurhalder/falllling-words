import React from "react";
import { motion } from "framer-motion";

const FallingWordsAnimation = () => {
  const words = ["Hello", "World", "Framer", "Motion", "Animation"];

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
            left: `${Math.random() * 100}vw`, // Randomize initial position horizontally
            fontSize: `${1 + Math.random() * 2}rem`, // Randomize font size
            fontWeight: "bold",
            color: "#333",
            zIndex: 100,
          }}
          animate={{
            top: "100vh",
            rotate: `${(Math.random() - 0.5) * 20}deg`, // Randomize rotation
            scale: 1, // Ensure each word maintains its original scale
          }}
          transition={{
            duration: 3 + Math.random() * 3, // Randomize duration
            ease: "easeInOut", // Smooth easing for natural motion
            repeat: Infinity,
            repeatType: "mirror", // Reverse animation direction on repeat
            delay: Math.random() * 2, // Random delay before animation starts
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default FallingWordsAnimation;
