import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

// Animated Sphere component with simpler material (no MeshDistortMaterial)
function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.05;
      sphereRef.current.rotation.y = time * 0.075;
    }
  });
  
  return (
    <Sphere args={[2, 100, 100]} ref={sphereRef}>
      <meshPhongMaterial
        color="#64FFDA"
        shininess={100}
        specular={new THREE.Color("#61dafb")}
      />
    </Sphere>
  );
}

// Particles
function Particles({ count = 200 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate random positions
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.x = time * 0.02;
      pointsRef.current.rotation.y = time * 0.01;
    }
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#64FFDA"
        sizeAttenuation
        transparent
        opacity={0.5}
      />
    </points>
  );
}

export default function Canvas3D() {
  return (
    <motion.div 
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={0.7} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false} 
        />
        
        <group position={[3, 0, 0]}>
          <AnimatedSphere />
        </group>
        
        <Particles />
      </Canvas>
    </motion.div>
  );
}
