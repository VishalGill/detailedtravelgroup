'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function RelocationServices() {
  const related = [
    {
      number: "01",
      title: "Personal Shopping",
      description: "Furniture sourcing and wardrobe updates for the new home.",
      link: "/services/lifestyle/personal-shopping"
    },
    {
      number: "02",
      title: "Pet Concierge",
      description: "International pet transport and quarantine management.",
      link: "/services/specialized/pet-concierge"
    },
    {
      number: "03",
      title: "Private Aviation",
      description: "Relocate the family via private charter.",
      link: "/services/transportation/private-aviation"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          SPECIALIZED / RELOCATION
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          EXECUTIVE<br />TRANSFER
        </h1>
        <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6 max-w-2xl">
          Moving a life, not just boxes. We manage the entire transition for executives, athletes, and diplomats.
        </p>
      </section>

      {/* Details */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl mb-8">Seamless Transition</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              From temporary housing and school placement to setting up utilities and staffing the new residence. We handle the logistics so you can focus on your new role.
            </p>
            <div className="border-t border-black/10 pt-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-4">Scope of Service</h3>
              <ul className="grid grid-cols-2 gap-4 text-sm text-black/60">
                <li>Real Estate Sourcing</li>
                <li>School Admissions</li>
                <li>Staff Recruitment</li>
                <li>Art Handling</li>
              </ul>
            </div>
          </div>
          <div className="bg-zinc-100 h-[500px] w-full relative">
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="font-mono text-xs text-black/30">IMAGE: LUXURY INTERIOR</span>
             </div>
          </div>
        </div>
      </section>

      <RelatedServices services={related} />

      <Footer />
    </main>
  );
}

