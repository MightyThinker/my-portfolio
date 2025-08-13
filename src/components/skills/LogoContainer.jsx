import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, PerspectiveCamera, RoundedBox } from "@react-three/drei";

import { SpringBootLogo } from "./SpringBootLogo";
import { ReactLogo } from "./ReactLogo";
import { AwsLogo } from "./AwsLogo";
import { KafkaLogo } from "./KafkaLogo";
import { JavaLogo } from "./JavaLogo";
import { MySQLLogo } from "./MySQLLogo";
import { JavaScriptLogo } from "./JavaScriptLogo";

export default function LogoContainer() {
    const spacingX = 7;
    const spacingY = 7;
    const cameraZ = 20;
    const baseWidth = 1900; // original design width

    const containerRef = useRef(null);
    const [scalingFactor, setScalingFactor] = useState(1);

    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            // Scale relative to actual container width, not window
            const widthFactor = Math.max(0.5, Math.min(width / baseWidth, 1.3));
            const heightFactor = Math.max(0.5, Math.min(height / (baseWidth / 2), 1.3));
            // Use the smaller factor so it fits both width & height
            setScalingFactor(Math.min(widthFactor, heightFactor));
        });

        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    function RotatingBadge({ children, badgeSize = [6, 6, 0.5], position, logoOffset = [0, 0] }) {
        const rotRef = useRef();
        useFrame(() => {
            if (rotRef.current) rotRef.current.rotation.y += 0.01;
        });
        return (
            <group position={position}>
                <RoundedBox args={badgeSize} radius={0.2} smoothness={6} position={[0, 0, -3]}>
                    <meshStandardMaterial color="#DB8B9B" roughness={0.7} metalness={-1} />
                </RoundedBox>
                <group ref={rotRef} position={[logoOffset[0], logoOffset[1], 0]}>
                    <Center>{children}</Center>
                </group>
            </group>
        );
    }

    const logos = [
        { comp: <JavaLogo scale={4.5} />, row: 0, col: 0, offset: [0.3, -0.5] },
        { comp: <SpringBootLogo scale={2.5} />, row: 0, col: 1, offset: [0, -0.7] },
        { comp: <MySQLLogo scale={2.2} />, row: 0, col: 2, offset: [-0.7, -0.7] },
        { comp: <JavaScriptLogo scale={2.25} />, row: 1, col: 0, offset: [0.3, 0] },
        { comp: <ReactLogo scale={0.7} />, row: 1, col: 1, offset: [0, 0] },
        { comp: <KafkaLogo scale={2.5} />, row: 1, col: 2, offset: [-0.7, 0] },
        { comp: <AwsLogo scale={1} />, row: 2, col: 1, offset: [0, 0.3] },
    ];

    return (
        <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
            <Canvas shadows camera={{ position: [0, 0, 1], fov: 50 }}>
                <Suspense fallback={"Loading..."}>
                    <ambientLight intensity={0.6} />
                    <directionalLight
                        position={[0, 0, 2]}
                        intensity={0.9}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />

                    <group scale={scalingFactor}>
                        {logos.map((logo, i) => {
                            const x = logo.col * spacingX - spacingX;
                            const y = logo.row * -spacingY + spacingY;
                            return (
                                <RotatingBadge
                                    key={i}
                                    position={[x, y, 0]}
                                    logoOffset={logo.offset}
                                >
                                    {logo.comp}
                                </RotatingBadge>
                            );
                        })}
                    </group>

                    <PerspectiveCamera makeDefault position={[0, 0, cameraZ]} />
                </Suspense>
            </Canvas>
        </div>
    );
}
