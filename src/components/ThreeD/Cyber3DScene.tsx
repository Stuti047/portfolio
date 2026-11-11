import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Ring, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// Monochrome Minimal Editorial 3D Planet
const MonochromePlanet: React.FC = () => {
  const planetRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.25;
      planetRef.current.rotation.x += delta * 0.08;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
      <group position={[0, 0, 0]}>
        {/* Core Sphere in Matte Off-White */}
        <Sphere ref={planetRef} args={[1.2, 32, 32]}>
          <meshStandardMaterial
            color="#F7F7F7"
            roughness={0.4}
            metalness={0.1}
          />
        </Sphere>

        {/* Delicate Thin Wireframe Shell */}
        <Sphere args={[1.26, 16, 16]}>
          <meshBasicMaterial color="#111111" wireframe transparent opacity={0.25} />
        </Sphere>

        {/* Primary Thin Black Orbital Ring */}
        <Ring ref={ringRef} args={[1.65, 1.72, 64]} rotation={[Math.PI / 2.7, Math.PI / 8, 0]}>
          <meshStandardMaterial
            color="#111111"
            side={THREE.DoubleSide}
            roughness={0.2}
          />
        </Ring>

        {/* Secondary Delicate Dashed Ring */}
        <Ring ref={ring2Ref} args={[2.0, 2.04, 48]} rotation={[-Math.PI / 3.2, -Math.PI / 10, 0]}>
          <meshBasicMaterial
            color="#888888"
            side={THREE.DoubleSide}
            transparent
            opacity={0.4}
            wireframe
          />
        </Ring>
      </group>
    </Float>
  );
};

// Floating Monochrome Geometric Crystal
const MonochromeCrystal: React.FC<{ position: [number, number, number]; speed?: number; size?: number }> = ({
  position,
  speed = 2,
  size = 0.35
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.6;
      meshRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.5}>
      <Icosahedron ref={meshRef} args={[size, 0]} position={position}>
        <meshStandardMaterial
          color="#111111"
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Icosahedron>
    </Float>
  );
};

export const Cyber3DScene: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    // 2D Minimal Fallback
    return (
      <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
        <div className="w-48 h-48 rounded-full border border-dashed border-[#111111] animate-spin-slow flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-[#F7F7F7] border border-[#111111]" />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full min-h-[340px] cursor-grab active:cursor-grabbing select-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 46 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 6, 5]} intensity={1.5} color="#FFFFFF" />
        <directionalLight position={[-4, -3, 2]} intensity={0.5} color="#EEEEEE" />

        <MonochromePlanet />

        {/* Subtle satellite geometric nodes */}
        <MonochromeCrystal position={[-2.2, 1.2, -0.4]} speed={2.2} size={0.3} />
        <MonochromeCrystal position={[2.3, -1.0, -0.6]} speed={2.5} size={0.32} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.3}
        />
      </Canvas>

      {/* Minimal Label */}
      <div className="absolute bottom-2 right-3 font-mono text-[10px] text-[#888888] bg-[#FFFFFF]/90 px-2 py-0.5 rounded border border-[#E5E5E5] pointer-events-none flex items-center gap-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
        <span>3D Canvas • Drag to rotate</span>
      </div>
    </div>
  );
};
