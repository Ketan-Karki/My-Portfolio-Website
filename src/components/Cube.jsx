import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.getElapsedTime()) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshToonMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#f897d6"]} />
          <Text ref={textRef} fontSize={3} color="#555">
            Coder
          </Text>
        </RenderTexture>
      </meshToonMaterial>
    </mesh>
  );
};

export default Cube;
