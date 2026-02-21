import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and current pain points through intensive workshops."
  },
  {
    number: "02",
    title: "Strategy & AI Audit",
    description: "We map out a comprehensive brand strategy and identify specific areas where AI can automate your growth."
  },
  {
    number: "03",
    title: "Creative Execution",
    description: "Our designers and engineers build your identity and automation systems in parallel for a seamless launch."
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "We help you deploy your new brand and train your team on how to leverage your custom AI tools for long-term success."
  }
];

export const Process = () => {
  return (
    <section id="process" className="py-32 bg-white text-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs font-bold tracking-[0.3em] text-brand-violet uppercase mb-6">Our Methodology</h2>
              <h3 className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tighter">
                Engineering <br />
                <span className="text-brand-violet">Excellence.</span>
              </h3>
              <p className="text-xl text-zinc-500 mb-14 max-w-lg leading-relaxed font-medium">
                We bridge the gap between human intuition and technical precision through a structured four-phase approach.
              </p>

              <div className="p-10 rounded-[2.5rem] bg-brand-dark text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-violet/20 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-violet/40 transition-colors" />
                <p className="text-xl font-medium mb-8 leading-relaxed relative z-10">
                  "Markin Studio redefined our digital presence with a level of technical depth we hadn't seen before."
                </p>
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700" />
                  <div>
                    <p className="font-bold text-lg">Alex Rivera</p>
                    <p className="text-sm text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Head of Product, Velo Dynamics</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative bg-[#F9F9FB] p-10 md:p-14 rounded-[3rem] border border-transparent hover:border-brand-violet/10 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                  <span className="text-6xl font-black text-brand-violet/5 group-hover:text-brand-violet/20 transition-colors duration-500">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-3xl font-bold mb-5 tracking-tight group-hover:text-brand-violet transition-colors duration-500">{step.title}</h4>
                    <p className="text-zinc-500 text-lg leading-relaxed font-medium">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
