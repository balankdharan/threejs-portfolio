import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import Loader, { SceneReady } from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

// The sky model is a dome that stops at the horizon, so its bottom colour
// fills whatever is below it.
const SKY_BOTTOM = "#dfe5f0";

// Camera: default position z = 5 and a 75 degree vertical field of view.
const CAMERA_Z = 5;
const HALF_FOV = Math.tan((75 / 2) * (Math.PI / 180));
const ISLAND_Z = -43;
const ISLAND_HEIGHT = 0.72;
const ISLAND_WIDTH = 1.3;
const PLANE_Z = -4;

// How tall the visible area is (in world units) at a given depth.
const visibleHeight = (z) => 2 * (CAMERA_Z - z) * HALF_FOV;

// Turns "this far down the screen" (0 = top, 1 = bottom) into a world y.
const yAt = (fraction, z) => (0.5 - fraction) * visibleHeight(z);

// At scale 1 the island (with its near rim) fills about 72% of the screen
// height, and with the small island on its left it spans about 1.3 screen
// heights across. Size it so it fits between
// the info box at the top and the bottom edge, on any screen shape.
const fitScene = (width, height) => {
  const top = 220 / height; // space taken by the navbar and info box
  const bottom = 1 - 40 / height;
  const space = bottom - top;
  const aspect = width / height;

  const byHeight = (space * 0.95) / ISLAND_HEIGHT;
  // On tall phone screens let the small side island run off the edge a little
  // so the main island isn't tiny.
  const byWidth = (aspect * (aspect < 1 ? 1.2 : 0.9)) / ISLAND_WIDTH;
  const scale = Math.min(
    Math.max(Math.min(byHeight, byWidth, 1.05), 0.3),
    1.05,
  );

  const islandHeight = ISLAND_HEIGHT * scale;
  const center = top + islandHeight / 2 + (space - islandHeight) / 2;
  const planeAt = center + 0.21 * scale;

  return {
    island: {
      scale: [scale, scale, scale],
      position: [0, yAt(center, ISLAND_Z) - 0.6 * scale, ISLAND_Z],
    },
    plane: {
      scale: [3 * scale, 3 * scale, 3 * scale],
      position: [0, yAt(planeAt, PLANE_Z), PLANE_Z],
    },
  };
};

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
  const [screen, setScreen] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  useEffect(() => {
    const onResize = () =>
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const { island, plane } = fitScene(screen.width, screen.height);
  return (
    <section className="w-full  h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <color attach="background" args={[SKY_BOTTOM]} />
        <Suspense fallback={null}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={island.position}
            scale={island.scale}
            rotation={[0.1, 4.7, 0]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={plane.scale}
            position={plane.position}
            rotation={[0, 20, 0]}
          />
          <SceneReady onReady={() => setSceneReady(true)} />
        </Suspense>
      </Canvas>
      <Loader ready={sceneReady} label="Loading the 3D island" />
      <div className="absolute bottom-2 left-2">
        <img
          src={isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
