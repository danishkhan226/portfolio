'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import HeroObject from './HeroObject';
import FloatingEnvironment from './FloatingEnvironment';

export default function Scene() {
  return (
    <div className="canvas-container" style={{ width: '100%', height: '100%' }}>
      <Canvas 
        dpr={1} // Force 1x resolution for maximum performance
        gl={{ 
          antialias: false, 
          powerPreference: 'high-performance',
          alpha: true,
          stencil: false,
          depth: true
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
          
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={2} 
            color="#3b82f6"
          />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#f43f5e" />
          
          <group position={[0, 0, 0]}>
            <HeroObject />
          </group>
          
          <FloatingEnvironment />
          
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

