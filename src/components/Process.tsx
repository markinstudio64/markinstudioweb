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
    <section id="process" className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">Our Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              A Proven Path to Digital <span className="text-blue-500 italic">Evolution.</span>
            </h3>
            <p className="text-xl text-zinc-400 mb-12 max-w-lg leading-relaxed">
              We don't just guess. We follow a data-driven, creative-led process that ensures your investment yields measurable results.
            </p>
            <div className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700">
              <p className="text-2xl font-bold mb-4">"Markin Studio reduced our operational costs by 35% through AI while doubling our brand recognition."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-600" />
                <div>
                  <p className="font-bold">Sarah Jenkins</p>
                  <p className="text-sm text-zinc-500">CEO, TechFlow Systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-zinc-800/30 p-8 rounded-3xl border border-zinc-800 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                    <p className="text-zinc-400 leading-relaxed">{step.description}</p>
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
