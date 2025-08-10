import {
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();

export default function Experience() {
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);
  //   const [torusGeometry, setTorusGeometry] = useState();
  //   const [material, setMaterial] = useState();

  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  //   const donutsGroup = useRef();
  //   useFrame((state, delta) => {
  //     for (const donut of donutsGroup.current.children) {
  //       donut.rotation.y += delta * 0.2;
  //     }
  //   });

  const donuts = useRef([]);

  useFrame((state, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* When sending a function to the ref attribute,
       React will call that function with the component as the parameter
        which would look a bit like setTorusGometry(<torusGeometry>) */}
      {/* <torusGeometry args={[1, 0.6, 16, 32]} ref={setTorusGeometry} />

      <meshMatcapMaterial matcap={matcapTexture} ref={setMaterial} /> */}

      <Center>
        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          material={material}
        >
          HELLO R3F
        </Text3D>
      </Center>

      {/* <group ref={donutsGroup}>
        {[...Array(100)].map((value, index) => (
          <mesh
            key={index}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            scale={0.2 + Math.random() * 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            geometry={torusGeometry}
            material={material}
          ></mesh>
        ))}
      </group> */}

      {[...Array(100)].map((value, index) => (
        <mesh
          key={index}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          geometry={torusGeometry}
          material={material}
          ref={(element) => (donuts.current[index] = element)}
        ></mesh>
      ))}
    </>
  );
}
