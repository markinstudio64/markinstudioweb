import { useState } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";

// Define the journal post type
interface JournalPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  img: string;
  content: string;
}

// Define props for the component
interface JournalsProps {
  setActivePage: (page: string) => void;
}

export const Journals = ({ setActivePage }: JournalsProps) => {
  // Journal posts data
  const journalPosts: JournalPost[] = [
    {
      id: "01",
      date: "FEB 2026",
      title: "The Death of Static Branding",
      excerpt: "How dynamic identities are reshaping the future of brand perception in the digital age.",
      img: "/assets/img6.png",
      content: "In an era where consumer attention spans are shrinking and digital experiences are becoming increasingly sophisticated, static branding is rapidly becoming obsolete. Today's brands must be fluid, adaptive, and responsive to real-time market dynamics.\n\nDynamic branding systems leverage AI-driven design algorithms that can modify visual elements based on user behavior, context, and preferences. This approach creates personalized brand experiences that feel fresh and relevant to each individual consumer.\n\nThe implications for brand loyalty are profound. Rather than relying on consistent visual cues to build recognition, brands must now focus on consistent values and messaging that can be expressed through varied visual representations."
    },
    {
      id: "02",
      date: "JAN 2026",
      title: "AI Agents as Brand Ambassadors",
      excerpt: "Exploring the frontier of artificial intelligence in customer engagement and brand representation.",
      img: "/assets/img7.png",
      content: "Artificial intelligence agents are revolutionizing how brands interact with their customers. Unlike traditional chatbots that follow predetermined scripts, modern AI ambassadors understand context, emotions, and complex queries.\n\nThese AI ambassadors serve multiple roles: customer service representatives, brand educators, and even sales assistants. They maintain consistent brand voice and personality while adapting their communication style to match individual customer preferences.\n\nThe technology behind these agents involves advanced natural language processing, sentiment analysis, and deep learning models trained on thousands of successful brand interactions. The result is an AI that feels genuinely helpful rather than robotic."
    },
    {
      id: "03",
      date: "DEC 2025",
      title: "Engineering Emotional Resonance",
      excerpt: "The science behind creating brands that form deep emotional connections with audiences.",
      img: "/assets/img8.png",
      content: "Emotional resonance in branding goes far beyond catchy slogans or attractive visuals. It involves understanding the psychological triggers that create lasting connections between consumers and brands.\n\nModern neuroscience techniques, including eye-tracking and biometric feedback, allow brands to measure emotional responses to different stimuli. This data informs everything from color palettes to typography choices.\n\nThe most successful brands today are those that can evoke specific emotional states consistently. Whether it's trust, excitement, or belonging, these emotional signatures become as recognizable as logos themselves."
    },
    {
      id: "04",
      date: "NOV 2025",
      title: "Beyond Visual Identity",
      excerpt: "Understanding the multidimensional aspects of brand identity in the modern marketplace.",
      img: "/assets/journal4.jpg",
      content: "Visual identity is just one component of a comprehensive brand experience. Today's brands must consider auditory, tactile, and even olfactory elements to create memorable experiences.\n\nAudio branding, for instance, encompasses everything from brand jingles to the sound of notifications. These sonic elements can trigger instant brand recognition even without visual cues.\n\nThe future of branding lies in creating cohesive experiences across all sensory touchpoints, ensuring that every interaction reinforces the brand promise regardless of the medium."
    },
    {
      id: "05",
      date: "OCT 2025",
      title: "The Rise of Conversational Commerce",
      excerpt: "How AI chatbots are transforming the way businesses interact with customers.",
      img: "/assets/journal5.jpg",
      content: "Conversational commerce represents a paradigm shift from traditional e-commerce to more natural, dialogue-based purchasing experiences. Customers can now browse, inquire, and purchase through natural conversations with AI agents.\n\nThis approach reduces friction in the buying process by allowing customers to express needs in their own words rather than navigating complex menus or search filters.\n\nThe technology enables personalized recommendations based on conversation context, creating a more human-like shopping experience at scale."
    },
    {
      id: "06",
      date: "SEP 2025",
      title: "Sustainable Design Practices",
      excerpt: "Creating eco-conscious branding solutions that resonate with environmentally aware consumers.",
      img: "/assets/journal6.jpg",
      content: "Sustainability has moved from a nice-to-have to a must-have for modern brands. Consumers increasingly expect companies to demonstrate environmental responsibility through their practices and communications.\n\nSustainable design in branding involves choosing eco-friendly materials, minimizing waste in production processes, and creating timeless designs that won't quickly become outdated.\n\nThe challenge lies in balancing sustainability with brand impact, ensuring that eco-conscious choices don't dilute the brand message but rather strengthen it by aligning with consumer values."
    }
  ];

  const [selectedArticle, setSelectedArticle] = useState<JournalPost | null>(null);

  const openArticle = (article: JournalPost) => {
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="bg-white selection:bg-brand-violet selection:text-white pt-48">
      {/* 1. JOURNALS HERO */}
      <section className="px-6 md:px-12 mb-48">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[1400px]"
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Weekly Intelligence</span>
              <div className="h-px flex-1 bg-zinc-100" />
            </div>

            <h1 className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-24 text-brand-dark uppercase">
              Insights <br /> <span className="text-zinc-100">& Ideas.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-24 items-start border-t border-zinc-100 pt-16">
              <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-brand-dark uppercase">
                A curated collection of research, trends, and <span className="text-brand-violet">architectural shifts</span> shaping the digital future.
              </p>
              <div className="space-y-12">
                <p className="text-xl text-zinc-500 leading-relaxed font-bold tracking-tight">
                  We explore the intersection of precision engineering, human emotion, and cultural shifts to provide authority-driven insights.
                </p>
                <div className="flex justify-between items-center bg-[#F9F9FB] p-10 rounded-[3rem] border border-zinc-50">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 block mb-4">Transmission</span>
                    <span className="text-4xl font-bold text-brand-dark uppercase tracking-tighter">Weekly.</span>
                  </div>
                  <button
                    onClick={() => setActivePage("contact")}
                    className="h-24 w-24 rounded-full bg-brand-violet text-white flex items-center justify-center hover:bg-brand-dark hover:scale-105 transition-all group shadow-xl shadow-brand-violet/20"
                  >
                    <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. JOURNAL POSTS GRID */}
      <section className="py-48 px-6 md:px-12 bg-white border-t border-zinc-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4 sticky top-32">
              <span className="text-brand-violet font-bold uppercase tracking-[0.4em] text-[10px] block mb-12">Latest Analysis</span>
              <h2 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter leading-[0.9] text-brand-dark uppercase mb-12">
                Our <span className="text-zinc-100">Clinical</span> <br /> Research.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
                {journalPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => openArticle(post)}
                  >
                    <div className="relative overflow-hidden aspect-[10/11] rounded-[3rem] bg-zinc-50 mb-10 border border-zinc-50">
                      <ImageWithFallback
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brand-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div>
                      <span className="text-brand-violet font-bold text-[10px] uppercase tracking-[0.3em] block mb-6">{post.date}</span>
                      <h3 className="text-3xl font-bold tracking-tighter mb-6 text-brand-dark group-hover:text-brand-violet transition-colors duration-500 uppercase leading-[1.05]">{post.title}</h3>
                      <p className="text-lg text-zinc-400 font-bold mb-8 leading-relaxed tracking-tight uppercase">{post.excerpt}</p>
                      <button className="group flex items-center gap-4 font-bold uppercase tracking-[0.3em] text-[10px] text-brand-dark hover:text-brand-violet transition-all">
                        Deep Dive <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBSCRIBE SECTION */}
      <section className="py-64 bg-brand-dark rounded-[4rem] mx-6 md:mx-12 mb-32 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-violet/10 blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-violet font-bold uppercase tracking-[0.4em] text-[10px] block mb-12">Intelligence Stream</span>
            <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.85] mb-12 uppercase">
              Join the <br /> <span className="text-brand-violet">Accord.</span>
            </h2>
            <p className="text-2xl text-zinc-400 max-w-2xl mx-auto mb-20 font-bold uppercase tracking-tight leading-snug">
              Get weekly intelligence on engineering, authority, and strategy delivered straight to your command center.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto relative group">
              <input
                type="email"
                placeholder="authority@domain.com"
                className="flex-grow h-24 rounded-full border border-white/10 focus:border-brand-violet focus:outline-none px-12 text-xl font-bold transition-all bg-white/5 uppercase tracking-tighter"
              />
              <button className="h-24 px-12 rounded-full bg-brand-violet text-white flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all group font-bold text-lg shadow-2xl shadow-brand-violet/20 uppercase tracking-widest">
                Subscribe <ArrowRight size={24} className="ml-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[1000] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full bg-white rounded-[3.5rem] overflow-hidden max-h-[95vh] flex flex-col shadow-2xl"
          >
            <div className="p-10 md:p-14 border-b border-zinc-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div className="pr-12">
                <span className="text-brand-violet font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">{selectedArticle.date}</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-dark uppercase leading-[0.9]">{selectedArticle.title}</h2>
              </div>
              <button
                onClick={closeArticle}
                className="p-5 hover:bg-zinc-50 rounded-full transition-all hover:rotate-90 duration-500 order-last"
              >
                <X size={32} className="text-brand-dark" />
              </button>
            </div>

            <div className="p-10 md:p-20 overflow-y-auto flex-grow bg-white">
              <div className="aspect-video rounded-[3rem] overflow-hidden mb-20 bg-zinc-50 border border-zinc-50 shadow-sm relative group">
                <ImageWithFallback
                  src={selectedArticle.img}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="space-y-12">
                  {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-zinc-500 leading-relaxed font-bold tracking-tight text-2xl uppercase">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-10 border-t border-zinc-50 bg-[#F9F9FB] flex justify-end">
              <button
                onClick={closeArticle}
                className="px-14 py-6 bg-brand-dark text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-violet transition-all rounded-full shadow-xl shadow-brand-dark/10"
              >
                Close Story
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};