import { motion } from "framer-motion";
import { Code2, Brain, Palette, Sparkles } from "lucide-react";
import { SKILLS } from "../data/portfolio";

const ICON_MAP: Record<string, any> = { Code2, Brain, Palette };

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            // Skills & Toolkit
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            My <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">craft stack</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A curated set of tools and technologies — mastered in frontend, actively
            expanding in AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SKILLS.map((cat, ci) => {
            const Icon = ICON_MAP[cat.icon] ?? Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl glass p-6 sm:p-8 perspective-1000"
              >
                {/* Gradient accent */}
                <div className={`absolute -top-20 -right-20 h-52 w-52 rounded-full bg-gradient-to-br ${
                  cat.learning ? "from-cyan-500/30 to-indigo-500/30" : "from-indigo-500/30 to-purple-500/30"
                } blur-3xl transition-opacity group-hover:opacity-100`} />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      cat.learning
                        ? "bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/30"
                        : "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30"
                    }`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    {cat.learning && (
                      <div className="flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1">
                        <Sparkles className="h-3 w-3 text-cyan-300" />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-300">
                          Learning
                        </span>
                      </div>
                    )}
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{cat.subtitle}</p>

                  <div className="mt-6 space-y-4">
                    {cat.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.1 + i * 0.04 }}
                      >
                        <div className="mb-1.5 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">{skill.name}</span>
                            {skill.learning && (
                              <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-cyan-300">
                                Learning
                              </span>
                            )}
                          </div>
                          <span className="font-mono text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="relative h-1.5 overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: ci * 0.1 + i * 0.04, ease: "easeOut" }}
                            className={`absolute inset-y-0 left-0 rounded-full ${
                              skill.learning
                                ? "bg-gradient-to-r from-cyan-400 to-indigo-400"
                                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                            }`}
                            style={{ boxShadow: "0 0 12px rgba(108,99,255,0.6)" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
