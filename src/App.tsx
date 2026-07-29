import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { I18nProvider } from "./i18n/I18nContext";
import { Layout } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { LoadingScreen } from "./components/LoadingScreen";
import { Footer } from "./components/sections";
import { useI18n } from "./i18n/I18nContext";

function AppContent() {
  const { isRTL } = useI18n();
  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-arabic" : ""}>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <AnimatedBackground />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route
          path="/projects/:id"
          element={
            <>
              <Navbar />
              <div className="relative z-10">
                <ProjectDetail />
                <Footer />
              </div>
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </I18nProvider>
    </ThemeProvider>
  );
}
