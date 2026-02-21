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
    <div className="bg-white selection:bg-black selection:text-white pt-48">
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Weekly Industry Insights</span>
              <div className="h-px flex-1 bg-zinc-100" />
            </div>

            <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.9] mb-24 text-zinc-900 uppercase">
              Insights <br /> <span className="text-zinc-300">& Ideas.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-24 items-start border-t border-zinc-100 pt-12">
              <p className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-zinc-900">
                A curated collection of thoughts, trends, and innovations shaping the future of branding and digital strategy.
              </p>
              <div className="space-y-12">
                <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                  We explore the intersection of design, technology, and culture to provide actionable insights for visionaries and leaders.
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">Updated</span>
                    <span className="text-4xl font-bold text-zinc-900">Weekly.</span>
                  </div>
                  <button
                    onClick={() => setActivePage("contact")}
                    className="h-20 w-20 md:h-32 md:w-32 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform group shadow-2xl"
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
            <div className="lg:col-span-4">
              <span className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-xs block mb-12">Latest Insights</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-zinc-900 uppercase">
                Our <span className="text-zinc-300">Research</span> & <br /> Analysis.
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
                    <div className="relative overflow-hidden aspect-[10/11] rounded-[2rem] bg-zinc-100 mb-8">
                      <ImageWithFallback
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-4">{post.date}</span>
                      <h3 className="text-3xl font-bold tracking-tight mb-4 text-zinc-900 group-hover:text-blue-600 transition-colors uppercase">{post.title}</h3>
                      <p className="text-lg text-zinc-500 font-medium mb-6 leading-relaxed">{post.excerpt}</p>
                      <button className="group flex items-center gap-3 font-bold uppercase tracking-widest text-xs border-b-2 border-zinc-900 pb-2 hover:text-blue-600 hover:border-blue-600 transition-all">
                        Read Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
      <section className="py-64 bg-zinc-50 rounded-[4rem] mx-6 md:mx-12 mb-32 border border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs block mb-12">Newsletter</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight mb-12 text-zinc-900 uppercase">
              Join the <br /> <span className="text-zinc-300">Inner Circle.</span>
            </h2>
            <p className="text-2xl text-zinc-500 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
              Get weekly insights on design, technology, and strategy delivered straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto relative group">
              <input
                type="email"
                placeholder="email@example.com"
                className="flex-grow h-24 rounded-full border-2 border-zinc-200 focus:border-black focus:outline-none px-12 text-xl font-medium transition-all bg-white"
              />
              <button className="h-24 px-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-all group font-bold text-xl shadow-2xl">
                Subscribe <ArrowRight size={24} className="ml-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-5xl w-full bg-white rounded-[3rem] overflow-hidden max-h-[90vh] flex flex-col shadow-2xl">
            <div className="p-8 border-b border-zinc-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div className="pr-12">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-2">{selectedArticle.date}</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 uppercase">{selectedArticle.title}</h2>
              </div>
              <button
                onClick={closeArticle}
                className="p-4 hover:bg-zinc-50 rounded-full transition-colors order-last"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-8 md:p-12 overflow-y-auto flex-grow bg-white">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-12 bg-zinc-50">
                <ImageWithFallback
                  src={selectedArticle.img}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="prose prose-xl prose-zinc max-w-none">
                  {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-8 text-zinc-600 leading-relaxed font-medium text-xl">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-zinc-100 bg-zinc-50 flex justify-end">
              <button
                onClick={closeArticle}
                className="px-12 py-5 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-zinc-800 transition-colors rounded-full shadow-lg"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};