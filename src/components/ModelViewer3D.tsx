import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import type { Group } from 'three';

// Component to load GLB/GLTF model
function Model({ url, scale = 1 }: { url: string; scale?: number }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Center>
      <primitive
        ref={modelRef}
        object={scene}
        scale={scale}
      />
    </Center>
  );
}

// Loading fallback
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1.5, 0.5]} />
      <meshStandardMaterial color="#E8D4F4" wireframe />
    </mesh>
  );
}

interface ModelViewer3DProps {
  modelUrl?: string;
  modelScale?: number;
  backgroundColor?: string;
}

export default function ModelViewer3D({
  modelUrl,
  modelScale = 1,
  backgroundColor = '#f0f0f0'
}: ModelViewer3DProps) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: backgroundColor,
      borderRadius: '16px',
      overflow: 'hidden'
    }}>
      <Canvas
        camera={{ position: [0, 1, 6], fov: 40 }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <directionalLight position={[-5, 5, 3]} intensity={0.6} />
        <directionalLight position={[0, 5, -5]} intensity={0.4} />

        <Suspense fallback={<Loader />}>
          {modelUrl && <Model url={modelUrl} scale={modelScale} />}
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={12}
        />
      </Canvas>
    </div>
  );
}
