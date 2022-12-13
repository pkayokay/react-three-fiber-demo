import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { softShadows, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';

softShadows();

const randomNumber = () => Math.floor(Math.random() * (7 - -3 + 1)) + -3;
const colors = ["#ef4649", "#f5c364", "#0076cb", "#00b485", "#2e3042", "#bdbdbd"];

function SpinningBox({ args, color, factor, position, speed }) {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial attach="material" color={color} speed={speed} factor={factor} />
    </mesh>
  )
}

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const box = (
      <SpinningBox
        args={[randomNumber(), randomNumber(), randomNumber()]}
        position={[randomNumber(), randomNumber(), randomNumber()]}
        color={randomColor}
        speed={1}
        factor={0.5}
      />
    )
    setBoxes(boxes.concat(box))
  }

  return (
    <>
      <button style={{ margin: '0.5rem'}} onClick={() => addBox()}>
        Add
      </button>
      <Canvas
        shadows
        colormanagement="true"
        camera={{ position: [-5,0,10], fov: 60 }}
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
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
            <planeBufferGeometry attach="geometry" args={[100,100]} />
            <shadowMaterial attach="material" opacity={0.3}/>
          </mesh>
        </group>

        <SpinningBox args={[3, 5, 2]} position={[-2, 1, -5]} color="#ef4649" speed={1} factor={0.5} />
        <SpinningBox args={[5, 2, 3]} position={[6, -2, -15]} color="#f5c364" speed={1} factor={0.5} />
        <SpinningBox args={[2, 2, 1]} position={[0, 3, 0]} color="#0076cb" speed={1} factor={0.5} />
        <SpinningBox args={[1, 2, 3]} position={[5, 3, 1]} color="#00b485" speed={1} factor={0.5} />
        <SpinningBox args={[2, 2, 4]} position={[4, 1, -2]} color="#2e3042" speed={1} factor={0.5} />
        <SpinningBox args={[3, 2, 2]} position={[6, 0, 3]} color="#bdbdbd" speed={1} factor={0.5} />
        {boxes}
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
