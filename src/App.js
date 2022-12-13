import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Box() {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[2,2,2]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  )
}


function App() {
  return (
    <>
      <Canvas>
        <Box />
      </Canvas>
    </>
  );
}

export default App;
