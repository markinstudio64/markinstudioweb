import React from "react";
import { motion } from "motion/react";
import { Palette, Zap, BrainCircuit, Globe, BarChart, Rocket } from "lucide-react";

const services = [
  {
    icon: <Palette className="text-blue-600" size={32} />,
    title: "Brand Strategy",
    description: "We define your unique market position and build a visual identity that resonates with your core audience.",
    tags: ["Visual Identity", "Naming", "Style Guides"]
  },
  {
    icon: <BrainCircuit className="text-blue-600" size={32} />,
    title: "AI Automation",
    description: "Custom AI workflows that handle repetitive tasks, from customer support to complex data analysis.",
    tags: ["LLM Integration", "Automated Workflows", "AI Agents"]
  },
  {
    icon: <Globe className="text-blue-600" size={32} />,
    title: "Digital Design",
    description: "High-performance websites and mobile apps that prioritize user experience and conversion optimization.",
    tags: ["UI/UX Design", "Web Development", "Mobile Apps"]
  },
  {
    icon: <Zap className="text-blue-600" size={32} />,
    title: "Process Optimization",
    description: "Streamlining your internal operations using modern tech stacks to increase efficiency by up to 40%.",
    tags: ["Audit", "System Design", "Cloud Migration"]
  },
  {
    icon: <BarChart className="text-blue-600" size={32} />,
    title: "Content Strategy",
    description: "Leveraging AI to produce high-quality content at scale while maintaining a consistent brand voice.",
    tags: ["AI Copywriting", "Social Ads", "SEO"]
  },
  {
    icon: <Rocket className="text-blue-600" size={32} />,
    title: "Growth Consulting",
    description: "Strategic advice on how to scale your brand using the latest automation tools and market insights.",
    tags: ["Scaling", "Analytics", "Performance"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Bridge Between Design and Intelligence</h3>
          <p className="text-lg text-zinc-600">
            We provide a holistic approach to modern business growth, ensuring your brand looks world-class while operating with maximum efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-zinc-100 hover:border-blue-200 transition-all hover:shadow-xl group"
            >
              <div className="mb-6 p-4 bg-zinc-50 rounded-2xl w-fit group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
