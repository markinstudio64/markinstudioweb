import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// ✅ Use public path — no import needed
const LOGO_SRC = "/assets/logo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }) + " GMT+5"
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "CAPABILITIES", href: "#services" },
    { name: "ARCHIVE", href: "#work" },
    { name: "STUDIO", href: "#studio" },
    { name: "INSIGHTS", href: "#journals" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* ✅ ONLY YOUR LOGO — PUBLIC PATH */}
        <a href="/" aria-label="Markin Studio">
          <img
            src={LOGO_SRC}
            className="h-10 w-auto"
            onError={(e) => {
              console.error("Logo not found at:", LOGO_SRC);
              (e.target as HTMLImageElement).style.opacity = "0";
            }}
          />
        </a>

        <nav className="hidden md:flex items-center">
          <div className="bg-white/30 rounded-full px-1 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium px-4 py-2 rounded-full hover:bg-white/50 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="ml-3 text-right" style={{ color: "#A7A7B0" }}>
            <div className="text-[8px] font-black uppercase tracking-widest">Global Ops</div>
            <div className="text-[10px] font-black uppercase tracking-widest">{time}</div>
          </div>

          <a
            href="#contact"
            className="ml-3 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap shadow-[0_0_0_2px_white]"
          >
            PROJECT INQUIRY
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-medium shadow-[0_0_0_2px_white]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PROJECT INQUIRY
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};