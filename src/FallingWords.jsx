import { motion } from "framer-motion";
import "./App.scss"; // Import the SCSS file

const words = ["Hello", "World", "React", "Framer", "Motion"];

const FallingWords = () => {
  return (
    <div className="App">
      {words.map((word, index) => (
        <motion.div
          key={index}
          className="falling-word"
          style={{
            top: "-50px",
            left: `${Math.random() * 100}vw`,
          }}
          animate={{
            y: "100vh",
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            delay: index * 0.5,
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

export default FallingWords;
