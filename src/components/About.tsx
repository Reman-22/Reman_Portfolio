import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, Heart, Rocket } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const { t } = useI18n();

  return (
    <section id="about" ref={ref} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            {t.about.sectionLabel}
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            {t.about.title}{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {t.about.titleGradient}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass rounded-3xl p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-slate-300">{t.about.bio.p1}</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">{t.about.bio.p2}</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">{t.about.bio.p3}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Target, label: t.about.strengths.focused, color: "text-indigo-300" },
                  { icon: Zap, label: t.about.strengths.fastShipper, color: "text-cyan-300" },
                  { icon: Heart, label: t.about.strengths.detailOriented, color: "text-pink-300" },
                  { icon: Rocket, label: t.about.strengths.growthMindset, color: "text-purple-300" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <s.icon className={`h-5 w-5 ${s.color}`} />
                    <span className="text-xs font-semibold">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mini timeline */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative space-y-4">
              {t.about.timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ x: 8 }}
                  className="group relative flex gap-4 rounded-2xl glass p-4 transition"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-xs font-bold text-white">
                      {item.year.slice(2)}
                    </div>
                    {i < t.about.timeline.length - 1 && (
                      <div className="mt-2 h-full w-px bg-gradient-to-b from-indigo-500/60 to-transparent" />
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="font-mono text-xs text-indigo-300">{item.year}</div>
                    <div className="mt-1 font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
