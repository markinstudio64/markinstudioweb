import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Lumina Healthcare",
    category: "Branding • UI/UX",
    image: "/assets/img13.png",
    color: "bg-violet-600"
  },
  {
    title: "Aether AI",
    category: "Automation • Web Design",
    image: "/assets/img14.png",
    color: "bg-zinc-900"
  },
  {
    title: "Vanguard Realty",
    category: "Visual Identity",
    image: "/assets/img15.png",
    color: "bg-emerald-600"
  },
  {
    title: "Nexus Fintech",
    category: "AI Workflow • App",
    image: "/assets/img16.png",
    color: "bg-purple-600"
  }
];

export const Portfolio = () => {
  return (
    <section id="work" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs font-bold tracking-[0.3em] text-brand-violet uppercase mb-6">Selected Work</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-brand-dark">
                Elevating Brands through <br />
                <span className="text-brand-violet">Digital Clarity.</span>
              </h3>
            </motion.div>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-lg font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-violet hover:border-brand-violet transition-all uppercase tracking-widest text-xs"
          >
            See All Projects
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[3.5rem] overflow-hidden mb-10 shadow-2xl shadow-zinc-200/50">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white p-6 rounded-full text-brand-dark transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-out shadow-xl">
                    <ExternalLink size={28} />
                  </div>
                </div>
                <div className="absolute top-8 left-8">
                  <span className="px-6 py-2.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark shadow-sm">
                    {project.category.split(' • ')[0]}
                  </span>
                </div>
              </div>
              <div className="pl-4">
                <h4 className="text-3xl font-bold mb-3 tracking-tight text-brand-dark group-hover:text-brand-violet transition-colors duration-300">{project.title}</h4>
                <p className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px]">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
