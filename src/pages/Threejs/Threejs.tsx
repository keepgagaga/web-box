import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { useState, useRef } from 'react'

export default function Threejs() {
    return <>
        <div className='w-screen h-screen'>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
        </div>
    </>
}

function Box(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((_, delta) => (ref.current.rotation.x += delta))
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(_) => click(!clicked)}
            onPointerOver={(_) => hover(true)}
            onPointerOut={(_) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}