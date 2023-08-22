import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cart from "./Cart";
import { styled } from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";

const Links = styled.div`
  position: absolute;
  top: 270px;
  right: 100px;
  color: white;
  @media only screen and (max-width: 768px) {
    top: 370px;
    left: 20px;
  }
`;

const Button = styled.button`
  width: 125px;
  padding: 10px;
  background-color: #bd2991;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 225px;
  right: 100px;
  @media only screen and (max-width: 768px) {
    top: 480px;
    right: 80px;
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
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WorkOne = () => {
  return (
    <>
      <Canvas camera={{ zoom: 0.5 }}>
        <Stage environment={"dawn"} intensity={0.7}>
          <Cart />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <a href="https://shopzen-ecommerce.netlify.app/">
        <Button>View Project</Button>
      </a>
      <Links>
        <a
          href="https://github.com/KetanKarki/ShopZen-eCommerce-Site"
          style={{ color: "white" }}
        >
          <GitHubIcon style={{ fontSize: "40px" }} />
        </a>
      </Links>
      <Desc>
        ShopZen is a feature-rich and user-friendly e-commerce app built with
        React.
      </Desc>
    </>
  );
};

export default WorkOne;
