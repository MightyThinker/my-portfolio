// hooks/useSectionInView.js
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function useSectionInView(options = { threshold: 0.5 }) {
  const controls = useAnimation();
  const { ref, inView } = useInView(options);

  useEffect(() => {
    if (inView) {
      controls.start("visible");  // play animation
    } else {
      controls.start("hidden");   // reset animation when out of view
    }
  }, [inView, controls]);

  return { ref, controls };
}
