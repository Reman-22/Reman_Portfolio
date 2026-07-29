import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, GitBranch, ExternalLink, Layers, Lightbulb, Target, Sparkles, Zap } from "lucide-react";
import { PROJECTS } from "../data/portfolio";
import { useI18n } from "../i18n/I18nContext";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const { language } = useI18n();
  const project = PROJECTS.find((p) => p.id === id);

  const isAr = language === "ar";

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold">{isAr ? "المشروع غير موجود" : "Project not found"}</h1>
          <button onClick={() => nav("/")} className="mt-6 inline-flex text-cyan-400">{isAr ? "← العودة للرئيسية" : "← Back home"}</button>
        </div>
      </div>
    );
  }

  const featuresEn = [
    "Fully responsive layout — mobile, tablet, desktop",
    "Accessible components with keyboard & screen-reader support",
    "Smooth micro-interactions powered by Framer Motion",
    "Type-safe architecture using TypeScript",
    "Optimized performance with lazy loading",
    "Dark & light mode with seamless transitions",
  ];
  const featuresAr = [
    "تصميم متجاوب بالكامل — موبايل، تابلت، حاسوب",
    "مكونات سهلة الوصول مع دعم لوحة المفاتيح وقارئ الشاشة",
    "تفاعلات دقيقة سلسة مدعومة بـ Framer Motion",
    "بنية آمنة النوع باستخدام TypeScript",
    "أداء محسّن مع التحميل الكسول",
    "وضع ليلي ونهاري مع انتقالات سلسة",
  ];

  const challengesEn = [
    "Balancing visual polish with performance budgets",
    "Handling complex state across multiple interactive components",
    "Crafting delightful animations that don't feel gimmicky",
  ];
  const challengesAr = [
    "موازنة الصقل البصري مع ميزانيات الأداء",
    "إدارة الحالة المعقدة عبر مكونات تفاعلية متعددة",
    "صنع أنيميشن ممتع لا يبدو مبتذلاً",
  ];

  const lessonsEn = [
    "Shipping beats perfecting — iterate in public",
    "Type safety pays off exponentially as the project grows",
    "User empathy drives better UX than any design trend",
  ];
  const lessonsAr = [
    "الإطلاق يتفوق على الكمال — التكرار علناً",
    "الأمان النوعي يؤتي ثماره بشكل أسي مع نمو المشروع",
    "التعاطف مع المستخدم يقود تجربة أفضل من أي اتجاه تصميمي",
  ];

  const improvementsEn = [
    "Add server-side rendering for SEO-heavy pages",
    "Integrate analytics to measure engagement",
    "Expand accessibility audit to WCAG AAA",
  ];
  const improvementsAr = [
    "إضافة التقديم من جانب الخادم للصفحات المعتمدة على SEO",
    "دمج التحليلات لقياس المشاركة",
    "توسيع مراجعة سهولة الوصول إلى WCAG AAA",
  ];

  const features = isAr ? featuresAr : featuresEn;
  const challenges = isAr ? challengesAr : challengesEn;
  const lessons = isAr ? lessonsAr : lessonsEn;
  const improvements = isAr ? improvementsAr : improvementsEn;
  const title = isAr && project.titleAr ? project.titleAr : project.title;
  const description = isAr && project.descriptionAr ? project.descriptionAr : project.description;
  const problem = isAr && project.problemAr ? project.problemAr : project.problem;
  const solution = isAr && project.solutionAr ? project.solutionAr : project.solution;

  return (
    <div className="relative min-h-screen pt-32 pb-24">
      {/* Back nav */}
      <div className="mx-auto max-w-5xl px-6">
          <motion.button
          onClick={() => nav(-1)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm transition hover:glow-purple"
        >
          <ArrowLeft className="h-4 w-4" /> {isAr ? "رجوع" : "Back"}
        </motion.button>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-12 sm:p-20`}
        >
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur-md">
                {project.category}
              </span>
              {project.status && (
                <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur-md">
                  {project.status}
                </span>
              )}
              {project.featured && (
                <span className="flex items-center gap-1 rounded-full border border-amber-300/50 bg-amber-400/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-amber-100 backdrop-blur-md">
                  <Sparkles className="h-3 w-3" /> {isAr ? "مميز" : "Featured"}
                </span>
              )}
            </div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="mt-6 text-7xl sm:text-9xl"
            >
              {project.emoji}
            </motion.div>
            <h1 className="mt-8 font-display text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">{description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-black/30 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black/50">
                  <GitBranch className="h-4 w-4" /> {isAr ? "المصدر" : "View Source"}
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">
                  <ExternalLink className="h-4 w-4" /> {isAr ? "تجربة مباشرة" : "Live Demo"} <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Body */}
      <div className="mx-auto mt-16 max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Main */}
          <div className="space-y-10 lg:col-span-2">
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="mb-4 flex items-center gap-2 text-cyan-400">
                <Target className="h-5 w-5" />
                <span className="font-mono text-xs uppercase tracking-widest">{isAr ? "نظرة عامة" : "Overview"}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{description}</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="mb-4 flex items-center gap-2 text-cyan-400">
                <Zap className="h-5 w-5" />
                <span className="font-mono text-xs uppercase tracking-widest">{isAr ? "المشكلة" : "The Problem"}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{problem}</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="mb-4 flex items-center gap-2 text-cyan-400">
                <Lightbulb className="h-5 w-5" />
                <span className="font-mono text-xs uppercase tracking-widest">{isAr ? "الحل" : "The Solution"}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{solution}</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="mb-4 flex items-center gap-2 text-cyan-400">
                <Layers className="h-5 w-5" />
                <span className="font-mono text-xs uppercase tracking-widest">{isAr ? "الميزات الرئيسية" : "Key Features"}</span>
              </div>
              <ul className="space-y-2">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> {f}
                  </li>
                ))}
              </ul>
            </motion.section>

            <div className="grid gap-6 md:grid-cols-3">
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-5">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-cyan-400">{isAr ? "التحديات" : "Challenges"}</div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {challenges.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              </motion.section>
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-5">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-indigo-400">{isAr ? "الدروس المستفادة" : "Lessons"}</div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {lessons.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              </motion.section>
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-5">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-purple-400">{isAr ? "خطوات قادمة" : "Next Steps"}</div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {improvements.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              </motion.section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{isAr ? "التقنيات" : "Tech Stack"}</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{isAr ? "حالة المشروع" : "Project Status"}</div>
              <div className="mt-2 font-display text-xl font-bold text-white">{project.status}</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-6 text-white">
              <div className="font-display text-lg font-bold">{isAr ? "أعجبك هذا المشروع؟" : "Like this project?"}</div>
              <p className="mt-2 text-sm text-white/80">{isAr ? "لنبني شيئاً مشابهاً — أو أفضل." : "Let's build something similar — or better."}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
                {isAr ? "تواصلي معي" : "Get in touch"} <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
