import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

/**
 * Custom hook to trigger Framer Motion animations
 * when a section/component enters or leaves the viewport.
 * 
 * @param {Object} options - Intersection Observer options (e.g., threshold)
 * @returns {Object} { ref, controls } - ref to attach to the element, and animation controls
 */
export function useSectionInView(options = { threshold: 0.5 }) {
  const controls = useAnimation(); // Animation controls for Framer Motion
  const { ref, inView } = useInView(options); // Ref and inView state from react-intersection-observer

  useEffect(() => {
    if (inView) {
      controls.start("visible");  // Play animation
    } else {
      controls.start("hidden");   // Reset animation when out of view
    }
  }, [inView, controls]);

  return { ref, controls }; // Return ref to attach and controls for animation
}
