import React from "react";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-zinc-50 pt-20 pb-10 border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              MARKIN<span className="text-blue-600">.</span>STUDIO
            </a>
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
              We are a next-generation branding agency. We combine creative soul with artificial intelligence to build the brands of tomorrow.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, url: "https://www.instagram.com/markinstudio1/" },
                { icon: Twitter, url: "https://twitter.com/markinstudio" },
                { icon: Linkedin, url: "https://www.linkedin.com/company/markinstudio/" },
                { icon: Github, url: "https://github.com/markinstudio" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Services</h5>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Brand Identity</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">AI Automation</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Marketing Strategy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2026 Markin Studio. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-zinc-400">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
