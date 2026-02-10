import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Globe, MessageSquare, MapPin, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

// Define props interface
interface ContactProps {
  setActivePage: (page: string) => void;
}

export const Contact = ({ setActivePage }: ContactProps) => {
  const [selectedService, setSelectedService] = useState<string[]>([]);
  const [showServiceError, setShowServiceError] = useState(false);

  const toggleService = (s: string) => {
    setSelectedService(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
    setShowServiceError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (selectedService.length === 0) {
      e.preventDefault();
      setShowServiceError(true);
      // Scroll to the service selection area
      const serviceSection = document.getElementById('service-selection');
      if (serviceSection) {
        serviceSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    // If all validations pass, the form will submit normally
  };

  return (
    <div className="bg-white pt-48 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* MOBILE: Stack elements vertically */}
        <div className="md:hidden mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-blue-600 font-bold uppercase tracking-[0.5em] text-[10px] block mb-6">Get in touch</span>
            <h1 className="text-5xl font-black uppercase tracking-tighter italic leading-[0.8] mb-6">
              Start the <br /> <span className="text-zinc-200">Revolution.</span>
            </h1>
            <p className="text-lg text-zinc-500 font-medium leading-tight mb-8">
              Whether you're looking to automate your workflow or redefine your visual soul, we are ready.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-24 items-start">
          {/* LEFT SIDE: INFO - Hidden on mobile since it's shown above the form */}
          <div className="lg:col-span-5 hidden md:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-blue-600 font-bold uppercase tracking-[0.5em] text-[10px] block mb-12">Get in touch</span>
              <h1 className="text-[clamp(4rem,10vw,8rem)] font-black uppercase tracking-tighter italic leading-[0.8] mb-12">
                Start the <br /> <span className="text-zinc-200">Revolution.</span>
              </h1>
              <p className="text-2xl text-zinc-500 font-medium leading-tight mb-24 max-w-sm">
                Whether you're looking to automate your workflow or redefine your visual soul, we are ready.
              </p>

              <div className="space-y-16">
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 mb-6">General Inquiries</h4>
                    <p className="text-3xl font-black italic hover:text-blue-600 transition-colors cursor-pointer">Emails us: markinstudio64@gmail.com</p>
                    <p className="text-3xl font-black italic hover:text-blue-600 transition-colors cursor-pointer">Call Us: +92 337 0660803</p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: FORM - Full width on mobile, column on desktop */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-zinc-50 p-2 rounded-[4rem]"
            >
              <form 
                className="space-y-16 border-2 border-blue-600 p-8 sm:p-12 md:p-16 rounded-[4rem]" 
                onSubmit={handleSubmit}
              >
                 <div id="service-selection">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">What are you looking for? *</h4>
                    <div className="flex flex-wrap gap-4">
                       {["Branding", "AI Automation", "Web Design", "Consulting", "Other"].map(s => (
                         <button
                           key={s}
                           type="button"
                           onClick={() => toggleService(s)}
                           className={`service-button px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                             selectedService.includes(s) ? "bg-black text-white" : "border border-zinc-200 text-zinc-500 hover:border-black"
                           }`}
                         >
                           {s}
                         </button>
                       ))}
                       <input 
                         type="hidden" 
                         name="selectedService" 
                         value={selectedService.join(',')} 
                         required 
                       />
                    </div>
                    {showServiceError && (
                      <p className="text-red-500 text-sm mt-2">Please select at least one service</p>
                    )}
                 </div>

                 <div className="space-y-12">
                    <div className="relative group">
                       <input 
                         type="text" 
                         placeholder="Full Name *" 
                         className="w-full bg-transparent border-b border-zinc-200 py-6 focus:outline-none focus:border-black transition-colors font-bold uppercase text-sm tracking-widest" 
                         required 
                       />
                    </div>
                    
                    <div className="relative group">
                       <input 
                         type="email" 
                         placeholder="Email Address *" 
                         className="w-full bg-transparent border-b border-zinc-200 py-6 focus:outline-none focus:border-black transition-colors font-bold uppercase text-sm tracking-widest" 
                         required 
                       />
                    </div>
                    
                    <div className="relative group">
                       <input 
                         type="text" 
                         placeholder="Company / Organization *" 
                         className="w-full bg-transparent border-b border-zinc-200 py-6 focus:outline-none focus:border-black transition-colors font-bold uppercase text-sm tracking-widest" 
                         required 
                       />
                    </div>
                    
                    <div className="relative group">
                       <input 
                         type="tel" 
                         placeholder="WhatsApp Number *" 
                         className="w-full bg-transparent border-b border-zinc-200 py-6 focus:outline-none focus:border-black transition-colors font-bold uppercase text-sm tracking-widest" 
                         required 
                       />
                    </div>
                 </div>

                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">Tell us about your project *</h4>
                    <textarea 
                      rows={4} 
                      className="w-full bg-transparent border-b border-zinc-200 py-6 focus:outline-none focus:border-black transition-colors font-medium text-xl resize-none" 
                      placeholder="Briefly describe your goals..." 
                      required 
                    />
                 </div>

                 <div className="pt-12">
                    <button 
                      type="submit" 
                      className="w-full group h-24 bg-black text-white rounded-full flex items-center justify-center gap-6 hover:bg-blue-600 hover:scale-[1.02] transition-transform"
                    >
                       <span className="font-black uppercase tracking-[0.4em] text-xs">Send Request</span>
                       <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <p className="text-center mt-8 text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Typical response time: 24-48 hours</p>
                 </div>
              </form>
            </motion.div>

            {/* SECONDARY INFO */}
            <div className="mt-24 grid md:grid-cols-2 gap-12">
               <div className="p-12 border border-zinc-100 rounded-[3rem] hover:bg-zinc-50 transition-colors cursor-pointer group">
                  <h4 className="text-xl font-black uppercase italic mb-4">Press & Media</h4>
                  <p className="text-zinc-400 mb-8">For all media inquiries and high-res assets.</p>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </div>
               <div className="p-12 border border-zinc-100 rounded-[3rem] hover:bg-zinc-50 transition-colors cursor-pointer group">
                  <h4 className="text-xl font-black uppercase italic mb-4">Careers</h4>
                  <p className="text-zinc-400 mb-8">Join the collective. We are always hiring visionaries.</p>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};