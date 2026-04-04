import { Mail, Phone, MapPin } from 'lucide-react';
import { ServicesGrid } from '@/components/services-grid';
import { ContactForm } from '@/components/contact-form';
import { Hero } from '@/components/hero';
import { DifferenceSection } from '@/components/difference-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Services Bento Grid Section */}
      <ServicesGrid />

      {/* Difference Section */}
      <DifferenceSection />

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-forest-deep border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6">
                Request an <span className="text-safety-vivid">Estimate</span>
              </h2>
              <p className="text-white/60 mb-10 max-w-lg leading-relaxed">
                Provide your details and the service you require. Our team will contact you within 24 hours for a site assessment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bark-slate border border-white/10 flex items-center justify-center rounded-sm">
                    <Phone className="w-6 h-6 text-safety-vivid" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-1">Call Us</span>
                    <a href="tel:+19548824836" className="text-lg font-bold hover:text-safety-vivid transition-colors">(954) 882-4836</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bark-slate border border-white/10 flex items-center justify-center rounded-sm">
                    <Mail className="w-6 h-6 text-safety-vivid" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-1">Email Us</span>
                    <a href="mailto:lopezgonza293@gmail.com" className="text-lg font-bold hover:text-safety-vivid transition-colors">lopezgonza293@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bark-slate border border-white/10 flex items-center justify-center rounded-sm">
                    <MapPin className="w-6 h-6 text-safety-vivid" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-1">Service Area</span>
                    <span className="text-lg font-bold">Fort Lauderdale & Surrounding Areas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bark-slate p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



