/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 bird.gltf --transform 
Files: bird.gltf [18.17MB] > bird-transformed.glb [1.91MB] (90%)
Author: Václav Pleticha (https://sketchfab.com/klidas8)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bird-e63479b07d8c4ae6a69b34247d572299
Title: Bird
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/bird-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.SM_Bird_MAT_Bird_0.geometry}
        material={materials.MAT_Bird}
      />
      <mesh
        geometry={nodes.SM_branch_MAT_branch_0.geometry}
        material={materials.MAT_branch}
      />
    </group>
  );
}

useGLTF.preload("/bird-transformed.glb");