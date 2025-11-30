'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServiceGrid } from '@/components/ui/ServiceGrid';

export default function SecurityHub() {
  const services = [
    {
      id: "PROTECTION",
      title: "Executive Protection",
      description: "The Invisible Shield. Close protection officers who understand diplomacy and discretion. For principals, families, and talent.",
      link: "/services/security/executive-protection",
      image: "/images/services/security-protection.jpg"
    },
    {
      id: "TRANSPORT",
      title: "Secure Transportation",
      description: "Armored logistics and convoy movements. Ballistic vehicles driven by security-trained chauffeurs with evasive driving capability.",
      link: "/services/security/secure-transportation",
      image: "/images/services/security-transport.jpg"
    },
    {
      id: "EVENTS",
      title: "Event Security",
      description: "Perimeter security, access control, and crowd management for high-profile private events and corporate gatherings.",
      link: "/services/security/event-security",
      image: "/images/services/security-event.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-40 pb-20 px-6 md:px-24">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          SERVICES / SECURITY
        </span>
        <h1 className="font-serif text-6xl md:text-9xl text-white mb-8">
          DISCREET<br />PROTECTION
        </h1>
        <p className="font-sans text-xl font-light text-white/60 max-w-2xl border-l border-white/20 pl-6">
          Security that enables your lifestyle, rather than restricting it. We provide peace of mind through meticulous planning and invisible execution.
        </p>
      </div>

      <ServiceGrid title="CAPABILITIES" items={services} />

      <Footer />
    </main>
  );
}

