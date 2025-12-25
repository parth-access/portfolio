
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search } from 'lucide-react';

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleDown);
    return () => window.removeEventListener('keydown', handleDown);
  }, []);

  const sections = [
    { name: 'Introduction', id: 'hero' },
    { name: 'Principal: FitVolt', id: 'fitvolt' },
    { name: 'Technical Systems', id: 'systems' },
    { name: 'Career Timeline', id: 'timeline' },
    { name: 'Contact Info', id: 'contact' },
  ];

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-zinc-900 flex items-center gap-4">
              <Search className="text-zinc-600" size={20} />
              <input 
                autoFocus
                type="text" 
                placeholder="Jump to documentation node..." 
                className="bg-transparent border-none outline-none flex-1 text-white font-medium placeholder:text-zinc-700"
              />
            </div>
            <div className="p-4">
              <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest px-2 mb-4">Jump Points</p>
              <div className="space-y-1">
                {sections.map(s => (
                  <button
                    key={s.id}
                    onClick={() => navigate(s.id)}
                    className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-900 text-sm text-zinc-400 hover:text-white transition-colors group"
                  >
                    <span>{s.name}</span>
                    <span className="text-[10px] font-mono text-zinc-700 group-hover:text-zinc-500">G+{s.name[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 lg:flex hidden items-center gap-3 px-4 py-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full text-[10px] font-bold text-zinc-600 uppercase tracking-widest shadow-lg">
          <Command size={12} />
          <span>Press <span className="text-zinc-400">⌘K</span> to jump</span>
        </div>
      )}
    </AnimatePresence>
  );
};
