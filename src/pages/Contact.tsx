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
    <div className="bg-white selection:bg-black selection:text-white pt-48 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          {/* LEFT SIDE: INFO */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Get in touch</span>
                <div className="h-px flex-1 bg-zinc-100" />
              </div>

              <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.9] mb-12 text-zinc-900 uppercase">
                Let's <br /> <span className="text-zinc-300">Talk.</span>
              </h1>

              <p className="text-2xl md:text-3xl text-zinc-500 font-medium leading-tight mb-24 max-w-md">
                Whether you're looking to automate your workflow or redefine your brand, we are ready to build the future with you.
              </p>

              <div className="space-y-16">
                <div className="group cursor-pointer">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">General Inquiries</h4>
                  <p className="text-3xl md:text-4xl font-bold text-zinc-900 hover:text-blue-600 transition-colors">markinstudio64@gmail.com</p>
                </div>
                <div className="group cursor-pointer">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Fast Track</h4>
                  <p className="text-3xl md:text-4xl font-bold text-zinc-900 hover:text-blue-600 transition-colors">+92 337 0660803</p>
                </div>
              </div>

              <div className="mt-24 pt-12 border-t border-zinc-100">
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8">Typical response time: 24h</p>
                <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100">
                  <p className="text-lg text-zinc-600 font-medium italic">"Markin is the first agency that actually delivers on the promise of speed and quality."</p>
                  <p className="mt-4 text-sm font-bold uppercase tracking-widest text-zinc-400">— Tech Founder, 2024</p>
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
              className="bg-zinc-50 p-12 md:p-20 rounded-[4rem] border border-zinc-100"
            >
              <form className="space-y-16" onSubmit={handleSubmit}>
                <div id="service-selection">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-10">What are you looking for? *</h4>
                  <div className="flex flex-wrap gap-4">
                    {["Branding", "AI Automation", "Web Design", "Consulting", "Other"].map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${selectedService.includes(s)
                            ? "bg-black text-white shadow-xl scale-105"
                            : "border border-zinc-200 text-zinc-500 hover:border-black hover:text-black"
                          }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {showServiceError && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-bold mt-4 uppercase tracking-widest">Please select at least one service</motion.p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white rounded-3xl border border-zinc-100 px-8 py-6 focus:outline-none focus:border-blue-600 transition-colors font-bold text-zinc-900"
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white rounded-3xl border border-zinc-100 px-8 py-6 focus:outline-none focus:border-blue-600 transition-colors font-bold text-zinc-900"
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white rounded-3xl border border-zinc-100 px-8 py-6 focus:outline-none focus:border-blue-600 transition-colors font-bold text-zinc-900"
                      required
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full bg-white rounded-3xl border border-zinc-100 px-8 py-6 focus:outline-none focus:border-blue-600 transition-colors font-bold text-zinc-900"
                      required
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Project Details *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white rounded-3xl border border-zinc-100 px-8 py-8 focus:outline-none focus:border-blue-600 transition-colors font-bold text-zinc-900 resize-none min-h-[200px]"
                    placeholder="Tell us about your project, goals and timeline..."
                    required
                  />
                </div>

                {submitSuccess && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 bg-green-50 text-green-700 rounded-[2rem] border border-green-100 font-bold uppercase tracking-widest text-xs text-center">
                    Message sent successfully. We'll reply within 24 hours.
                  </motion.div>
                )}

                {submitError && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 bg-red-50 text-red-700 rounded-[2rem] border border-red-100 font-bold uppercase tracking-widest text-xs text-center">
                    {submitError}
                  </motion.div>
                )}

                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full group h-24 rounded-full flex items-center justify-center gap-6 transition-all ${isSubmitting
                        ? 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
                        : 'bg-black text-white hover:bg-zinc-900 shadow-2xl hover:scale-[1.02]'
                      }`}
                  >
                    <span className="font-bold uppercase tracking-widest text-sm">
                      {isSubmitting ? 'Submitting...' : 'Send Request'}
                    </span>
                    <div className="bg-white/10 p-2 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <ArrowRight size={20} className="-rotate-45" />
                    </div>
                  </button>
                </div>
              </form>
            </motion.div>

            {/* SECONDARY INFO */}
            <div className="grid md:grid-cols-2 gap-12 mt-24">
              <div className="p-12 bg-white rounded-[3rem] border border-zinc-100 hover:border-blue-600 transition-all cursor-pointer group">
                <h4 className="text-2xl font-bold text-zinc-900 mb-4 uppercase">Media Kit</h4>
                <p className="text-zinc-500 font-medium mb-8">Download our logo and high-res brand assets.</p>
                <div className="flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest text-xs">
                  Download <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="p-12 bg-white rounded-[3rem] border border-zinc-100 hover:border-blue-600 transition-all cursor-pointer group">
                <h4 className="text-2xl font-bold text-zinc-900 mb-4 uppercase">Careers</h4>
                <p className="text-zinc-500 font-medium mb-8">We're always looking for world-class talent.</p>
                <div className="flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest text-xs">
                  View Openings <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};