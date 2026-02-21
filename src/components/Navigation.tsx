import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navigation = ({ activePage, setActivePage }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Capabilities" },
    { id: "work", label: "Archive" },
    { id: "studio", label: "Studio" },
    { id: "journals", label: "Insights" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] px-4 py-4 md:py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-50"
        >
          <button
            onClick={() => setActivePage("home")}
            className="flex items-center group cursor-pointer"
          >
            <img
              src="/assets/logo.png"
              alt="Markin Studio"
              className="h-8 md:h-10 w-auto"
            />
          </button>
        </motion.div>

        {/* CENTER NAV PILL */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md border border-white/40 p-1.5 rounded-full shadow-sm absolute left-1/2 -translate-x-1/2"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activePage === link.id ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900 hover:bg-white/50"
                }`}
            >
              {activePage === link.id && (
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm border border-zinc-100"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.label}
            </button>
          ))}
        </motion.div>

        {/* RIGHT ACTION */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:flex items-center gap-4 relative z-50"
        >
          <button
            onClick={() => setActivePage("contact")}
            className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Let's Talk <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* MOBILE TOGGLE */}
        <div className="lg:hidden relative z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200 text-zinc-900 shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed inset-0 z-[999] bg-white pointer-events-auto flex flex-col pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { setActivePage(link.id); setMobileMenuOpen(false); }}
                  className="text-2xl font-bold text-zinc-900"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { setActivePage("contact"); setMobileMenuOpen(false); }}
                className="mt-4 bg-black text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2"
              >
                Let's Talk <ArrowUpRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};