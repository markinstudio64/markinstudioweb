import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowUpRight, Search, List, Grid, X } from "lucide-react";

// Define project type
interface Project {
  id: string;
  title: string;
  cat: string;
  img: string;
  year: string;
  images: string[];
}

// Define props interface
interface WorkProps {
  setActivePage: (page: string) => void;
}

// Modal component moved outside (required for proper typing)
const ProjectDetailModal = ({ 
  project, 
  onClose 
}: { 
  project: Project; 
  onClose: () => void; 
}) => {
  // Use only the project's specific details
  const projectDetails = {
    ...project,
    description: project.cat === "branding"
      ? "A comprehensive branding solution that redefined the client's market presence. This project involved developing a complete visual identity system, including logo design, typography, color palette, and brand guidelines."
      : project.cat === "automation"
      ? "An AI-powered automation system that streamlined the client's workflow. This project integrated custom LLM models and autonomous agents to automate repetitive tasks and improve efficiency."
      : project.cat === "product"
      ? "A user-centered product design focused on creating intuitive interfaces for complex systems. This project involved extensive user research, prototyping, and iterative design to create a seamless user experience."
      : project.cat === "motion"
      ? "A dynamic motion graphics project that brought static designs to life. This project included animated logos, UI animations, and promotional videos that enhanced brand storytelling."
      : "A comprehensive project that delivered exceptional results for our client. This project showcases our expertise in creating impactful solutions.",
    services: project.cat === "branding"
      ? ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"]
      : project.cat === "automation"
      ? ["AI Integration", "Workflow Automation", "Custom LLM Models", "Agent Development"]
      : project.cat === "product"
      ? ["UI/UX Design", "User Research", "Prototyping", "Design Systems"]
      : project.cat === "motion"
      ? ["Motion Graphics", "Animation", "Video Production", "Brand Storytelling"]
      : ["Strategy", "Design", "Development", "Implementation"],
    timeline: "6 months",
    results: "Increased brand recognition by 75% and improved operational efficiency by 45%."
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-zinc-200 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter">{project.title}</h2>
            <div className="flex gap-4 mt-2">
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">{project.cat}</span>
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">{project.year}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          {/* Project details section - Above the gallery */}
          <div className="mb-6">
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4">Project Details</h3>
            <p className="text-zinc-600 leading-relaxed mb-6">{projectDetails.description}</p>

            <div className="mb-8">
              <h4 className="text-lg font-black uppercase italic tracking-tighter mb-4">Services Provided</h4>
              <div className="flex flex-wrap gap-2">
                {projectDetails.services.map((service, idx) => (
                  <span key={idx} className="px-4 py-2 bg-zinc-100 rounded-full text-sm font-bold uppercase tracking-widest">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-2">Timeline</h4>
                <p className="font-bold">{projectDetails.timeline}</p>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-2">Results</h4>
                <p className="font-bold">{projectDetails.results}</p>
              </div>
            </div>
          </div>

          {/* Project Images Gallery - Below the details */}
          <div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4">Project Gallery</h3>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className="break-inside-avoid rounded-2xl overflow-hidden bg-zinc-100 mb-4"
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${project.title} - Image ${idx + 1}`}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-zinc-200">
          <button
            onClick={onClose}
            className="w-full py-4 bg-black text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 transition-colors"
          >
            Close Project
          </button>
        </div>
      </div>
    </div>
  );
};

export const Work = ({ setActivePage }: WorkProps) => {
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("grid");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["all", "branding", "automation", "product", "motion"];

  const projects: Project[] = [
    { 
      id: "01", 
      title: "Flux Core", 
      cat: "automation", 
      img: "/src/assets/p1.jpg", 
      year: "2026",
      images: ["/src/assets/p1.jpg", "/src/assets/p2.jpg", "/src/assets/p3.jpg", "/src/assets/img20.png", "/src/assets/img21.png", "/src/assets/img22.png"]
    },
    { 
      id: "02", 
      title: "Neon Pulse", 
      cat: "branding", 
      img: "/src/assets/p2.jpg", 
      year: "2026",
      images: ["/src/assets/p2.jpg", "/src/assets/p1.jpg", "/src/assets/p3.jpg", "/src/assets/img21.png", "/src/assets/img20.png", "/src/assets/img22.png"]
    },
    { 
      id: "03", 
      title: "Alpha Studio", 
      cat: "product", 
      img: "/src/assets/p3.jpg", 
      year: "2025",
      images: ["/src/assets/p3.jpg", "/src/assets/p1.jpg", "/src/assets/p2.jpg", "/src/assets/img22.png", "/src/assets/img21.png", "/src/assets/img20.png"]
    },
    { 
      id: "04", 
      title: "Kinetik", 
      cat: "motion", 
      img: "/src/assets/img20.png", 
      year: "2025",
      images: ["/src/assets/img20.png", "/src/assets/p1.jpg", "/src/assets/p2.jpg", "/src/assets/p3.jpg", "/src/assets/img21.png", "/src/assets/img22.png"]
    },
    { 
      id: "05", 
      title: "Omni Labs", 
      cat: "automation", 
      img: "/src/assets/img21.png", 
      year: "2025",
      images: ["/src/assets/img21.png", "/src/assets/p1.jpg", "/src/assets/p2.jpg", "/src/assets/p3.jpg", "/src/assets/img20.png", "/src/assets/img22.png"]
    },
    { 
      id: "06", 
      title: "Zenith", 
      cat: "branding", 
      img: "/src/assets/img22.png", 
      year: "2024",
      images: ["/src/assets/img22.png", "/src/assets/p1.jpg", "/src/assets/p2.jpg", "/src/assets/p3.jpg", "/src/assets/img20.png", "/src/assets/img21.png"]
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="bg-white pt-48 pb-32 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* 1. WORK INTRO */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
           >
              <span className="text-zinc-400 font-bold uppercase tracking-[0.5em] text-[10px] block mb-12">Project Archive</span>
              <h1 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase tracking-tighter italic leading-[0.8]">
                Proven <br /> <span className="text-zinc-200">Value.</span>
              </h1>
           </motion.div>
           <div className="flex flex-col items-end">
              <span className="text-6xl font-black italic text-zinc-100 mb-4">/140+</span>
              <p className="text-right text-zinc-500 max-w-[200px] font-medium leading-tight">Successful project deliveries across 24 countries.</p>
           </div>
        </div>

        {/* 2. FILTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center border-y border-zinc-100 py-8 mb-24 gap-8">
           <div className="flex flex-wrap gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === cat ? "bg-black text-white" : "text-zinc-400 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
           <div className="flex gap-4 items-center">
              <button 
                onClick={() => setView("grid")}
                className={`p-2 transition-colors ${view === 'grid' ? 'text-blue-600' : 'text-zinc-300'}`}
              >
                <Grid size={20} />
              </button>
              <button 
                onClick={() => setView("list")}
                className={`p-2 transition-colors ${view === 'list' ? 'text-blue-600' : 'text-zinc-300'}`}
              >
                <List size={20} />
              </button>
              <div className="h-6 w-px bg-zinc-100 mx-4" />
              <Search size={20} className="text-zinc-300" />
           </div>
        </div>

        {/* 3. PROJECT DISPLAY */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {view === "grid" ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24"
              >
                {filteredProjects.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layoutId={p.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(p)}
                  >
                    <div className="aspect-[10/12] rounded-[3rem] overflow-hidden bg-zinc-100 mb-8 relative">
                      <ImageWithFallback src={p.img} alt={p.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" />
                      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex justify-between items-center px-4">
                       <div>
                          <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-1">{p.title}</h3>
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{p.cat} / {p.year}</span>
                       </div>
                       <ArrowUpRight size={20} className="text-zinc-200 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-0"
              >
                {filteredProjects.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex flex-col md:flex-row justify-between items-center py-16 border-b border-zinc-100 cursor-pointer hover:px-8 transition-all duration-500"
                    onClick={() => setSelectedProject(p)}
                  >
                    <div className="flex items-center gap-12">
                       <span className="text-zinc-200 font-mono text-xl">{p.id}</span>
                       <h3 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter group-hover:text-blue-600 transition-colors">{p.title}</h3>
                    </div>
                    <div className="flex items-center gap-24">
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hidden lg:block">{p.cat}</span>
                       <span className="text-xl font-black italic">{p.year}</span>
                       <div className="h-20 w-32 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                          <ImageWithFallback src={p.img} alt={p.title} className="w-full h-full object-cover" />
                       </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 4. AWARDS / RECOGNITION */}
        <section className="mt-64 pt-32 border-t border-zinc-100">
           <div className="grid lg:grid-cols-12 gap-24">
              <div className="lg:col-span-4">
                 <h2 className="text-4xl font-black uppercase italic tracking-tighter">Recognition.</h2>
              </div>
              <div className="lg:col-span-8">
                 <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
                    {[
                      { year: "2025", org: "Awwwards", award: "Site of the Day x4" },
                      { year: "2025", org: "Behance", award: "Featured in AI Design" },
                      { year: "2024", org: "Red Dot", award: "Visual Identity Excellence" },
                      { year: "2024", org: "D&AD", award: "Wood Pencil / Branding" }
                    ].map((award, i) => (
                      <div key={i} className="flex justify-between border-b border-zinc-100 pb-8">
                         <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-2">{award.org}</span>
                            <h4 className="text-xl font-bold uppercase italic">{award.award}</h4>
                         </div>
                         <span className="text-zinc-300 font-bold">{award.year}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};