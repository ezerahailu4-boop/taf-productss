"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function OilDroplet({
  position,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    ref.current.position.y = position[1] + Math.sin(t) * 0.4;
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.2;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 8]} />
      <MeshDistortMaterial
        color="#ff7a00"
        roughness={0.15}
        metalness={0.6}
        distort={0.35}
        speed={1.5}
        emissive="#ff4d00"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

function RingHalo() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.getElapsedTime() * 0.08;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0, 0]}>
      <torusGeometry args={[4.6, 0.015, 16, 180]} />
      <meshBasicMaterial color="#ff9d2e" transparent opacity={0.35} />
    </mesh>
  );
}

function Particles() {
  const count = 60;
  const ref = useRef<THREE.Points>(null);
  const positions = useRef<Float32Array>(
    new Float32Array(
      Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 9)
    )
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffb45c" size={0.035} transparent opacity={0.6} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 38 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#ff9d2e" />
      <pointLight position={[-5, -3, -2]} intensity={1} color="#ff4d00" />
      <Suspense fallback={null}>
        <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
          <OilDroplet position={[2.6, 1.2, -1]} scale={0.55} speed={0.8} />
        </Float>
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
          <OilDroplet position={[-2.8, -1, -1.5]} scale={0.35} speed={1.1} />
        </Float>
        <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.5}>
          <OilDroplet position={[2.2, -1.8, -2]} scale={0.25} speed={0.6} />
        </Float>
        <RingHalo />
        <Particles />
      </Suspense>
    </Canvas>
  );
}
