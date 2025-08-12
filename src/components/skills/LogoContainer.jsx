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
    const baseWidth = 1900;

    const [scalingFactor, setScalingFactor] = useState(
        Math.max(1, Math.min(window.innerWidth / baseWidth, 1.3))
    );

    useEffect(() => {
        const handleResize = () => {
            setScalingFactor(Math.max(0.9, Math.min(window.innerWidth / baseWidth, 1.3)));
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
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
                    {(() => {
                        // Inline rotating component so we can use useFrame
                        function RotatingBadge({ children, badgeSize = [6, 6, 0.5], position, logoOffset = [0, 0] }) {
                            const rotRef = useRef();
                            useFrame(() => {
                                if (rotRef.current) rotRef.current.rotation.y += 0.015;
                            });
                            return (
                                <group position={position}>
                                    <RoundedBox
                                        args={badgeSize}
                                        radius={0.2}
                                        smoothness={6}
                                        position={[0, 0, -3]}
                                    >
                                        <meshStandardMaterial
                                            color="#DB8B9B"
                                            roughness={0.7}
                                            metalness={-1}
                                        />
                                    </RoundedBox>
                                    <group ref={rotRef} position={[logoOffset[0], logoOffset[1], 0]}>
                                        <Center>{children}</Center>
                                    </group>
                                </group>
                            );
                        }

                        return (
                            <>
                                {/* Row 0 */}
                                <RotatingBadge position={[0 * spacingX - spacingX, 0 * -spacingY + spacingY, 0]} logoOffset={[0.7, -0.7]}>
                                    <JavaLogo scale={4} />
                                </RotatingBadge>
                                <RotatingBadge position={[1 * spacingX - spacingX, 0 * -spacingY + spacingY, 0]} logoOffset={[0, -0.7]}>
                                    <SpringBootLogo scale={2.5} />
                                </RotatingBadge>
                                <RotatingBadge position={[2 * spacingX - spacingX, 0 * -spacingY + spacingY, 0]} logoOffset={[-0.7, -0.7]}>
                                    <MySQLLogo scale={2.2} />
                                </RotatingBadge>

                                {/* Row 1 */}
                                <RotatingBadge position={[0 * spacingX - spacingX, 1 * -spacingY + spacingY, 0]} logoOffset={[0.7, 0]}>
                                    <JavaScriptLogo scale={2.25} />
                                </RotatingBadge>
                                <RotatingBadge position={[1 * spacingX - spacingX, 1 * -spacingY + spacingY, 0]} logoOffset={[0, 0]}>
                                    <ReactLogo scale={0.7} />
                                </RotatingBadge>
                                <RotatingBadge position={[2 * spacingX - spacingX, 1 * -spacingY + spacingY, 0]} logoOffset={[-0.7, 0]}>
                                    <KafkaLogo scale={2.5} />
                                </RotatingBadge>

                                {/* Row 2 (AWS centered at [1, 2nd col]) */}
                                <RotatingBadge position={[1 * spacingX - spacingX, 2 * -spacingY + spacingY, 0]} logoOffset={[0, 0.7]}>
                                    <AwsLogo scale={1} />
                                </RotatingBadge>
                            </>
                        );
                    })()}
                </group>

                <PerspectiveCamera makeDefault position={[0, 0, cameraZ]} />
            </Suspense>
        </Canvas>
    );
}
