
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <div className="max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-24"
      >
        <h2 className="text-6xl lg:text-8xl font-extrabold text-[#1A1D21] leading-[1.1] tracking-tight text-balance">
          Bridging the <span className="text-[#B8C6FF]">kinetic</span> world <br />
          with <span className="text-[#A8E6CF]">digital</span> architecture.
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <p className="text-2xl lg:text-3xl text-[#40464D] font-medium leading-relaxed">
            Designing ecosystems that translate physical interaction into digital value. My focus is on efficiency, longevity, and high-performance logic.
          </p>
          <div className="p-16 bg-white rounded-[64px] border border-zinc-100 shadow-2xl shadow-zinc-100/30 flex flex-col justify-center gap-8 group hover:border-[#B8C6FF]/40 transition-all duration-500">
             <div className="w-20 h-20 bg-[#F3F1FA] rounded-[28px] flex items-center justify-center text-[#B8C6FF] group-hover:scale-110 transition-transform">
                <Sparkles size={32} />
             </div>
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#A8E6CF] animate-pulse" />
                  <h4 className="text-3xl font-extrabold text-[#1A1D21]">Active Phase</h4>
                </div>
                <p className="text-xl text-[#6B7280] font-medium leading-relaxed">
                  Scaling FitVolt ingest nodes to handle high-frequency sensor streams with sub-10ms latency.
                </p>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
