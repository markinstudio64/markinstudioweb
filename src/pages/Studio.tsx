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
    <div className="bg-white selection:bg-violet-600 selection:text-white pt-48">
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Established 2024</span>
              <div className="h-px flex-1 bg-zinc-100" />
            </div>

            <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.9] mb-24 text-zinc-900">
              Designing <br /> <span className="text-zinc-300">Autonomy.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-24 items-start border-t border-zinc-100 pt-12">
              <p className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-zinc-900">
                Markin Studio is a multidisciplinary engineering and design firm operating at the edge of cultural and technological shifts.
              </p>
              <div className="space-y-12">
                <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                  We specialize in building the cognitive and visual frameworks for the next generation of industry leaders. Our work is defined by a relentless pursuit of technical excellence and emotional resonance.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-4xl font-bold block mb-2">14+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Core Engineers</span>
                  </div>
                  <div>
                    <span className="text-4xl font-bold block mb-2">120+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Global Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE MANIFESTO */}
      <section className="py-48 bg-white text-zinc-900 px-6 md:px-12 overflow-hidden border-y border-zinc-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="rounded-[3rem] overflow-hidden aspect-video bg-zinc-50"
              >
                <ImageWithFallback
                  src="/assets/image1.png"
                  alt="Manifesto"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="lg:col-span-5">
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs block mb-12">Manifesto</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-12 text-zinc-900 uppercase">
                The machine <br /> has a <span className="text-zinc-300">soul.</span>
              </h2>
              <div className="space-y-8 text-xl text-zinc-500 font-medium leading-relaxed uppercase tracking-tight">
                <p>We believe that Artificial Intelligence is the greatest creative tool ever conceived—not a replacement for the human spirit, but an amplifier for it.</p>
                <p>Our role is to bridge the gap between algorithmic logic and human intuition, creating brands that aren't just seen, but felt.</p>
                <p>Every line of code we write and every pixel we push serves one ultimate purpose: to make the future feel inevitable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES */}
      <section className="py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="mb-32">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-900 uppercase">Core Principles.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Cpu size={32} />, t: "AI Native", d: "Built from the ground up to leverage neural networks." },
              { icon: <Globe size={32} />, t: "Global Vision", d: "Operating beyond borders for world-scale impact." },
              { icon: <Layers size={32} />, t: "Technical Depth", d: "Deep engineering meets high-end aesthetics." },
              { icon: <Zap size={32} />, t: "Radical Speed", d: "Autonomous workflows for lightning deployment." }
            ].map((v, i) => (
              <div key={i} className="p-12 group bg-zinc-50 rounded-[3rem] border border-zinc-100 hover:border-blue-600 transition-all duration-700">
                <div className="mb-10 text-blue-600">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase mb-6 text-zinc-900">{v.t}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="py-48 px-6 md:px-12 bg-zinc-50 rounded-[4rem]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <h2 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.9] text-zinc-900 uppercase">
              How we <br /> <span className="text-zinc-300">Engineer.</span>
            </h2>
            <p className="max-w-sm text-zinc-500 font-bold uppercase tracking-widest text-xs">Our five-phase framework for systematic transformation.</p>
          </div>

          <div className="space-y-12">
            {[
              { step: "01", title: "Discovery", desc: "We immerse ourselves in your business, understanding your market position, competitive landscape, and growth objectives to define a strategic roadmap." },
              { step: "02", title: "Foundation", desc: "We craft your visual identity system—logo, typography, color palette, and brand guidelines that communicate your unique value proposition." },
              { step: "03", title: "Architecture", desc: "We design and develop your digital ecosystem, from websites to applications, ensuring seamless user experiences across all touchpoints." },
              { step: "04", title: "Integration", desc: "We implement AI-powered solutions and automated workflows to streamline operations and enhance customer engagement." },
              { step: "05", title: "Optimization", desc: "We deploy your brand with comprehensive analytics and continuously refine based on performance data and market feedback." }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-12 gap-12 items-center py-12 border-b border-zinc-200 group cursor-pointer"
              >
                <div className="lg:col-span-1">
                  <span className="text-4xl font-bold text-zinc-200 group-hover:text-blue-600 transition-colors">{s.step}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-3xl font-bold uppercase tracking-tight text-zinc-900">{s.title}</h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg text-zinc-500 leading-relaxed font-medium">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM */}
      <section className="py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 uppercase">Leadership.</h2>
            <Users size={32} />
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {leadersInfo.map((person, i) => (
              <div
                key={i}
                className="group cursor-pointer"
                onClick={() => openLeaderProfile(person)}
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 bg-zinc-100">
                  <ImageWithFallback src={person.img} alt={person.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-zinc-900 mb-2 uppercase">{person.name}</h4>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-4">{person.role}</span>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Profile Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-8 border-b border-zinc-100 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold uppercase tracking-tight text-zinc-900">{selectedLeader.name}</h2>
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">{selectedLeader.role}</span>
              </div>
              <button
                onClick={closeLeaderProfile}
                className="p-3 hover:bg-zinc-50 rounded-full transition-colors order-last"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto flex-grow">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3 flex justify-center">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100">
                    <ImageWithFallback
                      src={selectedLeader.img}
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3 space-y-10">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Education</h3>
                      <ul className="space-y-4">
                        {selectedLeader.education.map((edu, idx) => (
                          <li key={idx} className="text-zinc-600 font-medium leading-relaxed">{edu}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Certifications</h3>
                      <ul className="space-y-4">
                        {selectedLeader.certifications.map((cert, idx) => (
                          <li key={idx} className="text-zinc-600 font-medium leading-relaxed">{cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Experience</h3>
                      <ul className="space-y-4">
                        {selectedLeader.experiences.map((exp, idx) => (
                          <li key={idx} className="text-zinc-600 font-medium leading-relaxed">{exp}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Achievements</h3>
                      <ul className="space-y-4">
                        {selectedLeader.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-zinc-600 font-medium leading-relaxed">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-zinc-100 bg-zinc-50 flex justify-between items-center">
              <a
                href={selectedLeader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Linkedin size={20} />
                <span>Connect via LinkedIn</span>
              </a>
              <button
                onClick={closeLeaderProfile}
                className="px-8 py-4 bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 transition-colors rounded-full"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};