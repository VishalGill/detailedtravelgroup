'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function EventSecurity() {
  const related = [
    {
      number: "01",
      title: "Executive Protection",
      description: "Close protection for principals attending the event.",
      link: "/services/security/executive-protection"
    },
    {
      number: "02",
      title: "Secure Transport",
      description: "Convoy logistics for VIP arrivals.",
      link: "/services/security/secure-transportation"
    },
    {
      number: "03",
      title: "Major Events",
      description: "Logistics for large-scale public gatherings.",
      link: "/services/events/major-events"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          SECURITY / EVENTS
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          PERIMETER<br />CONTROL
        </h1>
        <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6 max-w-2xl">
          From private galas to corporate AGMs. We secure the venue, manage the crowd, and protect the guest list.
        </p>
      </section>

      {/* Details */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl mb-8">Seamless Safety</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              Security should be felt but not seen. Our event security teams blend into the environment, ensuring a safe atmosphere without disrupting the guest experience.
            </p>
            <div className="bg-zinc-100 p-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-4">Capabilities</h3>
              <ul className="space-y-2 text-sm text-black/60">
                <li>• Access Control & Guest List Mgmt</li>
                <li>• Perimeter Security & Surveillance</li>
                <li>• K9 Bomb Detection Units</li>
                <li>• Crisis Response Planning</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="w-full h-[600px] bg-zinc-100 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-0 left-0 p-8">
                 <p className="font-serif text-5xl text-black mix-blend-difference">The Venue</p>
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

