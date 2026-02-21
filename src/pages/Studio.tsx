import { useState } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Globe, Layers, Zap, Cpu, Users, Linkedin, X } from "lucide-react";

// Define leader type
interface Leader {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  education: string[];
  certifications: string[];
  experiences: string[];
  achievements: string[];
}

export const Studio = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  // Detailed information for each leader
  const leadersInfo: Leader[] = [
    {
      name: "Huzaifa Usman",
      role: "Creative Director",
      img: "/assets/profile1.png",
      linkedin: "https://www.linkedin.com/in/huzaifa-usman",
      education: [
        "MFA in Visual Communications, Rhode Island School of Design",
        "BFA in Graphic Design, Parsons School of Design"
      ],
      certifications: [
        "Adobe Certified Expert - Creative Suite",
        "Google UX Design Professional Certificate",
        "Brand Management Specialization - University of Virginia"
      ],
      experiences: [
        "Creative Director, Meta Incubator (2022-2024)",
        "Senior Designer, Google Creative Team (2020-2022)",
        "Lead Visual Designer, Tesla Design Studio (2018-2020)",
        "Art Director, Apple Design Division (2016-2018)"
      ],
      achievements: [
        "Awarded 'Designer of the Year' by Creative Quarterly (2024)",
        "Featured in Forbes '30 Under 30' for Design (2023)",
        "Led rebranding for 5 Fortune 500 companies",
        "Speaker at Adobe MAX Conference (2022, 2023)"
      ]
    },
    {
      name: "Elena Volkov",
      role: "Head of AI Engineering",
      img: "/assets/img11.png",
      linkedin: "https://www.linkedin.com/in/elena-volkov",
      education: [
        "PhD in Machine Learning, MIT",
        "MS in Computer Science, Stanford University",
        "BS in Mathematics and Computer Science, UC Berkeley"
      ],
      certifications: [
        "AWS Certified Machine Learning - Specialty",
        "TensorFlow Developer Certificate",
        "Deep Learning Specialization - DeepLearning.AI"
      ],
      experiences: [
        "Principal AI Engineer, OpenAI (2021-2024)",
        "Machine Learning Lead, NVIDIA Research (2019-2021)",
        "Senior Data Scientist, Microsoft AI Lab (2017-2019)",
        "AI Researcher, IBM Watson (2015-2017)"
      ],
      achievements: [
        "Published 15+ papers on AI ethics and neural networks",
        "Developed proprietary AI algorithms adopted by 3 major tech firms",
        "Patent holder for innovative neural network architecture",
        "Named 'Top AI Innovator Under 35' by MIT Technology Review"
      ]
    },
    {
      name: "Julian Thorne",
      role: "Strategy Lead",
      img: "/assets/img12.png",
      linkedin: "https://www.linkedin.com/in/julian-thorne",
      education: [
        "MBA in Strategic Management, Harvard Business School",
        "MA in International Relations, Johns Hopkins SAIS",
        "BA in Economics, Oxford University"
      ],
      certifications: [
        "Certified Strategy Professional (CSP)",
        "Project Management Professional (PMP)",
        "Digital Transformation Strategy - INSEAD"
      ],
      experiences: [
        "Chief Strategy Officer, SpaceX Innovation Division (2020-2024)",
        "VP of Business Development, Tesla Energy (2018-2020)",
        "Senior Consultant, McKinsey & Company (2015-2018)",
        "Strategy Analyst, Boston Consulting Group (2013-2015)"
      ],
      achievements: [
        "Led successful expansion of 12 startups into international markets",
        "Advised Fortune 100 companies on digital transformation",
        "Author of 'Future-Proof Strategy' book series",
        "Ranked #1 Strategy Consultant by Consulting Magazine (2024)"
      ]
    }
  ];

  const openLeaderProfile = (leader: Leader) => {
    setSelectedLeader(leader);
  };

  const closeLeaderProfile = () => {
    setSelectedLeader(null);
  };

  return (
    <div className="bg-white selection:bg-brand-violet selection:text-white pt-48">
      {/* 1. STUDIO INTRO */}
      <section className="px-6 md:px-12 mb-48">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[1400px]"
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Established 2024</span>
              <div className="h-px flex-1 bg-zinc-100" />
            </div>

            <h1 className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-24 text-brand-dark uppercase">
              Architecting <br /> <span className="text-zinc-100">Authority.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-24 items-start border-t border-zinc-100 pt-16">
              <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-brand-dark uppercase">
                A multidisciplinary firm operating at the edge of <span className="text-brand-violet">technological shifts</span> and human intuition.
              </p>
              <div className="space-y-12">
                <p className="text-xl text-zinc-500 leading-relaxed font-bold tracking-tight">
                  We specialize in building the cognitive and visual frameworks for the next generation of industry leaders. Our work is defined by clinical precision and high-impact emotional resonance.
                </p>
                <div className="grid grid-cols-2 gap-8 bg-[#F9F9FB] p-10 rounded-[3rem] border border-zinc-50">
                  <div>
                    <span className="text-5xl font-bold block mb-4 text-brand-dark tracking-tighter">14+</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300">Core Engineers</span>
                  </div>
                  <div>
                    <span className="text-5xl font-bold block mb-4 text-brand-dark tracking-tighter">120+</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300">Global Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE MANIFESTO */}
      <section className="py-48 bg-brand-dark text-white px-6 md:px-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-brand-violet/10 blur-[130px]" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[3.5rem] overflow-hidden aspect-video bg-white/5 border border-white/10"
              >
                <ImageWithFallback
                  src="/assets/image1.png"
                  alt="Manifesto"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
                />
              </motion.div>
            </div>
            <div className="lg:col-span-5">
              <span className="text-brand-violet font-bold uppercase tracking-[0.4em] text-[10px] block mb-12">The Manifesto</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-12 uppercase">
                The machine <br /> has a <span className="text-brand-violet">soul.</span>
              </h2>
              <div className="space-y-8 text-xl text-zinc-400 font-bold leading-relaxed uppercase tracking-tight">
                <p>Artificial Intelligence is the greatest creative tool ever conceived—not a replacement for the human spirit, but a <span className="text-white">clinical amplifier</span> for it.</p>
                <p>We bridge the gap between algorithmic precision and human intuition, creating brands that aren't just seen, but <span className="text-white">felt with authority</span>.</p>
                <p>Every pixel we push serves one mission: to make the next generation of industry leaders feel <span className="text-white">inevitable</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES */}
      <section className="py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="mb-32">
            <h2 className="text-6xl md:text-[5.5rem] font-bold tracking-tighter text-brand-dark uppercase leading-[0.9]">Ethos & <br /><span className="text-zinc-100">Foundations.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Cpu size={32} />, t: "AI Native", d: "Built from the ground up to leverage neural networks and algorithmic precision." },
              { icon: <Globe size={32} />, t: "Global Vision", d: "Operating beyond borders for world-scale authority and impact." },
              { icon: <Layers size={32} />, t: "Technical Depth", d: "Where deep engineering meets high-end multidisciplinary aesthetics." },
              { icon: <Zap size={32} />, t: "Radical Speed", d: "Autonomous workflows designed for lightning deployment and dominance." }
            ].map((v, i) => (
              <div key={i} className="p-12 group bg-[#F9F9FB] rounded-[3.5rem] border border-zinc-50 hover:border-brand-violet transition-all duration-700 shadow-sm">
                <div className="mb-10 text-brand-violet">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 text-brand-dark">{v.t}</h3>
                <p className="text-zinc-500 font-bold text-sm uppercase tracking-tight leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="py-48 px-6 md:px-12 bg-[#0F0720] rounded-[5rem] mx-6 md:mx-12 mb-32 relative overflow-hidden text-white">
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-violet/10 blur-[120px]" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.85] uppercase">
              How we <br /> <span className="text-brand-violet">Engineer.</span>
            </h2>
            <p className="max-w-xs text-brand-violet font-bold uppercase tracking-[0.4em] text-[10px] mb-4">A clinical five-phase framework for systematic transformation.</p>
          </div>

          <div className="space-y-4">
            {[
              { step: "01", title: "Discovery", desc: "Immersion into the operational landscape, market position, and growth objectives to define a roadmap." },
              { step: "02", title: "Foundation", desc: "Constructing the primary visual identity—logo, typography, and guidelines that command authority." },
              { step: "03", title: "Architecture", desc: "Engineering the digital ecosystem, ensuring seamless motion and user experiences across all logic paths." },
              { step: "04", title: "Integration", desc: "Deployment of AI-powered solutions and autonomous workflows to streamline global operations." },
              { step: "05", title: "Optimization", desc: "Continuous refinement based on real-time performance data and market intelligence shifts." }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-12 gap-12 items-center py-14 border-b border-white/5 group cursor-pointer hover:bg-white/5 px-8 rounded-3xl transition-colors"
              >
                <div className="lg:col-span-1">
                  <span className="text-4xl font-bold text-white/10 group-hover:text-brand-violet transition-colors">{s.step}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-3xl font-bold uppercase tracking-tighter text-white">{s.title}</h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg text-zinc-400 leading-relaxed font-bold uppercase tracking-tight">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM */}
      <section className="py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-24 mb-32 border-b border-zinc-100 pb-16">
            <h2 className="text-6xl md:text-[5.5rem] font-bold tracking-tighter text-brand-dark uppercase leading-[0.9]">Clinical <br /><span className="text-zinc-100">Leadership.</span></h2>
            <div className="text-brand-violet">
              <Users size={48} strokeWidth={1.5} />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {leadersInfo.map((person, i) => (
              <div
                key={i}
                className="group cursor-pointer"
                onClick={() => openLeaderProfile(person)}
              >
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-10 bg-zinc-50 border border-zinc-50 shadow-sm relative group">
                  <ImageWithFallback src={person.img} alt={person.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="text-3xl font-bold tracking-tighter text-brand-dark mb-4 uppercase">{person.name}</h4>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 block mb-6">{person.role}</span>
                <div className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-violet group-hover:text-brand-dark transition-colors">
                  <Linkedin size={16} />
                  <span>Command Profile</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Profile Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-[1000] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full bg-white rounded-[4rem] overflow-hidden max-h-[95vh] flex flex-col shadow-2xl"
          >
            <div className="p-10 md:p-14 border-b border-zinc-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-dark uppercase leading-[0.85]">{selectedLeader.name}</h2>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet mt-4 block">{selectedLeader.role}</span>
              </div>
              <button
                onClick={closeLeaderProfile}
                className="p-5 hover:bg-zinc-50 rounded-full transition-all hover:rotate-90 duration-500 order-last"
              >
                <X size={32} className="text-brand-dark" />
              </button>
            </div>

            <div className="p-10 md:p-20 overflow-y-auto flex-grow bg-white">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="lg:w-2/5">
                  <div className="aspect-[3/4] rounded-[3.5rem] overflow-hidden bg-zinc-50 border border-zinc-50 shadow-sm">
                    <ImageWithFallback
                      src={selectedLeader.img}
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:w-3/5 space-y-16">
                  <div className="grid md:grid-cols-2 gap-16">
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-8">Intelligence</h3>
                      <ul className="space-y-6">
                        {selectedLeader.education.map((edu, idx) => (
                          <li key={idx} className="text-zinc-900 font-bold uppercase tracking-tight text-sm leading-relaxed">{edu}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-8">Authority</h3>
                      <ul className="space-y-6">
                        {selectedLeader.certifications.map((cert, idx) => (
                          <li key={idx} className="text-brand-violet font-bold uppercase tracking-tight text-sm leading-relaxed">{cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-16 border-t border-zinc-100 pt-16">
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-8">Operational History</h3>
                      <ul className="space-y-6">
                        {selectedLeader.experiences.map((exp, idx) => (
                          <li key={idx} className="text-zinc-500 font-bold uppercase tracking-tight text-sm leading-relaxed">{exp}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-8">Tactical Success</h3>
                      <ul className="space-y-6">
                        {selectedLeader.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-brand-dark font-bold uppercase tracking-tight text-sm leading-relaxed">→ {achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 border-t border-zinc-50 bg-[#F9F9FB] flex justify-between items-center">
              <a
                href={selectedLeader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet hover:text-brand-dark transition-colors"
              >
                <Linkedin size={20} />
                <span>Command Connection</span>
              </a>
              <button
                onClick={closeLeaderProfile}
                className="px-12 py-5 bg-brand-dark text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-violet transition-all rounded-full shadow-xl shadow-brand-dark/10"
              >
                Terminate Profile
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};