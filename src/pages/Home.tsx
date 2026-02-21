import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Hero } from "../components/Hero";

// Define the props interface
interface HomeProps {
  setActivePage: (page: string) => void;
}

export const Home = ({ setActivePage }: HomeProps) => {
  return (
    <div className="bg-white selection:bg-brand-violet selection:text-white">
      {/* 1. HERO COMPONENT */}
      <Hero />

      {/* 2. THE CORE VALUES */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
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
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="space-y-10"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-violet">0{i + 1}</span>
                  <div className="h-px flex-grow bg-zinc-100" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300">{value.label}</span>
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark uppercase">{value.title}</h3>
                  <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORKS */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter text-brand-dark leading-[0.8] mb-6">
                Selected <br /> <span className="text-zinc-100">Work.</span>
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">A curation of digital excellence</span>
            </motion.div>

            <div className="max-w-md md:text-right">
              <p className="text-zinc-500 mb-10 font-medium text-lg leading-relaxed">Our latest breakthroughs in brand strategy, design, and digital engineering for visionaries.</p>
              <button
                onClick={() => setActivePage("work")}
                className="group inline-flex items-center gap-4 font-bold uppercase tracking-widest text-[10px] border-b-2 border-brand-dark pb-2 hover:text-brand-violet hover:border-brand-violet transition-all"
              >
                View Full Archive <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-32">
            {[
              { id: "01", title: "FN Markets", cat: "Brand Identity", img: "/assets/p1.jpg" },
              { id: "02", title: "Astra Core", cat: "Product Engineering", img: "/assets/p2.jpg" },
              { id: "03", title: "W3 Hub", cat: "Visual Identity", img: "/assets/p3.jpg" },
              { id: "04", title: "Sixtysix", cat: "Intelligent Systems", img: "/assets/p4.jpg" }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
                onClick={() => setActivePage("work")}
              >
                <div className="relative overflow-hidden aspect-[4/5] rounded-[3.5rem] bg-zinc-50 mb-10 shadow-2xl shadow-zinc-200/50">
                  <ImageWithFallback
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />
                </div>
                <div className="flex justify-between items-start pl-4">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-brand-dark mb-3 group-hover:text-brand-violet transition-colors uppercase">{p.title}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{p.cat}</span>
                  </div>
                  <div className="h-14 w-14 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-brand-violet group-hover:text-white group-hover:border-brand-violet transition-all duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <span className="text-brand-violet font-bold uppercase tracking-[0.3em] text-[10px] block mb-8">Capabilities</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] text-brand-dark mb-10">
                Striking the <br /> <span className="text-brand-violet">Right Chords</span> <br /> in Digital.
              </h2>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-md">We engineer visual and cognitive systems that empower brands to dominate their digital landscape.</p>
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
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ x: 20 }}
                  className="group py-12 border-b border-zinc-100 flex justify-between items-center cursor-pointer transition-all duration-500"
                  onClick={() => setActivePage("services")}
                >
                  <div className="flex-grow">
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-dark group-hover:text-brand-violet transition-colors duration-500 uppercase">
                      {c.t}
                    </h3>
                    <p className="text-zinc-400 mt-6 text-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-lg leading-relaxed">{c.d}</p>
                  </div>
                  <span className="text-zinc-100 text-6xl font-black hidden md:block group-hover:text-brand-violet/10 transition-colors">0{i + 1}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOURNAL */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-brand-dark uppercase">Journal.</h2>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet block mt-4">Intelligence & Vision</span>
            </motion.div>
            <motion.button
              onClick={() => setActivePage("journals")}
              whileHover={{ x: 5 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark border-b-2 border-brand-dark pb-2 hover:text-brand-violet hover:border-brand-violet transition-all"
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
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActivePage("journals")}
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 bg-zinc-50 shadow-xl shadow-zinc-100/50">
                  <ImageWithFallback src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-brand-violet tracking-[0.3em] block uppercase">{post.date}</span>
                  <h4 className="text-2xl font-bold tracking-tight text-brand-dark group-hover:text-brand-violet transition-all duration-300 uppercase leading-snug">{post.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS */}
      <section className="py-32 bg-white overflow-hidden border-t border-zinc-100">
        <div className="container mx-auto px-6 mb-20 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300">TRUSTED BY INDUSTRY TITANS</span>
        </div>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-40 items-center opacity-20 px-12"
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
            "/assets/tesla-logo.png"
          ].map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <img src={logo} alt="Partner Logo" className="h-12 w-auto grayscale" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 7. BIG CTA */}
      <section className="py-48 md:py-64 bg-brand-dark text-white px-6 md:px-12 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-violet/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 bg-brand-violet/10 border border-brand-violet/20 text-brand-violet px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-12">
            Strike Your Chord
          </span>
          <h2 className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.9] mb-16 uppercase">
            Ready to Build <br /> <span className="text-brand-violet">Digital Authority?</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActivePage("contact")}
            className="inline-flex items-center gap-6 bg-brand-violet text-white px-14 py-7 rounded-full text-lg font-bold shadow-[0_20px_40px_-10px_rgba(124,58,237,0.4)] transition-all uppercase tracking-widest group"
          >
            Start Your Journey
            <div className="p-1 rounded-full bg-white/10 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={24} />
            </div>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};