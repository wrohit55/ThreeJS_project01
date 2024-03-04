import { Suspense, useState, useEffect } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'

const Computers = () => {
  const Computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
       groundColor={black} />
      <pointLight intensity={1} />
      <primitive 
      object={Computer.scene}
       />
    </mesh>
  )
}
const ComputersCanvas = () => {
  return(
    <Canvas 
    frameloop='demand'
    shadows
    camera={{position: [20, 3, 5], fov: 25 }}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense  fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputersCanvas