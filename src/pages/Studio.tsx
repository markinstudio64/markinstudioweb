import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X, Linkedin, Instagram, Brain, Zap, Target, Users } from "lucide-react";
import { CharReveal, TextReveal } from "../components/TextReveal";

// Leader profile type
interface Leader {
  id: string;
  name: string;
  role: string;
  img: string;
  bio: string;
  focus: string[];
  linkedin: string;
}

// Leader Profile Modal
const LeaderModal = ({ leader, onClose }: { leader: Leader; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[1000] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative max-w-5xl w-full bg-white rounded-[3.5rem] overflow-hidden max-h-[90vh] flex flex-col shadow-2xl"
      >
        <div className="p-10 md:p-14 border-b border-zinc-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <span className="text-brand-violet font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Leadership Profile</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-dark uppercase leading-none">{leader.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-5 hover:bg-zinc-50 rounded-full transition-all hover:rotate-90 duration-500"
          >
            <X size={32} className="text-brand-dark" />
          </button>
        </div>

        <div className="p-10 md:p-20 overflow-y-auto flex-grow bg-white">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-zinc-50 shadow-xl">
              <ImageWithFallback src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet mb-8">{leader.role}</span>
              <p className="text-3xl font-bold tracking-tighter text-brand-dark leading-[1.1] mb-12 uppercase">
                {leader.bio}
              </p>
              <div className="space-y-12">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block mb-6">Strategic Focus</span>
                  <div className="flex flex-wrap gap-3">
                    {leader.focus.map((f, i) => (
                      <span key={i} className="px-6 py-3 bg-zinc-50 border border-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-8">
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-brand-violet transition-colors">
                    <Linkedin size={24} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
                  </a>
                  <button className="flex items-center gap-3 text-zinc-300 hover:text-brand-violet transition-colors">
                    <Instagram size={24} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Instagram</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 border-t border-zinc-50 bg-[#F9F9FB] flex justify-end">
          <button
            onClick={onClose}
            className="px-14 py-6 bg-brand-dark text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-violet transition-all rounded-full shadow-xl shadow-brand-dark/10"
          >
            Return to Collective
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export const Studio = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const leaders: Leader[] = [
    {
      id: "1",
      name: "Huzaifa Usman",
      role: "Creative Director",
      img: "/assets/profile1.png",
      linkedin: "https://www.linkedin.com/in/huzaifa-usman",
      bio: "Huzaifa orchestrates the agency's creative direction, bridging the gap between technological advancement and brand authority.",
      focus: ["Brand Strategy", "AI Implementation", "Growth Architecture"]
    },
    {
      id: "2",
      name: "Elena Volkov",
      role: "Head of AI Engineering",
      img: "/assets/img11.png",
      linkedin: "https://www.linkedin.com/in/elena-volkov",
      bio: "Elena leads the technical division with a focus on clinical precision and autonomous logic, engineering world-scale neural systems.",
      focus: ["Neural Architecture", "LLM Integration", "Systemic Design"]
    },
    {
      id: "3",
      name: "Julian Thorne",
      role: "Strategy Lead",
      img: "/assets/img12.png",
      linkedin: "https://www.linkedin.com/in/julian-thorne",
      bio: "Julian oversees global strategy and digital transformation, ensuring visionaries establish architectural authority in the market.",
      focus: ["Market Intelligence", "Digital Dominance", "Strategic Scale"]
    }
  ];

  return (
    <div className="bg-white pt-48 pb-32 min-h-screen selection:bg-brand-violet selection:text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-violet/[0.03] blur-[120px] pointer-events-none" />

        {/* 1. STUDIO INTRO */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-40 gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Agency Ecosystem</span>
              <div className="h-px w-24 bg-zinc-100" />
            </div>
            <CharReveal text="Collective" className="text-6xl md:text-[10rem] font-bold tracking-tighter text-brand-dark leading-[0.8] uppercase" />
            <CharReveal text="Authority." delay={0.4} className="text-6xl md:text-[10rem] font-bold tracking-tighter text-zinc-100 uppercase" />
          </div>
          <div className="max-w-xs md:text-right">
            <p className="text-zinc-500 font-bold uppercase tracking-tight leading-snug text-sm">We are a specialized ensemble of designers, engineers, and strategists striking the right chord for global visionaries.</p>
          </div>
        </div>

        {/* 2. MANIFESTO */}
        <section className="py-48 border-y border-zinc-100 relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] h-[40%] bg-brand-violet/[0.02] blur-[130px] pointer-events-none" />
          <div className="grid lg:grid-cols-12 gap-24 items-start relative z-10">
            <div className="lg:col-span-4 sticky top-32">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block mb-12">Our Mission</span>
              <h2 className="text-5xl font-bold tracking-tighter leading-none text-brand-dark uppercase">Engineering <br /> <span className="text-brand-violet">Influence.</span></h2>
            </div>
            <div className="lg:col-span-8">
              <TextReveal
                text="In an era of algorithmic noise, we engineering architectural authority. We don't just build websites; we architect digital legacies. Our methodology is rooted in clinical precision, human intuition, and the relentless pursuit of excellence. We believe that every touchpoint should be a masterclass in brand orchestration."
                className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-dark uppercase leading-[1.05]"
              />
            </div>
          </div>
        </section>

        {/* 3. CORE PRINCIPLES */}
        <section className="py-48 relative">
          <div className="container mx-auto">
            <span className="text-brand-violet font-bold uppercase tracking-[0.4em] text-[10px] block mb-24 text-center">Operational Pillars</span>
            <div className="grid md:grid-cols-3 gap-16 md:gap-24">
              {[
                { icon: <Brain />, title: "Intelligence", desc: "Merging AI frameworks with strategic logic for clinical growth." },
                { icon: <Zap />, title: "Precision", desc: "High-performance engineering built for speed and technical depth." },
                { icon: <Target />, title: "Authority", desc: "Design systems that command respect and define market presence." }
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="group p-14 rounded-[3.5rem] bg-[#F9F9FB] border border-zinc-100 hover:bg-brand-dark hover:border-brand-dark transition-all duration-700 cursor-default"
                >
                  <div className="w-20 h-20 rounded-[2rem] bg-white text-brand-violet flex items-center justify-center mb-10 shadow-sm group-hover:bg-brand-violet group-hover:text-white transition-all duration-700 scale-100 group-hover:scale-110">
                    {p.icon}
                  </div>
                  <h3 className="text-3xl font-bold tracking-tighter mb-6 text-brand-dark group-hover:text-white uppercase transition-colors duration-700">{p.title}</h3>
                  <p className="text-zinc-500 font-bold uppercase tracking-tight text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-700">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. THE PROCESS */}
        <section className="py-48 bg-brand-dark rounded-[5rem] mx-[-1.5rem] md:mx-0 px-10 md:px-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-violet/[0.1] blur-[140px] pointer-events-none" />
          <div className="grid lg:grid-cols-12 gap-24 relative z-10">
            <div className="lg:col-span-5">
              <span className="text-brand-violet font-bold uppercase tracking-[0.4em] text-[10px] block mb-12">The Framework</span>
              <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.85] uppercase mb-12">Clinical <br /> <span className="text-brand-violet">Execution.</span></h2>
              <TextReveal
                text="Our step-by-step engineering framework ensures every project is delivered with surgical precision and architectural depth."
                className="text-zinc-400 text-lg font-bold uppercase tracking-tight leading-relaxed max-w-sm"
              />
            </div>
            <div className="lg:col-span-7 space-y-12">
              {[
                { step: "01", title: "Audit & Synthesis", d: "Deep dive into brand metrics and technical architecture." },
                { step: "02", title: "Conceptual Logic", d: "Developing the visual and strategic blueprint for authority." },
                { step: "03", title: "Engineering", d: "High-performance build phase with AI-native integration." },
                { step: "04", title: "Deployment", d: "Clinical launch and precision monitoring for scale." }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-10 py-10 border-b border-white/5 hover:border-brand-violet transition-all duration-500"
                >
                  <span className="text-4xl font-black text-white/10 group-hover:text-brand-violet transition-colors duration-500">{s.step}</span>
                  <div>
                    <h4 className="text-2xl font-bold uppercase group-hover:text-brand-violet transition-colors">{s.title}</h4>
                    <p className="text-zinc-500 font-bold uppercase tracking-tight text-xs mt-2 group-hover:text-zinc-300 transition-colors">{s.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. LEADERSHIP */}
        <section className="py-48 relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Core Collective</span>
                <div className="h-px w-24 bg-zinc-100" />
              </div>
              <CharReveal text="Clinical" className="text-6xl md:text-[7rem] font-bold tracking-tighter text-brand-dark uppercase leading-[0.8]" />
              <CharReveal text="Leadership." delay={0.4} className="text-6xl md:text-[7rem] font-bold tracking-tighter text-zinc-100 uppercase" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-24">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedLeader(leader)}
              >
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden bg-zinc-50 mb-10 shadow-2xl relative group border border-zinc-50">
                  <ImageWithFallback
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="px-6 space-y-4">
                  <span className="text-brand-violet font-bold text-[10px] uppercase tracking-[0.3em] block">{leader.role}</span>
                  <h3 className="text-4xl font-bold tracking-tighter text-brand-dark group-hover:text-brand-violet transition-colors duration-500 uppercase leading-none">{leader.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. JOIN CTA */}
        <section className="py-24 border-t border-zinc-100 text-center relative">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-violet/[0.03] blur-[120px] pointer-events-none" />
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-12">Strategic Expansion</h4>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-dark uppercase mb-16">Seeking <span className="text-brand-violet">Elite</span> Talent.</h2>
          <button className="h-20 px-14 rounded-full bg-brand-dark text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-brand-violet transition-all shadow-xl shadow-brand-dark/10">
            View Roles
          </button>
        </section>
      </div>

      <AnimatePresence>
        {selectedLeader && (
          <LeaderModal
            leader={selectedLeader}
            onClose={() => setSelectedLeader(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};