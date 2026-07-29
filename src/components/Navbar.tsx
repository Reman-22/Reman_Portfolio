import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useI18n } from "../i18n/I18nContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useI18n();

  const NAV_ITEMS = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#education", label: t.nav.education },
    { href: "#certificates", label: t.nav.certificates },
    { href: "#journey", label: t.nav.journey },
    { href: "#experience", label: t.nav.experience },
    { href: "#achievements", label: t.nav.achievements },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className={`mx-auto max-w-7xl px-6 transition-all ${scrolled ? "" : ""}`}>
          <div
            className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
              scrolled ? "glass shadow-xl" : "bg-transparent"
            }`}
          >
            <a href="#home" className="group flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400"
              >
                <Sparkles className="h-4 w-4 text-white" />
                <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-40 blur-md group-hover:opacity-70" />
              </motion.div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-sm font-bold tracking-wide">REMAN HAMADAH</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-indigo-300">
                  {language === "en" ? "Frontend · AI" : "واجهات · ذكاء"}
                </span>
              </div>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                    active === item.href
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {active === item.href && (
                    <motion.span
                      layoutId="navpill"
                      className="absolute inset-0 rounded-lg bg-white/10 border border-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl glass transition hover:glow-purple"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                      <Sun className="h-4 w-4 text-cyan-300" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                      <Moon className="h-4 w-4 text-indigo-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              <a
                href="#contact"
                className="hidden rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-cyan-400/40 md:block"
              >
                Let's Talk
              </a>
              <button
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                aria-label="Toggle language"
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl glass"
              >
                <span className="text-xs font-bold text-white">{language === "en" ? "ع" : "EN"}</span>
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl glass"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu + backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[58] bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-x-4 top-20 z-[59] rounded-2xl glass p-4 lg:hidden"
            >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm transition hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
