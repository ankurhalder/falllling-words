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

  // Function to generate random font size between 1rem and 3rem
  const getRandomFontSize = () => `${1 + Math.random() * 2}rem`;

  // Array of font families to choose from
  const fontFamilies = [
    "Arial, sans-serif",
    "Roboto, sans-serif",
    "Helvetica, sans-serif",
    "Times New Roman, serif",
    "Courier New, monospace",
  ];

  // Function to get a random font family
  const getRandomFontFamily = () =>
    fontFamilies[Math.floor(Math.random() * fontFamilies.length)];

  // Function to generate random rotation angle between -10deg and 10deg
  const getRandomRotation = () => `${(Math.random() - 0.5) * 20}deg`;

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
            fontSize: getRandomFontSize(), // Random font size
            fontWeight: "bold",
            fontFamily: getRandomFontFamily(), // Random font family
            color: "#333",
          }}
          initial={{
            opacity: 0, // Start with opacity 0
            rotateX: -90,
            scale: 0.5,
            rotateZ: getRandomRotation(), // Random initial rotation
          }}
          animate={{
            top: "100vh",
            y: (custom) => `${100 + custom * 50}vh`, // Adjust based on custom prop for parallax effect
            rotateX: 0, // Rotate back to normal
            scale: 1, // Return to normal scale
            opacity: 1, // Fade in
            rotateZ: getRandomRotation(), // Randomize rotation during animation
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
