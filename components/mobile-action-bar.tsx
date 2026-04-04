'use client';

import { Phone, MessageSquare } from 'lucide-react';

export function MobileActionBar() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bark-slate/80 backdrop-blur-xl border-t border-white/10 p-4 grid grid-cols-2 gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <a 
        href="tel:+19548824836" 
        className="flex items-center justify-center gap-2 bg-forest-deep text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs border border-white/10 active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-safety-vivid" />
        Call
      </a>
      <button 
        onClick={scrollToForm}
        className="flex items-center justify-center gap-2 bg-safety-vivid text-bark-slate py-4 rounded-sm font-bold uppercase tracking-widest text-xs active:scale-95 transition-transform shadow-lg shadow-safety-vivid/20"
      >
        <MessageSquare className="w-4 h-4" />
        Text Quote
      </button>
    </div>
  );
}
