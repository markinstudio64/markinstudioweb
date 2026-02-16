import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-50 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-zinc-50 rounded-full blur-3xl opacity-60 -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>Redefining Digital Identity</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Elevate Your Brand <br /> 
            <span className="text-zinc-400">with </span> 
            <span className="text-blue-600 italic">AI Intelligence.</span>
          </h1>
          <p className="text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
            Markin Studio combines world-class branding aesthetics with cutting-edge AI automation to scale your business into the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group hover:bg-zinc-800 transition-all">
              View Our Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-zinc-200 text-zinc-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all">
              <Cpu size={20} className="text-blue-600" />
              AI Services
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                   <ImageWithFallback 
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?auto=format&fit=crop&q=80&w=100&h=100`} 
                    alt="Client" 
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold">50+ Global Clients</p>
              <p className="text-xs text-zinc-500">Trusted by innovators worldwide</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764588037085-a78240016f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjcmVhdGl2ZSUyMHN0dWRpbyUyMG1pbmltYWxpc3QlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwMzc0NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Creative Studio"
              className="w-full aspect-square object-cover"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden sm:block"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <Cpu size={24} />
              </div>
              <div>
                <p className="text-sm font-bold">AI Workflow</p>
                <p className="text-xs text-zinc-500">Optimized for speed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
