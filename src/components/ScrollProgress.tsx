import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { damping: 30, stiffness: 150, mass: 0.4 });

  return (
    <motion.div
      className="fixed top-0 left-0 z-[80] h-[3px] w-full origin-left"
      style={{
        scaleX: smooth,
        background: "linear-gradient(90deg, #6C63FF 0%, #00E5FF 50%, #6C63FF 100%)",
        boxShadow: "0 0 12px rgba(0, 229, 255, 0.6)",
      }}
    />
  );
}
