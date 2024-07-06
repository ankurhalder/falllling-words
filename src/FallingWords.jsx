import { motion } from "framer-motion";
import "./App.scss"; // Import the SCSS file

const words = [
  "Hello",
  "World",
  "React",
  "Framer",
  "Motion",
  "JavaScript",
  "Animation",
  "CSS",
  "HTML",
  "Web",
  "Development",
  "Frontend",
  "Backend",
  "Fullstack",
  "Node.js",
  "Express",
  "MongoDB",
  "Redux",
  "TypeScript",
];

const FallingWords = () => {
  const containerStyle = {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={containerStyle}>
      {words.map((word, index) => (
        <motion.div
          key={index}
          className="falling-word"
          style={{
            position: "absolute",
            fontSize: "2rem",
            fontWeight: "bold",
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
          drag // Enable drag for interactive control
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }} // Constrain to viewport
          dragElastic={0.1} // Elasticity of drag
          dragMomentum={false} // Disable momentum on drag
          dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }} // Bounce effect on drag release
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

export default FallingWords;
