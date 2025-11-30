'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function WellnessSpa() {
  const related = [
    {
      number: "01",
      title: "Dining Reservations",
      description: "Healthy dining options post-treatment.",
      link: "/services/lifestyle/dining-reservations"
    },
    {
      number: "02",
      title: "Personal Shopping",
      description: "Sourcing luxury skincare and wellness products.",
      link: "/services/lifestyle/personal-shopping"
    },
    {
      number: "03",
      title: "Private Aviation",
      description: "Travel to global wellness retreats.",
      link: "/services/transportation/private-aviation"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          LIFESTYLE / WELLNESS
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          REGENERATIVE<br />LUXURY
        </h1>
        <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6 max-w-2xl">
          Health is wealth. We provide access to the world's most exclusive spas, medical professionals, and wellness retreats.
        </p>
      </section>

      {/* Details */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl mb-8">Holistic Management</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              Whether you need a last-minute appointment at a booked-out spa or a referral to a top specialist, we manage your wellness with discretion and care.
            </p>
            <div className="bg-zinc-100 p-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-black/60">
                <li>• Private Spa Bookings</li>
                <li>• Medical Concierge & Referrals</li>
                <li>• In-Home/Hotel Personal Training</li>
                <li>• Wellness Retreat Planning</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="w-full h-[600px] bg-zinc-100 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-0 left-0 p-8">
                 <p className="font-serif text-5xl text-black mix-blend-difference">The Sanctuary</p>
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

