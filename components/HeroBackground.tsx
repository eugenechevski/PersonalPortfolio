"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function ParticleGrid() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const count = 300;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const positions = useMemo(() => {
    const cols = 20;
    const rows = Math.ceil(count / cols);
    const arr: [number, number, number][] = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = (i / (cols - 1) - 0.5) * viewport.width * 1.4;
        const y = (j / (rows - 1) - 0.5) * viewport.height * 1.4;
        arr.push([x, y, 0]);
      }
    }
    return arr.slice(0, count);
  }, [viewport.width, viewport.height, count]);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    mouseRef.current.x += (pointer.x * viewport.width * 0.5 - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (pointer.y * viewport.height * 0.5 - mouseRef.current.y) * 0.05;

    for (let i = 0; i < positions.length; i++) {
      const [bx, by] = positions[i];
      const dx = mouseRef.current.x - bx;
      const dy = mouseRef.current.y - by;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.max(0, 1 - dist / 4);

      dummy.position.set(
        bx + dx * influence * 0.15,
        by + dy * influence * 0.15 + Math.sin(t * 0.5 + i * 0.1) * 0.05,
        0
      );
      const scale = 0.02 + Math.sin(t + i * 0.3) * 0.008 + influence * 0.015;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
    </instancedMesh>
  );
}

function AccentLines() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const lines = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      x: (i / 4 - 0.5) * viewport.width * 0.8,
      offset: i * 1.5,
    }));
  }, [viewport.width]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      child.position.x =
        lines[i].x + Math.sin(t * 0.3 + lines[i].offset) * 0.5;
      child.position.y = Math.cos(t * 0.2 + lines[i].offset) * viewport.height * 0.15;
    });
  });

  return (
    <group ref={groupRef}>
      {lines.map((_, i) => (
        <mesh key={i}>
          <planeGeometry args={[0.01, 1]} />
          <meshBasicMaterial
            color="#E8C547"
            transparent
            opacity={0.06}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ParticleGrid />
      <AccentLines />
    </>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        style={{ pointerEvents: "auto" }}
        gl={{ antialias: false, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
