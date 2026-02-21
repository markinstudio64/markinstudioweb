import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-48 pb-32 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-brand-violet/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-brand-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-6xl">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-violet/5 border border-brand-violet/10 text-brand-violet text-sm font-bold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-violet opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-violet"></span>
            </span>
            Identity • Intelligence • Interfaces
          </span>
        </motion.div>

        {/* Main Heading with Text Reveal */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[7rem] font-bold leading-[0.9] tracking-tight text-brand-dark"
          >
            Striking the <br />
            <span className="text-brand-violet">Right Chords</span>
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-500 mb-14 max-w-3xl leading-relaxed font-medium"
        >
          Markin Studio is your ultimate growth partner, blending full-stack creative solutions with AI-powered engineering to elevate your brand's digital influence.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="relative px-12 py-6 bg-brand-violet text-white rounded-full font-bold text-lg flex items-center gap-3 overflow-hidden group transition-all hover:scale-105 shadow-[0_20px_40px_-10px_rgba(124,58,237,0.3)]">
            <span className="relative z-10 font-bold uppercase tracking-wider">Start Your Project</span>
            <ArrowRight size={22} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>

          <button className="px-12 py-6 border-2 border-zinc-100 text-brand-dark rounded-full font-bold text-lg hover:border-brand-violet/30 hover:bg-brand-violet/5 transition-all uppercase tracking-wider">
            Our Portfolio
          </button>
        </motion.div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[10%] hidden xl:block"
        >
          <div className="p-6 bg-white rounded-3xl shadow-xl border border-zinc-100 max-w-[200px]">
            <div className="w-12 h-12 bg-brand-violet/10 rounded-2xl flex items-center justify-center text-brand-violet mb-4">
              <Cpu size={24} />
            </div>
            <p className="text-sm font-bold text-brand-dark mb-1 uppercase tracking-tight">AI Integrated</p>
            <p className="text-xs text-zinc-500 font-medium">Auto-responsive systems ready.</p>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[25%] right-[10%] hidden xl:block"
        >
          <div className="p-6 bg-white rounded-3xl shadow-xl border border-zinc-100">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-zinc-200" />
              ))}
            </div>
            <p className="text-sm font-bold text-brand-dark mb-1 uppercase tracking-tight">50+ Projects</p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Global Reach</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
