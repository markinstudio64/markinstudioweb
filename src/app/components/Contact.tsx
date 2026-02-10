import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-zinc-50 rounded-[3rem] overflow-hidden shadow-sm border border-zinc-100">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 lg:p-20 bg-blue-600 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let's build something <br /> extraordinary.</h2>
              <p className="text-blue-100 text-lg mb-12 max-w-sm">
                Ready to transform your brand with AI? Get in touch and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Email us at</p>
                    <p className="text-xl font-bold">hello@markin.studio</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Call us</p>
                    <p className="text-xl font-bold">+1 (555) 000-1234</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Our Studio</p>
                    <p className="text-xl font-bold">Creative District, NY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700">Interest</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none">
                    <option>Full Branding & AI Strategy</option>
                    <option>Branding Only</option>
                    <option>AI Automation Only</option>
                    <option>Digital Product Design</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all group">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
