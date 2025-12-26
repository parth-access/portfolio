
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Hammer, ScrollText, Binary } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const cards = [
    { 
      title: "Radical Debugging", 
      desc: "Diving headfirst into low-level protocols to find bottlenecks. Logic is a puzzle, and I enjoy solving it.", 
      icon: Lightbulb,
      color: "bg-[#B8C6FF]/10",
      accent: "#B8C6FF"
    },
    { 
      title: "Iterative Forge", 
      desc: "Code isn't written; it's forged. Constant testing and breaking are the only ways to build resilience.", 
      icon: Hammer,
      color: "bg-[#A8E6CF]/10",
      accent: "#A8E6CF"
    },
    { 
      title: "Living Records", 
      desc: "Documentation isn't an afterthought. It's the source of truth that keeps systems alive over time.", 
      icon: ScrollText,
      color: "bg-[#FFD6C9]/10",
      accent: "#FFD6C9"
    },
    { 
      title: "Systems Logic", 
      desc: "Mapping every downstream impact. I don't build features; I architect interconnected flows.", 
      icon: Binary,
      color: "bg-zinc-100",
      accent: "#1A1D21"
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-32 space-y-8">
        <h3 className="text-6xl lg:text-8xl font-extrabold tracking-tight text-[#1A1D21]">How I Build</h3>
        <p className="text-2xl text-zinc-600 font-medium max-w-2xl leading-relaxed">
          The fundamental principles that govern every line of code and hardware design I deploy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12 }}
            className={`group p-16 ${card.color} rounded-[64px] border border-white flex flex-col justify-between transition-all shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50`}
          >
            <div className="space-y-10">
              <div className="w-20 h-20 bg-white rounded-[28px] flex items-center justify-center shadow-xl shadow-zinc-200 group-hover:scale-110 transition-transform">
                <card.icon size={32} style={{ color: card.accent }} />
              </div>
              <div className="space-y-6">
                <h4 className="text-3xl lg:text-4xl font-extrabold text-[#1A1D21] leading-tight">
                  {card.title}
                </h4>
                <p className="text-xl text-zinc-700 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
