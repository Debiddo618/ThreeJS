import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./experience";
import * as THREE from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    // flat
    dpr={[1, 2]}
    gl={{
      antialias: true,
      //   toneMapping: THREE.CineonToneMapping,
      toneMapping: THREE.ACESFilmicToneMapping,
      outputColorSpace: THREE.LinearSRGBColorSpace,
    }}
    orthographic
    camera={{ fov: 45, near: 0.1, far: 200, zoom: 100, position: [3, 2, 6] }}
  >
    <Experience />
  </Canvas>
);
