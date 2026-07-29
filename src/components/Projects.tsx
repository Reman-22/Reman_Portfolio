import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight, GitBranch, ExternalLink, Sparkles, CheckCircle2, Clock, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS, type Project } from "../data/portfolio";
import { useNavigate } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

const CATEGORY_KEYS = ["all", "frontend", "ml", "ai", "personal", "university", "startup"] as const;
const CATEGORY_VALUES: Record<string, string> = {
  all: "All",
  frontend: "Frontend",
  ml: "Machine Learning",
  ai: "AI",
  personal: "Personal",
  university: "University",
  startup: "Startup",
};

const ITEMS_PER_PAGE = 6;

const STATUS_STYLES: Record<string, { icon: any; color: string; bg: string; label: string }> = {
  Live: { icon: CheckCircle2, color: "text-emerald-300", bg: "bg-emerald-500/10 border-emerald-500/30", label: "Live" },
  "In Progress": { icon: Clock, color: "text-amber-300", bg: "bg-amber-500/10 border-amber-500/30", label: "In Progress" },
  Learning: { icon: BookOpen, color: "text-cyan-300", bg: "bg-cyan-500/10 border-cyan-500/30", label: "Learning" },
};

// Professional gradient backgrounds for project cards
const PROJECT_GRADIENTS: Record<string, string> = {
  "mini-erp-ai": "linear-gradient(135deg, #4f46e5 0%, #7c3aed 30%, #a855f7 60%, #6366f1 100%)",
  "startup-weekend-syria": "linear-gradient(135deg, #e11d48 0%, #be185d 40%, #9333ea 70%, #7c3aed 100%)",
  "scopesnap": "linear-gradient(135deg, #059669 0%, #0d9488 30%, #0891b2 60%, #0284c7 100%)",
  "fashion-store": "linear-gradient(135deg, #1f2937 0%, #374151 40%, #6b7280 70%, #9ca3af 100%)",
  "luxury-boutique": "linear-gradient(135deg, #92400e 0%, #a16207 30%, #ca8a04 60%, #eab308 100%)",
  trippy: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 30%, #14b8a6 60%, #0d9488 100%)",
  blogs: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 30%, #d946ef 60%, #ec4899 100%)",
  restaurant: "linear-gradient(135deg, #f59e0b 0%, #ea580c 40%, #dc2626 70%, #b91c1c 100%)",
  medication: "linear-gradient(135deg, #10b981 0%, #059669 40%, #0d9488 70%, #14b8a6 100%)",
  iphone: "linear-gradient(135deg, #111827 0%, #374151 30%, #4b5563 60%, #6b7280 100%)",
  "ai-learning-lab": "linear-gradient(135deg, #7c3aed 0%, #6d28d9 30%, #7e22ce 60%, #9333ea 100%)",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const nav = useNavigate();
  const { t } = useI18n();
  const status = STATUS_STYLES[project.status || "Live"];
  const StatusIcon = status.icon;
  const statusLabel = project.status === "Live" ? t.projects.status.live : project.status === "In Progress" ? t.projects.status.inProgress : t.projects.status.learning;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 10, y: py * -10 });
  };

  const bgStyle = PROJECT_GRADIENTS[project.id] || `linear-gradient(135deg, ${project.gradient ? `var(--${project.gradient})` : '#4f46e5'} 0%, #7c3aed 100%)`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: index * 0.05 }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setTilt({ x: 0, y: 0 });
      }}
      onClick={() => nav(`/projects/${project.id}`)}
      style={{
        transform: hover
          ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
          : "perspective(1000px) rotateX(0) rotateY(0)",
        transition: "transform 0.2s ease-out",
      }}
      className="group relative cursor-pointer overflow-hidden rounded-3xl glass"
    >
      {/* Top image preview */}
      <div
        className="relative h-52 overflow-hidden"
      >
        {project.realImage ? (
          <img
            src={project.realImage}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div style={{ background: bgStyle }} className="h-full w-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border bg-black/30 px-2.5 py-1 backdrop-blur-md">
          <StatusIcon className={`h-3 w-3 ${status.color}`} />
          <span className="font-mono text-[10px] uppercase tracking-widest text-white">
            {statusLabel}
          </span>
        </div>
        <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur-md">
          {project.category}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hover ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            {t.projects.viewCaseStudy} <ArrowUpRight className="h-4 w-4" />
          </div>
        </motion.div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
          {project.featured && (
            <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 px-2 py-0.5">
              <Sparkles className="h-3 w-3 text-amber-300" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-amber-300">{t.projects.featured}</span>
            </div>
          )}
        </div>
        <p className="mt-3 line-clamp-2 text-sm text-slate-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-300">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            {project.github && (
              <button
                onClick={(e) => { e.stopPropagation(); window.open(project.github, "_blank"); }}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition hover:bg-white/10"
                aria-label="GitHub"
              >
                <GitBranch className="h-4 w-4" />
              </button>
            )}
            {project.live && (
              <button
                onClick={(e) => { e.stopPropagation(); window.open(project.live, "_blank"); }}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition hover:bg-white/10"
                aria-label="Live demo"
              >
                <ExternalLink className="h-4 w-4" />
              </button>
            )}
          </div>
          <span className="text-xs text-slate-500 transition group-hover:text-cyan-300">
            {t.projects.readMore}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [catKey, setCatKey] = useState<(typeof CATEGORY_KEYS)[number]>("all");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(0);
  const { t, language } = useI18n();

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchCat = catKey === "all" || p.category === CATEGORY_VALUES[catKey];
      const matchQ = !q || [p.title, p.description, ...p.tech].some((text) => text.toLowerCase().includes(q.toLowerCase()));
      return matchCat && matchQ;
    });
  }, [catKey, q]);

  // Reset page when filter changes
  useMemo(() => setPage(0), [catKey, q]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            {t.projects.sectionLabel}
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            {t.projects.title} <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{t.projects.titleGradient}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-2">
            {CATEGORY_KEYS.map((key) => {
              const label = t.projects.filters[key];
              return (
                <button
                  key={key}
                  onClick={() => setCatKey(key)}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    catKey === key ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {catKey === key && (
                    <motion.span
                      layoutId="catpill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.projects.search}
              className="w-full rounded-full glass pl-10 pr-4 py-2 text-sm outline-none transition focus:ring-2 focus:ring-indigo-400/40 sm:w-64"
            />
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {paginated.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className={`flex h-11 w-11 items-center justify-center rounded-full glass transition ${
                page === 0 ? "opacity-30 cursor-not-allowed" : "hover:glow-purple"
              }`}
            >
              {language === "ar" ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </motion.button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage(i)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${
                    i === page
                      ? "bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30"
                      : "glass text-slate-400 hover:text-white"
                  }`}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className={`flex h-11 w-11 items-center justify-center rounded-full glass transition ${
                page === totalPages - 1 ? "opacity-30 cursor-not-allowed" : "hover:glow-purple"
              }`}
            >
              {language === "ar" ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </motion.button>
          </motion.div>
        )}

        {filtered.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            {language === "ar" ? "لا توجد مشاريع تطابق بحثك." : "No projects match your search."}
          </div>
        )}
      </div>
    </section>
  );
}
