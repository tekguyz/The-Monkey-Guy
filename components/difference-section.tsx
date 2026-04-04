'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { Star, CheckCircle2, Trophy } from 'lucide-react';
import Image from 'next/image';

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(spring, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function DifferenceSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section className="py-24 bg-bark-slate overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-deep border border-white/10 rounded-sm mb-6">
              <Trophy className="w-4 h-4 text-safety-vivid" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">The Industry Standard</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8">
              The Monkey Guy <span className="text-safety-vivid">Difference</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed font-medium">
              Precision lowering. Zero-impact removal. <br />
              <span className="text-white">We leave your yard cleaner than we found it.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-forest-deep/30 p-6 border border-white/5 rounded-sm">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-safety-vivid text-safety-vivid" />
                  ))}
                </div>
                <div className="text-3xl font-display font-bold uppercase tracking-tight mb-1">5.0 Rating</div>
                <div className="text-white/40 text-xs uppercase font-bold tracking-widest">Verified Customer Reviews</div>
              </div>

              <div className="bg-forest-deep/30 p-6 border border-white/5 rounded-sm">
                <div className="text-safety-vivid font-display text-3xl font-bold uppercase tracking-tight mb-1">
                  <Counter value={500} />+
                </div>
                <div className="text-white/40 text-xs uppercase font-bold tracking-widest">Trees Removed Safely</div>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "Advanced rigging for zero-impact lowering",
                "Full debris removal & site restoration",
                "Licensed, Bonded & Insured protection",
                "ISA Certified Arborist supervision"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-safety-vivid flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Before/After Slider */}
          <div className="order-1 lg:order-2">
            <div 
              ref={containerRef}
              className="relative aspect-[4/5] md:aspect-square w-full rounded-sm overflow-hidden border-4 border-forest-deep shadow-2xl cursor-ew-resize select-none"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
            >
              {/* After (Bottom Layer) */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1000&auto=format&fit=crop"
                  alt="Clean yard after removal"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 right-6 bg-forest-deep/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-sm">
                  <span className="text-xs font-bold uppercase tracking-widest text-safety-vivid">After</span>
                </div>
              </div>

              {/* Before (Top Layer) */}
              <div 
                className="absolute inset-0 z-10"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1669065054992-3151b15aab08?q=80&w=857&auto=format&fit=crop"
                  alt="Massive tree before removal"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 bg-forest-deep/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-sm">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Before</span>
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 z-20 w-1 bg-safety-vivid shadow-[0_0_20px_rgba(255,255,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-safety-vivid rounded-full flex items-center justify-center shadow-xl border-4 border-forest-deep">
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-bark-slate rounded-full" />
                    <div className="w-1 h-4 bg-bark-slate rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mt-6">
              Drag slider to compare precision cleanup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
