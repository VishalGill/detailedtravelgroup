'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroMonolith } from '@/components/features/HeroMonolith';
import { TrustTicker } from '@/components/features/TrustTicker';
import { ServiceGrid } from '@/components/ui/ServiceGrid';

export default function Home() {
  const coreServices = [
    {
      id: "TRANSPORTATION",
      title: "Executive Ground Logistics",
      description: "From S-Class sedans to armored convoys. We operate a meticulously maintained fleet with vetted chauffeurs who understand the art of silence.",
      link: "/services/transportation",
      image: "/images/services/transport.jpg"
    },
    {
      id: "EVENTS",
      title: "Major Event Access",
      description: "Turnkey logistics for F1, Super Bowl, and Fashion Week. We handle the impossible logistics so you can focus on the experience.",
      link: "/services/events",
      image: "/images/services/events.jpg"
    },
    {
      id: "LIFESTYLE",
      title: "Global Concierge",
      description: "Dining reservations, private aviation, and exclusive access. Your lifestyle managed with military precision and white-glove care.",
      link: "/services/lifestyle",
      image: "/images/services/lifestyle.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Header />
      
      <HeroMonolith />
      
      <TrustTicker />
      
      <ServiceGrid 
        title="THE CODE" 
        items={coreServices} 
      />

      {/* Concierge Teaser */}
      <section className="bg-white text-black py-32 px-6 md:px-24 border-t border-black">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <span className="font-mono text-xs text-black/50 uppercase tracking-widest block mb-6">
              FOR EXECUTIVE ASSISTANTS
            </span>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
              We Make You Look <span className="italic">Flawless</span>.
            </h2>
            <ul className="font-sans text-lg font-light space-y-4 mb-12">
              <li className="flex items-center gap-4">
                <span className="w-1 h-1 bg-black block" />
                Automated Receipts & Billing
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1 h-1 bg-black block" />
                Dedicated Account Manager
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1 h-1 bg-black block" />
                Complex Itinerary Management
              </li>
            </ul>
            <a 
              href="/corporate" 
              className="inline-block bg-black text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
            >
              Open Corporate Account
            </a>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="border border-black/10 p-8 md:p-12 relative">
              <div className="absolute top-0 left-0 w-full h-px bg-black" />
              <div className="flex justify-between font-mono text-xs text-black/50 mb-8">
                <span>STATUS: CONFIRMED</span>
                <span>ID: #88291</span>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="font-serif text-2xl text-black">Jonathan Doe, CEO</p>
                  <p className="font-mono text-xs text-black/40 mt-1">PASSENGER</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-sans text-lg">Teterboro Airport (TEB)</p>
                    <p className="font-mono text-xs text-black/40 mt-1">PICKUP</p>
                  </div>
                  <div className="text-right">
                    <p className="font-sans text-lg">14:00 EST</p>
                    <p className="font-mono text-xs text-black/40 mt-1">TIME</p>
                  </div>
                </div>
                <div className="pt-8 border-t border-black/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-black">DRIVER: ASSIGNED</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
