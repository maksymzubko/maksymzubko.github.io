import React, {Suspense, useEffect, useRef, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {Decal, OrbitControls, Preload, useGLTF, useTexture} from "@react-three/drei";
import {BallCollider, Physics, RigidBody} from "@react-three/rapier";

import CanvasLoader from "@components/Loader.tsx";
import {technologies} from "@constants/index.ts";

const Machine = ({isMobile}: { isMobile: boolean; }) => {
    const computer = useGLTF('./green_tea_vending_machine/scene.gltf')
    const [texture] = useTexture([technologies[0].icon, technologies[1].icon])

    // var material_plane = new MeshBasicMaterial({color: drawcol, side: DoubleSide, opacity: 0.5, transparent: true, depthWrite: false});
    console.log(texture)
    return (
        <mesh>
            <meshStandardMaterial opacity={0} transparent={true} depthTest={true}/>
            <hemisphereLight intensity={0.15} groundColor={"black"}/>
            {/*<pointLight intensity={1}/>*/}
            {/*<spotLight position={[0, 0, 0]} angle={0.12} penumbra={1} intensity={1} castShadow={true} shadow-mapSize={1024}/>*/}
            {/*{technologies.map((tech, index) => <Ball props={tech}/>)}*/}
            <RigidBody type={"fixed"}>
            <primitive position={isMobile ? [-1, -2, 0] : [0, -0.5, 0]} rotation={[0, 2, 0]} object={computer.scene}
                       scale={isMobile ? 1 : 3}>
                <RigidBody type={"dynamic"} friction={30} colliders={false}>
                    <BallCollider args={[1]}/>
                    <mesh castShadow={true} receiveShadow={true} scale={0.02} position={[-0.01, 0.21, 0.01]}>
                        <icosahedronGeometry args={[1, 3]}/>
                        <meshStandardMaterial
                            color='#fff8eb'
                            polygonOffset={true}
                            polygonOffsetFactor={-5}
                            flatShading={true}
                        />
                        <Decal
                            position={[0, 0, 10]}
                            rotation={[2 * Math.PI, 0, 6.25]}
                            scale={0.5}
                            map={texture[0]}
                        />
                    </mesh>
                </RigidBody>
                <RigidBody type={"dynamic"} mass={0} friction={30}  colliders={false}>
                    <BallCollider args={[1]}/>
                    <mesh castShadow={true} receiveShadow={true} scale={0.02} position={[0.05, 0.21, 0.01]}>
                        <icosahedronGeometry args={[1, 3]}/>
                        <meshStandardMaterial
                            color='#fff8eb'
                            polygonOffset={true}
                            polygonOffsetFactor={-5}
                            flatShading={true}
                        />
                        <Decal
                            position={[0, 0, 10]}
                            rotation={[2 * Math.PI, 0, 6.25]}
                            scale={0.5}
                            map={texture[0]}
                        />
                    </mesh>
                </RigidBody>
            </primitive>
            </RigidBody>
        </mesh>
    );
};

const MachineCanvas = () => {
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
            camera={{position: [3, 0, 0], fov: 25}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Physics>
                <Suspense fallback={<CanvasLoader/>}>
                    <OrbitControls
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}/>
                    <Machine isMobile={isMobile}/>
                </Suspense>

                <Preload all/>
            </Physics>
        </Canvas>

    )
}

export default MachineCanvas;