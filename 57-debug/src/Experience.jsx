import { OrbitControls } from "@react-three/drei";
import Cube from "./cube";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";

export default function Experience() {
  const { position, color, visible } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0, z: 0 },
      min: -4,
      max: 4,
      step: 0.01,
      joystick: "invertY",
    },
    color: "#ff0000",
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clickMe: button(() => {
      console.log("ok");
    }),
    choice: { options: ["a", "b", "c"] },
  });

  const { scale } = useControls("cube", {
    scale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5,
    },
  });

  const { perfVisible } = useControls({
    perfVisible: true,
  });

  return (
    <>
      <OrbitControls makeDefault />
      {perfVisible && <Perf position="top-left" />}

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh position={[position.x, position.y, position.z]} visible={visible}>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <Cube scale={scale} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
