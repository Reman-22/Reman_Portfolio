import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center animated-gradient"
        >
          <div className="relative">
            <motion.div
              className="h-24 w-24 rounded-full border-2 border-indigo-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 m-auto h-16 w-16 rounded-full border-2 border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-white"
              >
                R
              </motion.span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 font-mono text-xs tracking-[0.3em] text-indigo-300"
          >
            INITIALIZING PORTFOLIO
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
