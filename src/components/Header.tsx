import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

// ✅ Use public path — no import needed
const LOGO_SRC = "/assets/logo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Studio", href: "#studio" },
    { name: "Insights", href: "#journals" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center relative">

          {/* Logo */}
          <a href="/" aria-label="Markin Studio" className="relative z-50">
            <img
              src={LOGO_SRC}
              className="h-8 md:h-10 w-auto object-contain"
              alt="Markin Studio"
              onError={(e) => {
                console.error("Logo not found at:", LOGO_SRC);
                (e.target as HTMLImageElement).style.opacity = "0";
              }}
            />
          </a>

          {/* Centered Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md border border-white/40 shadow-sm rounded-full px-2 py-1.5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 px-5 py-2 rounded-full hover:bg-white hover:text-black hover:shadow-sm transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all transform hover:scale-[1.02] shadow-lg shadow-zinc-200"
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-zinc-800 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-semibold text-zinc-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};