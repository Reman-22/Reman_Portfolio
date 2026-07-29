import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="font-display text-[20rem] font-bold text-white sm:text-[30rem]">404</div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-md text-center"
      >
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-xl shadow-indigo-500/30">
          <Home className="h-8 w-8 text-white" />
        </div>
        <h1 className="font-display text-5xl font-bold">Lost in space</h1>
        <p className="mt-4 text-slate-400">
          The page you're looking for has drifted into another dimension. Let's bring you back.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-cyan-400/50"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
