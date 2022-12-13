import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function SpinningBox({ args, color, position }) {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}


function App() {
  return (
    <>
      <Canvas
        shadows
        colormanagement="true"
        camera={{ position: [-5,0,10], fov: 50 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
            <planeBufferGeometry attach="geometry" args={[100,100]} />
            <shadowMaterial attach="material" opacity={0.3}/>
          </mesh>
        </group>

        <SpinningBox args={[3, 5, 2]} position={[-2, 1, -5]} color="#ef4649" />
        <SpinningBox args={[5, 2, 3]} position={[6, -2, -15]} color="#f5c364" />
        <SpinningBox args={[2, 2, 1]} position={[0, 3, 0]} color="#0076cb" />
        <SpinningBox args={[1, 2, 3]} position={[5, 3, 1]} color="#00b485" />
        <SpinningBox args={[2, 2, 4]} position={[4, 1, -2]} color="#2e3042" />
        <SpinningBox args={[3, 2, 2]} position={[6, 0, 3]} color="#bdbdbd" />
      </Canvas>
    </>
  );
}

export default App;
