'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function MajorEvents() {
  const events = [
    { name: "Formula 1 Miami", date: "MAY 2025", location: "MIAMI, FL" },
    { name: "Met Gala", date: "MAY 2025", location: "NEW YORK, NY" },
    { name: "Monaco Grand Prix", date: "MAY 2025", location: "MONTE CARLO" },
    { name: "Super Bowl LIX", date: "FEB 2025", location: "NEW ORLEANS, LA" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          SERVICES / EVENTS / MAJOR
        </span>
        <h1 className="font-serif text-6xl md:text-9xl text-white mb-8">
          THE GLOBAL<br />CALENDAR
        </h1>
        <p className="font-sans text-xl font-light text-white/60 max-w-2xl border-l border-white/20 pl-6">
          For agencies, brands, and principals. We provide turnkey logistics infrastructure for the world's most complex events.
        </p>
      </section>

      {/* Event List */}
      <section className="px-6 md:px-24 pb-32">
        <div className="border-t border-white/20">
          {events.map((event, index) => (
            <div key={index} className="group border-b border-white/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/5 transition-colors px-4 -mx-4">
              <div>
                <span className="font-mono text-xs text-white/40 block mb-2">{event.date}</span>
                <h3 className="font-serif text-4xl">{event.name}</h3>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <span className="font-mono text-xs text-white/40 block mb-2">LOCATION</span>
                <p className="font-sans text-lg">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agency B2B Section */}
      <section className="bg-white text-black py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-5xl mb-8">For Agencies & Brands</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              We partner with Octagon, Wasserman, and Endeavor to deliver flawless ground logistics for talent and sponsors.
            </p>
            <Link href="/corporate" className="inline-block bg-black text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors">
              Request Agency Rate Card
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border border-black/10 p-8">
              <h4 className="font-mono text-sm font-bold mb-4">LOGISTICS</h4>
              <p className="text-sm text-black/60">Motorcade coordination, route planning, and permitting.</p>
            </div>
            <div className="border border-black/10 p-8">
              <h4 className="font-mono text-sm font-bold mb-4">HOSPITALITY</h4>
              <p className="text-sm text-black/60">On-site concierge desks and guest management.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

