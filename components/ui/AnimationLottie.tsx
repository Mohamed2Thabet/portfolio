"use client";

import dynamic from "next/dynamic";
import { CSSProperties } from "react";

// Dynamically import Lottie for client-side only
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Props interface
interface AnimationLottieProps {
  animationPath: object; // Lottie JSON object
  width?: string | number; // optional width
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({
  animationPath,
  width = "95%",
}) => {
  const style: CSSProperties = { width };

  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={style}
    />
  );
};

export default AnimationLottie;
