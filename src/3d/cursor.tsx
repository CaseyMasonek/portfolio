import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import {Suspense, useEffect} from "react"
// @ts-ignore
import modelPath from "./models/pixel_art_mouse_cursor.glb?url"

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Model(props: any) {
    const gltf = useGLTF(modelPath)

    const model = useRef(null);

    let animation;

    useEffect(() => {
        //@ts-ignore
        animation = gsap.to(model.current!.rotation, {
            y: Math.PI * 2,
            duration: 10,
            repeat: -1,
            ease: "linear",
        })

        // @ts-ignore
        handleMouseExit();
    })

    const handleMouseEnter = () => {
        animation!.timeScale(0.2)
    }

    const handleMouseExit = () => {
        // @ts-ignore
        animation!.timeScale(1)
    }

    return (
        <group ref={model}>
            <primitive
                onPointerEnter={handleMouseEnter}
                onPointerLeave={handleMouseExit}
                scale={0.004} position={[-1,-2.5,0]}
                className={"model"} {...props} object={gltf.scene} />
        </group>
    )
}

export default function Cursor() {
    return (
        <Canvas gl={{ alpha: true }} style={{ background: 'transparent' }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    )
}