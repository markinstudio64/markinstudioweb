import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Cpu, Sparkles, Command } from "lucide-react";
import { CharReveal, TextReveal } from "./TextReveal";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex flex-col justify-center items-center pt-56 pb-40 overflow-hidden bg-white selection:bg-brand-violet selection:text-white">
      {/* Background Elements - Ultra Minimalist */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Liquid Blurs */}
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-brand-violet/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-brand-violet/[0.02] rounded-full blur-[120px]" />

        {/* SoftRiver Grid - Very Subtle */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] contrast-150" />
        <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-7xl">
        {/* Tactical Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="glass-pill px-8 py-3 rounded-full flex items-center gap-4 shadow-sm border border-zinc-100">
            <div className="flex -space-x-1">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-4 h-4 rounded-full bg-brand-violet border-2 border-white" />
              ))}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-dark">Tactical Synchronization</span>
            <Command size={12} className="text-brand-violet" />
          </div>
        </motion.div>

        {/* Major Typographic Statement */}
        <motion.div style={{ y: y1 }} className="mb-16">
          <div className="relative inline-block">
            <CharReveal
              text="Strategic"
              className="text-7xl md:text-[11rem] font-black leading-[0.8] tracking-[-0.04em] text-brand-dark uppercase"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
              className="h-2 bg-brand-violet absolute -bottom-4 left-0 rounded-full opacity-20"
            />
          </div>
          <br />
          <CharReveal
            text="Authority."
            delay={0.4}
            className="text-7xl md:text-[11rem] font-black leading-[0.8] tracking-[-0.04em] text-zinc-100 uppercase"
          />
        </motion.div>

        {/* Converting Subtext */}
        <motion.div style={{ opacity }} className="max-w-3xl mb-20">
          <TextReveal
            text="We architect high-performance digital identities and autonomous AI frameworks for the world's most ambitious founders. Engineered for conversion, built for clinical dominance."
            className="text-xl md:text-3xl text-zinc-500 font-bold uppercase tracking-tight leading-[1.1] justify-center"
            delay={1.2}
          />
        </motion.div>

        {/* High-Impact Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-10"
        >
          <button className="h-28 px-16 bg-brand-dark text-white rounded-full font-bold flex items-center justify-center gap-8 group hover:bg-brand-violet transition-all duration-700 shadow-2xl shadow-brand-dark/10 hover:scale-[1.02]">
            <span className="font-bold uppercase tracking-[0.5em] text-xs">Initialize Project</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-violet transition-all duration-500">
              <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </button>

          <button className="h-28 px-16 glass-panel text-brand-dark rounded-full font-bold flex items-center justify-center gap-6 hover:bg-white hover:border-brand-violet transition-all duration-500 uppercase tracking-[0.4em] text-xs group">
            Expose Archive
            <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-brand-violet group-hover:text-white transition-all duration-500">
              <Sparkles size={18} />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Floating Insight - Liquid Design */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 2.2, ease: "circOut" }}
          className="absolute top-[35%] left-[6%]"
        >
          <div className="glass-panel p-10 rounded-[4rem] border border-zinc-100 shadow-xl max-w-[300px] border-l-4 border-l-brand-violet">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-brand-violet/10 rounded-full flex items-center justify-center text-brand-violet">
                <Cpu size={32} />
              </div>
              <span className="text-[10px] font-bold text-brand-violet uppercase tracking-[0.4em]">Integrated</span>
            </div>
            <p className="text-xl text-brand-dark font-black leading-tight uppercase tracking-tighter">AI-Native Ecosystems for Global Scale.</p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 2.4, ease: "circOut" }}
          className="absolute bottom-[25%] right-[6%]"
        >
          <div className="glass-panel p-10 rounded-[4rem] border border-zinc-100 shadow-xl border-r-4 border-r-brand-violet">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-50 shadow-sm overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-violet flex items-center justify-center text-white text-[10px] font-bold">+12</div>
            </div>
            <p className="text-[10px] font-bold text-brand-violet mb-3 uppercase tracking-[0.4em]">Proven Success</p>
            <p className="text-xl text-brand-dark font-black leading-tight uppercase tracking-tighter">Synchronized with World-Class Leaders.</p>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom - Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.5em]">Scroll Down</span>
        <div className="w-px h-16 bg-gradient-to-b from-brand-violet to-transparent" />
      </motion.div>
    </section>
  );
};
