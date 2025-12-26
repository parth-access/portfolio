
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full">
      <motion.div
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-[#B8C6FF]/20 rounded-full blur-[120px] -z-10"
      />

      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white border border-zinc-100 shadow-xl shadow-zinc-100/50 text-[11px] font-bold tracking-[0.2em] text-[#B8C6FF]"
        >
          <span className="animate-pulse text-lg">❄️</span> 
          <span>SYSTEM_INIT_V2.5</span>
        </motion.div>

        <h1 className="text-8xl lg:text-[11rem] font-extrabold leading-[0.85] tracking-tight text-[#1A1D21]">
          I build <br />
          <span className="text-zinc-300">scalable</span> <br />
          <span className="text-[#A8E6CF]">systems.</span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl lg:text-4xl text-[#40464D] max-w-3xl font-medium leading-[1.3] text-balance"
        >
          Parth Saarthi Chhikara - First-year BTech student architecting energy harvesting, IoT nodes, and high-performance digital logic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="pt-12"
        >
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-14 py-6 bg-[#1A1D21] text-white rounded-[32px] font-extrabold text-base uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-zinc-400/50 active:scale-95"
          >
            Access Vault
          </button>
        </motion.div>
      </div>
    </div>
  );
};
