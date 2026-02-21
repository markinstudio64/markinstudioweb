import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Search, BarChart, Plus } from "lucide-react";
import { CharReveal, TextReveal } from "../components/TextReveal";

// Define props interface
interface ServicesProps {
  setActivePage: (page: string) => void;
}

export const Services = ({ setActivePage }: ServicesProps) => {
  const serviceBlocks = [
    {
      title: "Visual Identity & Branding",
      subtitle: "The Soul of Your Entity",
      desc: "We engineer timeless visual languages that communicate authority and innovative spirit. Our branding is more than a logo—it's a multi-dimensional system designed to thrive in digital and physical spaces.",
      features: ["Typography Systems", "Motion Guidelines", "Packaging Design", "Strategic Positioning"],
      icon: <Target className="text-brand-violet" size={32} />
    },
    {
      title: "AI Automation & Agents",
      subtitle: "Autonomous Performance",
      desc: "Our engineering team develops autonomous AI agents and integrated LLM workflows that transform operational efficiency. We focus on creating cognitive frameworks that learn, adapt, and scale with your business.",
      features: ["Autonomous Agents", "Custom LLM Training", "Workflow Automation", "Cognitive Frameworks"],
      icon: <Zap className="text-brand-violet" size={32} />
    },
    {
      title: "Product Design & UX",
      subtitle: "Emotional Interfaces",
      desc: "Creating digital experiences that feel human. We specialize in complex SaaS, Web3 platforms, and mobile ecosystems that bridge the gap between technical complexity and intuitive ease.",
      features: ["User Research", "Prototyping", "Design Systems", "Web Development"],
      icon: <Search className="text-brand-violet" size={32} />
    }
  ];

  const startupServiceBlock = {
    title: "Startup & Venture Solutions",
    subtitle: "Accelerated Market Entry",
    desc: "We provide visionaries and founders with the technical and strategic foundation needed for rapid scale. From MVP development to full-scale engineering, we handle the complexity so you can focus on growth.",
    features: ["MVP Engineering", "Venture Strategy", "Growth Ecosystems", "Technical Architecture"],
    icon: <BarChart className="text-brand-violet" size={32} />
  };

  const consultancyServiceBlock = {
    title: "Strategic Design Consultancy",
    subtitle: "Future-Proof Vision",
    desc: "Deep-dive strategic guidance for established enterprises and scaling startups. We help you navigate technological shifts and cultural transitions with data-driven insights and world-class design thinking.",
    features: ["Digital Audit", "Tech Strategy", "User Research", "Brand Evolution"],
    icon: <Search className="text-brand-violet" size={32} />
  };

  return (
    <div className="bg-white selection:bg-brand-violet selection:text-white pt-48 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-violet/[0.03] blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* 1. SERVICES INTRO */}
        <section className="mb-48">
          <div className="max-w-[1400px]">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Full Spectrum</span>
              <div className="h-px w-24 bg-zinc-100" />
            </div>

            <CharReveal text="Engineering" className="text-6xl md:text-[10rem] font-bold tracking-tighter text-brand-dark leading-[0.8] uppercase" />
            <CharReveal text="Excellence." delay={0.4} className="text-6xl md:text-[10rem] font-bold tracking-tighter text-zinc-100 uppercase" />

            <div className="grid lg:grid-cols-2 gap-24 items-start border-t border-zinc-100 pt-20 mt-20">
              <div className="space-y-12">
                <TextReveal
                  text="A multidisciplinary firm operating at the intersection of human intuition and tech precision."
                  className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-brand-dark uppercase"
                />
              </div>
              <div className="space-y-12">
                <p className="text-xl text-zinc-500 leading-relaxed font-bold tracking-tight uppercase">
                  We architect the visual and cognitive frameworks for the next generation of industry leaders. Our work is defined by clinical excellence and high-impact emotional resonance.
                </p>
                <button
                  onClick={() => setActivePage("contact")}
                  className="h-24 px-14 rounded-full bg-brand-violet text-white font-bold uppercase tracking-[0.3em] text-xs hover:bg-brand-dark transition-all shadow-xl shadow-brand-violet/20 flex items-center justify-center gap-6 group"
                >
                  <span className="uppercase tracking-[0.3em]">Start Your Project</span>
                  <div className="bg-white/10 p-2 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <ArrowRight size={22} className="-rotate-45" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. DETAILED SERVICE BLOCKS */}
        <div className="space-y-64">
          {[...serviceBlocks, startupServiceBlock, consultancyServiceBlock].map((block, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start"
            >
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="mb-12 flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-zinc-50 border border-zinc-100 text-brand-violet flex items-center justify-center shadow-sm">
                    {block.icon}
                  </div>
                  <span className="text-zinc-100 font-bold text-5xl">0{i + 1}</span>
                </div>
                <h2 className="text-5xl md:text-[6rem] font-bold tracking-tighter text-brand-dark mb-10 uppercase leading-[0.85]">{block.title}</h2>
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px w-8 bg-brand-violet" />
                  <p className="text-brand-violet font-bold uppercase tracking-[0.4em] text-[10px]">{block.subtitle}</p>
                </div>
                <p className="text-xl text-zinc-500 leading-relaxed font-bold uppercase tracking-tight mb-12 lg:max-w-lg">{block.desc}</p>
              </div>
              <div className="lg:col-span-7 pt-12">
                <div className="grid md:grid-cols-2 gap-8">
                  {block.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="group p-12 border border-zinc-50 rounded-[3.5rem] bg-[#F9F9FB] hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] transition-all duration-700 pointer-events-auto"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-bold uppercase tracking-tighter leading-none group-hover:text-brand-violet transition-colors duration-500">{feature}</h4>
                        <div className="p-3 bg-white rounded-full text-zinc-200 group-hover:text-brand-violet transition-all duration-500 shadow-sm">
                          <Plus size={18} />
                        </div>
                      </div>
                      <div className="h-px w-0 bg-brand-violet/20 group-hover:w-full transition-all duration-1000" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 p-12 bg-brand-dark rounded-[4rem] border border-brand-violet/10 relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-violet/[0.1] blur-[80px] group-hover:bg-brand-violet/[0.2] transition-colors" />
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 mb-10">Integration Ecosystem</h5>
                  <div className="flex flex-wrap gap-x-12 gap-y-8">
                    {["Next.js", "GPT-4o", "Claude 3.5", "Tailwind", "Framer", "Swift"].map(tech => (
                      <span key={tech} className="text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-white transition-colors duration-500">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* 3. FAQ */}
        <section className="mt-64 py-48 border-y border-zinc-100 relative">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[40%] bg-brand-violet/[0.02] blur-[130px] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-6xl md:text-[9rem] font-bold tracking-tighter mb-32 text-center uppercase text-brand-dark leading-[0.8]">
              Frequently <br /> <span className="text-zinc-100">Asked.</span>
            </h2>
            <div className="space-y-8">
              {[
                { q: "What makes your branding approach unique?", a: "We strike a chord by merging clinical technical precision with deep cultural intuition, creating identities that don't just exist—they dominate." },
                { q: "Do you provide ongoing brand maintenance?", a: "Yes, we offer strategic stewardship packages that ensure your brand evolves alongside shifting technological and cultural landscapes." },
                { q: "What industries do you specialize in?", a: "We architect solutions for visionaries in Tech, Web3, FinTech, and Luxury sectors who demand digital authority." },
                { q: "How do you approach startup branding?", a: "For startups, we engineering agile frameworks that provide defensive market depth while allowing for rapid operational scale." },
                { q: "Can you help with rebranding?", a: "We specialize in strategic resets that preserve core emotional equity while architecting a new visual and cognitive future." },
                { q: "What's included in startup solutions?", a: "Complete identity systems, autonomous marketing frameworks, and the technical foundation needed to move from vision to market lead." }
              ].map((item, i) => (
                <details key={i} className="group border-b border-zinc-100 pb-12">
                  <summary className="list-none cursor-pointer flex justify-between items-center py-8">
                    <h4 className="text-3xl font-bold tracking-tighter uppercase text-brand-dark group-hover:text-brand-violet transition-colors duration-500">{item.q}</h4>
                    <div className="h-14 w-14 rounded-full bg-[#F9F9FB] flex items-center justify-center group-open:rotate-45 transition-transform duration-500 group-hover:bg-brand-violet group-hover:text-white">
                      <Plus size={24} />
                    </div>
                  </summary>
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl text-zinc-500 leading-relaxed font-bold uppercase tracking-tight pb-12 pl-12 border-l-2 border-brand-violet/20 ml-7"
                  >
                    {item.a}
                  </motion.p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="py-48 md:py-64 text-center relative overflow-hidden bg-brand-dark rounded-[5rem] mt-48 text-white">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-violet/30 rounded-full blur-[140px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-brand-violet/10 rounded-full blur-[100px]" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative z-10"
          >
            <h2 className="text-7xl md:text-[10rem] font-bold tracking-tighter mb-20 uppercase leading-[0.8] mb-16">Striking <br /> <span className="text-brand-violet text-zinc-100">the Accord?</span></h2>
            <button
              onClick={() => setActivePage("contact")}
              className="h-28 px-20 rounded-full bg-brand-violet text-white font-bold uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-brand-dark transition-all shadow-2xl shadow-brand-violet/40 flex items-center justify-center gap-8 mx-auto group"
            >
              Start Your Journey
              <div className="p-2 rounded-full bg-white/10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
                <ArrowRight size={28} className="-rotate-45" />
              </div>
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
