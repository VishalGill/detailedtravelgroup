'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function MembershipPage() {
  const tiers = [
    {
      name: "SILVER",
      price: "Inquire",
      description: "Priority access to our core logistics network.",
      features: [
        "Priority Ground Transport Booking",
        "Airport Meet & Greet Access",
        "Restaurant Reservation Support",
        "Dedicated Account Manager (9am-6pm)"
      ]
    },
    {
      name: "GOLD",
      price: "Inquire",
      description: "Full lifestyle management for the global traveler.",
      features: [
        "Guaranteed Vehicle Availability (4hr notice)",
        "Private Aviation Coordination",
        "Global Event Access (Tickets & Suites)",
        "24/7 Dedicated Lifestyle Manager"
      ]
    },
    {
      name: "BLACK",
      price: "Inquire",
      description: "The impossible made possible. Invitation only.",
      features: [
        "Whatever, Whenever, Wherever",
        "Empty Leg Jet Alerts",
        "Off-Market Real Estate Access",
        "Principal Security Detail Coordination"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero */}
      <div className="pt-40 pb-20 px-6 md:px-24">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          MEMBERSHIP / ACCESS
        </span>
        <h1 className="font-serif text-6xl md:text-9xl text-white mb-12">
          UNLOCK<br />ACCESS
        </h1>
        <p className="font-sans text-xl font-light text-white/60 max-w-2xl border-l border-white/20 pl-6">
          Membership isn't just a status; it's a utility. It grants you the infrastructure to live a seamless life, supported by a team that understands the value of your time.
        </p>
      </div>

      {/* Tiers Grid */}
      <section className="py-20 px-6 md:px-24 border-t border-white/10">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
          {tiers.map((tier, index) => (
            <div key={index} className="bg-black p-12 flex flex-col h-full hover:bg-zinc-950 transition-colors group">
              <h2 className="font-serif text-4xl mb-4 group-hover:text-white/90 transition-colors">{tier.name}</h2>
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-8">{tier.price}</p>
              <p className="font-sans text-lg text-white/70 mb-12 min-h-[60px]">
                {tier.description}
              </p>
              
              <ul className="space-y-6 mb-12 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-1 h-1 bg-white mt-2 block" />
                    <span className="font-sans text-sm text-white/80 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact?service=membership" 
                className="w-full border border-white/20 py-4 text-center font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Request Application
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-32 px-6 md:px-24 bg-white text-black">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-serif text-5xl mb-8">The Asset of Time</h3>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              We calculate our ROI in hours returned to you. No waiting on hold, no searching for reservations, no logistical headaches. Just a single text message to solve complex problems.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <span className="font-serif text-4xl block mb-2">24/7</span>
                <span className="font-mono text-xs text-black/50 uppercase tracking-widest">Global Response</span>
              </div>
              <div>
                <span className="font-serif text-4xl block mb-2">15m</span>
                <span className="font-mono text-xs text-black/50 uppercase tracking-widest">Avg. Response Time</span>
              </div>
            </div>
          </div>
          <div className="h-[600px] bg-zinc-100 w-full relative">
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="font-mono text-xs text-black/30">IMAGE: LIFESTYLE MANAGER</span>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
