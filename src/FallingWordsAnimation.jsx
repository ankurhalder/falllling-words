import React from "react";
import { motion } from "framer-motion";

const FallingWordsAnimation = () => {
  const words = ["Hello", "World", "Framer", "Motion", "Animation"];

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: `${Math.random() * 100}vw`, // Randomize initial position horizontally
            fontSize: "2rem",
            fontWeight: "bold",
            color: "blue",
          }}
          animate={{ top: "100vh" }} // Animation to move from top to bottom
          transition={{
            duration: 5 + Math.random() * 5,
            ease: "linear",
            repeat: Infinity,
          }} // Customize animation duration and easing
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default FallingWordsAnimation;
