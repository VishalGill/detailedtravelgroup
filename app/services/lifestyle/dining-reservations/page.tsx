'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function DiningReservations() {
  const related = [
    {
      number: "01",
      title: "Nightlife Access",
      description: "After dinner, skip the line at New York's most exclusive clubs.",
      link: "/services/lifestyle/nightlife-access"
    },
    {
      number: "02",
      title: "Chauffeur Services",
      description: "Arrive in style. S-Class or Escalade standby service.",
      link: "/services/transportation/chauffeur-services"
    },
    {
      number: "03",
      title: "Major Events",
      description: "Dining packages for Fashion Week and Art Basel.",
      link: "/services/events/major-events"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          LIFESTYLE / DINING
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          IMPOSSIBLE<br />ACCESS
        </h1>
        <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6 max-w-2xl">
          Carbone on a Friday. Rao's. Polo Bar prime time. We don't use bots; we use relationships.
        </p>
      </section>

      {/* Details */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl mb-8">The Table is Waiting</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              Our dining team maintains direct lines to General Managers at the world's most sought-after restaurants. We secure what apps cannot.
            </p>
            <div className="border-t border-black/10 pt-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-4">Priority Access Partners</h3>
              <ul className="grid grid-cols-2 gap-4 text-sm text-black/60">
                <li>Major Food Group</li>
                <li>Tao Group</li>
                <li>Jean-Georges</li>
                <li>Starr Restaurants</li>
              </ul>
            </div>
          </div>
          <div className="bg-zinc-100 h-[500px] w-full relative">
             {/* Placeholder for Dining Image */}
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="font-mono text-xs text-black/30">IMAGE: FINE DINING INTERIOR</span>
             </div>
          </div>
        </div>
      </section>

      <RelatedServices services={related} />

      <Footer />
    </main>
  );
}

