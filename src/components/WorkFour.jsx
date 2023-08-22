import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Laptop from "./Laptop";
import { styled } from "styled-components";

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 100px;
  right: 350px;

  @media only screen and (max-width: 768px) {
    bottom: 10px;
    left: 65px;
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    bottom: 180px;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WorkFour = () => {
  return (
    <>
      <Canvas camera={{ zoom: 0.75 }}>
        <Stage environment={"dawn"} intensity={0.7}>
          <Laptop />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Links>
        <a href="https://leetcode.com/ketankarki2626/">
          <Img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/ketankarki2626/practice/">
          <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png" />
        </a>
        <a href="https://www.codingninjas.com/studio/profile/0f5ad90d-ab97-431c-bc9d-e41a7d481bd6">
          <Img src="https://asset.brandfetch.io/idQVGbrvGL/idFrWdCkB5.png" />
        </a>
        <a href="https://www.hackerrank.com/ketankarki2626">
          <Img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" />
        </a>
        <a href="https://codeforces.com/profile/_KETAN_">
          <Img src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png" />
        </a>
      </Links>
      <Desc>
        These are my profiles of various platforms where I practice my DSA
        primarily in C++
      </Desc>
    </>
  );
};

export default WorkFour;
