'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function EntertainmentAccess() {
  const related = [
    {
      number: "01",
      title: "Dining Reservations",
      description: "Pre-show or post-game dining at top tables.",
      link: "/services/lifestyle/dining-reservations"
    },
    {
      number: "02",
      title: "Chauffeur Services",
      description: "Drop-off right at the VIP entrance.",
      link: "/services/transportation/chauffeur-services"
    },
    {
      number: "03",
      title: "Major Events",
      description: "Access to global tentpole events.",
      link: "/services/events/major-events"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          LIFESTYLE / ENTERTAINMENT
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          SOLD OUT<br />IS A MYTH
        </h1>
        <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6 max-w-2xl">
          From Broadway opening nights to courtside at MSG. We hold the inventory that never hits the public market.
        </p>
      </section>

      {/* Details */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl mb-8">The Insider Network</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              Our relationships with venues, promoters, and teams allow us to secure suites, boxes, and house seats for virtually any event.
            </p>
            <div className="bg-zinc-100 p-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-4">Access Types</h3>
              <ul className="space-y-2 text-sm text-black/60">
                <li>• Luxury Suites (MSG, Barclays, MetLife)</li>
                <li>• House Seats (Broadway & Theater)</li>
                <li>• VIP & Backstage Passes (Concerts)</li>
                <li>• Floor Seats (NBA / Courtside)</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="w-full h-[600px] bg-zinc-100 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-0 left-0 p-8">
                 <p className="font-serif text-5xl text-black mix-blend-difference">The Arena</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices services={related} />

      <Footer />
    </main>
  );
}

