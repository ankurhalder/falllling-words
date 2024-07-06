/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import PropTypes from "prop-types";

const Word = ({ text }) => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [Math.random() * 10 - 5, Math.random() * 10 + 5, 0],
    args: [1, 1, 1],
    velocity: [0, -5, 0],
  }));

  useEffect(() => {
    const unsubscribe = api.position.subscribe(([y]) => {
      if (y < -5) {
        api.position.set(Math.random() * 10 - 5, Math.random() * 10 + 5, 0);
        api.velocity.set(0, -5, 0);
      }
    });
    return () => unsubscribe();
  }, [api]);

  return (
    <group ref={ref}>
      <Text fontSize={1} anchorX="center" anchorY="middle">
        {text}
      </Text>
    </group>
  );
};

Word.propTypes = {
  text: PropTypes.string.isRequired,
};

const Plane = (props) => {
  usePlane(() => ({ ...props }));
  return null;
};

const ThreeDScene = () => {
  const words = ["Hello", "World", "React", "Three.js", "Framer Motion"];

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ background: "black" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Physics gravity={[0, -9.81, 0]}>
        {words.map((word, index) => (
          <Word key={index} text={word} />
        ))}
        <Plane position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
    </Canvas>
  );
};

export default ThreeDScene;
