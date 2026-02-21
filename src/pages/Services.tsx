import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Search, BarChart, Plus } from "lucide-react";

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
      icon: <Target className="text-blue-600" size={32} />
    },
    {
      title: "AI Automation & Agents",
      subtitle: "Autonomous Performance",
      desc: "Our engineering team develops autonomous AI agents and integrated LLM workflows that transform operational efficiency. We focus on creating cognitive frameworks that learn, adapt, and scale with your business.",
      features: ["Autonomous Agents", "Custom LLM Training", "Workflow Automation", "Cognitive Frameworks"],
      icon: <Zap className="text-blue-600" size={32} />
    },
    {
      title: "Product Design & UX",
      subtitle: "Emotional Interfaces",
      desc: "Creating digital experiences that feel human. We specialize in complex SaaS, Web3 platforms, and mobile ecosystems that bridge the gap between technical complexity and intuitive ease.",
      features: ["User Research", "Prototyping", "Design Systems", "Web Development"],
      icon: <Search className="text-blue-600" size={32} />
    }
  ];

  const startupServiceBlock = {
    title: "Startup & Venture Solutions",
    subtitle: "Accelerated Market Entry",
    desc: "We provide visionaries and founders with the technical and strategic foundation needed for rapid scale. From MVP development to full-scale engineering, we handle the complexity so you can focus on growth.",
    features: ["MVP Engineering", "Venture Strategy", "Growth Ecosystems", "Technical Architecture"],
    icon: <BarChart className="text-blue-600" size={32} />
  };

  const consultancyServiceBlock = {
    title: "Strategic Design Consultancy",
    subtitle: "Future-Proof Vision",
    desc: "Deep-dive strategic guidance for established enterprises and scaling startups. We help you navigate technological shifts and cultural transitions with data-driven insights and world-class design thinking.",
    features: ["Digital Audit", "Tech Strategy", "User Research", "Brand Evolution"],
    icon: <Search className="text-blue-600" size={32} />
  };

  return (
    <div className="bg-white selection:bg-brand-violet selection:text-white pt-48">
      <div className="container mx-auto px-6 md:px-12">
        {/* 1. SERVICES INTRO */}
        <section className="mb-48">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[1400px]"
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Full Spectrum</span>
              <div className="h-px flex-1 bg-zinc-100" />
            </div>

            <h1 className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-24 text-brand-dark uppercase">
              Engineering <br /> <span className="text-zinc-100">Excellence.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-24 items-start border-t border-zinc-100 pt-16">
              <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-brand-dark uppercase">
                A multidisciplinary firm operating at the intersection of <span className="text-brand-violet">human intuition</span> and tech precision.
              </p>
              <div className="space-y-12">
                <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                  We architect the visual and cognitive frameworks for the next generation of industry leaders. Our work is defined by clinical excellence and high-impact emotional resonance.
                </p>
                <button
                  onClick={() => setActivePage("contact")}
                  className="bg-brand-violet text-white px-12 py-6 rounded-full font-bold flex items-center justify-center gap-4 group hover:bg-brand-dark transition-all text-lg shadow-[0_20px_40px_-10px_rgba(124,58,237,0.3)]"
                >
                  <span className="uppercase tracking-widest">Start Your Project</span>
                  <div className="bg-white/10 p-1 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <ArrowRight size={22} className="-rotate-45" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. DETAILED SERVICE BLOCKS */}
        <div className="space-y-64">
          {serviceBlocks.map((block, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start"
            >
              <div className="lg:col-span-5 sticky top-32">
                <div className="mb-12 flex items-center gap-6">
                  <div className="p-6 rounded-[2rem] bg-zinc-50 border border-zinc-100 text-brand-violet shadow-sm">
                    {block.icon}
                  </div>
                  <span className="text-zinc-200 font-bold text-4xl">0{i + 1}</span>
                </div>
                <h2 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter text-brand-dark mb-10 uppercase leading-[0.9]">{block.title}</h2>
                <p className="text-brand-violet font-bold uppercase tracking-[0.3em] text-[10px] mb-12">{block.subtitle}</p>
                <p className="text-xl text-zinc-500 leading-relaxed font-medium mb-12 max-w-lg">{block.desc}</p>
              </div>
              <div className="lg:col-span-7 pt-12 lg:pt-32">
                <div className="grid md:grid-cols-2 gap-8">
                  {block.features.map((feature, idx) => (
                    <div key={idx} className="group p-10 border border-zinc-50 rounded-[2.5rem] bg-[#F9F9FB] hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-brand-violet transition-colors duration-500">{feature}</h4>
                        <Plus size={22} className="text-zinc-300 group-hover:text-brand-violet transition-all duration-500" />
                      </div>
                      <div className="h-px w-0 bg-brand-violet/20 group-hover:w-full transition-all duration-700" />
                    </div>
                  ))}
                </div>

                <div className="mt-24 p-12 bg-brand-dark rounded-[3.5rem] border border-brand-violet/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-violet/10 blur-3xl" />
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-10">Integration Ecosystem</h5>
                  <div className="flex flex-wrap gap-x-12 gap-y-8">
                    {["Next.js", "GPT-4o", "Claude 3.5", "Tailwind", "Framer", "Swift"].map(tech => (
                      <span key={tech} className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors duration-500">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}

          {/* STARTUP SOLUTIONS */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start"
          >
            <div className="lg:col-span-5 sticky top-32">
              <div className="mb-12 flex items-center gap-6">
                <div className="p-6 rounded-[2rem] bg-zinc-50 border border-zinc-100 text-brand-violet shadow-sm">
                  {startupServiceBlock.icon}
                </div>
                <span className="text-zinc-200 font-bold text-4xl">04</span>
              </div>
              <h2 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter text-brand-dark mb-8 uppercase leading-[0.9]">{startupServiceBlock.title}</h2>
              <p className="text-brand-violet font-bold uppercase tracking-[0.3em] text-[10px] mb-12">{startupServiceBlock.subtitle}</p>
              <p className="text-xl text-zinc-500 leading-relaxed font-medium mb-12 max-w-lg">{startupServiceBlock.desc}</p>
            </div>
            <div className="lg:col-span-7 pt-12 lg:pt-32">
              <div className="grid md:grid-cols-2 gap-8">
                {startupServiceBlock.features.map((feature, idx) => (
                  <div key={idx} className="group p-10 border border-zinc-50 rounded-[2.5rem] bg-[#F9F9FB] hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-brand-violet transition-colors">{feature}</h4>
                      <Plus size={22} className="text-zinc-300 group-hover:text-brand-violet transition-all duration-500" />
                    </div>
                    <div className="h-px w-0 bg-brand-violet/20 group-hover:w-full transition-all duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CONSULTANCY */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start"
          >
            <div className="lg:col-span-5 sticky top-32">
              <div className="mb-12 flex items-center gap-6">
                <div className="p-6 rounded-[2rem] bg-zinc-50 border border-zinc-100 text-brand-violet shadow-sm">
                  {consultancyServiceBlock.icon}
                </div>
                <span className="text-zinc-200 font-bold text-4xl">05</span>
              </div>
              <h2 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter text-brand-dark mb-8 uppercase leading-[0.9]">{consultancyServiceBlock.title}</h2>
              <p className="text-brand-violet font-bold uppercase tracking-[0.3em] text-[10px] mb-12">{consultancyServiceBlock.subtitle}</p>
              <p className="text-xl text-zinc-500 leading-relaxed font-medium mb-12 max-w-lg">{consultancyServiceBlock.desc}</p>
            </div>
            <div className="lg:col-span-7 pt-12 lg:pt-32">
              <div className="grid md:grid-cols-2 gap-8">
                {consultancyServiceBlock.features.map((feature, idx) => (
                  <div key={idx} className="group p-10 border border-zinc-50 rounded-[2.5rem] bg-[#F9F9FB] hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-brand-violet transition-colors">{feature}</h4>
                      <Plus size={22} className="text-zinc-300 group-hover:text-brand-violet transition-all duration-500" />
                    </div>
                    <div className="h-px w-0 bg-brand-violet/20 group-hover:w-full transition-all duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* 3. FAQ */}
        <section className="mt-64 py-32 border-y border-zinc-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-[7rem] font-bold tracking-tighter mb-24 text-center uppercase text-brand-dark leading-[0.8]">
              Frequently <br /> <span className="text-zinc-100">Asked.</span>
            </h2>
            <div className="space-y-4">
              {[
                { q: "What makes your branding approach unique?", a: "We strike a chord by merging clinical technical precision with deep cultural intuition, creating identities that don't just exist—they dominate." },
                { q: "Do you provide ongoing brand maintenance?", a: "Yes, we offer strategic stewardship packages that ensure your brand evolves alongside shifting technological and cultural landscapes." },
                { q: "What industries do you specialize in?", a: "We architect solutions for visionaries in Tech, Web3, FinTech, and Luxury sectors who demand digital authority." },
                { q: "How do you approach startup branding?", a: "For startups, we engineering agile frameworks that provide defensive market depth while allowing for rapid operational scale." },
                { q: "Can you help with rebranding?", a: "We specialize in strategic resets that preserve core emotional equity while architecting a new visual and cognitive future." },
                { q: "What's included in startup solutions?", a: "Complete identity systems, autonomous marketing frameworks, and the technical foundation needed to move from vision to market lead." }
              ].map((item, i) => (
                <details key={i} className="group border-b border-zinc-50 pb-8">
                  <summary className="list-none cursor-pointer flex justify-between items-center py-8">
                    <h4 className="text-2xl font-bold tracking-tighter uppercase text-brand-dark group-hover:text-brand-violet transition-colors duration-300">{item.q}</h4>
                    <div className="h-10 w-10 rounded-full border border-zinc-100 flex items-center justify-center group-open:rotate-45 transition-transform">
                      <Plus size={20} className="text-zinc-300" />
                    </div>
                  </summary>
                  <p className="text-xl text-zinc-500 leading-relaxed font-medium pb-8 pl-10 border-l border-brand-violet/20 ml-5">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="py-48 md:py-64 text-center relative overflow-hidden bg-brand-dark rounded-[4rem] mt-48 text-white">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-violet/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[100px]" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-6xl md:text-[9rem] font-bold tracking-tighter mb-16 uppercase leading-[0.85]">Striking <br /> <span className="text-brand-violet">the Accord?</span></h2>
            <button
              onClick={() => setActivePage("contact")}
              className="bg-brand-violet text-white px-14 py-7 rounded-full font-bold flex items-center justify-center gap-4 mx-auto group hover:scale-105 transition-all text-lg shadow-[0_20px_40px_-10px_rgba(124,58,237,0.4)] uppercase tracking-widest"
            >
              Start Your Journey
              <div className="p-1 rounded-full bg-white/10 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={24} />
              </div>
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};