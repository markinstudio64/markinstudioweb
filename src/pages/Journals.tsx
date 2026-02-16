import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

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
    <div ref={containerRef} className="bg-white selection:bg-black selection:text-white">
      {/* 1. JOURNALS HERO */}
      <section className="relative h-[100vh] flex flex-col justify-start pt-32 md:pt-40 px-6 md:px-12 overflow-hidden bg-[#0A0A0A] text-white">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto z-0"
        >
          <div className="flex flex-col gap-4 mb-12">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Weekly Industry Insights</span>
            </motion.div>
          </div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(4rem,18vw,16rem)] leading-[0.75] font-black tracking-tighter uppercase italic"
            >
              Insights
            </motion.h1>
          </div>
          <div className="overflow-hidden flex justify-end">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[clamp(4rem,18vw,16rem)] leading-[0.75] font-black tracking-tighter uppercase italic text-zinc-800"
            >
              & Ideas
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-24 grid md:grid-cols-12 gap-12"
          >
            <div className="md:col-span-4">
              <p className="text-xl md:text-2xl font-medium text-zinc-400 leading-tight">
                A curated collection of thoughts, trends, and innovations shaping the future of branding and AI integration.
              </p>
            </div>
            <div className="md:col-span-8 flex justify-end items-end gap-12">
               <div className="hidden md:block text-right">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 block mb-2">Updated</span>
                  <span className="text-xl font-bold uppercase italic">Weekly</span>
               </div>
               <button
                onClick={() => setActivePage("contact")}
                className="h-24 w-24 md:h-40 md:w-40 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform group"
               >
                 <ArrowUpRight size={40} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Ambient Background Video/Graphic Placeholder */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-gradient-to-tr from-blue-900/20 via-transparent to-zinc-900/40"
          />
        </div>
      </section>

      {/* 2. JOURNAL POSTS GRID */}
      <section className="py-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4">
              <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] block mb-12">Latest Insights</span>
              <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight">
                Our <span className="text-zinc-200">Research</span> & <br /> <span className="text-blue-600">Analysis.</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-16">
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
                    <div className="relative overflow-hidden aspect-[4/3] rounded-3xl bg-zinc-200 mb-8">
                      <ImageWithFallback
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                      />
                      <div className="absolute top-8 left-8">
                        <span className="text-white font-mono text-sm mix-blend-difference">{post.id}</span>
                      </div>
                    </div>
                    <div className="border-t border-zinc-200 pt-8">
                      <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest block mb-4">{post.date}</span>
                      <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                      <p className="text-zinc-500 mb-6">{post.excerpt}</p>
                      <button className="group flex items-center gap-2 font-black uppercase tracking-widest text-[10px] border-b border-black pb-1 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">
                        Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
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
      <section className="py-48 px-6 md:px-12 bg-zinc-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] block mb-8">Stay Updated</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-8">
              Subscribe to <span className="text-blue-600">Insights</span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12">
              Join our community to receive weekly updates on branding trends, AI innovations, and industry insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow h-24 rounded-full border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-600 px-8 text-center"
              />
              <button className="h-24 w-24 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition-transform group">
                <ArrowRight size={40} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-zinc-200 flex justify-between items-center">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">{selectedArticle.title}</h2>
              <button 
                onClick={closeArticle}
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-grow">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <ImageWithFallback
                  src={selectedArticle.img}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-4">{selectedArticle.date}</div>
              
              <div className="prose prose-lg max-w-none">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-zinc-800 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="p-6 border-t border-zinc-200">
              <button
                onClick={closeArticle}
                className="w-full py-4 bg-black text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};