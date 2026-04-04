'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-forest-deep/80 backdrop-blur-xl border-white/10 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="font-display text-2xl font-bold tracking-wider uppercase text-white flex items-center gap-2">
          <span className="text-safety-vivid">{'///'}</span> The Monkey Guy
        </div>
        
        <nav className="hidden lg:flex gap-8 font-bold text-sm uppercase tracking-wider text-white/90">
          <a href="#services" className="hover:text-safety-vivid transition-colors">Services</a>
          <a href="#about" className="hover:text-safety-vivid transition-colors">About</a>
          <a href="#contact-form" className="hover:text-safety-vivid transition-colors">Safety</a>
          <a href="#contact-form" className="hover:text-safety-vivid transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-6">
          <a href="tel:+19548824836" className="hidden md:flex items-center gap-2 text-white hover:text-safety-vivid transition-colors font-bold text-base tracking-wider uppercase">
            <Phone className="w-5 h-5 text-safety-vivid" />
            <span>(954) 882-4836</span>
          </a>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-safety-vivid text-bark-slate px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-safety-vivid/20"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="hidden sm:inline">Text for Quote</span>
            <span className="sm:hidden">Quote</span>
          </button>
        </div>
      </div>
    </header>
  );
}
