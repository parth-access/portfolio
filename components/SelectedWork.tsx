
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const experiments = [
    { title: "QR Access Node", type: "Security", status: "STABLE", color: "#A8E6CF" },
    { title: "Inventory Engine", type: "Data Logic", status: "BETA", color: "#B8C6FF" },
    { title: "System Monitor", type: "Hardware", status: "ACTIVE", color: "#FFD6C9" },
  ];

  return (
    <div className="w-full">
      <div className="mb-24 space-y-6">
        <h3 className="text-4xl font-extrabold uppercase tracking-tight text-[#1A1D21]">Auxiliary_Nodes</h3>
        <p className="text-2xl text-zinc-600 font-medium">Secondary modules from previous engineering cycles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {experiments.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12 }}
            className="group p-14 bg-white border border-zinc-100 rounded-[56px] shadow-xl shadow-zinc-100 transition-all hover:border-[#B8C6FF]/30"
          >
            <div className="relative z-10 space-y-12">
              <div className="flex justify-between items-start">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-300 group-hover:text-[#B8C6FF] transition-colors">{item.type}</span>
                <ArrowUpRight size={24} className="text-zinc-200 group-hover:text-[#1A1D21] transition-all" />
              </div>
              
              <h4 className="text-3xl font-extrabold tracking-tight text-[#1A1D21] group-hover:text-[#B8C6FF] transition-colors">{item.title}</h4>
              
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-zinc-50 border border-zinc-100 rounded-2xl text-[11px] font-black tracking-[0.3em] text-zinc-700">
                <div className={`w-2.5 h-2.5 rounded-full`} style={{ backgroundColor: item.color }} />
                {item.status}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
