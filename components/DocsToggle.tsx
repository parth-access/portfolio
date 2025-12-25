
import React from 'react';
import { Terminal } from 'lucide-react';

interface DocsToggleProps {
  isDocsMode: boolean;
  toggle: () => void;
}

export const DocsToggle: React.FC<DocsToggleProps> = ({ isDocsMode, toggle }) => {
  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-4 px-6 py-3 rounded-full border transition-all duration-500 backdrop-blur-md ${
        isDocsMode 
          ? 'bg-[#5EEAD4] border-[#5EEAD4] text-black shadow-[0_0_40px_rgba(94,234,212,0.2)]' 
          : 'bg-[#10151D]/80 border-white/5 text-zinc-500 hover:border-[#5EEAD4]/40 hover:text-zinc-300 shadow-2xl'
      }`}
    >
      <Terminal size={12} className={isDocsMode ? 'animate-pulse' : 'text-[#5EEAD4]'} />
      <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
        {isDocsMode ? 'DOC_PROTOCOL' : 'UI_LAYER'}
      </span>
    </button>
  );
};
