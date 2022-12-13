import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
