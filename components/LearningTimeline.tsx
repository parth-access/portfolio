
import React from 'react';
import { motion } from 'framer-motion';

export const LearningTimeline: React.FC = () => {
  const steps = [
    { title: "Base Logic", date: "2023", desc: "Foundations in Python and hardware interaction." },
    { title: "System Growth", date: "Early 2024", desc: "Moving to Full-Stack engineering and IoT protocols." },
    { title: "Principal Deployment", date: "Mid 2024", desc: "Architecting FitVolt as a full ecosystem." },
    { title: "Scale Phase", date: "Present", desc: "Optimizing for high-concurrency and resilience." },
  ];

  return (
    <div className="w-full">
      <div className="mb-24 space-y-6">
        <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-[#2D3136]">Evolution_</h2>
        <p className="text-xl text-zinc-400 font-medium">A trace of systemic growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-6">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#B8C6FF]">{step.date}</span>
               <div className="h-[2px] flex-1 bg-zinc-100" />
            </div>
            
            <div className="space-y-4">
              <h4 className="text-2xl font-extrabold tracking-tight">{step.title}</h4>
              <p className="text-base text-zinc-500 font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
