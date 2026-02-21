import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Define the props interface
interface HomeProps {
  setActivePage: (page: string) => void;
}

export const Home = ({ setActivePage }: HomeProps) => {
  return (
    <div className="bg-white selection:bg-black selection:text-white">
      {/* 1. KINETIC HERO */}
      {/* 1. ORIZON STYLE HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <a
              href="#subscription"
              className="inline-flex items-center gap-2 bg-[#84EF03] text-black px-5 py-2.5 rounded-full text-sm font-bold shadow-xl hover:scale-105 transition-transform"
            >
              Check out our Design Subscription
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-9xl font-bold leading-[1] mb-8 tracking-tight text-zinc-900"
          >
            We make apps, <br />
            <span className="text-zinc-400">websites & brands</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 mb-12 max-w-3xl leading-relaxed"
          >
            A world-class design agency for world-class companies. We design products with startups and leaders like Apple, Google, Uber, Tinder & more.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <button
              onClick={() => setActivePage("contact")}
              className="bg-black text-white px-12 py-5 rounded-full font-bold flex items-center justify-center gap-3 group hover:bg-zinc-800 transition-all text-xl shadow-2xl"
            >
              Let's Talk
              <div className="bg-white/10 p-1 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight size={22} className="-rotate-45" />
              </div>
            </button>

            <button
              onClick={() => setActivePage("work")}
              className="text-zinc-900 font-bold flex items-center justify-center gap-3 group hover:text-zinc-600 transition-all text-xl"
            >
              View Our Work
              <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-400 transition-all">
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Hero Video Section Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container mx-auto px-6 mt-20"
        >
          <div className="relative aspect-video max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl bg-zinc-100 group">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/reelshow.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <ArrowRight size={32} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. THE CORE VALUES */}
      <section className="py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-24">
            <div className="space-y-8">
              <div className="h-px w-full bg-zinc-100" />
              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-zinc-900">We are a design leader</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  Designing world-class products & brands. Pushing boundaries & influencing designers everywhere.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="h-px w-full bg-zinc-100" />
              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-zinc-900">We get things done, right & fast</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  Fast-paced & no bullshit. We make the complex simple. Flexible collaboration & payments.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="h-px w-full bg-zinc-100" />
              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-zinc-900">People love working with us</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  "Meeting with Markin was our favorite part of the week!" That’s what we call a stellar reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORKS */}
      <section className="py-48 px-6 md:px-12 bg-white border-t border-zinc-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-900">
              Selected <br /> <span className="text-zinc-300">Work.</span>
            </h2>
            <div className="max-w-md text-right">
              <p className="text-zinc-500 mb-8 font-medium text-lg leading-relaxed">A curation of our latest breakthroughs in brand strategy, design, and digital experiences.</p>
              <button
                onClick={() => setActivePage("work")}
                className="group flex items-center gap-4 font-bold uppercase tracking-widest text-xs ml-auto border-b-2 border-zinc-900 pb-2 hover:text-blue-600 hover:border-blue-600 transition-all"
              >
                View Full Archive <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-32">
            {[
              { id: "01", title: "FN Markets", cat: "Brand Identity", img: "/assets/p1.jpg" },
              { id: "02", title: "Astra Core", cat: "Product Design", img: "/assets/p2.jpg" },
              { id: "03", title: "W3 Hub", cat: "Visual Identity", img: "/assets/p3.jpg" },
              { id: "04", title: "Sixtysix", cat: "Digital Strategy", img: "/assets/p4.jpg" }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
                onClick={() => setActivePage("work")}
              >
                <div className="relative overflow-hidden aspect-[10/11] rounded-[2.5rem] bg-zinc-100 mb-8">
                  <ImageWithFallback
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors uppercase">{p.title}</h3>
                    <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">{p.cat}</span>
                  </div>
                  <div className="h-12 w-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES */}
      <section className="py-48 px-6 md:px-12 bg-white border-y border-zinc-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <span className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[12px] block mb-10">Capabilities</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-zinc-900">
                Our tools for <br /> digital transformation.
              </h2>
            </div>
            <div className="lg:col-span-7">
              {[
                { t: "Strategic Branding", d: "High-end visual identities that command authority and define market presence." },
                { t: "AI Automation", d: "Custom AI solutions and autonomous agents for modern businesses." },
                { t: "UX/UI Design", d: "User-centered interfaces engineered for conversion and engagement." },
                { t: "Web Development", d: "High-performance websites built with the latest technologies." },
                { t: "Consultancy", d: "Strategic guidance for startups and established enterprises." }
              ].map((c, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 20 }}
                  className="group py-12 border-b border-zinc-100 flex justify-between items-center cursor-pointer transition-all"
                  onClick={() => setActivePage("services")}
                >
                  <div className="flex-grow">
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors uppercase">
                      {c.t}
                    </h3>
                    <p className="text-zinc-500 mt-4 text-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-lg">{c.d}</p>
                  </div>
                  <span className="text-zinc-200 text-5xl font-bold hidden md:block">0{i + 1}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOURNAL */}
      <section className="py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-24">
            <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 uppercase">Journal.</h2>
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Weekly Intelligence Dispatch</span>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { date: "FEB 2026", title: "The Death of Static Branding", img: "/assets/img6.png" },
              { date: "JAN 2026", title: "AI Agents as Brand Ambassadors", img: "/assets/img7.png" },
              { date: "DEC 2025", title: "Engineering Emotional Resonance", img: "/assets/img8.png" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => setActivePage("journals")}>
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 bg-zinc-100">
                  <ImageWithFallback src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <span className="text-xs font-bold text-blue-600 tracking-widest block mb-4">{post.date}</span>
                <h4 className="text-2xl font-bold tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-all uppercase">{post.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS */}
      <section className="py-32 border-t border-zinc-100 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">Trusted by Awesome Clients</span>
        </div>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-32 items-center opacity-30 px-12"
        >
          {[
            "/assets/apple-logo.png",
            "/assets/nike-logo.png",
            "/assets/openai-logo.png",
            "/assets/spacex-logo.png",
            "/assets/tesla-logo.png",
            "/assets/apple-logo.png",
            "/assets/nike-logo.png",
            "/assets/openai-logo.png"
          ].map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <img src={logo} alt="Partner Logo" className="h-10 w-auto grayscale" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 7. BIG CTA */}
      <section className="py-64 bg-white text-zinc-900 px-6 md:px-12 text-center overflow-hidden relative border-t border-zinc-100">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-8">
            We'll reply in 24 hrs
          </span>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tight leading-[1] mb-12 uppercase">
            Let's build <br /> <span className="text-zinc-300 text-outline">something great.</span>
          </h2>
          <button
            onClick={() => setActivePage("contact")}
            className="inline-flex items-center gap-6 bg-black text-white px-12 py-6 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-2xl"
          >
            Start Your Journey
            <div className="bg-white/10 p-1 rounded-full group-hover:translate-x-1 transition-transform">
              <ArrowRight size={20} />
            </div>
          </button>
        </motion.div>
      </section>
    </div>
  );
};