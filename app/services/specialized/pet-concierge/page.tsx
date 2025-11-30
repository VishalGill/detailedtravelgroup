'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function PetConcierge() {
  const related = [
    {
      number: "01",
      title: "Private Aviation",
      description: "Pets fly in the cabin, not the cargo hold.",
      link: "/services/transportation/private-aviation"
    },
    {
      number: "02",
      title: "Relocation Services",
      description: "Moving the entire family, including the four-legged members.",
      link: "/services/specialized/relocation-services"
    },
    {
      number: "03",
      title: "Personal Shopping",
      description: "Sourcing luxury accessories and organic nutrition.",
      link: "/services/lifestyle/personal-shopping"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          SPECIALIZED / PETS
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          VVIP<br />ANIMALS
        </h1>
        <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6 max-w-2xl">
          They aren't just pets; they're family. We provide white-glove care for your companions, from travel to training.
        </p>
      </section>

      {/* Details */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl mb-8">Cabin, Not Cargo</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              We specialize in complex international pet transport, coordinating veterinary paperwork, quarantine requirements, and private charters to ensure your pet travels by your side.
            </p>
            <ul className="space-y-4 font-mono text-sm uppercase tracking-wide text-black/60">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                International Import/Export
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                Private Veterinary House Calls
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                Luxury Boarding & Training
              </li>
            </ul>
          </div>
          <div className="bg-zinc-100 h-[500px] w-full relative">
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="font-mono text-xs text-black/30">IMAGE: PET ON JET</span>
             </div>
          </div>
        </div>
      </section>

      <RelatedServices services={related} />

      <Footer />
    </main>
  );
}

