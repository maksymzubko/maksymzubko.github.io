import React, {Suspense, useEffect, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";

import CanvasLoader from "@components/Loader.tsx";

const Computer = ({isMobile}: { isMobile: boolean }) => {
    const computer = useGLTF(`./pc_${isMobile ? 'mobile' : 'desktop'}/scene.gltf`)
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor={"black"}/>
            <pointLight intensity={1}/>
            {/*<spotLight position={[0, 0, 0]} angle={0.12} penumbra={1} intensity={1} castShadow={true} shadow-mapSize={1024}/>*/}
            <primitive position={isMobile ? [-1, -2, 0] : [-1, -4, 0]} rotation={[0, 2, 0]} object={computer.scene}
                       scale={isMobile ? 1 : 2}/>
        </mesh>
    );
};

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])

    return (
        <Canvas
            frameloop={"demand"}
            shadows={true}
            camera={{position: [7, 5, 0], fov: 25}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}/>
                <Computer isMobile={isMobile}/>
            </Suspense>

            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas;