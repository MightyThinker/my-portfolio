import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import React from 'react'

export default function Shape() {
  return (
    <React.Fragment>
        <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
                color={"#DB8B9B"}
                attach={"material"}
                distort={0.5}
                speed={2}
            />
        </Sphere>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 4, 6]} />
    </React.Fragment>
  )
}
