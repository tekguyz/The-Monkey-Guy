import type {Metadata} from 'next';
import { Inter, Oswald } from 'next/font/google';
import { ShieldCheck, Mail, Phone, Clock } from 'lucide-react';
import { Header } from '@/components/header';
import { MobileActionBar } from '@/components/mobile-action-bar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: 'The Monkey Guy | Expert Tree Removal',
  description: 'Expert Tree Removal & Precision Climbing in Fort Lauderdale.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans bg-bark-slate text-white antialiased min-h-screen flex flex-col pb-20 md:pb-0" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <MobileActionBar />
        <footer className="bg-forest-deep border-t border-white/10 pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div>
                <div className="font-display text-2xl font-bold tracking-wider uppercase text-white flex items-center gap-2 mb-6">
                  <span className="text-safety-vivid">{'///'}</span> The Monkey Guy
                </div>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                  Fort Lauderdale&apos;s premier precision climbing and tree removal experts. Handling the dangerous jobs safely since day one.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white/20 mb-6">Contact Info</h4>
                <a href="tel:+19548824836" className="flex items-center gap-3 text-white/60 hover:text-safety-vivid transition-colors group">
                  <Phone className="w-4 h-4 text-safety-vivid group-hover:scale-110 transition-transform" />
                  <span className="font-bold">(954) 882-4836</span>
                </a>
                <a href="mailto:lopezgonza293@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-safety-vivid transition-colors group">
                  <Mail className="w-4 h-4 text-safety-vivid group-hover:scale-110 transition-transform" />
                  <span className="font-bold">lopezgonza293@gmail.com</span>
                </a>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white/20 mb-6">Operating Hours</h4>
                <div className="flex items-center gap-3 text-white/60">
                  <Clock className="w-4 h-4 text-safety-vivid" />
                  <span className="font-bold">7:00 AM - 9:30 PM</span>
                </div>
                <div className="text-[10px] uppercase font-bold text-white/20 tracking-widest mt-2">
                  Monday - Sunday
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5 text-center text-white/20 text-[10px] uppercase font-bold tracking-[0.3em]">
              &copy; {new Date().getFullYear()} The Monkey Guy. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
