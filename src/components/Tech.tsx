import React from 'react';
import {technologies} from '@constants/index'
import {BallCanvas} from "@components/canvas";
import {Canvas} from "@react-three/fiber";

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            <Canvas>
                {technologies.map((tech) => (
                    // <div className={"w-28 h-28"} key={tech.name}>
                    <BallCanvas icon={tech.icon} />
                    // </div>
                ))}
            </Canvas>

        </div>
    );
};

export default Tech;