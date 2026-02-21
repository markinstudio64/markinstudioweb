import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowUpRight, List, Grid, X } from "lucide-react";
import { CharReveal } from "../components/TextReveal";

// Define project type
interface Project {
  id: string;
  title: string;
  cat: string;
  img: string;
  year: string;
  images: string[];
  client: string;
  challenge: string;
}

// Modal component moved outside (required for proper typing)
// Modal component
const ProjectDetailModal = ({
  project,
  onClose
}: {
  project: Project;
  onClose: () => void;
}) => {
  const projectDetails = {
    ...project,
    description: project.cat === "branding"
      ? `A comprehensive branding solution for ${project.client} that redefined their market presence. Our approach involved developing a multi-dimensional system designed to thrive across all digital and physical touchpoints.`
      : project.cat === "automation"
        ? `An AI-powered automation system engineered for rapid scale and technical excellence for ${project.client}. We integrated cognitive frameworks that transform operational efficiency through autonomous workflows.`
        : project.cat === "product"
          ? `A user-centered product design for ${project.client} focused on creating intuitive interfaces for complex systems. We engineered seamless user experiences through rigorous research and iterative prototyping.`
          : project.cat === "motion"
            ? `A dynamic motion system that brings static identities to life for ${project.client}. This project showcases our expertise in building emotional resonance through advanced animation and cinematic storytelling.`
            : "A comprehensive project delivering high-impact results through our multidisciplinary approach to engineering and design excellence.",
    services: project.cat === "branding"
      ? ["Strategic Branding", "Visual Identity", "Typography Systems", "Brand Guidelines"]
      : project.cat === "automation"
        ? ["AI Integration", "Autonomous Agents", "LLM Workflows", "Process Engineering"]
        : project.cat === "product"
          ? ["UX/UI Design", "User Research", "Prototyping", "Design Engineering"]
          : project.cat === "motion"
            ? ["Motion Graphics", "Art Direction", "Storytelling", "Video Engineering"]
            : ["Strategy", "Design", "Development", "Scale"],
    timeline: "24 Weeks",
    results: "+85% Engagement"
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative max-w-6xl w-full bg-white rounded-[3.5rem] overflow-hidden max-h-[95vh] flex flex-col shadow-2xl"
      >
        <div className="p-10 md:p-14 border-b border-zinc-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-brand-violet font-bold uppercase tracking-[0.3em] text-[10px]">{project.cat}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-200" />
              <span className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px]">{project.year}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-dark uppercase leading-none">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-5 hover:bg-zinc-50 rounded-full transition-all hover:rotate-90 duration-500"
          >
            <X size={32} className="text-brand-dark" />
          </button>
        </div>

        <div className="p-10 md:p-20 overflow-y-auto flex-grow bg-white">
          <div className="grid lg:grid-cols-12 gap-16 mb-32">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block mb-10">Executive Summary</span>
              <p className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-dark leading-[1.05] mb-12 uppercase">
                {projectDetails.description}
              </p>
              <div className="mt-12 p-10 bg-[#F9F9FB] rounded-[2.5rem] border border-zinc-50">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet block mb-6">Discovery & Challenge</span>
                <p className="text-lg text-zinc-600 font-bold uppercase leading-relaxed tracking-tight">
                  {project.challenge}
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-16">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block mb-8">Expertise Provided</span>
                <div className="flex flex-wrap gap-3">
                  {projectDetails.services.map((service, idx) => (
                    <span key={idx} className="px-6 py-3 bg-zinc-50 border border-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-zinc-50 pt-10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block mb-4">Timeline</span>
                  <p className="text-2xl font-bold text-brand-dark uppercase tracking-tighter">{projectDetails.timeline}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block mb-4">Outcome</span>
                  <p className="text-2xl font-bold text-brand-violet uppercase tracking-tighter">{projectDetails.results}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block">Visual Documentation</span>
            <div className="columns-1 md:columns-2 gap-12 space-y-12">
              {project.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="break-inside-avoid rounded-[3.5rem] overflow-hidden bg-zinc-50 group border border-zinc-100 shadow-sm relative"
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${project.title} - Layer ${idx + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-10 border-t border-zinc-50 bg-[#F9F9FB] flex justify-end">
          <button
            onClick={onClose}
            className="px-14 py-6 bg-brand-dark text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-violet transition-all rounded-full shadow-xl shadow-brand-dark/10"
          >
            Return to Gallery
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export const Work = () => {
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("grid");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["all", "branding", "automation", "product", "motion"];

  const projects: Project[] = [
    {
      id: "01",
      title: "Aether Protocol",
      cat: "branding",
      client: "Aether Labs",
      img: "/assets/p1.jpg",
      year: "2026",
      challenge: "Developing a decentralized identity for a next-gen finance protocol that commands authority and technical precision.",
      images: ["/assets/p1.jpg", "/assets/p2.jpg", "/assets/p3.jpg", "/assets/img20.png"]
    },
    {
      id: "02",
      title: "NeuroForm AI",
      cat: "product",
      client: "BioTech Systems",
      img: "/assets/p2.jpg",
      year: "2026",
      challenge: "Engineering an interface for complex biological data visualization through clinical precision and human emotion.",
      images: ["/assets/p2.jpg", "/assets/p1.jpg", "/assets/p3.jpg", "/assets/img21.png"]
    },
    {
      id: "03",
      title: "Synthetix Motion",
      cat: "motion",
      client: "Hyperion Corp",
      img: "/assets/p3.jpg",
      year: "2025",
      challenge: "Visualizing high-speed automation workflows through a dynamic motion system that brings technical logic to life.",
      images: ["/assets/p3.jpg", "/assets/p1.jpg", "/assets/p2.jpg", "/assets/img22.png"]
    },
    {
      id: "04",
      title: "Vanguard Audit",
      cat: "branding",
      client: "Vanguard Global",
      img: "/assets/img20.png",
      year: "2025",
      challenge: "A complete visual overhaul for a global consultancy firm, shifting their identity toward architectural authority.",
      images: ["/assets/img20.png", "/assets/p1.jpg", "/assets/p2.jpg", "/assets/p3.jpg"]
    },
    {
      id: "05",
      title: "Lumina Immersive",
      cat: "product",
      client: "Lumina Estate",
      img: "/assets/img21.png",
      year: "2025",
      challenge: "Creating a high-end immersive web experience for luxury real estate, bridging 3D engineering with premium aesthetics.",
      images: ["/assets/img21.png", "/assets/p1.jpg", "/assets/p2.jpg", "/assets/p3.jpg"]
    },
    {
      id: "06",
      title: "Core Intelligence",
      cat: "automation",
      client: "Core Logistics",
      img: "/assets/img22.png",
      year: "2024",
      challenge: "Designing an autonomous agent framework for supply chain optimization, focusing on clinical efficiency and scale.",
      images: ["/assets/img22.png", "/assets/p1.jpg", "/assets/p2.jpg", "/assets/p3.jpg"]
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="bg-white pt-48 pb-32 min-h-screen selection:bg-brand-violet selection:text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* 1. WORK INTRO */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[1400px] flex-1"
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Case Studies</span>
              <div className="h-px w-24 bg-zinc-100" />
            </div>

            <CharReveal
              text="Proven"
              className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] text-brand-dark uppercase"
            />
            <CharReveal
              text="Excellence."
              delay={0.5}
              className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] text-zinc-100 uppercase"
            />
          </motion.div>
          <div className="flex flex-col items-end lg:max-w-xs">
            <span className="text-7xl font-bold text-zinc-100 mb-8 tracking-tighter">200+</span>
            <p className="text-right text-zinc-500 font-bold uppercase tracking-tight leading-snug text-sm">We've partnered with visionaries to engineer digital legacies that command architectural authority.</p>
          </div>
        </div>

        {/* 2. FILTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center border-y border-zinc-100 py-12 mb-32 gap-8 sticky top-24 bg-white/80 backdrop-blur-md z-30">
          <div className="flex flex-wrap gap-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative pb-2 ${filter === cat ? "text-brand-dark" : "text-zinc-400 hover:text-brand-violet"
                  }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div layoutId="activeFilter" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-violet" />
                )}
              </button>
            ))}
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex bg-[#F9F9FB] p-1.5 rounded-full border border-zinc-100">
              <button
                onClick={() => setView("grid")}
                className={`p-3 rounded-full transition-all ${view === 'grid' ? 'bg-white shadow-sm text-brand-violet' : 'text-zinc-400 hover:text-brand-dark'}`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-3 rounded-full transition-all ${view === 'list' ? 'bg-white shadow-sm text-brand-violet' : 'text-zinc-400 hover:text-brand-dark'}`}
              >
                <List size={18} />
              </button>
            </div>
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
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
              >
                {filteredProjects.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layoutId={p.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 3) * 0.1, duration: 0.8 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(p)}
                  >
                    <div className="aspect-[3/4] rounded-[3rem] overflow-hidden bg-zinc-50 mb-10 relative border border-zinc-50 shadow-sm">
                      <ImageWithFallback src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
                      <div className="absolute inset-0 bg-brand-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                        <ArrowUpRight size={24} className="text-brand-dark" />
                      </div>
                    </div>
                    <div className="px-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-violet">{p.cat}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">{p.year}</span>
                      </div>
                      <h3 className="text-3xl font-bold tracking-tighter text-brand-dark group-hover:text-brand-violet transition-colors duration-500 uppercase leading-none">{p.title}</h3>
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group flex flex-col md:flex-row justify-between items-center py-20 border-b border-zinc-50 cursor-pointer hover:bg-[#F9F9FB] transition-all duration-700 px-10 rounded-[2.5rem]"
                    onClick={() => setSelectedProject(p)}
                  >
                    <div className="flex items-center gap-16">
                      <span className="text-zinc-100 font-bold text-5xl">0{i + 1}</span>
                      <h3 className="text-4xl md:text-[6rem] font-bold tracking-tighter text-brand-dark group-hover:translate-x-6 transition-transform duration-700 uppercase leading-[0.9]">{p.title}</h3>
                    </div>
                    <div className="flex items-center gap-24 mt-8 md:mt-0">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 hidden lg:block">{p.cat} — {p.year}</span>
                      <div className="h-32 w-48 rounded-[2rem] overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-[1s] scale-50 group-hover:scale-100 border border-zinc-50 shadow-2xl">
                        <ImageWithFallback src={p.img} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-16 h-16 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-brand-violet group-hover:border-brand-violet group-hover:text-white transition-all duration-500">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 4. AWARDS / RECOGNITION */}
        <section className="mt-64 py-32 border-t border-zinc-100">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-6xl font-bold tracking-tighter leading-none uppercase text-brand-dark">Industry <br /> <span className="text-zinc-100">Merit.</span></h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
                {[
                  { year: "2025", org: "Awwwards", award: "Site of the Day x4" },
                  { year: "2025", org: "Behance", award: "Engineering Visionary" },
                  { year: "2024", org: "Red Dot", award: "Visual Excellence" },
                  { year: "2024", org: "D&AD", award: "Pencil / Brand Audit" }
                ].map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-end border-b border-zinc-50 pb-12 group cursor-default"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-violet block mb-4">{award.org}</span>
                      <h4 className="text-2xl font-bold text-brand-dark uppercase group-hover:text-brand-violet transition-colors duration-500">{award.award}</h4>
                    </div>
                    <span className="text-zinc-200 font-bold text-2xl uppercase tracking-tighter">{award.year}</span>
                  </motion.div>
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
