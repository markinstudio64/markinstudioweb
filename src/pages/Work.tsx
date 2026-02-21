import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowUpRight, List, Grid, X } from "lucide-react";

// Define project type
interface Project {
  id: string;
  title: string;
  cat: string;
  img: string;
  year: string;
  images: string[];
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
      ? "A comprehensive branding solution that redefined the client's market presence. Our approach involved developing a multi-dimensional system designed to thrive across all digital and physical touchpoints."
      : project.cat === "automation"
        ? "An AI-powered automation system engineered for rapid scale and technical excellence. We integrated cognitive frameworks that transform operational efficiency through autonomous workflows."
        : project.cat === "product"
          ? "A user-centered product design focused on creating intuitive interfaces for complex systems. We engineering seamless user experiences through rigorous research and iterative prototyping."
          : project.cat === "motion"
            ? "A dynamic motion system that brings static identities to life. This project showcases our expertise in building emotional resonance through advanced animation and cinematic storytelling."
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
    <div className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-6xl w-full bg-white rounded-[3rem] overflow-hidden max-h-[95vh] flex flex-col shadow-2xl">
        <div className="p-10 border-b border-zinc-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px]">{project.cat}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">{project.year}</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 uppercase">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-4 hover:bg-zinc-50 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-10 md:p-16 overflow-y-auto flex-grow bg-white">
          <div className="grid lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Executive Summary</h3>
              <p className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-12 uppercase">
                {projectDetails.description}
              </p>
            </div>
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Expertise Provided</h4>
                <div className="flex flex-wrap gap-3">
                  {projectDetails.services.map((service, idx) => (
                    <span key={idx} className="px-6 py-3 bg-zinc-50 border border-zinc-100 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-600">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-zinc-100 pt-8">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Timeline</h4>
                  <p className="text-xl font-bold text-zinc-900">{projectDetails.timeline}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Outcome</h4>
                  <p className="text-xl font-bold text-blue-600">{projectDetails.results}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Visual Documentation</h3>
            <div className="columns-1 md:columns-2 gap-12 space-y-12">
              {project.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="break-inside-avoid rounded-[2.5rem] overflow-hidden bg-zinc-50 group border border-zinc-100"
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${project.title} - Layer ${idx + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-10 border-t border-zinc-100 bg-zinc-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-12 py-5 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-zinc-800 transition-colors rounded-full shadow-lg"
          >
            Return to Gallery
          </button>
        </div>
      </div>
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
      title: "Flux Core",
      cat: "automation",
      img: "/assets/p1.jpg",
      year: "2026",
      images: ["/assets/p1.jpg", "/assets/p2.jpg", "/assets/p3.jpg", "/assets/img20.png", "/assets/img21.png", "/assets/img22.png"]
    },
    {
      id: "02",
      title: "Neon Pulse",
      cat: "branding",
      img: "/assets/p2.jpg",
      year: "2026",
      images: ["/assets/p2.jpg", "/assets/p1.jpg", "/assets/p3.jpg", "/assets/img21.png", "/assets/img20.png", "/assets/img22.png"]
    },
    {
      id: "03",
      title: "Alpha Studio",
      cat: "product",
      img: "/assets/p3.jpg",
      year: "2025",
      images: ["/assets/p3.jpg", "/assets/p1.jpg", "/assets/p2.jpg", "/assets/img22.png", "/assets/img21.png", "/assets/img20.png"]
    },
    {
      id: "04",
      title: "Kinetik",
      cat: "motion",
      img: "/assets/img20.png",
      year: "2025",
      images: ["/assets/img20.png", "/assets/p1.jpg", "/assets/p2.jpg", "/assets/p3.jpg", "/assets/img21.png", "/assets/img22.png"]
    },
    {
      id: "05",
      title: "Omni Labs",
      cat: "automation",
      img: "/assets/img21.png",
      year: "2025",
      images: ["/assets/img21.png", "/assets/p1.jpg", "/assets/p2.jpg", "/assets/p3.jpg", "/assets/img20.png", "/assets/img22.png"]
    },
    {
      id: "06",
      title: "Zenith",
      cat: "branding",
      img: "/assets/img22.png",
      year: "2024",
      images: ["/assets/img22.png", "/assets/p1.jpg", "/assets/p2.jpg", "/assets/p3.jpg", "/assets/img20.png", "/assets/img21.png"]
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="bg-white pt-48 pb-32 min-h-screen">
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Selected Case Studies</span>
              <div className="h-px w-24 bg-zinc-100" />
            </div>

            <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.9] text-zinc-900 uppercase">
              Proven <br /> <span className="text-zinc-300">Excellence.</span>
            </h1>
          </motion.div>
          <div className="flex flex-col items-end lg:max-w-xs">
            <span className="text-7xl font-bold text-zinc-100 mb-8">200+</span>
            <p className="text-right text-zinc-500 font-medium leading-relaxed text-lg">We've partnered with over 200 visionaries to engineer digital legacies that command authority.</p>
          </div>
        </div>

        {/* 2. FILTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center border-y border-zinc-100 py-12 mb-32 gap-8 sticky top-24 bg-white/80 backdrop-blur-md z-30">
          <div className="flex flex-wrap gap-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold uppercase tracking-widest transition-all relative pb-2 ${filter === cat ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                  }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div layoutId="activeFilter" className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                )}
              </button>
            ))}
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex bg-zinc-50 p-1 rounded-full border border-zinc-100">
              <button
                onClick={() => setView("grid")}
                className={`p-3 rounded-full transition-all ${view === 'grid' ? 'bg-white shadow-md text-black' : 'text-zinc-400 hover:text-zinc-600'}`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-3 rounded-full transition-all ${view === 'list' ? 'bg-white shadow-md text-black' : 'text-zinc-400 hover:text-zinc-600'}`}
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
                    transition={{ delay: (i % 3) * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(p)}
                  >
                    <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-zinc-50 mb-8 relative border border-zinc-100">
                      <ImageWithFallback src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">{p.cat}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">{p.year}</span>
                      </div>
                      <h3 className="text-3xl font-bold tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors uppercase">{p.title}</h3>
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
                    className="group flex flex-col md:flex-row justify-between items-center py-20 border-b border-zinc-100 cursor-pointer hover:bg-zinc-50/50 transition-all duration-500 px-8 rounded-3xl"
                    onClick={() => setSelectedProject(p)}
                  >
                    <div className="flex items-center gap-16">
                      <span className="text-zinc-200 font-bold text-3xl">0{i + 1}</span>
                      <h3 className="text-4xl md:text-7xl font-bold tracking-tight text-zinc-900 group-hover:translate-x-4 transition-transform uppercase">{p.title}</h3>
                    </div>
                    <div className="flex items-center gap-24 mt-8 md:mt-0">
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 hidden lg:block">{p.cat} — {p.year}</span>
                      <div className="h-24 w-32 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100 border border-zinc-200 shadow-xl">
                        <ImageWithFallback src={p.img} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <ArrowUpRight size={20} />
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
              <h2 className="text-5xl font-bold tracking-tight leading-none uppercase text-zinc-900">Industry <br /> <span className="text-zinc-300">Merit.</span></h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
                {[
                  { year: "2025", org: "Awwwards", award: "Site of the Day x4" },
                  { year: "2025", org: "Behance", award: "Engineering Visionary" },
                  { year: "2024", org: "Red Dot", award: "Visual Excellence" },
                  { year: "2024", org: "D&AD", award: "Pencil / Brand Audit" }
                ].map((award, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-zinc-100 pb-10 group cursor-default">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 block mb-3">{award.org}</span>
                      <h4 className="text-2xl font-bold text-zinc-900 uppercase group-hover:text-blue-600 transition-colors uppercase">{award.award}</h4>
                    </div>
                    <span className="text-zinc-300 font-bold text-xl">{award.year}</span>
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
