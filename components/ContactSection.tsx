
import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <div className="space-y-24">
      <div className="space-y-8">
        <h2 className="text-hero leading-none tracking-tighter text-white">
          Let’s <span className="text-zinc-800">interface.</span>
        </h2>
        <p className="text-2xl lg:text-3xl text-zinc-500 font-medium max-w-3xl leading-tight">
          If you are architecting something that matters, I’m ready to contribute.
        </p>
      </div>

      <div className="flex flex-wrap gap-12">
        {[
          { label: "Mail Node", icon: Mail, href: "mailto:parthsaarthichhikara@gmail.com" },
          { label: "Source Forge", icon: Github, href: "https://github.com/parth-access" },
          { label: "Network Log", icon: Linkedin, href: "https://www.linkedin.com/in/parth-access/" }
        ].map((link, i) => (
          <a 
            key={i}
            href={link.href} 
            className="group flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 hover:text-[#5EEAD4] transition-all"
          >
            <link.icon size={18} className="text-zinc-800 group-hover:text-[#5EEAD4] transition-all" />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
