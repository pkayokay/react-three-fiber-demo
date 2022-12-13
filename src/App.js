import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <circleBufferGeometry attach="geometry" args={[3,8]} />
          <meshStandardMaterial attach="material" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
