import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Clock } from "lucide-react";
import { track } from "@vercel/analytics";
import { CharReveal, TextReveal } from "../components/TextReveal";

// Define form data type
interface FormData {
  name: string;
  email: string;
  company: string;
  whatsapp: string;
  message: string;
  selectedService: string;
}

export const Contact = () => {
  const [selectedService, setSelectedService] = useState<string[]>([]);
  const [showServiceError, setShowServiceError] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    whatsapp: '',
    message: '',
    selectedService: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const toggleService = (s: string) => {
    setSelectedService(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
    setShowServiceError(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedService.length === 0) {
      setShowServiceError(true);
      // Scroll to the service selection area
      const serviceSection = document.getElementById('service-selection');
      if (serviceSection) {
        serviceSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Update form data with selected services
      const updatedFormData = {
        ...formData,
        selectedService: selectedService.join(', ')
      };

      // Submit form data to backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      const data = await response.text();
      let result;
      try {
        result = JSON.parse(data);
      } catch (e) {
        console.error('Failed to parse JSON response:', data);
        throw new Error('Invalid server response');
      }

      if (response.ok) {
        setSubmitSuccess(true);
        // Track successful submission in Vercel Analytics
        track('contact_form_success', { services: selectedService.join(', ') });

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          whatsapp: '',
          message: '',
          selectedService: ''
        });
        setSelectedService([]);

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(result.error || 'Failed to submit form');
      }
    } catch (error) {
      setSubmitError('An error occurred while submitting the form');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white selection:bg-brand-violet selection:text-white pt-48 pb-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-violet/[0.03] blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          {/* LEFT SIDE: INFO */}
          <div className="lg:col-span-5 sticky top-32">
            <div>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Strike the Accord</span>
                <div className="h-px w-24 bg-zinc-100" />
              </div>

              <CharReveal text="Let's" className="text-6xl md:text-[10rem] font-bold tracking-tighter text-brand-dark leading-[0.8] uppercase" />
              <CharReveal text="Talk." delay={0.4} className="text-6xl md:text-[10rem] font-bold tracking-tighter text-zinc-100 uppercase" />

              <div className="mt-16 mb-24">
                <TextReveal
                  text="Whether you're looking to engineering authority or redefine your vision, we are ready to synchronize."
                  className="text-2xl md:text-3xl text-zinc-500 font-bold tracking-tighter leading-[1.1] uppercase"
                />
              </div>

              <div className="space-y-16">
                <div className="group cursor-pointer">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block mb-6">General Inquiries</span>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#F9F9FB] flex items-center justify-center text-brand-violet group-hover:bg-brand-violet group-hover:text-white transition-all duration-500">
                      <Mail size={24} />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-brand-dark hover:text-brand-violet transition-colors duration-300 uppercase tracking-tighter break-all">markinstudio64@gmail.com</p>
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 block mb-6">Fast Track</span>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#F9F9FB] flex items-center justify-center text-brand-violet group-hover:bg-brand-violet group-hover:text-white transition-all duration-500">
                      <Phone size={24} />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-brand-dark hover:text-brand-violet transition-colors duration-300 uppercase tracking-tighter break-all">+92 337 0660803</p>
                  </div>
                </div>
              </div>

              <div className="mt-24 pt-12 border-t border-zinc-100">
                <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-300 uppercase tracking-[0.3em] mb-10">
                  <Clock size={14} className="text-brand-violet" />
                  Clinical Response Time: 24H
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-12 bg-[#F9F9FB] rounded-[3.5rem] border border-zinc-50 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-violet/5 blur-2xl group-hover:bg-brand-violet/10 transition-colors" />
                  <p className="text-xl text-zinc-600 font-bold tracking-tight leading-relaxed italic">"Markin is the first agency that actually delivers on the promise of technical speed and visual authority."</p>
                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">— Visionary Founder, 2024</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="lg:col-span-7 w-full">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-violet/[0.02] blur-[130px] pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-[#F9F9FB] p-12 md:p-20 rounded-[5rem] border border-zinc-50 shadow-2xl relative z-10"
              >
                <form className="space-y-16" onSubmit={handleSubmit}>
                  <div id="service-selection">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300 mb-10">Select Expertise *</h4>
                    <div className="flex flex-wrap gap-4">
                      {["Branding", "AI Automation", "Web Engineering", "Consultancy", "Other"].map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={`px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${selectedService.includes(s)
                            ? "bg-brand-violet text-white shadow-xl shadow-brand-violet/20 scale-105"
                            : "bg-white border border-zinc-100 text-zinc-400 hover:border-brand-violet hover:text-brand-violet"
                            }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    {showServiceError && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-[10px] font-bold mt-6 uppercase tracking-[0.3em]">Please select at least one initiative</motion.p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300 ml-4">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white rounded-full border border-zinc-100 px-10 py-8 focus:outline-none focus:border-brand-violet transition-colors font-bold text-brand-dark uppercase tracking-tight placeholder:text-zinc-200"
                        required
                        placeholder="Identify Yourself"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300 ml-4">Authority Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white rounded-full border border-zinc-100 px-10 py-8 focus:outline-none focus:border-brand-violet transition-colors font-bold text-brand-dark uppercase tracking-tight placeholder:text-zinc-200"
                        required
                        placeholder="address@domain.com"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300 ml-4">Organization *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-white rounded-full border border-zinc-100 px-10 py-8 focus:outline-none focus:border-brand-violet transition-colors font-bold text-brand-dark uppercase tracking-tight placeholder:text-zinc-200"
                        required
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300 ml-4">Direct Line *</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="w-full bg-white rounded-full border border-zinc-100 px-10 py-8 focus:outline-none focus:border-brand-violet transition-colors font-bold text-brand-dark uppercase tracking-tight placeholder:text-zinc-200"
                        required
                        placeholder="+92 000 0000000"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300 ml-6">Brief *</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white rounded-[3.5rem] border border-zinc-100 px-10 py-12 focus:outline-none focus:border-brand-violet transition-colors font-bold text-brand-dark uppercase tracking-tight placeholder:text-zinc-200 resize-none min-h-[220px]"
                      placeholder="Describe your vision, goals and operational timeline..."
                      required
                    />
                  </div>

                  {submitSuccess && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-10 bg-brand-violet/5 text-brand-violet rounded-[3.5rem] border border-brand-violet/10 font-bold uppercase tracking-[0.2em] text-[10px] text-center">
                      Initiative Received. We'll synchronize within 24 hours.
                    </motion.div>
                  )}

                  {submitError && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 bg-red-50 text-red-700 rounded-[3.5rem] border border-red-100 font-bold uppercase tracking-[0.2em] text-[10px] text-center">
                      {submitError}
                    </motion.div>
                  )}

                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full group h-28 rounded-full flex items-center justify-center gap-8 transition-all duration-700 ${isSubmitting
                        ? 'bg-zinc-100 text-zinc-300 cursor-not-allowed'
                        : 'bg-brand-dark text-white hover:bg-brand-violet shadow-2xl shadow-brand-dark/10 hover:scale-[1.01]'
                        }`}
                    >
                      <span className="font-bold uppercase tracking-[0.5em] text-xs">
                        {isSubmitting ? 'Synchronizing...' : 'Transmit Invitation'}
                      </span>
                      <div className="bg-white/10 p-3 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
                        <ArrowRight size={24} className="-rotate-45" />
                      </div>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* SECONDARY INFO */}
            <div className="grid md:grid-cols-2 gap-12 mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-14 bg-white rounded-[4rem] border border-zinc-50 hover:border-brand-violet transition-all duration-700 cursor-pointer group shadow-xl hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-violet/[0.05] flex items-center justify-center text-brand-violet mb-10 group-hover:bg-brand-violet group-hover:text-white transition-all duration-700">
                  <ArrowRight className="rotate-45" size={24} />
                </div>
                <h4 className="text-3xl font-bold text-brand-dark mb-4 uppercase tracking-tighter">Media Kit</h4>
                <p className="text-zinc-400 font-bold text-sm uppercase tracking-tight mb-12 leading-relaxed">Access high-authority <br /> brand assets.</p>
                <div className="flex items-center gap-4 text-brand-violet font-bold uppercase tracking-[0.4em] text-[10px]">
                  Download <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-14 bg-white rounded-[4rem] border border-zinc-50 hover:border-brand-violet transition-all duration-700 cursor-pointer group shadow-xl hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-violet/[0.05] flex items-center justify-center text-brand-violet mb-10 group-hover:bg-brand-violet group-hover:text-white transition-all duration-700">
                  <ArrowRight className="-rotate-45" size={24} />
                </div>
                <h4 className="text-3xl font-bold text-brand-dark mb-4 uppercase tracking-tighter">Alliance</h4>
                <p className="text-zinc-400 font-bold text-sm uppercase tracking-tight mb-12 leading-relaxed">Join our multidisciplinary <br /> engineering team.</p>
                <div className="flex items-center gap-4 text-brand-violet font-bold uppercase tracking-[0.4em] text-[10px]">
                  Collaborate <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};