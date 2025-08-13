import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import React from 'react'

/**
 * Shape component renders a distorted, animated 3D sphere
 * with custom color and lighting for the introduction background.
 * Uses MeshDistortMaterial for a dynamic, wavy effect.
 */
export default function Shape() {
  return (
    <React.Fragment>
      {/* Distorted animated sphere */}
        <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
                color={"#DB8B9B"}
                attach={"material"}
                distort={0.5}
                speed={2}
            />
        </Sphere>
        {/* Lighting for the 3D shape */}
        <ambientLight intensity={2} />
        <directionalLight position={[2, 4, 6]} />
    </React.Fragment>
  )
}
