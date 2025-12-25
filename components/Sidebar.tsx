
import React from 'react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeSection: string;
  isDocsMode: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, isDocsMode }) => {
  const navItems = [
    { id: 'hero', label: 'Intro' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'capabilities', label: 'Systems' },
    { id: 'work', label: 'Work' },
    { id: 'fitvolt', label: 'FitVolt' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 border-r border-white/5 bg-[#06070A] z-50 flex-col p-12">
      <div className="mb-20">
        <h1 className="font-bold text-xs tracking-[0.2em] text-white">PSC.SYSTEMS</h1>
        <p className="text-[9px] text-zinc-700 uppercase tracking-widest font-mono mt-1">EST. 2024</p>
      </div>

      <nav className="flex-1 space-y-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            className={`w-full text-left text-[11px] uppercase tracking-[0.2em] transition-all relative ${
              activeSection === item.id 
                ? 'text-white font-bold' 
                : 'text-zinc-600 hover:text-zinc-300'
            }`}
          >
            {activeSection === item.id && (
              <motion.div 
                layoutId="sidebar-dot"
                className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#5EEAD4] rounded-full"
              />
            )}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]/40" />
          <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">Systems: Nominal</span>
        </div>
      </div>
    </aside>
  );
};
