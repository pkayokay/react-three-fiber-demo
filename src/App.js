import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function SpinningBox() {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[2,2,2]} />
      <meshStandardMaterial attach="material" color="#ef4649" />
    </mesh>
  )
}


function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5,2,10], fov: 60 }}>
        <ambientLight intensity={1} />
        <SpinningBox />
        <SpinningBox />
        <SpinningBox />
      </Canvas>
    </>
  );
}

export default App;
