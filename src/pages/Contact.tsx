import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { track } from "@vercel/analytics";

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
    <div className="bg-white selection:bg-brand-violet selection:text-white pt-48 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          {/* LEFT SIDE: INFO */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">Strike the Accord</span>
                <div className="h-px flex-1 bg-zinc-100" />
              </div>

              <h1 className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-12 text-brand-dark uppercase">
                Let's <br /> <span className="text-zinc-100">Talk.</span>
              </h1>

              <p className="text-2xl md:text-3xl text-zinc-500 font-bold tracking-tighter leading-[1.1] mb-24 max-w-md uppercase">
                Whether you're looking to <span className="text-brand-violet">engineering authority</span> or redefine your vision, we are ready.
              </p>

              <div className="space-y-16">
                <div className="group cursor-pointer">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6">General Inquiries</h4>
                  <p className="text-3xl md:text-4xl font-bold text-brand-dark hover:text-brand-violet transition-colors duration-300 uppercase tracking-tighter break-all">markinstudio64@gmail.com</p>
                </div>
                <div className="group cursor-pointer">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6">Fast Track</h4>
                  <p className="text-3xl md:text-4xl font-bold text-brand-dark hover:text-brand-violet transition-colors duration-300 uppercase tracking-tighter">+92 337 0660803</p>
                </div>
              </div>

              <div className="mt-24 pt-12 border-t border-zinc-100">
                <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.3em] mb-10">Clinical Response Time: 24H</p>
                <div className="p-12 bg-[#F9F9FB] rounded-[3.5rem] border border-zinc-50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-violet/5 blur-2xl group-hover:bg-brand-violet/10 transition-colors" />
                  <p className="text-xl text-zinc-600 font-bold tracking-tight leading-relaxed italic">"Markin is the first agency that actually delivers on the promise of technical speed and visual authority."</p>
                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-violet">— Visionary Founder, 2024</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#F9F9FB] p-12 md:p-20 rounded-[4rem] border border-zinc-50 shadow-sm"
            >
              <form className="space-y-16" onSubmit={handleSubmit}>
                <div id="service-selection">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-10">Select Expertise *</h4>
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
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white rounded-[2rem] border border-zinc-100 px-8 py-6 focus:outline-none focus:border-brand-violet transition-colors font-bold text-brand-dark uppercase tracking-tight placeholder:text-zinc-200"
                      required
                      placeholder="Identify Yourself"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300">Authority Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white rounded-[2rem] border border-zinc-100 px-8 py-6 focus:outline-none focus:border-brand-violet transition-colors font-bold text-brand-dark uppercase tracking-tight placeholder:text-zinc-200"
                      required
                      placeholder="address@domain.com"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300">Organization *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white rounded-[2rem] border border-zinc-100 px-8 py-6 focus:outline-none focus:border-brand-violet transition-colors font-bold text-brand-dark uppercase tracking-tight placeholder:text-zinc-200"
                      required
                      placeholder="Company Name"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300">Direct Line *</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full bg-white rounded-[2rem] border border-zinc-100 px-8 py-6 focus:outline-none focus:border-brand-violet transition-colors font-bold text-brand-dark uppercase tracking-tight placeholder:text-zinc-200"
                      required
                      placeholder="+1 000 000 000"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300">Brief *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white rounded-[2.5rem] border border-zinc-100 px-8 py-10 focus:outline-none focus:border-brand-violet transition-colors font-bold text-brand-dark uppercase tracking-tight placeholder:text-zinc-200 resize-none min-h-[180px]"
                    placeholder="Describe your vision, goals and operational timeline..."
                    required
                  />
                </div>

                {submitSuccess && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-10 bg-brand-violet/5 text-brand-violet rounded-[2.5rem] border border-brand-violet/10 font-bold uppercase tracking-[0.2em] text-[10px] text-center">
                    Initiative Received. We'll synchronize within 24 hours.
                  </motion.div>
                )}

                {submitError && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 bg-red-50 text-red-700 rounded-[2.5rem] border border-red-100 font-bold uppercase tracking-[0.2em] text-[10px] text-center">
                    {submitError}
                  </motion.div>
                )}

                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full group h-24 rounded-full flex items-center justify-center gap-6 transition-all duration-500 ${isSubmitting
                      ? 'bg-zinc-100 text-zinc-300 cursor-not-allowed'
                      : 'bg-brand-dark text-white hover:bg-brand-violet shadow-2xl shadow-brand-dark/10 hover:scale-[1.01]'
                      }`}
                  >
                    <span className="font-bold uppercase tracking-[0.4em] text-xs">
                      {isSubmitting ? 'Synchronizing...' : 'Transmit Invitation'}
                    </span>
                    <div className="bg-white/10 p-2 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <ArrowRight size={22} className="-rotate-45" />
                    </div>
                  </button>
                </div>
              </form>
            </motion.div>

            {/* SECONDARY INFO */}
            <div className="grid md:grid-cols-2 gap-12 mt-24">
              <div className="p-14 bg-white rounded-[3.5rem] border border-zinc-50 hover:border-brand-violet transition-all duration-500 cursor-pointer group shadow-sm">
                <h4 className="text-2xl font-bold text-brand-dark mb-4 uppercase tracking-tighter">Media Kit</h4>
                <p className="text-zinc-400 font-bold text-sm uppercase tracking-tight mb-10 leading-relaxed">Access high-authority <br /> brand assets.</p>
                <div className="flex items-center gap-4 text-brand-violet font-bold uppercase tracking-[0.3em] text-[10px]">
                  Download <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="p-14 bg-white rounded-[3.5rem] border border-zinc-50 hover:border-brand-violet transition-all duration-500 cursor-pointer group shadow-sm">
                <h4 className="text-2xl font-bold text-brand-dark mb-4 uppercase tracking-tighter">Alliance</h4>
                <p className="text-zinc-400 font-bold text-sm uppercase tracking-tight mb-10 leading-relaxed">Join our multidisciplinary <br /> engineering team.</p>
                <div className="flex items-center gap-4 text-brand-violet font-bold uppercase tracking-[0.3em] text-[10px]">
                  Collaborate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};