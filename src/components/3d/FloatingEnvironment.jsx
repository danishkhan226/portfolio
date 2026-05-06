'use client';

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';


export default function FloatingEnvironment() {
  const count = 15;
  const meshRef = useRef();

  // Use useState with initializer to keep random values stable and satisfy purity rules
  const [particlesList] = useState(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 10 + Math.random() * 40;
      const speed = 0.003 + Math.random() / 1000;
      const xFactor = -30 + Math.random() * 60;
      const yFactor = -30 + Math.random() * 60;
      const zFactor = -30 + Math.random() * 60;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
    }
    return temp;
  });


  const { scrollY } = useScroll();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const currentScroll = scrollY.get();
    
    particlesList.forEach((particle, i) => {
      let { t, factor, speed } = particle;
      
      // Update time
      t = particle.t += speed;
      
      // Drift vertically based on scroll
      const scrollYOffset = (currentScroll * 0.004) * (i % 2 === 0 ? 1 : -1);
      
      dummy.position.set(
        (particle.xFactor + Math.cos(t / 10) * factor) / 5,
        (particle.yFactor + Math.sin(t / 10) * factor) / 5 + scrollYOffset,
        (particle.zFactor + Math.cos(t / 10) * factor) / 5
      );
      
      dummy.rotation.set(t, t, t);
      const scale = 0.2 + Math.cos(t / 2) * 0.1;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });


  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[0.2, 4, 4]} />
      <meshPhongMaterial 
        color="#3b82f6"
        transparent
        opacity={0.3}
        shininess={100}
      />
    </instancedMesh>
  );
}

