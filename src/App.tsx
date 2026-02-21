import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { track } from "@vercel/analytics";
import { Navigation } from "./components/Navigation";
import { ArrowRight, Globe, ArrowUp } from "lucide-react";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const Services = lazy(() => import("./pages/Services").then(module => ({ default: module.Services })));
const Work = lazy(() => import("./pages/Work").then(module => ({ default: module.Work })));
const Studio = lazy(() => import("./pages/Studio").then(module => ({ default: module.Studio })));
const Contact = lazy(() => import("./pages/Contact").then(module => ({ default: module.Contact })));
const Journals = lazy(() => import("./pages/Journals").then(module => ({ default: module.Journals })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-2 border-zinc-100 border-t-brand-violet animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-brand-violet rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

function App() {
  // Initialize activePage from localStorage to persist across reloads
  const [activePage, setActivePage] = useState(() => {
    const savedPage = localStorage.getItem('activePage');
    return savedPage || "home";
  });

  // ✅ Fixed: typed useRef to allow string indexing
  const scrollPositions = useRef<{ [key: string]: number }>({});
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Save current page to localStorage
    localStorage.setItem('activePage', activePage);

    // Restore scroll position for the new page
    const savedPosition = scrollPositions.current[activePage] || 0;
    window.scrollTo({ top: savedPosition, behavior: 'instant' });

    // Track pageview manually since we are using state-based navigation
    track('page_view', { page: activePage });

    // Cleanup: save current scroll position when leaving the page
    return () => {
      scrollPositions.current[activePage] = window.scrollY;
    };
  }, [activePage]);

  const renderPage = () => {
    return (
      <Suspense fallback={<PageLoader />}>
        {(() => {
          switch (activePage) {
            case "home":
              return <Home key="home" setActivePage={setActivePage} />;
            case "services":
              return <Services key="services" setActivePage={setActivePage} />;
            case "work":
              return <Work key="work" />;
            case "studio":
              return <Studio key="studio" />;
            case "contact":
              return <Contact key="contact" />;
            case "journals":
              return <Journals key="journals" setActivePage={setActivePage} />;
            default:
              return <Home key="home" setActivePage={setActivePage} />;
          }
        })()}
      </Suspense>
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white font-sans selection:bg-brand-violet selection:text-white">
      <Analytics />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-violet origin-left z-[2000]"
        style={{ scaleX }}
      />
      <div className="noise-overlay" />
      <Navigation activePage={activePage} setActivePage={setActivePage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <footer className="pt-64 pb-20 bg-[#F9F9FB] rounded-t-[5rem] text-brand-dark px-6 md:px-12 overflow-hidden relative border-t border-zinc-100 mt-32">
        <div className="container mx-auto">
          {/* GIANT TEXT */}
          <div className="mb-48 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-violet/[0.03] blur-3xl pointer-events-none" />
            <motion.div
              initial={{ x: "-20%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
              className="flex whitespace-nowrap"
            >
              <h2 className="text-[clamp(4rem,22vw,30rem)] font-black uppercase tracking-tighter leading-[0.7] text-zinc-100">
                Markin Studio • Markin Studio • Markin Studio
              </h2>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-24 items-end mb-32">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-violet block mb-12">Social Connect</span>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12">
                {[
                  { name: "LinkedIn", url: "https://www.linkedin.com/company/markinstudio/" },
                  { name: "Instagram", url: "https://www.instagram.com/markinstudio1/" },
                  { name: "Pinterest", url: "https://www.pinterest.com/markinstudio64/" },
                  { name: "Behance", url: "https://www.behance.net/markinstudio" },
                  { name: "Dribbble", url: "https://dribbble.com/markin-studio" }
                ].map(item => (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-bold uppercase text-brand-dark hover:text-brand-violet transition-all duration-500 block tracking-tighter group flex items-center gap-3"
                    >
                      {item.name}
                      <ArrowRight size={16} className="-rotate-45 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 lg:text-right space-y-12">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-violet block mb-8">Direct Inquiries</span>
                <p className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 hover:text-brand-violet transition-colors cursor-pointer break-all uppercase tracking-tighter leading-none">markinstudio64@gmail.com</p>
                <div className="flex items-center lg:justify-end gap-10 mt-10">
                  <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setActivePage('contact')}>
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300 group-hover:text-brand-violet transition-colors">Start Project</span>
                    <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-brand-violet group-hover:bg-brand-violet group-hover:text-white transition-all">
                      <ArrowRight size={18} className="-rotate-45" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer" onClick={scrollToTop}>
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300 group-hover:text-brand-violet transition-colors">Back To Top</span>
                    <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-brand-violet group-hover:bg-brand-violet group-hover:text-white transition-all">
                      <ArrowUp size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <Globe size={16} className="text-brand-violet animate-pulse" />
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                © 2026 MARKIN AGENCY — STRATEGIC AUTHORITY
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Systems Peak Efficiency</p>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Privacy • Terms</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;