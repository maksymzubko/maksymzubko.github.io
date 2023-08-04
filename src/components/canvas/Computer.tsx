import React, {Suspense, useEffect, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";

import CanvasLoader from "@components/Loader.tsx";
import {computer} from "@assets/index.ts";

const Computer = ({isMobile}: { isMobile: boolean }) => {
    useEffect(() => {
        const event = new CustomEvent("computer", {detail: {name: "computer"}})
        document.dispatchEvent(event);
    }, [])
    const computer = useGLTF(`./pc_desktop/scene.gltf`)
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor={"black"}/>
            <pointLight intensity={1}/>
            {/*<directionalLight intensity={.3} color={"white"} position={[-1, 2, 1]}/>*/}
            {/*<spotLight position={[0, 0, 0]} angle={0.12} penumbra={1} intensity={1} castShadow={true} shadow-mapSize={1024}/>*/}
            <primitive position={isMobile ? [-1, -2, 0] : [-1, -4, 0]} rotation={[0, 2, 0]} object={computer.scene}
                       scale={isMobile ? 1 : 2}/>
        </mesh>
    );
};

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {

            setIsMobile(event.matches);
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])

    if(isMobile)
    {
        return <img src={computer} alt={"computer"} className={"absolute top-[350px] w-full"}/>
    }

    return (
        <Canvas
            frameloop={"demand"}
            shadows={true}
            camera={{position: [7, 5, 0], fov: 25}}
            gl={{preserveDrawingBuffer: true}}
            className={"!touch-auto"}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    enableRotate={!isMobile}
                />
                <Computer isMobile={isMobile}/>
            </Suspense>

            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas;