'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row pt-20 lg:pt-0">
      {/* Left Content (70%) */}
      <div className="w-full lg:w-[70%] bg-bark-slate flex items-center relative z-10">
        {/* Subtle texture/gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/20 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 py-20 lg:py-32 w-full lg:pl-12 xl:pl-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-deep border border-white/10 rounded-sm mb-8">
            <span className="w-2 h-2 bg-safety-vivid rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">Emergency Response Available</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            Expert Tree Removal &<br />
            <span className="text-safety-vivid">Precision Climbing</span><br />
            in Fort Lauderdale.
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl leading-relaxed font-medium italic">
            When failure isn&apos;t an option. Safe removal. Precision cuts. The Monkey Guy handles the dangerous jobs safely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToForm}
              className="bg-safety-vivid text-bark-slate px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-lg shadow-xl shadow-safety-vivid/20"
            >
              Get a Free Estimate
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Image (30%) */}
      <div className="w-full lg:w-[30%] h-[50vh] lg:h-auto relative border-l-4 border-safety-vivid">
        <Image
          src="https://images.unsplash.com/photo-1626828476637-5bd713ef9f22?q=80&w=652&auto=format&fit=crop"
          alt="Arborist precision climbing in a canopy"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay to ensure it feels rugged and high-contrast */}
        <div className="absolute inset-0 bg-bark-slate/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark-slate/80 via-transparent to-transparent lg:hidden" />
      </div>
    </section>
  );
}
