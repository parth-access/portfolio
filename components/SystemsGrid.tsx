
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, Code2, Layers } from 'lucide-react';

export const SystemsGrid: React.FC = () => {
  const systems = [
    {
      title: "Full-Stack Dashboards",
      desc: "Architecting React apps that interact with low-latency databases and cloud functions.",
      icon: Server,
      code: "system.v1.deploy(node: 'firebase')"
    },
    {
      title: "Hardware Bridging",
      desc: "Optimized C++ for ESP32 nodes to handle high-frequency sensor interrupts.",
      icon: Cpu,
      code: "volatile float energy_raw = 0.0f;"
    },
    {
      title: "Cloud Infrastructure",
      desc: "Implementing Role-Based Access Control and time-locked session persistence.",
      icon: Code2,
      code: "auth.verify(claim: 'system_admin')"
    },
    {
      title: "Interface Engineering",
      desc: "Developing reusable UI component libraries with motion-first logic.",
      icon: Layers,
      code: "<System.Frame animate={motion.log} />"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-5xl font-black tracking-tighter mb-6 leading-none">Built Capabilities</h2>
        <p className="text-zinc-500 text-xl font-medium">Modular approaches to complex engineering problems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {systems.map((sys, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="group p-10 bg-[#0B0D10] border border-white/5 rounded-[40px] hover:bg-[#11141A] transition-all duration-500 shadow-xl"
          >
            <div className="flex justify-between items-start mb-10">
              <div className="p-5 bg-[#11141A] rounded-2xl border border-white/5 group-hover:border-[#2EFFA4]/40 transition-colors shadow-inner">
                <sys.icon size={28} className="text-zinc-700 group-hover:text-[#2EFFA4] transition-colors" />
              </div>
              <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest bg-black px-4 py-1.5 rounded-full border border-white/5">
                MOD_0x0{i + 1}
              </span>
            </div>
            
            <h3 className="text-3xl font-black mb-4">{sys.title}</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-10">{sys.desc}</p>
            
            <div className="p-5 bg-black rounded-2xl border border-white/5 font-mono text-[12px] text-zinc-700 group-hover:text-[#2EFFA4]/60 overflow-hidden relative transition-colors">
              <span className="text-[#2EFFA4]/40 mr-3">#</span>
              {sys.code}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
