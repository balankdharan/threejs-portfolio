import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const hasWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
};

const webglSupported = hasWebGL();

// Put inside the <Suspense> with the models. It reports back once the scene
// has drawn a couple of frames, i.e. when there is really something to see.
export const SceneReady = ({ onReady }) => {
  const frames = useRef(0);
  useFrame(() => {
    frames.current += 1;
    if (frames.current === 2) onReady();
  });
  return null;
};

// Full overlay shown on top of the canvas until the scene is ready.
const Loader = ({ ready, label = "Loading the 3D scene" }) => {
  const { progress } = useProgress();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => setHidden(true), 500);
    return () => clearTimeout(timer);
  }, [ready]);

  if (hidden) return null;

  if (!webglSupported) {
    return (
      <div className="scene-loader">
        <p className="font-semibold text-black-500">
          Your browser can't show 3D graphics
        </p>
        <p className="text-sm text-slate-500 max-w-xs text-center">
          Try a recent version of Chrome, Edge, Firefox or Safari with hardware
          acceleration turned on.
        </p>
      </div>
    );
  }

  const downloaded = Math.round(progress);

  return (
    <div className={`scene-loader ${ready ? "opacity-0" : "opacity-100"}`}>
      <div className="w-14 h-14 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      <p className="font-medium text-black-500">{label}</p>
      <div className="w-48 h-1.5 rounded-full bg-slate-200 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] transition-all duration-300"
          style={{ width: `${downloaded > 0 ? downloaded : 100}%` }}
        />
      </div>
      <p className="text-sm text-slate-500">
        {downloaded > 0 && downloaded < 100
          ? `${downloaded}%`
          : "Getting the scene ready..."}
      </p>
    </div>
  );
};

export default Loader;
