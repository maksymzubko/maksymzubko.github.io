import React, {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = ({isMobile}) => {
    useEffect(() => {
        const event = new CustomEvent("earth", {detail: {name: "earth"}})
        document.dispatchEvent(event);
    }, [])

    const earth = useGLTF(`./planet_${isMobile ? 'mobile' : 'pc'}/scene.gltf`);

    return (
        <primitive object={earth.scene} scale={isMobile ? 3 : 2} position-y={0} rotation-y={0}/>
    );
};

const EarthCanvas = () => {
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

    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{preserveDrawingBuffer: true}}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
            className={"!touch-auto"}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    enableRotate={!isMobile}
                />
                <Earth isMobile={isMobile}/>

                <Preload all/>
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
