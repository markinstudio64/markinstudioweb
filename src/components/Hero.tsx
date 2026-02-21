import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Hero = () => {
  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden bg-white bg-grid">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-violet-200/40 via-fuchsia-100/40 to-amber-50/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-50/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 shadow-sm"
        >
          <Sparkles size={14} className="fill-violet-200" />
          <span>Redefining Digital Identity</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 tracking-tight text-zinc-900"
        >
          Elevate Your Brand <br />
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent italic pr-2">
            with AI Intelligence.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-500 mb-10 max-w-2xl leading-relaxed font-light"
        >
          Markin Studio combines world-class branding aesthetics with cutting-edge AI automation to scale your business into the future.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group hover:bg-zinc-800 hover:scale-105 transition-all shadow-xl shadow-zinc-200">
            View Our Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
            <Play size={18} className="fill-black" />
            How It Works
          </button>
        </motion.div>
      </div>

      {/* Floating Elements (Absolute Positioning) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-[1400px] mx-auto">

        {/* Floating Card: AI Workflow (Top Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[18%] right-[5%] md:right-[8%] hidden lg:block"
        >
          <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/50 flex items-center gap-4 w-64 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-violet-100 p-3 rounded-xl text-violet-600">
              <Cpu size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-800">AI Workflow</p>
              <p className="text-xs text-zinc-500">Auto-optimization active</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Card: Clients (Left Center) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-[35%] left-[2%] md:left-[5%] hidden lg:block"
        >
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/50 w-auto transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex -space-x-3 mb-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?auto=format&fit=crop&q=80&w=100&h=100`}
                    alt="Client"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-sm font-bold text-zinc-900">50+ Clients</p>
                <p className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase">Global Radius</p>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Floating Card: Creative Studio Image (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-[20%] right-[10%] hidden md:block"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-violet-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl w-48 h-32 transform hover:scale-105 transition-transform duration-500 border-4 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764588037085-a78240016f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjcmVhdGl2ZSUyMHN0dWRpbyUyMG1pbmltYWxpc3QlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwMzc0NTgwfDA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Creative Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-md border border-zinc-100">
              New
            </div>
          </div>
        </motion.div>

        {/* Additional Decor: Lines or Plus signs */}
        <div className="absolute top-1/4 left-1/4 text-zinc-200/50">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 5v14M5 12h14" /></svg>
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-zinc-200/50">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 5v14M5 12h14" /></svg>
        </div>

      </div>
    </section>
  );
};
