import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { track } from "@vercel/analytics";
import { Navigation } from "./components/Navigation";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const Services = lazy(() => import("./pages/Services").then(module => ({ default: module.Services })));
const Work = lazy(() => import("./pages/Work").then(module => ({ default: module.Work })));
const Studio = lazy(() => import("./pages/Studio").then(module => ({ default: module.Studio })));
const Contact = lazy(() => import("./pages/Contact").then(module => ({ default: module.Contact })));
const Journals = lazy(() => import("./pages/Journals").then(module => ({ default: module.Journals })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center p-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
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

  useEffect(() => {
    // Save current page to localStorage
    localStorage.setItem('activePage', activePage);

    // Restore scroll position for the new page
    const savedPosition = scrollPositions.current[activePage] || 0;
    window.scrollTo({ top: savedPosition, behavior: 'instant' });

    // Track pageview manually since we are using state-based navigation (not URL-based)
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

  return (
    <div className="bg-white font-sans selection:bg-black selection:text-white">
      <Analytics />
      <div className="noise-overlay" />
      <Navigation activePage={activePage} setActivePage={setActivePage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <footer className="pt-64 pb-20 bg-white text-zinc-900 px-6 md:px-12 overflow-hidden relative border-t border-zinc-100">
        <div className="container mx-auto">
          {/* GIANT TEXT */}
          <div className="mb-48 relative overflow-hidden">
            <motion.div
              initial={{ x: "-20%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="flex whitespace-nowrap"
            >
              <h2 className="text-[clamp(4rem,22vw,24rem)] font-bold uppercase tracking-tighter leading-[0.7] text-zinc-100">
                Engineering Value • Engineering Value • Engineering Value
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 pt-24 border-t border-zinc-100">
            <div className="space-y-12">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold tracking-tight uppercase leading-none text-zinc-900">
                  Markin Studio<span className="text-blue-600 text-xs">®</span>
                </span>
              </div>
              <p className="text-zinc-500 font-medium leading-relaxed max-w-[240px]">
                Architecting the future of visual and cognitive brand autonomy through engineering and design excellence.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-12">Navigation</span>
              <ul className="space-y-6">
                {["Home", "Services", "Work", "Studio", "Journals"].map(item => (
                  <li key={item}>
                    <button
                      onClick={() => setActivePage(item.toLowerCase())}
                      className="text-2xl font-bold uppercase text-zinc-900 hover:text-blue-600 transition-colors cursor-pointer block"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-12">Collective</span>
              <ul className="space-y-6">
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
                      className="text-2xl font-bold uppercase text-zinc-900 hover:text-blue-600 transition-colors block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-6">Inquiries</span>
                <p className="text-xl font-bold text-zinc-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer break-all uppercase">markinstudio64@gmail.com</p>
                <p className="text-xl font-bold text-zinc-900 hover:text-blue-600 transition-colors cursor-pointer uppercase">+92 337 0660803</p>
              </div>

              <div className="pt-12 border-t border-zinc-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                  © 2026 MARKIN AGENCY — ALL RIGHTS RESERVED
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;