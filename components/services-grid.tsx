'use client';

import { motion } from 'motion/react';
import { AlertTriangle, Scissors, Mountain, TreePine, Shovel, Leaf, Sprout, Flower2, Layers, ArrowUpRight } from 'lucide-react';

const featuredServices = [
  {
    id: 'tree-removal',
    title: 'Tree Removal',
    description: 'Safe, efficient removal of dead, dying, or hazardous trees using advanced rigging and crane support.',
    whyUs: 'Zero-impact removal techniques.',
    icon: TreePine,
    className: 'md:col-span-2 bg-forest-deep',
  },
  {
    id: 'tree-trimming',
    title: 'Tree Trimming',
    description: 'Precision pruning to enhance structural integrity, promote growth, and mitigate storm damage risks.',
    whyUs: 'ISA Certified Arborist standards.',
    icon: Scissors,
    className: 'bg-bark-slate',
  },
  {
    id: 'stump-removal',
    title: 'Stump Removal',
    description: 'Complete sub-surface grinding and root removal to clear your landscape for new growth or construction.',
    whyUs: 'State-of-the-art deep grinders.',
    icon: Mountain,
    className: 'bg-bark-slate',
  },
  {
    id: 'emergency-tree-service',
    title: 'Emergency Tree Service',
    description: '24/7 rapid response for storm-damaged or fallen trees threatening your property or safety.',
    whyUs: '90-minute average arrival time.',
    icon: AlertTriangle,
    className: 'md:col-span-2 bg-forest-deep border-safety-vivid/30',
  },
];

const supportServices = [
  {
    id: 'lawn-care',
    title: 'Lawn Care',
    description: 'Professional maintenance and health management for high-end turf.',
    icon: Leaf,
  },
  {
    id: 'mulch',
    title: 'Mulch',
    description: 'Premium organic mulching to retain moisture and improve soil.',
    icon: Layers,
  },
  {
    id: 'tree-planting',
    title: 'Tree Planting',
    description: 'Expert selection and installation of native species.',
    icon: Sprout,
  },
  {
    id: 'planting',
    title: 'Planting',
    description: 'Strategic landscape planting for aesthetic and ecological balance.',
    icon: Flower2,
  },
  {
    id: 'sod-installation',
    title: 'Sod Installation',
    description: 'Instant lawn transformation with high-quality, locally sourced sod.',
    icon: Shovel,
  },
];

export function ServicesGrid() {
  const handleServiceClick = (serviceId: string) => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      const url = new URL(window.location.href);
      url.searchParams.set('service', serviceId);
      window.history.pushState({}, '', url);
      window.dispatchEvent(new CustomEvent('service-selected', { detail: serviceId }));
    }
  };

  return (
    <section className="py-24 px-6 bg-bark-slate" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
            Technical <span className="text-safety-vivid">Range</span>
          </h2>
          <p className="text-white/60 max-w-2xl font-medium text-lg">
            Industrial-grade solutions for complex tree management and landscape recovery.
          </p>
        </div>

        {/* Featured Section (Top 4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredServices.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              whileHover={{ scale: 0.99 }}
              className={`group relative p-10 rounded-sm border border-white/10 cursor-pointer overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[320px] ${service.className} hover:border-safety-vivid/50 shadow-2xl shadow-black/40`}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-safety-vivid/10 border border-safety-vivid/20 rounded-sm">
                    <service.icon className="w-8 h-8 text-safety-vivid" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-safety-vivid transition-colors" />
                </div>
                <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-4 group-hover:text-safety-vivid transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-safety-vivid tracking-[0.2em]">Priority Standard</span>
                  <span className="text-sm font-bold text-white/90">{service.whyUs}</span>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-safety-vivid/5 blur-[100px] rounded-full group-hover:bg-safety-vivid/15 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Support Section (Bottom 5) */}
        <div className="pt-16 border-t border-white/10">
          <div className="mb-10">
            <h3 className="text-xl font-display font-bold uppercase tracking-widest text-white/40">Support Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportServices.map((service) => (
              <motion.div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                whileHover={{ y: -4 }}
                className="bg-forest-deep/30 p-8 rounded-sm border border-white/5 cursor-pointer hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="w-6 h-6 text-white/40 group-hover:text-safety-vivid transition-colors" />
                  <h4 className="text-lg font-display font-bold uppercase tracking-wide group-hover:text-white transition-colors">
                    {service.title}
                  </h4>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
