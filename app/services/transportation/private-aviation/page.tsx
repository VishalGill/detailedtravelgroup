'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function PrivateAviation() {
  const related = [
    {
      number: "01",
      title: "Airport Concierge",
      description: "Tarmac transfers and lounge access.",
      link: "/services/transportation/airport-concierge"
    },
    {
      number: "02",
      title: "Chauffeur Services",
      description: "Seamless ground connections.",
      link: "/services/transportation/chauffeur-services"
    },
    {
      number: "03",
      title: "Pet Concierge",
      description: "Pets fly in cabin with you.",
      link: "/services/specialized/pet-concierge"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          TRANSPORTATION / AVIATION
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          WINGS OF<br />COMMERCE
        </h1>
        <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6 max-w-2xl">
          Global reach on your schedule. Heavy jets, light jets, and turboprops sourced from safety-rated operators.
        </p>
      </section>

      {/* Details */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl mb-8">Beyond the Broker</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              We don't just book the plane; we manage the entire mission. From catering from your favorite restaurant to arranging secure tarmac access for your vehicle.
            </p>
            <div className="bg-zinc-100 p-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-4">Aircraft Categories</h3>
              <ul className="space-y-2 text-sm text-black/60">
                <li>• Heavy Jets (Gulfstream G650, Global 7500)</li>
                <li>• Super Midsize (Challenger 350, Citation X)</li>
                <li>• Light Jets (Phenom 300, Citation CJ4)</li>
                <li>• Helicopters (Sikorsky S-76, AW139)</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="w-full h-[600px] bg-zinc-100 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-0 left-0 p-8">
                 <p className="font-serif text-5xl text-black mix-blend-difference">Tarmac Access</p>
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

