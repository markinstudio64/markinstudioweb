import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Target, Search, BarChart, Plus, CheckCircle, Database, Layout, ShieldCheck } from "lucide-react";
import { CharReveal, TextReveal } from "../components/TextReveal";
import { useRef } from "react";

// Define props interface
interface ServicesProps {
  setActivePage: (page: string) => void;
}

export const Services = ({ setActivePage }: ServicesProps) => {
  const containerRef = useRef(null);

  const serviceCategories = [
    {
      id: "01",
      title: "Tactical Branding",
      subtitle: "Visual Sovereignty",
      desc: "Architecting multi-dimensional identity systems that command authority across all digital and physical substrates. We don't just design logos; we engineer visual legacies.",
      features: ["Strategic Positioning", "Visual Identity Systems", "Motion Architecture", "Asset Ecosystems"],
      icon: <Target />,
      color: "brand-violet"
    },
    {
      id: "02",
      title: "Cognitive AI",
      subtitle: "Autonomous Performance",
      desc: "Deploying high-performance LLM frameworks and autonomous agents that transform operational friction into synchronized growth.",
      features: ["Custom Agent Frameworks", "Neural Integration", "Workflow Optimization", "Automated Authority"],
      icon: <Database />,
      color: "brand-accent"
    },
    {
      id: "03",
      title: "Digital Product",
      subtitle: "Frictionless UX",
      desc: "Engineering user ecosystems that bridge human intuition with technical precision. Built for rapid scale and clinical conversion.",
      features: ["UX/UI Engineering", "Scalable SaaS Design", "Interface Logic", "High-Speed Deployment"],
      icon: <Layout />,
      color: "brand-dark"
    }
  ];

  const valueProps = [
    { title: "Clinical Efficiency", desc: "Zero-latency project delivery with 100% technical transparency." },
    { title: "Architectural Depth", desc: "Future-proof stacks designed for 10x scalability and defense." },
    { title: "Mission Critical", desc: "Every pixel and line of code is engineered for goal conversion." }
  ];

  return (
    <div ref={containerRef} className="bg-white selection:bg-brand-violet selection:text-white pt-56 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* 1. HERO SECTION - CLEAN & INTELLIGENT */}
        <section className="mb-48 md:mb-64">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-24">
            <div className="flex-1">
              <div className="flex items-center gap-6 mb-16">
                <div className="w-16 h-px bg-brand-violet" />
                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-brand-violet">Service Architecture</span>
              </div>
              <CharReveal
                text="Full Spectrum"
                className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.8] text-brand-dark uppercase"
              />
              <CharReveal
                text="Capabilities."
                delay={0.4}
                className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.8] text-zinc-100 uppercase"
              />
            </div>
            <div className="max-w-md lg:pt-20">
              <p className="text-zinc-500 font-bold uppercase tracking-tight text-xl leading-relaxed mb-12">
                We provide the technical and strategic engineering needed to architect digital dominance for founders and global visionaries.
              </p>
              <button
                onClick={() => setActivePage('contact')}
                className="h-24 px-14 rounded-full bg-brand-dark text-white font-bold uppercase tracking-[0.4em] text-xs hover:bg-brand-violet transition-all shadow-xl group"
              >
                Initialize Project
                <ArrowRight size={18} className="inline-block ml-4 -rotate-45 group-hover:rotate-0 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* 2. VALUE PROPS - THE "WHY" */}
        <section className="mb-48 md:mb-64 py-32 border-y border-zinc-100 grid md:grid-cols-3 gap-16">
          {valueProps.map((prop, i) => (
            <div key={i} className="space-y-6">
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-brand-violet" size={20} />
                <h4 className="text-xl font-black uppercase tracking-tighter text-brand-dark">{prop.title}</h4>
              </div>
              <p className="text-zinc-400 font-bold uppercase tracking-tight text-sm leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </section>

        {/* 3. CORE SERVICES - THE "WHAT" */}
        <div className="space-y-48 md:space-y-80">
          {serviceCategories.map((cat, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-16 md:gap-32 items-start"
            >
              <div className="lg:col-span-5 lg:sticky lg:top-40">
                <div className="flex items-center gap-8 mb-12">
                  <span className="text-zinc-100 font-black text-8xl md:text-[10rem] leading-none">0{cat.id}</span>
                  <div className="w-20 h-20 rounded-3xl bg-[#F9F9FB] flex items-center justify-center text-brand-violet border border-zinc-50">
                    {cat.icon}
                  </div>
                </div>
                <h2 className="text-6xl md:text-[7.5rem] font-black tracking-tighter text-brand-dark uppercase leading-[0.8] mb-12">{cat.title}</h2>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-8 h-px bg-brand-violet" />
                  <span className="text-brand-violet font-bold text-[10px] uppercase tracking-[0.5em]">{cat.subtitle}</span>
                </div>
                <p className="text-2xl text-zinc-500 font-bold uppercase tracking-tight leading-relaxed max-w-lg mb-12">
                  {cat.desc}
                </p>
                <button
                  onClick={() => setActivePage('contact')}
                  className="group flex items-center gap-4 text-brand-dark hover:text-brand-violet transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Sync Identity Now</span>
                  <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:border-brand-violet group-hover:bg-brand-violet group-hover:text-white transition-all">
                    <ArrowRight size={18} className="-rotate-45" />
                  </div>
                </button>
              </div>

              <div className="lg:col-span-7 pt-12 md:pt-40">
                <div className="grid md:grid-cols-2 gap-8">
                  {cat.features.map((feature, idx) => (
                    <div key={idx} className="glass-panel p-12 rounded-[4rem] border border-zinc-50 hover:bg-[#F9F9FB] transition-all duration-700 cursor-default group">
                      <div className="flex justify-between items-start mb-8">
                        <h4 className="text-3xl font-bold uppercase tracking-tighter leading-none text-brand-dark group-hover:text-brand-violet transition-colors">{feature}</h4>
                        <Plus className="text-zinc-200 group-hover:text-brand-violet transition-colors" size={24} />
                      </div>
                      <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Capability Sub-Layer {idx + 1}</p>
                      <div className="w-full h-px bg-zinc-100 overflow-hidden">
                        <div className="w-0 group-hover:w-full h-full bg-brand-violet transition-all duration-1000" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technical Badge */}
                <div className="mt-16 p-14 bg-brand-dark rounded-[4rem] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-violet/10 blur-[90px] group-hover:bg-brand-violet/20 transition-all duration-1000" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.6em] block mb-12">Stack Synchronization</span>
                  <div className="flex flex-wrap gap-x-12 gap-y-10">
                    {["Next.js", "AI-Agents", "Three.js", "GPT-4o", "Tailwind", "Framer"].map(tech => (
                      <div key={tech} className="flex items-center gap-4 group/tech">
                        <div className="w-2 h-2 rounded-full bg-brand-violet opacity-40 group-hover/tech:opacity-100 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* 4. FAQ - "The Transparency Protocol" */}
        <section className="mt-80 pt-48 border-t border-zinc-100">
          <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-40">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-none text-brand-dark uppercase mb-12">The <br /> <span className="text-zinc-100">Protocol.</span></h2>
              <p className="text-zinc-500 font-bold uppercase tracking-tight text-xl leading-relaxed">
                Transparent answers for founders who demand precision and clarity in their technical partnerships.
              </p>
            </div>
            <div className="flex-1 w-full space-y-6">
              {[
                { q: "What is your typical project synchronization period?", a: "Most strategic resets and branding engineering projects span 8-12 weeks, depending on the complexity of the digital ecosystem." },
                { q: "Do you integrate with existing technical teams?", a: "Yes, we act as a specialized tactical layer, synchronizing with your internal teams to deploy mission-critical architectures." },
                { q: "How do you measure project success?", a: "Our results are clinical—measured by conversion shifts, technical performance benchmarks, and brand authority indexing." },
                { q: "What is your approach to AI-First design?", a: "We engineering autonomous cognitive layers into the very foundation of your identity, ensuring your brand scales predictably with AI." }
              ].map((item, i) => (
                <details key={i} className="group border-b border-zinc-100 pb-10">
                  <summary className="list-none cursor-pointer flex justify-between items-center py-10 group-hover:px-4 transition-all duration-500 rounded-3xl hover:bg-[#F9F9FB]">
                    <h4 className="text-2xl font-bold tracking-tighter uppercase text-brand-dark group-hover:text-brand-violet transition-colors">{item.q}</h4>
                    <Plus className="text-zinc-200 group-open:rotate-45 transition-transform" size={24} />
                  </summary>
                  <p className="text-lg text-zinc-500 font-bold uppercase tracking-tight leading-relaxed p-10 bg-zinc-50 rounded-[3rem] mt-4 border border-zinc-100">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FINAL CTA - "The Synchronization Point" */}
        <section className="py-48 px-12 bg-white relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.8] text-brand-dark uppercase mb-20">Architect <br /> Your <span className="text-brand-violet">Legacy?</span></h2>
            <button
              onClick={() => setActivePage('contact')}
              className="h-32 px-20 rounded-full bg-brand-dark text-white font-bold uppercase tracking-[0.5em] text-xs hover:bg-brand-violet transition-all shadow-2xl flex items-center justify-center gap-10 mx-auto group"
            >
              Initial Sync
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-violet transition-all duration-500">
                <ArrowRight size={32} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
