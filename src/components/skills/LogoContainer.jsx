import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, PerspectiveCamera, RoundedBox } from "@react-three/drei";

import { SpringBootLogo } from "./SpringBootLogo";
import { ReactLogo } from "./ReactLogo";
import { AwsLogo } from "./AwsLogo";
import { KafkaLogo } from "./KafkaLogo";
import { JavaLogo } from "./JavaLogo";
import { MySQLLogo } from "./MySQLLogo";
import { JavaScriptLogo } from "./JavaScriptLogo";

function LogoWithBadge({ children, speed = 0.015, badgeSize = [5.5, 5.5, 0.2], ...props }) {
    const rotRef = useRef();
    useFrame(() => {
        if (rotRef.current) rotRef.current.rotation.y += speed;
    });

    return (
        <group {...props}>
            <RoundedBox args={badgeSize} radius={0.2} smoothness={6} position={[0, 0, -2]}>
                <meshStandardMaterial color="#DB8B9B" roughness={0.7} metalness={-1} />
            </RoundedBox>
            <group ref={rotRef} position={[0, 0, 0.3]}>
                <Center>{children}</Center>
            </group>
        </group>
    );
}

export default function LogoContainer() {
    const logoData = [
        { component: <JavaLogo scale={4} />, pos: [0, 0] },
        { component: <SpringBootLogo scale={2.5} />, pos: [0, 1] },
        { component: <MySQLLogo scale={2.2} />, pos: [0, 2] },
        { component: <JavaScriptLogo scale={2.25} />, pos: [1, 0] },
        { component: <ReactLogo scale={0.7} />, pos: [1, 1] },
        { component: <KafkaLogo scale={2.5} />, pos: [1, 2] },
        { component: <AwsLogo scale={1} />, pos: [2, 1] }, // middle of last row
    ];

    const spacingX = 8;
    const spacingY = 8;
    const cameraZ = 20;

    return (
        <React.Fragment>
            <Canvas shadows camera={{ position: [0, 0, 1], fov: 50 }}>
                <Suspense fallback={"Loading..."}>
                    <ambientLight intensity={0.6} />
                    <directionalLight
                        position={[10, 10, 20]}
                        intensity={0.9}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />
                    <group>
                        {logoData.map((logo, i) => {
                            const [row, col] = logo.pos;
                            const x = col * spacingX - ((3 - 1) * spacingX) / 2;
                            const y = -row * spacingY + ((3 - 1) * spacingY) / 2;
                            return (
                                <LogoWithBadge key={i} position={[x, y, 0]}>
                                    {logo.component}
                                </LogoWithBadge>
                            );
                        })}
                    </group>
                    <PerspectiveCamera makeDefault position={[0, 0, cameraZ]} />
                </Suspense>
            </Canvas>
        </React.Fragment>
    );
}
