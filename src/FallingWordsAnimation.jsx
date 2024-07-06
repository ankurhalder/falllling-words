// FallingWordsAnimation.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, useBox } from "@react-three/cannon";
import { Text } from "@react-three/drei";
import "./App.scss"; // Import your SCSS file

const words = ["Hello", "World", "Framer", "Motion", "Animation"];

const FallingWordsAnimation = () => {
  return (
    <div className="canvas-container">
      <Canvas className="canvas">
        <Physics gravity={[0, -30, 0]} allowSleep>
          {words.map((word, index) => (
            <FallingWord
              key={index}
              word={word}
              position={[
                Math.random() * 10 - 5,
                10 + index * 2,
                Math.random() * 10 - 5,
              ]}
            />
          ))}
        </Physics>
      </Canvas>
    </div>
  );
};

const FallingWord = ({ word, position }) => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    rotation: [0, 0, 0],
    args: [1, 1, 1],
    onCollide: () => {
      api.applyImpulse([0, 20, 0], [0, 0, 0]); // Apply an impulse on collision for bounce effect
    },
  }));

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={1}
      color="black"
      anchorX="center"
      anchorY="middle"
      font="https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf"
    >
      {word}
    </Text>
  );
};

export default FallingWordsAnimation;
