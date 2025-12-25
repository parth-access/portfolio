
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Code, Database, Activity } from 'lucide-react';

export const FitVoltCaseStudy: React.FC = () => {
  const [isExploring, setIsExploring] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Zap },
    { id: 'problem', label: 'Problem', icon: Database },
    { id: 'stack', label: 'Stack', icon: Code }
  ];

  return (
    <div className="w-full">
      <motion.div
        whileHover={{ scale: 0.995 }}
        className="group bg-white rounded-[64px] border border-zinc-100 overflow-hidden shadow-2xl shadow-zinc-200/50 transition-all duration-700"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 p-16 lg:p-24 bg-[#F8F7FB] flex flex-col justify-between items-start gap-16">
            <div className="space-y-10">
              <div className="w-20 h-20 bg-white rounded-[32px] flex items-center justify-center shadow-xl shadow-zinc-200/50 text-[#1A1D21] group-hover:rotate-12 transition-transform">
                <Activity size={36} />
              </div>
              <h3 className="text-6xl lg:text-7xl font-extrabold text-[#1A1D21] tracking-tight">FitVolt</h3>
              <p className="text-2xl text-[#40464D] font-medium leading-relaxed">
                Capturing kinetic energy from everyday gym equipment and converting it into live performance data.
              </p>
            </div>
            
            <button 
              onClick={() => setIsExploring(!isExploring)}
              className="px-12 py-6 bg-white border-2 border-[#B8C6FF] text-[#1A1D21] rounded-[32px] font-extrabold text-base uppercase tracking-widest hover:bg-[#B8C6FF] hover:text-white transition-all flex items-center gap-4 group/btn shadow-lg active:scale-95"
            >
              {isExploring ? 'Close Logic' : 'Explore System'} 
              <ArrowRight size={20} className={`${isExploring ? 'rotate-90' : ''} transition-transform`} />
            </button>
          </div>

          <div className="lg:col-span-6 p-16 lg:p-24 relative flex items-center justify-center bg-white">
             <div className="absolute inset-0 bg-[#B8C6FF]/10 rounded-full blur-[100px]" />
             <div className="relative z-10 w-full h-full border-2 border-[#B8C6FF]/30 rounded-[56px] border-dashed flex items-center justify-center p-16 overflow-hidden">
                <div className="flex flex-col items-center gap-6">
                  <div className="text-8xl animate-pulse">⚙️</div>
                  <div className="h-[1px] w-12 bg-zinc-200" />
                  <p className="text-xs font-bold text-zinc-300 tracking-widest uppercase">Live_Node</p>
                </div>
             </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExploring && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-16 p-16 lg:p-24 bg-white rounded-[64px] border border-zinc-100 shadow-2xl">
              <div className="flex flex-wrap gap-12 mb-16 border-b border-zinc-100">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-sm font-black uppercase tracking-[0.3em] pb-10 transition-all relative flex items-center gap-4 ${
                      activeTab === tab.id ? 'text-[#B8C6FF]' : 'text-[#6B7280] hover:text-[#1A1D21]'
                    }`}
                  >
                    <tab.icon size={18} /> {tab.label}
                    {activeTab === tab.id && (
                      <motion.div layoutId="tab-underline-premium" className="absolute bottom-0 left-0 w-full h-1 bg-[#B8C6FF] rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-12"
                  >
                    {activeTab === 'overview' && (
                      <div className="space-y-12 max-w-4xl">
                        <p className="text-3xl text-[#40464D] font-medium leading-[1.4]">
                          Harvesting mechanical effort via Hall-Effect sensors and custom ESP32 logic. Data is synced to a real-time dashboard with ultra-low latency.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                           <div className="p-12 bg-[#B8C6FF]/5 rounded-[48px] border border-white">
                              <h5 className="text-base font-black text-[#B8C6FF] mb-6 uppercase tracking-widest">Protocol</h5>
                              <p className="text-xl text-[#40464D] font-medium leading-relaxed">High-concurrency MQTT streams delivering per-second data updates.</p>
                           </div>
                           <div className="p-12 bg-[#A8E6CF]/5 rounded-[48px] border border-white">
                              <h5 className="text-base font-black text-[#A8E6CF] mb-6 uppercase tracking-widest">Utility</h5>
                              <p className="text-xl text-[#40464D] font-medium leading-relaxed">Converting physical output into tangible charging capacity metrics.</p>
                           </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'problem' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                          { title: "Waste Heat", desc: "Kinetic output in gyms is currently lost as non-recoverable heat.", color: "bg-[#FFD6C9]/10" },
                          { title: "Engagement", desc: "Athletes lack immediate visual confirmation of their energetic footprint.", color: "bg-[#B8C6FF]/10" },
                          { title: "Legacy Gear", desc: "Old equipment remains disconnected from the modern data stack.", color: "bg-[#A8E6CF]/10" }
                        ].map((item, i) => (
                          <div key={i} className={`p-12 ${item.color} rounded-[48px] border border-white space-y-6`}>
                             <h4 className="text-2xl font-extrabold text-[#1A1D21]">{item.title}</h4>
                             <p className="text-lg text-[#40464D] font-medium leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'stack' && (
                      <div className="flex flex-wrap gap-6">
                        {['React 19', 'Firebase', 'ESP32 / C++', 'MQTT v5', 'Framer Motion', 'Tailwind'].map(tech => (
                          <div key={tech} className="px-10 py-6 bg-zinc-50 border border-zinc-100 rounded-3xl text-sm font-black tracking-widest text-[#1A1D21] hover:border-[#B8C6FF] transition-colors cursor-default">
                            {tech}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
