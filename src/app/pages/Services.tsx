import { motion } from "framer-motion";
import { Plus, ArrowRight, Zap, Target, Search, BarChart } from "lucide-react";

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
      desc: "Integrating bespoke Large Language Models and autonomous agents into your core business operations. We build internal tools that automate the mundane, allowing your team to focus on radical creativity.",
      features: ["Custom Chatbot Developments", "Workflow Automation", "Autonomous Agents", "Data Synthesis"],
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

  // Additional service block for Startup & Business Services
  const startupServiceBlock = {
    title: "Startup & Business Services",
    subtitle: "Comprehensive Growth Solutions",
    desc: "We provide end-to-end solutions for startups and businesses looking to establish a strong market presence. From brand identity to digital marketing, we cover all aspects of business growth.",
    features: [
      "Brand Identity Design",
      "Marketing Materials", 
      "Automations",
      "SEO & GEO",
      "Content Creation"
    ],
    icon: <BarChart className="text-blue-600" size={32} />
  };

  // Additional service block for Consultancy
  const consultancyServiceBlock = {
    title: "Consultancy",
    subtitle: "Strategic Business Insights",
    desc: "We provide expert guidance and strategic insights to help businesses make informed decisions. Our consultancy services blend data-driven analysis with creative strategies for sustainable growth.",
    features: [
      "Data Science and Analytics",
      "SWOT Analysis",
      "Data Base Decision Making",
      "Creative Strategies"
    ],
    icon: <Target className="text-blue-600" size={32} />
  };

  return (
    <div className="bg-[#0A0A0A] text-white selection:bg-blue-600 selection:text-white pt-48 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* 1. SERVICES INTRO */}
        <section className="mb-48">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-blue-600 font-bold uppercase tracking-[0.5em] text-[10px] block mb-12">Capabilities</span>
            <h1 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase tracking-tighter italic leading-[0.8] mb-12">
              Our <br /> <span className="text-zinc-800 italic">Armoury.</span>
            </h1>
            <p className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-400 leading-tight">
              We provide a suite of elite services designed to propel visionaries from the present into a high-performance future.
            </p>
          </motion.div>
        </section>

        {/* 2. DETAILED BLOCKS */}
        <div className="space-y-48">
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
                  <div className="p-4 rounded-3xl bg-zinc-900 border border-zinc-800">
                    {block.icon}
                  </div>
                  <span className="text-zinc-600 font-mono text-xl">/0{i+1}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-8">{block.title}</h2>
                <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-12">{block.subtitle}</p>
                <p className="text-xl text-zinc-400 leading-relaxed font-medium mb-12">{block.desc}</p>
              </div>
              <div className="lg:col-span-7 pt-12 lg:pt-32">
                 <div className="grid md:grid-cols-2 gap-8">
                    {block.features.map((feature, idx) => (
                      <div key={idx} className="group p-8 border border-zinc-900 rounded-3xl hover:bg-zinc-950 transition-colors">
                        <div className="flex justify-between items-center mb-4">
                           <h4 className="text-lg font-black uppercase italic group-hover:text-blue-600 transition-colors">{feature}</h4>
                           <Plus size={16} className="text-zinc-800 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
                      </div>
                    ))}
                 </div>

                 <div className="mt-24 p-12 bg-zinc-950 rounded-[3rem] border border-zinc-900">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-8">Selected Tech Stack</h5>
                    <div className="flex flex-wrap gap-8 opacity-40">
                       {["Vite", "OpenAI", "PyTorch", "Tailwind", "Motion", "Figma"].map(tech => (
                         <span key={tech} className="text-sm font-bold uppercase tracking-widest">{tech}</span>
                       ))}
                    </div>
                 </div>
              </div>
            </motion.section>
          ))}

          {/* STARTUP & BUSINESS SERVICES SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start"
          >
            <div className="lg:col-span-5">
              <div className="mb-12 flex items-center gap-6">
                <div className="p-4 rounded-3xl bg-zinc-900 border border-zinc-800">
                  {startupServiceBlock.icon}
                </div>
                <span className="text-zinc-600 font-mono text-xl">/0{serviceBlocks.length + 1}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-8">{startupServiceBlock.title}</h2>
              <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-12">{startupServiceBlock.subtitle}</p>
              <p className="text-xl text-zinc-400 leading-relaxed font-medium mb-12">{startupServiceBlock.desc}</p>
            </div>
            <div className="lg:col-span-7 pt-12 lg:pt-32">
               <div className="grid md:grid-cols-2 gap-8">
                  {startupServiceBlock.features.map((feature, idx) => (
                    <div key={idx} className="group p-8 border border-zinc-900 rounded-3xl hover:bg-zinc-950 transition-colors">
                      <div className="flex justify-between items-center mb-4">
                         <h4 className="text-lg font-black uppercase italic group-hover:text-blue-600 transition-colors">{feature}</h4>
                         <Plus size={16} className="text-zinc-800 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
                    </div>
                  ))}
               </div>

               <div className="mt-24 p-12 bg-zinc-950 rounded-[3rem] border border-zinc-900">
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-8">Business Growth Stack</h5>
                  <div className="flex flex-wrap gap-8 opacity-40">
                     {["Branding", "Marketing", "Automation", "SEO", "Content", "Analytics"].map(tech => (
                       <span key={tech} className="text-sm font-bold uppercase tracking-widest">{tech}</span>
                     ))}
                  </div>
               </div>
            </div>
          </motion.section>

          {/* CONSULTANCY SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start"
          >
            <div className="lg:col-span-5">
              <div className="mb-12 flex items-center gap-6">
                <div className="p-4 rounded-3xl bg-zinc-900 border border-zinc-800">
                  {consultancyServiceBlock.icon}
                </div>
                <span className="text-zinc-600 font-mono text-xl">/0{serviceBlocks.length + 2}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-8">{consultancyServiceBlock.title}</h2>
              <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-12">{consultancyServiceBlock.subtitle}</p>
              <p className="text-xl text-zinc-400 leading-relaxed font-medium mb-12">{consultancyServiceBlock.desc}</p>
            </div>
            <div className="lg:col-span-7 pt-12 lg:pt-32">
               <div className="grid md:grid-cols-2 gap-8">
                  {consultancyServiceBlock.features.map((feature, idx) => (
                    <div key={idx} className="group p-8 border border-zinc-900 rounded-3xl hover:bg-zinc-950 transition-colors">
                      <div className="flex justify-between items-center mb-4">
                         <h4 className="text-lg font-black uppercase italic group-hover:text-blue-600 transition-colors">{feature}</h4>
                         <Plus size={16} className="text-zinc-800 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
                    </div>
                  ))}
               </div>

               <div className="mt-24 p-12 bg-zinc-950 rounded-[3rem] border border-zinc-900">
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-8">Consultancy Stack</h5>
                  <div className="flex flex-wrap gap-8 opacity-40">
                     {["Data", "Analysis", "Strategy", "Insights", "Planning", "Execution"].map(tech => (
                       <span key={tech} className="text-sm font-bold uppercase tracking-widest">{tech}</span>
                     ))}
                  </div>
               </div>
            </div>
          </motion.section>
        </div>

        {/* 3. FAQ / ACCORDION */}
        <section className="mt-64 py-32 border-y border-zinc-900">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-24 text-center">Frequently <br /> <span className="text-zinc-800">Asked.</span></h2>
              <div className="space-y-4">
                 {[
                   { q: "What makes your branding approach unique?", a: "We combine traditional branding fundamentals with cutting-edge AI automation to create identities that are both timeless and technologically advanced, ensuring your brand evolves with market trends." },
                   { q: "Do you provide ongoing brand maintenance?", a: "Yes, we offer comprehensive brand stewardship packages that include monitoring brand consistency, updating guidelines, and providing quarterly brand health reports." },
                   { q: "What industries do you specialize in?", a: "We primarily work with Tech, FinTech, Luxury, Automotive, and emerging startup sectors, helping visionaries redefine their market presence." },
                   { q: "How do you approach startup branding differently?", a: "For startups, we focus on scalable brand architectures that can grow with your business, incorporating flexible design systems and AI-powered marketing automation from day one." },
                   { q: "Can you help with rebranding existing businesses?", a: "Absolutely. We specialize in strategic repositioning that respects your existing equity while modernizing your identity for future growth and market relevance." },
                   { q: "What's included in your startup solutions package?", a: "Our startup solutions include complete brand identity, digital asset creation, marketing automation setup, SEO optimization, and foundational business materials like pitch decks and proposals." }
                 ].map((item, i) => (
                    <details key={i} className="group border-b border-zinc-900 pb-8">
                       <summary className="list-none cursor-pointer flex justify-between items-center py-8">
                          <h4 className="text-2xl font-black uppercase italic tracking-tighter hover:text-blue-600 transition-colors">{item.q}</h4>
                          <Plus className="group-open:rotate-45 transition-transform" />
                       </summary>
                       <p className="text-xl text-zinc-500 leading-relaxed font-medium pb-8">{item.a}</p>
                    </details>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="mt-64 text-center">
           <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-12">Ready to evolve?</h2>
           <button 
             onClick={() => setActivePage("contact")} 
             className="h-32 w-32 rounded-full border border-zinc-800 flex items-center justify-center mx-auto hover:bg-white hover:text-black transition-all group cursor-pointer"
           >
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
           </button>
        </section>
      </div>
    </div>
  );
};