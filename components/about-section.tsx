'use client';

import { MapPin, ShieldCheck, Leaf, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutSection() {
  const pillars = [
    {
      title: "Fort Lauderdale Expertise",
      description: "Deeply rooted in the local community. We understand the unique climate and soil conditions of Fort Lauderdale to keep your landscape thriving year-round.",
      icon: MapPin,
    },
    {
      title: "Safety & Precision",
      description: "Our team brings years of horticultural expertise and precision climbing to every job. We handle hazardous removals with a strict commitment to safety.",
      icon: ShieldCheck,
    },
    {
      title: "Eco-Friendly Commitment",
      description: "Environmental sustainability is at our core. We use eco-friendly practices and treatments to protect your property and the local ecosystem.",
      icon: Leaf,
    },
  ];

  return (
    <section id="about" className="py-24 bg-bark-slate border-t border-white/5 relative overflow-hidden">
      {/* Subtle background texture or accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-safety-vivid/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-safety-vivid/10 px-3 py-1 rounded-full border border-safety-vivid/20 flex items-center gap-2">
                <MapPin className="w-3 h-3 text-safety-vivid" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-safety-vivid">Serving Fort Lauderdale Since 2015</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none">
              Fort Lauderdale’s <br />
              <span className="text-safety-vivid">Precision Tree Experts</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-forest-deep/30 p-8 border border-white/5 rounded-sm hover:border-safety-vivid/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-bark-slate border border-white/10 flex items-center justify-center rounded-sm mb-6 group-hover:border-safety-vivid transition-colors">
                <pillar.icon className="w-6 h-6 text-safety-vivid" />
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-4 text-white">
                {pillar.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left border-t border-white/5 pt-12"
        >
          <p className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-white flex flex-col md:flex-row items-center gap-3">
            <Heart className="w-6 h-6 text-safety-vivid fill-safety-vivid" />
            <span>We don&apos;t just cut trees; we build lasting relationships through reliable, friendly service.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
