
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Capabilities } from './components/Capabilities';
import { SelectedWork } from './components/SelectedWork';
import { FitVoltCaseStudy } from './components/FitVoltCaseStudy';
import { ContactSection } from './components/ContactSection';
import { Navbar } from './components/Navbar';
import { LearningTimeline } from './components/LearningTimeline';
import { Snowfall } from './components/Snowfall';
import { motion } from 'framer-motion';

const ClosingNote = () => (
  <section className="py-60 px-6 flex flex-col items-center text-center">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="max-w-3xl space-y-12"
    >
      <div className="w-20 h-[1px] bg-zinc-200 mx-auto" />
      <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A1D21] leading-tight text-balance">
        "The best way to predict the future is to architect it."
      </h2>
      <div className="space-y-4">
        <p className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">Winter Protocol / V2.5.0</p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-[#B8C6FF] rounded-full flex items-center justify-center shadow-lg shadow-[#B8C6FF]/20">
            <span className="text-white text-xl">❄️</span>
          </div>
          <span className="text-xl font-bold italic text-zinc-400 font-serif">P.S. Chhikara</span>
        </div>
      </div>
    </motion.div>
  </section>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'how', 'timeline', 'contact'];
      const scrollPos = window.scrollY + 400;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#B8C6FF]/40 relative">
      <Snowfall />
      <Navbar activeSection={activeSection} />

      <main className="max-w-6xl mx-auto px-6 lg:px-12">
        <section id="hero" className="min-h-screen flex items-center pt-20">
          <Hero />
        </section>

        <section id="about" className="py-40">
          <Philosophy />
        </section>

        <section id="work" className="py-40">
          <div className="mb-24 space-y-6">
            <h2 className="text-6xl lg:text-8xl font-extrabold text-[#1A1D21]">Artifacts_</h2>
            <p className="text-2xl text-zinc-600 font-medium max-w-2xl leading-relaxed">
              Living systems currently in operation and documentation.
            </p>
          </div>
          
          <div id="fitvolt" className="mb-40">
            <FitVoltCaseStudy />
          </div>

          <div className="mt-60">
            <SelectedWork />
          </div>
        </section>

        <section id="how" className="py-40">
          <Capabilities />
        </section>

        <section id="timeline" className="py-40">
          <LearningTimeline />
        </section>

        <section id="contact" className="py-40">
          <ContactSection />
        </section>

        <ClosingNote />
      </main>
    </div>
  );
};

export default App;
