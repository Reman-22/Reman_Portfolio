import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useAnimations";

export function AnimatedBackground() {
  const { x, y } = useMousePosition();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,99,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mouse-follow glow */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        animate={{
          x: x - 250,
          y: y - 250,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 120, mass: 0.6 }}
        style={{
          background:
            "radial-gradient(circle, rgba(108,99,255,0.4) 0%, rgba(0,229,255,0.2) 40%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <div className="floaty-slow absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="floaty absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="floaty-slow absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />

      {/* Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.6 + 0.2,
          }}
          animate={{
            y: [null, -30, 30, -30],
            opacity: [null, 0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}
