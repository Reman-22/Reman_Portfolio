import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Code2, Brain } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nContext";

function TypingEffect({ roles }: { roles: string[] }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    setIdx(0);
    setSub("");
    setDel(false);
  }, [roles]);

  useEffect(() => {
    const current = roles[idx];
    const t = setTimeout(
      () => {
        if (!del) {
          if (sub.length < current.length) setSub(current.slice(0, sub.length + 1));
          else setTimeout(() => setDel(true), 1500);
        } else {
          if (sub.length > 0) setSub(current.slice(0, sub.length - 1));
          else {
            setDel(false);
            setIdx((i) => (i + 1) % roles.length);
          }
        }
      },
      del ? 40 : 80
    );
    return () => clearTimeout(t);
  }, [sub, del, idx, roles]);

  return (
    <span className="inline-flex">
      <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
        {sub}
      </span>
      <span className="blink ml-1 h-[1em] w-[3px] bg-cyan-400" />
    </span>
  );
}

export function Hero() {
  const { t } = useI18n();
  const ROLES = [t.hero.roles.frontend, t.hero.roles.react, t.hero.roles.aiStudent];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        {/* Left */}
        <div className="relative z-10 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono uppercase tracking-widest text-emerald-300">
              {t.hero.available}
            </span>
          </motion.div>

          {/* Name as hero */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display leading-[0.9] text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] xl:text-[6rem]"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="block bg-gradient-to-r from-white via-indigo-100 to-cyan-100 bg-clip-text text-transparent font-bold"
            >
              {t.hero.name}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold"
            >
              {t.hero.hamadah}
            </motion.span>
          </motion.h1>

          {/* Decorative underline */}
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1, duration: 1.4, ease: "easeInOut" }}
            viewBox="0 0 400 12"
            fill="none"
            className="mt-2 w-64 sm:w-80"
          >
            <path
              d="M2 9 Q 100 2 200 7 T 398 5"
              stroke="url(#g1)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop stopColor="#6C63FF" />
                <stop offset="1" stopColor="#00E5FF" />
              </linearGradient>
            </defs>
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex items-center gap-3 text-xl font-light text-slate-300 sm:text-2xl"
          >
            <span className="text-slate-500">{t.hero.imA}</span>
            <TypingEffect roles={ROLES} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-cyan-400/50"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">{t.hero.buttons.viewProjects}</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/cv.pdf"
              download="Reman_Hamadah_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition hover:glow-purple"
            >
              <Download className="h-4 w-4" />
              {t.hero.buttons.downloadCV}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {t.hero.buttons.contactMe}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              { v: "10+", l: t.hero.stats.projects },
              { v: "2+", l: t.hero.stats.years },
              { v: "3", l: t.hero.stats.startup },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Avatar area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-square max-w-md">
            {/* Orbiting rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-indigo-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-6 rounded-full border border-cyan-400/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-12 rounded-full border border-purple-400/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Avatar glow */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 opacity-40 blur-2xl pulse-glow" />

            {/* Main avatar */}
            <div className="absolute inset-16 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-8xl font-bold text-white/90">RH</div>
                  <div className="font-mono text-xs uppercase tracking-widest text-white/60">
                    Frontend · AI
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <motion.div
              className="floaty absolute -left-2 top-10 flex items-center gap-2 rounded-xl glass px-3 py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Code2 className="h-4 w-4 text-indigo-400" />
              <span className="text-xs font-semibold">React</span>
            </motion.div>
            <motion.div
              className="floaty-slow absolute -right-4 top-1/3 flex items-center gap-2 rounded-xl glass px-3 py-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span className="text-xs font-semibold">TypeScript</span>
            </motion.div>
            <motion.div
              className="floaty absolute -bottom-2 left-10 flex items-center gap-2 rounded-xl glass px-3 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <Brain className="h-4 w-4 text-purple-400" />
              <span className="text-xs font-semibold">AI/ML</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
            {t.hero.scroll}
          </span>
          <motion.div
            className="h-8 w-[1px] bg-gradient-to-b from-white/60 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
