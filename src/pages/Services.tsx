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
    <div className="bg-white selection:bg-black selection:text-white pt-48">
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Our Services</span>
              <div className="h-px flex-1 bg-zinc-100" />
            </div>

            <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.9] mb-24 text-zinc-900 uppercase">
              Full Spectrum <br /> <span className="text-zinc-300">Solutions.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-24 items-start border-t border-zinc-100 pt-12">
              <p className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-zinc-900">
                A multidisciplinary engineering and design firm operating at the edge of cultural and technological shifts.
              </p>
              <div className="space-y-12">
                <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                  We specialize in building the cognitive and visual frameworks for the next generation of industry leaders. Our work is defined by technical excellence and emotional resonance.
                </p>
                <button
                  onClick={() => setActivePage("contact")}
                  className="bg-black text-white px-12 py-5 rounded-full font-bold flex items-center justify-center gap-4 group hover:bg-zinc-800 transition-all text-xl shadow-2xl"
                >
                  Let's Discuss Your Project
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
              <div className="lg:col-span-5">
                <div className="mb-12 flex items-center gap-6">
                  <div className="p-5 rounded-3xl bg-zinc-50 border border-zinc-100">
                    {block.icon}
                  </div>
                  <span className="text-zinc-300 font-bold text-2xl">0{i + 1}</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 uppercase">{block.title}</h2>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-12">{block.subtitle}</p>
                <p className="text-xl text-zinc-500 leading-relaxed font-medium mb-12">{block.desc}</p>
              </div>
              <div className="lg:col-span-7 pt-12 lg:pt-32">
                <div className="grid md:grid-cols-2 gap-8">
                  {block.features.map((feature, idx) => (
                    <div key={idx} className="group p-10 border border-zinc-100 rounded-[2rem] hover:bg-zinc-50 transition-all duration-500 hover:border-zinc-200">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-blue-600 transition-colors">{feature}</h4>
                        <Plus size={20} className="text-zinc-300 group-hover:text-black transition-colors" />
                      </div>
                      <div className="h-0.5 w-0 bg-black group-hover:w-full transition-all duration-700" />
                    </div>
                  ))}
                </div>

                <div className="mt-24 p-12 bg-zinc-50 rounded-[3rem] border border-zinc-100">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Selected Tech Stack</h5>
                  <div className="flex flex-wrap gap-10 opacity-30">
                    {["Vite", "OpenAI", "PyTorch", "TailwindCSS", "Motion", "Figma"].map(tech => (
                      <span key={tech} className="text-sm font-bold uppercase tracking-widest text-zinc-900">{tech}</span>
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
            <div className="lg:col-span-5">
              <div className="mb-12 flex items-center gap-6">
                <div className="p-5 rounded-3xl bg-zinc-50 border border-zinc-100">
                  {startupServiceBlock.icon}
                </div>
                <span className="text-zinc-300 font-bold text-2xl">03</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 uppercase">{startupServiceBlock.title}</h2>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-12">{startupServiceBlock.subtitle}</p>
              <p className="text-xl text-zinc-500 leading-relaxed font-medium mb-12">{startupServiceBlock.desc}</p>
            </div>
            <div className="lg:col-span-7 pt-12 lg:pt-32">
              <div className="grid md:grid-cols-2 gap-8">
                {startupServiceBlock.features.map((feature, idx) => (
                  <div key={idx} className="group p-10 border border-zinc-100 rounded-[2rem] hover:bg-zinc-50 transition-all duration-500 hover:border-zinc-200">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-blue-600 transition-colors">{feature}</h4>
                      <Plus size={20} className="text-zinc-300 group-hover:text-black transition-colors" />
                    </div>
                    <div className="h-0.5 w-0 bg-black group-hover:w-full transition-all duration-700" />
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
            <div className="lg:col-span-5">
              <div className="mb-12 flex items-center gap-6">
                <div className="p-5 rounded-3xl bg-zinc-50 border border-zinc-100">
                  {consultancyServiceBlock.icon}
                </div>
                <span className="text-zinc-300 font-bold text-2xl">04</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 uppercase">{consultancyServiceBlock.title}</h2>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-12">{consultancyServiceBlock.subtitle}</p>
              <p className="text-xl text-zinc-500 leading-relaxed font-medium mb-12">{consultancyServiceBlock.desc}</p>
            </div>
            <div className="lg:col-span-7 pt-12 lg:pt-32">
              <div className="grid md:grid-cols-2 gap-8">
                {consultancyServiceBlock.features.map((feature, idx) => (
                  <div key={idx} className="group p-10 border border-zinc-100 rounded-[2rem] hover:bg-zinc-50 transition-all duration-500 hover:border-zinc-200">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-blue-600 transition-colors">{feature}</h4>
                      <Plus size={20} className="text-zinc-300 group-hover:text-black transition-colors" />
                    </div>
                    <div className="h-0.5 w-0 bg-black group-hover:w-full transition-all duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* 3. FAQ */}
        <section className="mt-64 py-32 border-y border-zinc-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-24 text-center uppercase text-zinc-900">
              Frequently <br /> <span className="text-zinc-300">Asked.</span>
            </h2>
            <div className="space-y-4">
              {[
                { q: "What makes your branding approach unique?", a: "We combine traditional branding fundamentals with cutting-edge AI automation to create identities that are both timeless and technologically advanced." },
                { q: "Do you provide ongoing brand maintenance?", a: "Yes, we offer comprehensive brand stewardship packages that include monitoring brand consistency and updating guidelines quarterly." },
                { q: "What industries do you specialize in?", a: "We primarily work with Tech, FinTech, Luxury, Automotive, and emerging startup sectors, helping visionaries redefine their market presence." },
                { q: "How do you approach startup branding?", a: "For startups, we focus on scalable brand architectures that can grow with your business, incorporating flexible design systems." },
                { q: "Can you help with rebranding?", a: "Absolutely. We specialize in strategic repositioning that respects your existing equity while modernizing your identity for future growth." },
                { q: "What's included in startup solutions?", a: "Our startup solutions include complete brand identity, digital asset creation, marketing automation setup, and foundational business materials." }
              ].map((item, i) => (
                <details key={i} className="group border-b border-zinc-100 pb-8">
                  <summary className="list-none cursor-pointer flex justify-between items-center py-8">
                    <h4 className="text-2xl font-bold tracking-tight uppercase text-zinc-900 group-hover:text-blue-600 transition-colors">{item.q}</h4>
                    <Plus className="group-open:rotate-45 transition-transform text-zinc-300" />
                  </summary>
                  <p className="text-xl text-zinc-500 leading-relaxed font-medium pb-8 pl-8 border-l-2 border-zinc-100 ml-2">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="py-64 text-center relative overflow-hidden bg-zinc-50 rounded-[4rem] mt-48">
          <div className="relative z-10 transition-transform hover:scale-105 duration-700">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-12 uppercase text-zinc-900">Ready to <br /> transform?</h2>
            <button
              onClick={() => setActivePage("contact")}
              className="bg-black text-white px-12 py-6 rounded-full font-bold flex items-center justify-center gap-4 mx-auto group hover:bg-zinc-800 transition-all text-xl shadow-2xl"
            >
              Start Your Project
              <div className="bg-white/10 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight size={24} className="-rotate-45" />
              </div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};