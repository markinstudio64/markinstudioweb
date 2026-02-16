import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";

// Define props interface
interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navigation = ({ activePage, setActivePage }: NavigationProps) => {
  const [time, setTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Capabilities" },
    { id: "work", label: "Archive" },
    { id: "studio", label: "Studio" },
    { id: "journals", label: "Insights" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] px-6 py-8 md:px-12">
      <div className="max-w-[1500px] mx-auto flex justify-between items-center">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <button
            onClick={() => setActivePage("home")}
            className="flex items-center group cursor-pointer"
          >
            <img
              src="/assets/logo.png"
              alt="Markin Studio Logo"
              className="h-12 md:h-14 mix-blend-difference"
            />
          </button>
        </motion.div>

        {/* DESKTOP NAVIGATION - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-1 bg-zinc-950/20 backdrop-blur-3xl border border-white/5 p-1.5 rounded-full">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`relative px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                activePage === link.id ? "text-white" : "text-zinc-400 hover:text-black hover:bg-white/5"
              }`}
            >
              {activePage === link.id && (
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-lg shadow-blue-900/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                />
              )}
              {link.label}
            </button>
          ))}
        </div>

        {/* MOBILE MENU BUTTON - Visible only on mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-zinc-950/20 backdrop-blur-3xl border border-white/5 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* DESKTOP INFO / CTA - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:flex items-center gap-12"
        >
          <div className="text-right flex flex-col items-end">
            <div className="flex items-center gap-2" style={{color: '#A7A7B0'}}>
               <Globe size={10} />
               <span className="text-[8px] font-black uppercase tracking-widest">Global Ops</span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">{time}</span>
          </div>
          <button
            onClick={() => setActivePage("contact")}
            className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl active:scale-95"
          >
            Project Inquiry <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* MOBILE MENU - Shown only when mobileMenuOpen is true */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-[1001] shadow-2xl flex flex-col pointer-events-auto"
          >
            <div className="p-6 flex justify-between items-center border-b">
              <div className="flex items-center">
                <img
                  src="/assets/logo.png"
                  alt="Markin Studio Logo"
                  className="h-10 mix-blend-darken"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col py-8 px-6">
              <div className="space-y-1 flex-1">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setActivePage(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      activePage === link.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Mobile Project Inquiry Button - Centered */}
              <div className="mt-auto pt-8 pb-4 flex justify-center">
                <button
                  onClick={() => {
                    setActivePage("contact");
                    setMobileMenuOpen(false);
                  }}
                  className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl"
                >
                  Project Inquiry <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-[1000] lg:hidden"
          />
        )}
      </AnimatePresence>
    </nav>
  );
};