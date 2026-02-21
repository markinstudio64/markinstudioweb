import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, ArrowUpRight, Zap, Target, Brain, Shield, Globe, Award } from "lucide-react";
import { Hero } from "../components/Hero";
import { CharReveal, TextReveal } from "../components/TextReveal";


// Define the props interface
interface HomeProps {
  setActivePage: (page: string) => void;
}

export const Home = ({ setActivePage }: HomeProps) => {


  return (
    <div className="bg-white selection:bg-brand-violet selection:text-white overflow-hidden">
      {/* 1. THE HERO */}
      <Hero />

      {/* 2. THE ETHOS - "Architectural Authority" */}
      <section className="py-32 md:py-64 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            <div>
              <div className="flex items-center gap-6 mb-16">
                <div className="w-12 h-px bg-brand-violet" />
                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-brand-violet">Digital Sovereignty</span>
              </div>
              <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] text-brand-dark uppercase mb-16">
                We engineer <br /> <span className="text-zinc-100">Dominance.</span>
              </h2>
              <TextReveal
                text="In an era of algorithmic noise, we architect architectural authority. We don't just build websites; we engineer digital legacies that command attention and drive conversion through clinical precision and technical superiority."
                className="text-2xl md:text-4xl text-zinc-500 font-bold uppercase tracking-tight leading-[1.1]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20">
              {[
                { icon: <Zap />, title: "Hyper-Speed", desc: "Technical stacks engineered for millisecond performance and zero-latency growth." },
                { icon: <Target />, title: "Tactical Depth", desc: "Strategic positioning that isolates your brand as the only logical market leader." },
                { icon: <Brain />, title: "Cognitive Design", desc: "User ecosystems built on neuro-psychological principles for maximum friction-less conversion." },
                { icon: <Shield />, title: "Legacy Security", desc: "Future-proof architectures built to withstand technological shifts and maintain authority." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="p-10 rounded-[3rem] bg-[#F9F9FB] hover:bg-white hover:shadow-2xl transition-all duration-700 group border border-transparent hover:border-zinc-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-zinc-300 group-hover:text-brand-violet mb-8 transition-colors shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4 text-brand-dark">{item.title}</h4>
                  <p className="text-zinc-400 text-sm font-bold uppercase tracking-tight leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES BENTO - "Intelligently Designed" */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white selection:bg-brand-violet selection:text-white">
        <div className="container mx-auto">
          <div className="mb-32">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-violet block mb-8">Integrated Capabilities</span>
            <h2 className="text-6xl md:text-[7rem] font-black tracking-tighter uppercase text-brand-dark leading-[0.8] mb-12">
              Engineered <br /> <span className="text-zinc-100">& Polished.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
            {/* Large Bento Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-brand-dark rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden group border border-white/5 cursor-pointer"
              onClick={() => setActivePage("services")}
            >
              <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-brand-violet/10 blur-[130px] pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-16">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <Globe size={20} className="text-brand-violet" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Global Ecosystem Scaling</span>
                  </div>
                  <h3 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-10">
                    Strategic <br /> Core Identity.
                  </h3>
                  <p className="max-w-md text-zinc-400 text-lg font-bold uppercase tracking-tight leading-relaxed">
                    Architecting the conceptual and visual foundation that transforms founders into industry-defining icons.
                  </p>
                </div>
                <div className="mt-20 flex justify-between items-end">
                  <div className="flex gap-4">
                    {["Identity", "Strategy", "Impact"].map(tag => (
                      <span key={tag} className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em]">{tag}</span>
                    ))}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-brand-violet flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <ArrowRight size={24} className="-rotate-45" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small Bento Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-[#F9F9FB] rounded-[4rem] p-12 flex flex-col justify-between border border-zinc-50 group cursor-pointer"
              onClick={() => setActivePage("services")}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-violet mb-12">
                <Brain size={32} />
              </div>
              <div>
                <h4 className="text-3xl font-bold uppercase tracking-tighter mb-6 text-brand-dark leading-none">AI Native <br /> Frameworks.</h4>
                <p className="text-zinc-500 text-sm font-bold uppercase tracking-tight leading-relaxed">
                  Deploying autonomous agents and cognitive systems that automate growth while you focus on vision.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300">Automate Authority</span>
                <ArrowRight size={16} className="text-zinc-300 group-hover:text-brand-violet transition-colors" />
              </div>
            </motion.div>

            {/* Bottom Cards */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-[#F9F9FB] rounded-[4rem] p-12 flex flex-col justify-between border border-zinc-50 group cursor-pointer"
              onClick={() => setActivePage("services")}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-violet mb-12">
                <Award size={32} />
              </div>
              <div>
                <h4 className="text-3xl font-bold uppercase tracking-tighter mb-6 text-brand-dark leading-none">Conversion <br /> Architecture.</h4>
                <p className="text-zinc-500 text-sm font-bold uppercase tracking-tight leading-relaxed">
                  Every pixel and interaction is clinical, engineered to eliminate friction and force engagement.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300">Maximize ROI</span>
                <ArrowRight size={16} className="text-zinc-300 group-hover:text-brand-violet transition-colors" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-zinc-50 rounded-[4rem] p-12 md:p-16 flex flex-col md:flex-row gap-16 items-center border border-zinc-100 group cursor-pointer overflow-hidden"
              onClick={() => setActivePage("work")}
            >
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-violet block mb-6">Proven Breakthroughs</span>
                <h3 className="text-4xl font-bold tracking-tighter uppercase leading-[0.9] text-brand-dark mb-8">
                  View Our <br /> <span className="text-brand-violet">Technical Legacy.</span>
                </h3>
                <button className="h-16 px-10 rounded-full bg-brand-dark text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-violet transition-colors">Details archive</button>
              </div>
              <div className="flex-1 relative">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-square rounded-3xl bg-zinc-200 overflow-hidden shadow-inner translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                      <ImageWithFallback src={`/assets/img${i + 10}.png`} alt="work" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORKS - "Visual Immersion" */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Case Studies</span>
                <div className="h-px w-24 bg-zinc-100" />
              </div>
              <CharReveal
                text="Tactical"
                className="text-6xl md:text-[10rem] font-bold tracking-tighter text-brand-dark leading-[0.8] uppercase"
              />
              <CharReveal
                text="Results."
                delay={0.5}
                className="text-6xl md:text-[10rem] font-bold tracking-tighter text-zinc-100 uppercase"
              />
            </div>

            <div className="max-w-md md:text-right">
              <p className="text-zinc-500 mb-12 font-bold uppercase tracking-tight text-lg leading-relaxed">Our latest breakthroughs in brand strategy, design, and digital engineering for visionaries.</p>
              <button
                onClick={() => setActivePage("work")}
                className="group inline-flex items-center h-20 px-12 rounded-full bg-brand-dark text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-brand-violet transition-all shadow-xl shadow-brand-dark/10"
              >
                Expose Full Archive <ArrowRight size={16} className="ml-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-40">
            {[
              { id: "01", title: "Aether Protocol", cat: "Brand Identity", img: "/assets/p1.jpg" },
              { id: "02", title: "NeuroForm AI", cat: "Product Engineering", img: "/assets/p2.jpg" },
              { id: "03", title: "Synthetix Motion", cat: "Visual Logic", img: "/assets/p3.jpg" },
              { id: "04", title: "Vanguard Audit", cat: "Authority Shift", img: "/assets/img20.png" }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-64' : ''}`}
                onClick={() => setActivePage("work")}
              >
                <div className="relative overflow-hidden aspect-[4/5] rounded-[4rem] bg-zinc-50 mb-12 shadow-2xl border border-zinc-50 group">
                  <ImageWithFallback
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="w-40 h-40 bg-white/20 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/20 scale-50 group-hover:scale-100 transition-transform duration-700">
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">View Details</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-violet block mb-4">{p.cat}</span>
                    <h3 className="text-5xl font-bold tracking-tighter text-brand-dark group-hover:text-brand-violet transition-colors uppercase leading-none">{p.title}</h3>
                  </div>
                  <div className="pt-2">
                    <ArrowUpRight size={24} className="text-zinc-200 group-hover:text-brand-violet transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRAND PARTNERS - "Trust Scale" */}
      <section className="py-40 bg-[#F9F9FB] overflow-hidden border-y border-zinc-100">
        <div className="container mx-auto px-6 mb-24 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300">STRATEGICALLY SYNCHRONIZED WITH</span>
        </div>
        <motion.div
          animate={{ x: [0, -2800] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-48 items-center opacity-10 px-12"
        >
          {Array(30).fill(0).map((_, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-6">
              <div className="w-12 h-12 bg-zinc-200 rounded-lg" />
              <span className="text-5xl font-black uppercase tracking-tighter text-zinc-300">Entity {i + 1}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 6. BIG CTA - "The Conversion Point" */}
      <section className="py-48 md:py-64 bg-brand-dark text-white px-6 md:px-12 text-center overflow-hidden relative">
        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-violet/20 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-brand-accent/10 blur-[130px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.5em] mb-16 shadow-xl">
              Start Your Evolution
            </span>
            <h2 className="text-7xl md:text-[12rem] font-black tracking-tighter leading-[0.8] mb-20 uppercase">
              Ready to <br /> <span className="text-brand-violet underline decoration-brand-violet/20 decoration-8 underline-offset-[20px]">Dominate?</span>
            </h2>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActivePage("contact")}
              className="inline-flex items-center gap-10 h-32 px-24 bg-brand-violet text-white rounded-full font-bold shadow-[0_40px_80px_-20px_rgba(124,58,237,0.5)] transition-all uppercase tracking-[0.5em] text-xs group"
            >
              Initialize Synchronization
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-violet transition-all duration-500">
                <ArrowRight size={28} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
