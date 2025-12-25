
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Laptop, History, MessageCircle } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { id: 'hero', label: 'INIT', icon: Home },
    { id: 'about', label: 'BIO', icon: User },
    { id: 'work', label: 'BUILDS', icon: Laptop },
    { id: 'timeline', label: 'LOGS', icon: History },
    { id: 'contact', label: 'PING', icon: MessageCircle },
  ];

  return (
    <>
      {/* Desktop Dock - MacOS Style */}
      {!isMobile && (
        <nav className="fixed bottom-10 left-0 w-full z-[100] flex justify-center pointer-events-none px-6">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/60 backdrop-blur-2xl border border-white/80 p-3 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-end gap-2 pointer-events-auto"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative flex flex-col items-center"
                >
                  {/* Magnetic Effect Simulation */}
                  <motion.div
                    whileHover={{ scale: 1.3, y: -12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className={`p-4 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#B8C6FF] text-white shadow-lg shadow-[#B8C6FF]/20' 
                        : 'bg-zinc-100/50 text-zinc-400 hover:text-zinc-600 border border-white'
                    }`}
                  >
                    <Icon size={22} />
                  </motion.div>
                  
                  {/* Tooltip Label */}
                  <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800 text-[10px] font-bold tracking-widest text-white px-3 py-1.5 rounded-xl whitespace-nowrap pointer-events-none">
                    {item.label}
                  </div>
                  
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <motion.div 
                      layoutId="dock-indicator"
                      className="w-1.5 h-1.5 bg-[#B8C6FF] rounded-full mt-2" 
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        </nav>
      )}

      {/* Mobile Bottom Bar */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-6 pointer-events-none">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/90 backdrop-blur-xl border border-zinc-100 p-2 rounded-3xl shadow-xl flex justify-around items-center pointer-events-auto"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`flex flex-col items-center p-3 rounded-2xl transition-all ${
                    isActive ? 'bg-[#B8C6FF]/10 text-[#B8C6FF]' : 'text-zinc-400'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-[9px] font-black tracking-widest mt-1">{item.label}</span>
                </button>
              );
            })}
          </motion.div>
        </nav>
      )}
    </>
  );
};
