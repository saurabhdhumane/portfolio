import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

// Upgraded Icon Component with Tooltips and Accessibility
const FooterIcon = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    aria-label={label}
    className="group relative p-4 rounded-full bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.05] hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 hover:-translate-y-1"
  >
    {icon}
    {/* Floating Tooltip */}
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0f172a] text-cyan-400 text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 pointer-events-none whitespace-nowrap shadow-xl">
      {label}
    </span>
  </a>
);

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 pt-20 pb-10 border-t border-white/10 bg-black/20 backdrop-blur-lg mt-20">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        
        {/* Animated Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">amazing?</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Whether you have a project in mind or just want to chat about web architecture, my inbox is always open.
          </p>
        </motion.div>
        
        {/* Social Links Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <FooterIcon href="mailto:saurabhdhumneraje@gmail.com" icon={<Mail />} label="Email Me" />
          <FooterIcon href="https://github.com/saurabhdhumane" icon={<Github />} label="GitHub Profile" />
          <FooterIcon href="https://in.linkedin.com/in/saurabh-dhumane" icon={<Linkedin />} label="LinkedIn Connection" />
          <FooterIcon href="tel:+918888211972" icon={<Phone />} label="Call Me" />
        </motion.div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-slate-500 text-sm font-medium mb-4 md:mb-0">
            © {new Date().getFullYear()} Saurabh Dhumane. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            Back to top 
            <span className="p-2 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;