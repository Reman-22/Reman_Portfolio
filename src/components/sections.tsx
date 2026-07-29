import { motion, AnimatePresence } from "framer-motion";
import { EDUCATION, CERTIFICATES, EXPERIENCE, FAQS } from "../data/portfolio";
import { Briefcase, Trophy, ExternalLink, Phone, ChevronDown, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../i18n/I18nContext";

// ==================== EDUCATION ====================
export function Education() {
  const { language } = useI18n();
  const isAr = language === "ar";
  const eduAr = [
    { year: "2021 — الحالي", title: "بكالوريوس هندسة معلوماتية — تعلم آلي", subtitle: "الجامعة الافتراضية السورية · دمشق", description: "طالبة سنة أخيرة متخصصة بالتعلم الآلي. مركزة على دمج خوارزميات الذكاء الاصطناعي مع تطوير الويب الحديث.", side: "L" as const },
    { year: "2021 — 2025", title: "بكالوريوس اقتصاد", subtitle: "جامعة دمشق · دمشق", description: "شهادة متوازية في الاقتصاد، تبني أساس متعدد التخصصات يوجه نهجي في التفكير المنتج والهندسة الواعية بالأعمال.", side: "R" as const },
  ];
  const data = isAr ? eduAr : EDUCATION;

  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">{isAr ? "// التعليم" : "// Education"}</div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            {isAr ? "الرحلة" : "Academic "} <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{isAr ? "الأكاديمية" : "journey"}</span>
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent md:block" />
          <div className="space-y-12">
            {data.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: item.side === "L" ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`relative flex items-center ${item.side === "L" ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`w-full md:w-5/12 ${item.side === "L" ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 transition hover:glow-purple">
                    <div className="font-mono text-xs uppercase tracking-widest text-cyan-400">{item.year}</div>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-indigo-300">{item.subtitle}</p>
                    <p className="mt-3 text-sm text-slate-400">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(108,99,255,0.8)] md:block" />
                <div className="hidden w-5/12 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CERTIFICATES ====================
export function Certificates() {
  const { language } = useI18n();
  const isAr = language === "ar";
  const certsAr = CERTIFICATES.map(c => ({
    ...c,
    title: c.title.replace("Frontend Web Development — React.js & Vite", "تطوير الواجهات الأمامية — React.js & Vite").replace("Machine Learning", "التعلم الآلي").replace("Informatics Engineering — ML Track", "هندسة معلوماتية — مسار ML").replace("Advisors Team", "فريق الموجهين").replace("Professional Certification", "شهادة مهنية").replace("Specialized Training", "تدريب متخصص").replace("Bachelor's Degree", "بكالوريوس"),
    platform: c.platform.replace("VICA Web Solutions", "فيكا ويب سوليوشنز").replace("Advisors Team", "فريق الموجهين").replace("Syrian Virtual University", "الجامعة الافتراضية السورية"),
    instructor: c.instructor.replace("Professional Certification", "شهادة مهنية").replace("Specialized Training", "تدريب متخصص").replace("Bachelor's Degree", "بكالوريوس"),
    category: c.category.replace("Frontend", "واجهات أمامية").replace("Machine Learning", "تعلم آلي").replace("Artificial Intelligence", "ذكاء اصطناعي").replace("Programming", "برمجة"),
  }));
  const data = isAr ? certsAr : CERTIFICATES;

  return (
    <section id="certificates" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">{isAr ? "// الشهادات والدورات" : "// Certifications & Courses"}</div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            {isAr ? "التعلم" : "Continuous "} <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{isAr ? "المستمر" : "learning"}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">{isAr ? "مجموعة مختارة من الدورات في الواجهات الأمامية والتعلم الآلي والذكاء الاصطناعي." : "A curated selection of courses across Frontend, ML, AI, and Cloud."}</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -8, scale: 1.02 }} className="group relative overflow-hidden rounded-2xl glass">
              <div className={`relative h-32 bg-gradient-to-br ${c.gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center"><span className="text-5xl">{c.emoji}</span></div>
                <div className="absolute right-2 top-2 rounded-full bg-white/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-white backdrop-blur-md">{c.category}</div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-sm font-bold text-white leading-snug">{c.title}</h3>
                <p className="mt-2 text-xs text-slate-400">{c.platform}</p>
                <p className="mt-1 text-xs text-slate-500">{c.instructor}</p>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="font-mono text-[10px] text-slate-500">{c.date}</span>
                  {c.link && <a href={c.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200">{isAr ? "عرض" : "View"} <ExternalLink className="h-3 w-3" /></a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TRAINING TIMELINE ====================
export function TrainingTimeline() {
  const { language } = useI18n();
  const isAr = language === "ar";
  const trainingsAr = [
    { year: "2026", title: "التعلم الآلي", subtitle: "فريق الموجهين", description: "تدريب متخصص في خوارزميات التعلم الآلي ومعالجة البيانات وتطبيقات الذكاء الاصطناعي.", side: "L" as const },
    { year: "2025", title: "Startup Weekend Syria", subtitle: "مشارك / عضو فريق", description: "تعاونت مع فريق متعدد التخصصات لتصميم وبناء نموذج BaaS خلال منافسة شركات ناشئة شديدة لمدة 54 ساعة، مع التركيز على تطوير الواجهات والنمذجة السريعة.", side: "R" as const },
  ];
  const trainingsEn = [
    { year: "2026", title: "Machine Learning", subtitle: "Advisors Team", description: "Specialized training in machine learning algorithms, data processing, and AI applications.", side: "L" as const },
    { year: "2025", title: "Startup Weekend Syria", subtitle: "Participant / Team Member", description: "Collaborated with a multidisciplinary team to ideate and build a BaaS MVP within a 54-hour intense startup competition, focusing on frontend development and rapid prototyping.", side: "R" as const },
  ];
  const data = isAr ? trainingsAr : trainingsEn;

  return (
    <section id="training" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">{isAr ? "// التدريب والدورات" : "// Training & Courses"}</div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{isAr ? "الخلفية التدريبية" : "Training background"}</span>
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent md:block" />
          <div className="space-y-12">
            {data.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: item.side === "L" ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`relative flex items-center ${item.side === "L" ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`w-full md:w-5/12 ${item.side === "L" ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 transition hover:glow-purple">
                    <div className="font-mono text-xs uppercase tracking-widest text-cyan-400">{item.year}</div>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-indigo-300">{item.subtitle}</p>
                    <p className="mt-3 text-sm text-slate-400">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(108,99,255,0.8)] md:block" />
                <div className="hidden w-5/12 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== EXPERIENCE ====================
export function Experience() {
  const { language } = useI18n();
  const isAr = language === "ar";
  const expAr = EXPERIENCE.map(e => ({
    ...e,
    role: e.role === "Startup Weekend Syria" ? "Startup Weekend Syria" :
          e.role === "AI & Chatbot Engineering Trainee" ? "متدربة هندسة Chatbot وذكاء اصطناعي" :
          e.role === "Frontend Developer (Volunteer)" ? "مطورة واجهات أمامية (متطوعة)" :
          e.role === "Data Annotation Specialist (Freelance)" ? "متخصصة تسمية البيانات (عمل حر)" :
          e.role === "Frontend Web Development" ? "تطوير واجهات ويب" :
          e.role,
    org: e.org === "Participant / Team Member" ? "مشارك / عضو فريق" :
         e.org === "Mosaic AI × Syrian AI Association" ? "Mosaic AI × الجمعية السورية للذكاء الاصطناعي" :
         e.org === "The inspires Association" ? "جمعية The inspires" :
          e.org === "SOD — Russian Technology Company" ? "SOD — شركة تقنية روسية" :
          e.org === "VICA Web Solutions" ? "فيكا ويب سوليوشنز" :
          e.org,
     description: e.role === "Startup Weekend Syria" ? "تعاونت مع فريق متعدد التخصصات لتصميم وبناء نموذج BaaS خلال منافسة لمدة 54 ساعة، مع التركيز على تطوير الواجهات والنمذجة السريعة." :
                  e.role === "AI & Chatbot Engineering Trainee" ? "تدريب مكثف على Chatbots وذكاء الاصطناعي وأنظمة الوكلاء الذكية." :
                  e.role === "Frontend Developer (Volunteer)" ? "تحويل أنظمة تصميم Figma إلى مكونات React متجاوبة بالتعاون مع فريق تقني لتحسين تجربة المستخدم." :
                  e.role === "Data Annotation Specialist (Freelance)" ? "تحليل ومعالجة صور طبية لتجهيزها كمجموعات بيانات تدريب لنماذج الذكاء الاصطناعي." :
                  e.role === "Frontend Web Development" ? "تسليم واجهات أمامية احترافية بـ React.js & Vite، مع شهادة مهنية." :
                  e.description,
  }));
  const data = isAr ? expAr : EXPERIENCE;

  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">{isAr ? "// الخبرة" : "// Experience"}</div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            {isAr ? "أين" : "Where I've "} <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{isAr ? "ساهمت" : "contributed"}</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="glass rounded-3xl p-6 transition">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 border border-white/10">
                  <Briefcase className="h-5 w-5 text-indigo-300" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">{exp.type}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{exp.role}</h3>
              <p className="mt-0.5 text-sm text-indigo-300">{exp.org}</p>
              <p className="mt-1 font-mono text-xs text-slate-500">{exp.period}</p>
              <p className="mt-4 text-sm text-slate-400">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.tags.map((t) => (<span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-300">{t}</span>))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FAQ ====================
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { language } = useI18n();
  const isAr = language === "ar";

  const faqsAr = [
    { q: "هل أنت متاحة للعمل الحر؟", a: "نعم! أقبل مشاريع الواجهات الأمامية المختارة — خاصة لوحات التحكم التسويقية الحديثة ومواقع React." },
    { q: "ما تركيزك الحالي؟", a: "أقوم بإنشاء واجهات React منسقة بينما أعمّق مهارات التعلم الآلي من خلال مشاريع عملية." },
    { q: "هل تعملين مع أدوات الذكاء الاصطناعي؟", a: "بالتأكيد — أستخدم الذكاء الاصطناعي كمضاعف إنتاجية وأبني مشاريع صغيرة لفهمه بشكل أعمق." },
    { q: "كيف يمكننا التعاون؟", a: "أسرع طريق هو البريد الإلكتروني أو LinkedIn — عادةً أرد خلال يوم واحد." },
  ];
  const faqsEn = FAQS;
  const faqs = isAr ? faqsAr : faqsEn;

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">{isAr ? "// الأسئلة الشائعة" : "// FAQ"}</div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">{isAr ? "الأسئلة المتكررة" : "Frequently asked"}</h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass overflow-hidden rounded-2xl">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="font-semibold text-white">{f.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }}><ChevronDown className="h-4 w-4 text-cyan-400" /></motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-slate-400">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CONTACT ====================
export function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useI18n();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">{t.contact.sectionLabel}</div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">{t.contact.title} <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{t.contact.titleGradient}</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">{t.contact.subtitle}</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8">
            <h3 className="font-display text-2xl font-bold text-white">{t.contact.letsTalk}</h3>
            <p className="mt-3 text-sm text-slate-400">{t.contact.description}</p>
            <div className="mt-8 space-y-5">
              <a href="mailto:hareeman3@gmail.com" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-indigo-400/40 hover:bg-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400"><Mail className="h-5 w-5 text-white" /></div>
                <div className="flex-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-500">{t.contact.email}</div>
                  <div className="font-semibold text-white">hareeman3@gmail.com</div>
                </div>
              </a>
              <a href="tel:+963937473953" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-indigo-400/40 hover:bg-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400"><Phone className="h-5 w-5 text-white" /></div>
                <div className="flex-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-500">{t.contact.phone}</div>
                  <div className="font-semibold text-white">+963 937 473 953</div>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500"><MapPin className="h-5 w-5 text-white" /></div>
                <div className="flex-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-500">{t.contact.location}</div>
                  <div className="font-semibold text-white">{t.contact.locationValue}</div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="mb-3 text-xs font-mono uppercase tracking-widest text-slate-500">{t.contact.followMe}</div>
              <div className="flex gap-3">
                <a href="https://github.com/Reman-22" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-xl glass transition hover:glow-purple hover:bg-[#333]">
                  <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/reman-hamadah" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-xl glass transition hover:glow-purple hover:bg-[#0A66C2]">
                  <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.instagram.com/reman.ha1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-xl glass transition hover:glow-purple hover:bg-[#E4405F]">
                  <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="mailto:hareeman3@gmail.com" aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-xl glass transition hover:glow-purple">
                  <Mail className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass relative rounded-3xl p-8">
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-slate-500">{t.contact.form.name}</label>
                  <input required type="text" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30" placeholder={t.contact.form.namePlaceholder} />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-slate-500">{t.contact.form.email}</label>
                  <input required type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30" placeholder={t.contact.form.emailPlaceholder} />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-slate-500">{t.contact.form.subject}</label>
                <input required type="text" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30" placeholder={t.contact.form.subjectPlaceholder} />
              </div>
              <div>
                <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-slate-500">{t.contact.form.message}</label>
                <textarea required rows={5} className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30" placeholder={t.contact.form.messagePlaceholder} />
              </div>
              <button type="submit" className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-cyan-400/50">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative flex items-center gap-2">{sent ? t.contact.form.sent : t.contact.form.send}{!sent && <Send className="h-4 w-4" />}</span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400"><Trophy className="h-4 w-4 text-white" /></div>
            <div>
              <div className="font-display text-sm font-bold">Reman Hamadah</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{t.footer.subtitle}</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <div className="text-xs text-slate-500">{t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}</div>
        </div>
      </div>
    </footer>
  );
}
