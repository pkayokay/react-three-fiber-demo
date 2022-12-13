## React Three Fiber Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/d5d811f5-a454-45cb-8aa9-2ec6b96a3df0/deploy-status)](https://app.netlify.com/sites/react-three-fiver-demo/deploys)

Live Demo https://react-three-fiver-demo.netlify.app/


To display anything in three.js, we need:
1. Scene
2. Camera
3. Render

The `<Canvas />` component sets up the **Scene** and **Camera**

### Intro

- React Library for [Three.js](https://threejs.org/) (everything that works Three.js works in react-three-fiber)
- Expresses Three.js in JSX
    - To create a mesh object we can run
        - `new THREE.Mesh()`
        - `<mesh />` (Declarative)
- [Examples](https://threejs.org/)

### What’s required to learn react-three-fiber?

`React + Threejs`

- Concepts to grasp
    - Scene
    - Camera
    - Mesh
        - Geometry (shape)
        - Material (color, look)

1. Set up the Canvas
    1. Sets up a Scene and a Camera, which are the essential building blocks of rendering.
2. Add a mesh component
    1. Basic object, it holds geometry and material to represent a 3d Shape.
    2. To see it we add a box and standard material
3. Add lights
    1. Simple, just adds lights
    2. Can configure element options with props.


### Code Samples (Three.js vs React-Three-Fiber)

```jsx
# React-Three-Fiber
<Canvas>
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
</Canvas>

# Three.js
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
document.querySelector('#canvas-container').appendChild(renderer.domElement)

const mesh = new THREE.Mesh()
mesh.geometry = new THREE.BoxGeometry()
mesh.material = new THREE.MeshStandardMaterial()

scene.add(mesh)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()

# React-Three-Fiber
<boxGeometry args={[2, 2, 2]} />

# Three.js
new THREE.BoxGeometry(2, 2, 2)
```

### Props (basically object properties for each Three.js object
- `args` height width and depth
- When referring to position then refers to horizontal (x), vertical (y), 3D (z)
- `useFrame` hook is used to rotate objects
