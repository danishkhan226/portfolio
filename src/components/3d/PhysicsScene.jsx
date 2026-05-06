'use client';

import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';
import { Float, Text, Environment, OrbitControls } from '@react-three/drei';
import { Suspense, useState, useEffect, useMemo, useRef } from 'react';

function FallingBox({ position, color, text }) {
  return (
    <RigidBody colliders="cuboid" restitution={0.8} friction={0.5}>
      <mesh position={position} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        <Text
          position={[0, 0, 0.41]}
          fontSize={0.1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </mesh>
    </RigidBody>
  );
}

function SkillBin() {
  const skills = [
    { name: "JS", color: "#f7df1e" },
    { name: "REACT", color: "#61dafb" },
    { name: "NEXT", color: "#ffffff" },
    { name: "THREE", color: "#ff4081" },
    { name: "ANIME", color: "#ff007f" },
    { name: "GAMING", color: "#00f2ff" }
  ];

  const [skillPositions] = useState(() => skills.map((_, i) => [
    Math.random() - 0.5,
    5 + i * 2,
    Math.random() - 0.5
  ]));

  return (
    <group position={[0, -2, 0]}>
      {/* Floor */}
      <RigidBody type="fixed">
        <CuboidCollider args={[5, 0.1, 5]} />
      </RigidBody>
      
      {/* Walls */}
      <RigidBody type="fixed" position={[-2, 2, 0]}>
        <CuboidCollider args={[0.1, 2, 5]} />
      </RigidBody>
      <RigidBody type="fixed" position={[2, 2, 0]}>
        <CuboidCollider args={[0.1, 2, 5]} />
      </RigidBody>
      <RigidBody type="fixed" position={[0, 2, -2]}>
        <CuboidCollider args={[5, 2, 0.1]} />
      </RigidBody>
      
      {skills.map((skill, i) => (
        <FallingBox 
          key={i} 
          position={skillPositions[i]} 
          color={skill.color}
          text={skill.name}
        />
      ))}
    </group>
  );
}

export default function PhysicsScene() {
  return (
    <div style={{ height: '400px', width: '100%', marginTop: '2rem' }}>
      <Canvas shadows camera={{ position: [0, 2, 8], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
          <Physics gravity={[0, -9.81, 0]}>
            <SkillBin />
          </Physics>
          <Environment preset="city" />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
