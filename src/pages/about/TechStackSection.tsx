import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import ts from "../../assets/images/ts.png";
import react from "../../assets/images/react.png";
import next from "../../assets/images/next.png";
import redux from "../../assets/images/redux.png";
import tailwind from "../../assets/images/tailwind.png";
import nodejs from "../../assets/images/nodejs.png";
import prisma from "../../assets/images/prisma.png";
import git from "../../assets/images/git.png";
import figma from "../../assets/images/figma.png";

const textures = [
  html,
  css,
  js,
  ts,
  react,
  next,
  redux,
  tailwind,
  nodejs,
  prisma,
  git,
  figma,
];

type CubeProps = {
  texturePath: string;
  position: [number, number, number];
};

const RotatingCube = ({ texturePath, position }: CubeProps) => {
  const ref = useRef<any>(null);
  const texture = new TextureLoader().load(texturePath);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.007;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1.7, 1.7, 1.7]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const TechCubeGallery = () => {
  
  return (
    <div className="h-[600px]">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        {textures.map((src, index) => {
          const cols = 6;
          const spacing = 4;
          const x =
            (index % cols) * spacing - (cols / 2) * spacing + spacing / 2;
          const y = -Math.floor(index / cols) * spacing + spacing;
          const z = 0;
          return (
            <RotatingCube key={index} texturePath={src} position={[x, y, z]} />
          );
        })}
      </Canvas>
    </div>
  );
};

export default TechCubeGallery;
