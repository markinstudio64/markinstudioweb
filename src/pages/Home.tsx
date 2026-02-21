import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Hero } from "../components/Hero";
import { CharReveal, TextReveal } from "../components/TextReveal";

// Define the props interface
interface HomeProps {
  setActivePage: (page: string) => void;
}

export const Home = ({ setActivePage }: HomeProps) => {
  return (
    <div className="bg-white selection:bg-brand-violet selection:text-white overflow-hidden">
      {/* 1. HERO COMPONENT */}
      <Hero />

      {/* 2. THE CORE VALUES */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-violet/[0.03] blur-[120px]" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-32">
            {[
              {
                title: "Design Leadership",
                desc: "We don't just follow trends; we define them. Our team architects world-class identities that command authority and influence.",
                label: "Authority"
              },
              {
                title: "Technical Precision",
                desc: "Fast, focused, and data-driven. We merge complex AI engineering with seamless UX to deliver high-performance growth.",
                label: "Performance"
              },
              {
                title: "Global Reputation",
                desc: "The world's most ambitious founders and leaders trust us to strike the right chord for their digital presence.",
                label: "Trust"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="space-y-12"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">0{i + 1}</span>
                  <div className="h-px flex-grow bg-zinc-100" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300">{value.label}</span>
                </div>
                <div className="space-y-8">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark uppercase leading-[0.9]">{value.title}</h3>
                  <p className="text-zinc-500 text-lg leading-relaxed font-bold uppercase tracking-tight">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORKS */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] h-[40%] bg-brand-violet/[0.02] blur-[130px] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Case Studies</span>
                <div className="h-px w-24 bg-zinc-100" />
              </div>
              <CharReveal
                text="Selected"
                className="text-6xl md:text-[10rem] font-bold tracking-tighter text-brand-dark leading-[0.8] uppercase"
              />
              <CharReveal
                text="Insight."
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
                Explore Archive <ArrowRight size={16} className="ml-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-32">
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
                className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-48' : ''}`}
                onClick={() => setActivePage("work")}
              >
                <div className="relative overflow-hidden aspect-[4/5] rounded-[4rem] bg-zinc-50 mb-12 shadow-2xl border border-zinc-50 group">
                  <ImageWithFallback
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                    <ArrowUpRight size={28} className="text-brand-dark" />
                  </div>
                </div>
                <div className="flex justify-between items-start px-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet block mb-4">{p.cat}</span>
                    <h3 className="text-4xl font-bold tracking-tighter text-brand-dark mb-3 group-hover:text-brand-violet transition-colors uppercase leading-[0.9]">{p.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-brand-dark rounded-[5rem] mx-6 md:mx-12 mb-32 relative overflow-hidden text-white">
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-brand-violet/[0.1] blur-[130px] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <span className="text-brand-violet font-bold uppercase tracking-[0.4em] text-[10px] block mb-12">Expertise</span>
              <h2 className="text-6xl md:text-[6rem] font-bold tracking-tighter leading-[0.85] text-white mb-12 uppercase">
                Architecting <br /> <span className="text-brand-violet text-zinc-100">Dominance</span> <br /> in Digital.
              </h2>
              <TextReveal
                text="We engineer visual and cognitive systems that empower brands to dominate their digital landscape through clinical precision."
                className="text-zinc-400 text-lg font-bold uppercase tracking-tight leading-snug max-w-md"
              />
            </div>

            <div className="lg:col-span-7">
              {[
                { t: "Strategic Branding", d: "High-end visual identities that command authority and define market presence through technical depth." },
                { t: "Intelligent Systems", d: "Custom AI solutions and autonomous agents engineered for operational excellence and scale." },
                { t: "Interface Design", d: "User-centered ecosystems engineered for emotional resonance and clinical conversion." },
                { t: "Growth Engineering", d: "High-performance digital platforms built with future-proof stacks and vision." },
                { t: "Vision Consultancy", d: "Deep-dive strategic guidance for founders and leaders navigating technological shifts." }
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group py-14 border-b border-white/5 flex justify-between items-center cursor-pointer transition-all duration-500 hover:px-8 hover:bg-white/5 rounded-3xl"
                  onClick={() => setActivePage("services")}
                >
                  <div className="flex-grow">
                    <h3 className="text-4xl md:text-[4rem] font-bold tracking-tighter text-white group-hover:text-brand-violet transition-colors duration-500 uppercase leading-none">
                      {c.t}
                    </h3>
                    <p className="text-zinc-500 mt-8 text-lg font-bold uppercase tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-lg leading-relaxed">{c.d}</p>
                  </div>
                  <span className="text-white/5 text-8xl font-black hidden md:block group-hover:text-brand-violet/10 transition-all duration-700">0{i + 1}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOURNAL */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white relative">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-violet/[0.03] blur-[120px] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Pulse & Vision</span>
                <div className="h-px w-24 bg-zinc-100" />
              </div>
              <CharReveal text="Clinical" className="text-6xl md:text-[7rem] font-bold tracking-tighter text-brand-dark uppercase leading-[0.8]" />
              <CharReveal text="Research." delay={0.4} className="text-6xl md:text-[7rem] font-bold tracking-tighter text-zinc-100 uppercase leading-[0.8]" />
            </div>
            <motion.button
              onClick={() => setActivePage("journals")}
              whileHover={{ x: 5 }}
              className="h-20 px-12 rounded-full border border-zinc-100 bg-white text-brand-dark font-bold uppercase tracking-[0.3em] text-[10px] hover:border-brand-violet hover:text-brand-violet transition-all shadow-sm"
            >
              Exposed Architecture
            </motion.button>
          </div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-24">
            {[
              { date: "FEB 2026", title: "Decoding the AI-First Branding Era", img: "/assets/img6.png" },
              { date: "JAN 2026", title: "Autonomous Agents: The New Identity", img: "/assets/img7.png" },
              { date: "DEC 2025", title: "Architecting Digital Influence", img: "/assets/img8.png" }
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActivePage("journals")}
              >
                <div className="aspect-[3/4] rounded-[3.5rem] overflow-hidden mb-10 bg-zinc-50 border border-zinc-50 shadow-xl group">
                  <ImageWithFallback src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0" />
                </div>
                <div className="space-y-6">
                  <span className="text-[10px] font-bold text-brand-violet tracking-[0.3em] block uppercase">{post.date}</span>
                  <h4 className="text-3xl font-bold tracking-tighter text-brand-dark group-hover:text-brand-violet transition-all duration-500 uppercase leading-[1.1]">{post.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS */}
      <section className="py-40 bg-white overflow-hidden border-t border-zinc-100">
        <div className="container mx-auto px-6 mb-24 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300">TRUSTED BY INDUSTRY TITANS</span>
        </div>
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-48 items-center opacity-10 px-12"
        >
          {[
            "/assets/apple-logo.png",
            "/assets/nike-logo.png",
            "/assets/openai-logo.png",
            "/assets/spacex-logo.png",
            "/assets/tesla-logo.png",
            "/assets/apple-logo.png",
            "/assets/nike-logo.png",
            "/assets/openai-logo.png",
            "/assets/spacex-logo.png",
            "/assets/tesla-logo.png",
            "/assets/apple-logo.png",
            "/assets/nike-logo.png",
            "/assets/openai-logo.png",
            "/assets/spacex-logo.png",
            "/assets/tesla-logo.png"
          ].map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <img src={logo} alt="Partner Logo" className="h-14 w-auto grayscale" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 7. BIG CTA */}
      <section className="py-48 md:py-64 bg-brand-dark text-white px-6 md:px-12 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-violet/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[120px]" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <span className="inline-flex items-center gap-3 bg-brand-violet/10 border border-brand-violet/20 text-brand-violet px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.5em] mb-16 shadow-xl shadow-brand-violet/5">
            Strike Your Accord
          </span>
          <h2 className="text-7xl md:text-[11rem] font-bold tracking-tighter leading-[0.8] mb-20 uppercase">
            Architect <br /> <span className="text-brand-violet">Authority.</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActivePage("contact")}
            className="inline-flex items-center gap-8 h-28 px-20 bg-brand-violet text-white rounded-full font-bold shadow-[0_30px_60px_-15px_rgba(124,58,237,0.5)] transition-all uppercase tracking-[0.4em] text-xs group"
          >
            Initiate Project
            <div className="p-2 rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={28} />
            </div>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};
