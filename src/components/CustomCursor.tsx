import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useAnimations";
import { useTheme } from "../context/ThemeContext";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <motion.div
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference hidden md:block"
        animate={{ x: x - 8, y: y - 8 }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.3 }}
      >
        <div className={`h-4 w-4 rounded-full ${isDark ? "bg-white" : "bg-black"}`} />
      </motion.div>
      <motion.div
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[99] hidden md:block"
        animate={{ x: x - 24, y: y - 24 }}
        transition={{ type: "spring", damping: 20, stiffness: 150, mass: 0.6 }}
      >
        <div className="h-12 w-12 rounded-full border border-indigo-400/50" />
      </motion.div>
    </>
  );
}
