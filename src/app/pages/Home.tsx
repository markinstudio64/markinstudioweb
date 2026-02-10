import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Plus } from "lucide-react";

// Define the props interface
interface HomeProps {
  setActivePage: (page: string) => void;
}

export const Home = ({ setActivePage }: HomeProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="bg-white selection:bg-black selection:text-white">
      {/* 1. KINETIC HERO */}
      <section className="relative h-[140vh] flex flex-col justify-start pt-32 md:pt-40 px-6 md:px-12 overflow-hidden bg-[#0A0A0A] text-white">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto z-0"
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full mb-12">
            <div className="flex flex-col gap-4 w-full md:w-2/3 mt-8 md:mt-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="h-[2px] w-12 bg-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Global Branding & Design Consultancy</span>
              </motion.div>

              <div className="flex flex-col justify-center h-full">
                <div className="overflow-hidden mb-2">
                  <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(2rem,10vw,7rem)] leading-[1.1] font-black tracking-tighter uppercase italic"
                  >
                    Identity
                  </motion.h1>
                </div>
                <div className="overflow-hidden flex justify-start mb-2">
                  <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="text-[clamp(2rem,10vw,7rem)] leading-[1.1] font-black tracking-tighter uppercase italic text-zinc-800"
                  >
                    Intelligence
                  </motion.h1>
                </div>
                <div className="overflow-hidden flex justify-start">
                  <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-[clamp(2rem,10vw,7rem)] leading-[1.1] font-black tracking-tighter uppercase italic text-blue-600"
                  >
                    Interfaces
                  </motion.h1>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <div className="w-full max-w-[400px] aspect-square rounded-lg overflow-hidden -z-0">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/src/assets/reelshow.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-24 grid md:grid-cols-12 gap-12"
          >
            <div className="md:col-span-4">
              <p className="text-xl md:text-2xl font-medium text-zinc-400 leading-tight">
                Architecting high-performance Brand identity Designs and AI Automation ecosystems for the visionaries of our era.
              </p>
            </div>
            <div className="md:col-span-8 flex justify-end items-end gap-12">
               <div className="hidden md:block text-right">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 block mb-2">Available for</span>
                  <span className="text-xl font-bold uppercase italic">Freelance Projects</span>
               </div>
               <button
                onClick={() => setActivePage("contact")}
                className="h-24 w-24 md:h-40 md:w-40 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform group"
               >
                 <ArrowUpRight size={40} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Ambient Background Video/Graphic Placeholder */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-gradient-to-tr from-blue-900/20 via-transparent to-zinc-900/40"
          />
        </div>
      </section>

      {/* 2. THE MISSION (Scrolling Reveal) */}
      <section className="py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] block mb-12">Our Mission</span>
              <div className="sticky top-48">
                <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
                  We bridge the <br /> gap between <br /> human <span className="text-zinc-200">logic</span> <br /> and AI <span className="text-blue-600">magic</span>.
                </h2>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-24">
              <p className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-zinc-900">
                The future of branding isn't just about pixels; it's about <span className="text-zinc-400">intelligence</span>. We build identities that think, adapt, and evolve alongside your business.
              </p>
              
              <div className="grid md:grid-cols-2 gap-24">
                <div className="space-y-8">
                  <div className="h-px w-full bg-zinc-100" />
                  <h4 className="text-sm font-black uppercase tracking-widest">01. Strategy</h4>
                  <p className="text-zinc-500 text-lg leading-relaxed">We dismantle your industry standards to find the unconventional edge. Our strategy is rooted in data but driven by intuition.</p>
                </div>
                <div className="space-y-8">
                  <div className="h-px w-full bg-zinc-100" />
                  <h4 className="text-sm font-black uppercase tracking-widest">02. Engineering</h4>
                  <p className="text-zinc-500 text-lg leading-relaxed">Custom AI bot development and comprehensive startup solutions that transform your brand into an intelligent, high-performance digital presence.</p>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 0.98 }}
                className="relative aspect-video rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
              >
                <ImageWithFallback
                  src="/src/assets/image1.png"
                  alt="Engineering"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORKS (Grid with Detail) */}
      <section className="py-48 px-6 md:px-12 bg-zinc-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <h2 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">
              Selected <br /> <span className="text-zinc-200">Value.</span>
            </h2>
            <div className="max-w-md text-right">
              <p className="text-zinc-500 mb-8 font-medium">A curation of our latest breakthroughs in visual engineering and automation.</p>
              <button 
                onClick={() => setActivePage("work")}
                className="group flex items-center gap-4 font-black uppercase tracking-widest text-[10px] ml-auto border-b-2 border-black pb-2 hover:text-blue-600 hover:border-blue-600 transition-all"
              >
                View Full Archive <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-48">
            {[
              { id: "01", title: "FN Markets", cat: "Financial Markets Ecosystem Design", img: "/src/assets/p1.jpg" },
              { id: "02", title: "Astra Core", cat: "Product Design", img: "/src/assets/p2.jpg" },
              { id: "03", title: "W3 Hub", cat: "Visual Identity", img: "/src/assets/p3.jpg" },
              { id: "04", title: "Sixtysix", cat: "Automation Strategy", img: "/src/assets/p4.jpg" }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
              >
                <div className="relative overflow-hidden aspect-[10/12] rounded-[3rem] bg-zinc-200 mb-12">
                  <ImageWithFallback 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" 
                  />
                  <div className="absolute top-8 left-8">
                    <span className="text-white font-mono text-sm mix-blend-difference">{p.id}</span>
                  </div>
                </div>
                <div className="flex justify-between items-start border-t border-zinc-200 pt-8">
                  <div>
                    <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-2 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{p.cat}</span>
                  </div>
                  <div className="h-12 w-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES (List with Hover Previews) */}
      <section className="py-48 px-6 md:px-12 bg-white border-y border-zinc-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4">
              <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] block mb-12">Capabilities</span>
              <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight">
                Our tools for <br /> <span className="text-zinc-200">mass transformation.</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              {[
                { t: "Strategic Branding", d: "High-end visual identities that command authority." },
                { t: "AI Automation", d: "Ai Chatbots for website and customer support." },
                { t: "UI/UX Designs", d: "Complex interfaces engineered for human emotion." },
                { t: "Website Development", d: "Your Live agent for growth and sales." },
                { t: "Startup& Business Solutions", d: "Branding, Marketing Material, Future R&D and Consultancy." }
              ].map((c, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 30 }}
                  className="group py-16 border-b border-zinc-100 flex justify-between items-center cursor-pointer transition-all"
                >
                  <div>
                    <h3 
                      className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter group-hover:text-blue-600 transition-colors cursor-pointer"
                      onClick={() => setActivePage("services")}
                    >
                      {c.t}
                    </h3>
                    <p className="text-zinc-400 mt-4 text-xl font-medium opacity-0 group-hover:opacity-100 transition-opacity">{c.d}</p>
                  </div>
                  <span className="text-zinc-200 text-6xl font-black hidden md:block">/0{i+1}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOURNAL/INSIGHTS (Newspaper Grid) */}
      <section className="py-48 px-6 md:px-12 bg-zinc-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-24">
            <h2 className="text-6xl font-black uppercase italic tracking-tighter">Journal.</h2>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Weekly Intelligence Dispatch</span>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { date: "FEB 2026", title: "The Death of Static Branding", img: "/src/assets/img6.png" },
              { date: "JAN 2026", title: "AI Agents as Brand Ambassadors", img: "/src/assets/img7.png" },
              { date: "DEC 2025", title: "Engineering Emotional Resonance", img: "/src/assets/img8.png" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                  <ImageWithFallback src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <span className="text-[10px] font-bold text-blue-600 tracking-widest block mb-4">{post.date}</span>
                <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-none group-hover:underline decoration-2 underline-offset-8 transition-all">{post.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS (Marquee) */}
      <section className="py-32 border-t border-zinc-100 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300">Featured Brands</span>
        </div>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-32 items-center grayscale opacity-30 whitespace-nowrap"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="text-5xl font-black uppercase italic flex gap-32">
              <span>Milkline</span>
              <span>Aurora Ledger</span>
              <span>Vitalume Health</span>
              <span>Veridion Properties</span>
              <span>Go Cafe</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 7. BIG CTA */}
      <section className="py-64 bg-black text-white px-6 md:px-12 text-center overflow-hidden relative">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h2 className="text-[clamp(3rem,10vw,12rem)] font-black uppercase italic tracking-tighter leading-[0.8] mb-12">
            Engineered <br /> for <span className="text-blue-600">Greatness.</span>
          </h2>
          <button 
            onClick={() => setActivePage("contact")}
            className="inline-flex items-center gap-6 bg-white text-black px-12 py-6 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:scale-105 transition-transform"
          >
            Start Your Journey <ArrowRight size={18} />
          </button>
        </motion.div>
        
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/40 via-transparent to-transparent"
          />
        </div>
      </section>
    </div>
  );
};