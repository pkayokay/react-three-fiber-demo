import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function SpinningBox({ args, color, position }) {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}


function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5,2,10], fov: 60 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 1, 1]} intensity={1} shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10} />
        <pointLight position={[-10, 0, -20]} intensity={1} />
        <pointLight position={[0, -10, 0]} intensity={1} />
        <SpinningBox args={[3, 5, 2]} position={[-2, 1, -5]} color="#ef4649" />
        <SpinningBox args={[5, 2, 3]} position={[6, -2, -15]} color="#f5c364" />
        <SpinningBox args={[2, 2, 1]} position={[0, 4, 0]} color="#0076cb" />
        <SpinningBox args={[1, 2, 3]} position={[5, 4, 1]} color="#00b485" />
        <SpinningBox args={[2, 2, 4]} position={[4, 1, -2]} color="#2e3042" />
        <SpinningBox args={[3, 2, 2]} position={[6, 1, 3]} color="#bdbdbd" />
      </Canvas>
    </>
  );
}

export default App;
