import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Lumina Healthcare",
    category: "Branding • UI/UX",
    image: "/assets/img13.png",
    color: "bg-blue-600"
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
    <section id="work" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Showcasing Digital Excellence</h3>
          </div>
          <button className="text-lg font-bold border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
            See All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full text-black">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-bold mb-1">{project.title}</h4>
                  <p className="text-zinc-500 font-medium">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
