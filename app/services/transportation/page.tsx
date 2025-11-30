'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServiceGrid } from '@/components/ui/ServiceGrid';

export default function TransportationHub() {
  const services = [
    {
      id: "CHAUFFEUR",
      title: "Executive Chauffeur",
      description: "Our core competency. Vetted drivers, immaculate vehicles, and zero-tolerance for lateness. S-Class, SUV, and Sprinter configurations.",
      link: "/services/transportation/chauffeur-services",
      image: "/images/services/chauffeur.jpg"
    },
    {
      id: "AIRPORT",
      title: "Airport Concierge",
      description: "VIP meet & greet at JFK, EWR, LGA. Tarmac transfers, private terminal access, and expedited customs clearance.",
      link: "/services/transportation/airport-concierge",
      image: "/images/services/airport.jpg"
    },
    {
      id: "AVIATION",
      title: "Private Aviation",
      description: "On-demand jet charter and helicopter transfers. We source the right aircraft for your mission, from turboprops to heavy jets.",
      link: "/services/transportation/private-aviation",
      image: "/images/services/jet.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-40 pb-20 px-6 md:px-24">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          SERVICES / TRANSPORTATION
        </span>
        <h1 className="font-serif text-6xl md:text-9xl text-white mb-8">
          PRECISION<br />LOGISTICS
        </h1>
        <p className="font-sans text-xl font-light text-white/60 max-w-2xl border-l border-white/20 pl-6">
          We don't just book cars; we manage movement. From complex roadshows to simple airport transfers, our logistics are flawless.
        </p>
      </div>

      <ServiceGrid title="CAPABILITIES" items={services} />

      <Footer />
    </main>
  );
}

