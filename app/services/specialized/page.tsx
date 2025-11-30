'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServiceGrid } from '@/components/ui/ServiceGrid';

export default function SpecializedHub() {
  const services = [
    {
      id: "RELOCATION",
      title: "Relocation Services",
      description: "Executive transfer logistics. We manage the entire move, from temporary housing to school placement and settling-in services.",
      link: "/services/specialized/relocation-services",
      image: "/images/services/relocation.jpg"
    },
    {
      id: "PETS",
      title: "Pet Concierge",
      description: "VVIP Animals. International pet transport, luxury boarding, and veterinary coordination. We treat your pets with the same white-glove care as you.",
      link: "/services/specialized/pet-concierge",
      image: "/images/services/pet.jpg"
    },
    {
      id: "GIFTS",
      title: "Gift Sourcing",
      description: "Rare acquisition services. When it absolutely must be found—whether it's a specific vintage wine or a limited edition timepiece.",
      link: "/services/specialized/gift-sourcing",
      image: "/images/services/gifts.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-40 pb-20 px-6 md:px-24">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          SERVICES / SPECIALIZED
        </span>
        <h1 className="font-serif text-6xl md:text-9xl text-white mb-8">
          NICHE<br />REQUIREMENTS
        </h1>
        <p className="font-sans text-xl font-light text-white/60 max-w-2xl border-l border-white/20 pl-6">
          For requests that don't fit into a standard category. Our specialized team handles the unique, the complex, and the extraordinary.
        </p>
      </div>

      <ServiceGrid title="SOLUTIONS" items={services} />

      <Footer />
    </main>
  );
}

