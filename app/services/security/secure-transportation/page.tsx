'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function SecureTransportation() {
  const related = [
    {
      number: "01",
      title: "Executive Protection",
      description: "Close protection officers to accompany transport.",
      link: "/services/security/executive-protection"
    },
    {
      number: "02",
      title: "Airport Concierge",
      description: "Tarmac transfers for seamless arrivals.",
      link: "/services/transportation/airport-concierge"
    },
    {
      number: "03",
      title: "Event Security",
      description: "Perimeter control and convoy arrival logistics.",
      link: "/services/security/event-security"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          SECURITY / TRANSPORT
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          ARMORED<br />LOGISTICS
        </h1>
        <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6 max-w-2xl">
          Ballistic vehicles driven by security-trained chauffeurs. Evasive driving capability meets executive comfort.
        </p>
      </section>

      {/* Details */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl mb-8">The Fleet</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              Our secure fleet includes VR6/B6 armored SUVs and sedans that blend into the urban environment while offering maximum protection against ballistic threats.
            </p>
            <ul className="space-y-4 font-mono text-sm uppercase tracking-wide text-black/60">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                Armored Cadillac Escalade
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                Armored Mercedes S-Class
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                Secure Sprinter Vans
              </li>
            </ul>
          </div>
          <div className="bg-zinc-100 h-[500px] w-full relative">
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="font-mono text-xs text-black/30">IMAGE: ARMORED SUV</span>
             </div>
          </div>
        </div>
      </section>

      <RelatedServices services={related} />

      <Footer />
    </main>
  );
}

