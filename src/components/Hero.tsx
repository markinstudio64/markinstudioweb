import { motion } from "framer-motion";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";
import { CharReveal, TextReveal } from "./TextReveal";

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center pt-56 pb-40 overflow-hidden bg-white">
      {/* Background Elements / Artwork */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dynamic Blurs */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-brand-violet/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/5 rounded-full blur-[140px]" />

        {/* Floating Glass Artwork */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[12%] w-64 h-64 rounded-full bg-white/5 border border-brand-violet/10 backdrop-blur-3xl shadow-2xl hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[8%] w-96 h-96 rounded-full bg-brand-violet/[0.02] border border-brand-violet/5 backdrop-blur-2xl hidden lg:block"
        />

        {/* Particle/Grid Accent */}
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-7xl">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-brand-violet/[0.03] border border-brand-violet/10 text-brand-violet text-[10px] font-bold tracking-[0.4em] uppercase shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-violet opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-violet"></span>
            </span>
            Architecture • Intelligence • Identity
          </span>
        </motion.div>

        {/* Main Heading with Char Reveal */}
        <div className="mb-12">
          <CharReveal
            text="Striking the"
            className="text-7xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter text-brand-dark uppercase"
          />
          <CharReveal
            text="Right Chords."
            delay={0.4}
            className="text-7xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter text-brand-violet uppercase"
          />
        </div>

        {/* Subtext with Text Reveal */}
        <div className="max-w-3xl mb-16">
          <TextReveal
            text="Markin Studio is a multidisciplinary firm operating at the intersection of technical precision and human intuition, engineering digital authority for visionaries."
            className="text-xl md:text-2xl text-zinc-500 font-bold uppercase tracking-tight leading-snug justify-center"
            delay={1}
          />
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <button className="relative h-24 px-16 bg-brand-dark text-white rounded-full font-bold flex items-center justify-center gap-4 overflow-hidden group transition-all hover:scale-[1.02] shadow-2xl shadow-brand-dark/10">
            <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-xs">Transmit Profile</span>
            <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-brand-violet translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>

          <button className="h-24 px-16 border border-zinc-100 bg-white text-brand-dark rounded-full font-bold flex items-center justify-center gap-4 hover:border-brand-violet transition-all uppercase tracking-[0.3em] text-xs group">
            Selected Work
            <div className="p-2 rounded-full bg-zinc-50 group-hover:bg-brand-violet/10 flex items-center justify-center">
              <Sparkles size={16} className="text-zinc-300 group-hover:text-brand-violet transition-colors" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Floating Insight Cards */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute top-[25%] left-[8%]"
        >
          <div className="p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-2xl max-w-[240px]">
            <div className="w-14 h-14 bg-brand-violet/10 rounded-2xl flex items-center justify-center text-brand-violet mb-6">
              <Cpu size={28} />
            </div>
            <p className="text-[10px] font-bold text-brand-violet mb-2 uppercase tracking-[0.3em]">AI Native</p>
            <p className="text-sm text-brand-dark font-bold leading-tight uppercase">Cognitive Frameworks for Autonomous Growth.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-[20%] right-[8%]"
        >
          <div className="p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-2xl">
            <div className="flex -space-x-4 mb-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-100 shadow-lg" />
              ))}
            </div>
            <p className="text-[10px] font-bold text-brand-violet mb-2 uppercase tracking-[0.3em]">+140 Partners</p>
            <p className="text-sm text-brand-dark font-bold leading-tight uppercase tracking-tight">Global Network of Industrial Leaders.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
