'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

export default function HeroObject() {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const { mouse } = useThree();
  const { scrollY } = useScroll();
  
  // Use THREE.Timer instead of THREE.Clock (deprecated in r183)
  const timer = useMemo(() => new THREE.Timer(), []);

  useFrame((state) => {
    // Update the timer to synchronize with the current frame
    timer.update(); 
    const t = timer.getElapsed();
    
    const currentScroll = scrollY.get();
    
    if (mesh.current) {
      // Optimized rotations
      mesh.current.rotation.x = Math.sin(t * 0.25) * 0.1 + mouse.y * 0.15;
      mesh.current.rotation.y = t * 0.1 + mouse.x * 0.15;
      
      // Floating motion tied to scroll
      mesh.current.position.y = Math.sin(t) * 0.1 - (currentScroll * 0.001);
      
      // Scale lerp
      const targetScale = hovered ? 1.15 : 1;
      mesh.current.scale.x = THREE.MathUtils.lerp(mesh.current.scale.x, targetScale, 0.1);
      mesh.current.scale.y = THREE.MathUtils.lerp(mesh.current.scale.y, targetScale, 0.1);
      mesh.current.scale.z = THREE.MathUtils.lerp(mesh.current.scale.z, targetScale, 0.1);
      
      // Dynamic distortion
      mesh.current.material.distort = THREE.MathUtils.lerp(
        mesh.current.material.distort,
        hovered ? 0.5 : 0.35,
        0.05
      );
    }
  });


  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <Sphere
        args={[2.2, 12, 12]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        ref={mesh}
      >
        <MeshDistortMaterial
          color="#3b82f6" 
          speed={1.5}
          distort={0.35}
          radius={1}
          metalness={0.8}
          roughness={0.2}
          emissive="#1e40af"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}

