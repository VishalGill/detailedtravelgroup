'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          ABOUT / PHILOSOPHY
        </span>
        <h1 className="font-serif text-6xl md:text-9xl text-white mb-12">
          THE<br />STANDARD
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6">
            Detailed Travel Group was born from a simple observation: Luxury travel had become commoditized. We exist to return it to an art form.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 px-6 md:px-24 border-t border-white/10">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl mb-8">Not A Booking Engine</h2>
            <p className="font-sans text-lg font-light text-white/70 mb-8">
              In an age of algorithms and aggregators, we are the human element. We are operators, not just brokers. We own our fleet, we know the General Managers by name, and we walk the venues before you arrive.
            </p>
            <p className="font-sans text-lg font-light text-white/70">
              Our team is comprised of former executive protection agents, logistics experts, and lifestyle managers who have served the world's most demanding principals.
            </p>
          </div>
          <div className="lg:col-span-7 relative h-[600px] bg-zinc-900 group overflow-hidden">
             {/* Placeholder for Team/Office Image */}
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="font-mono text-xs text-white/30">IMAGE: HQ / TEAM AT WORK</span>
             </div>
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </section>

      {/* The Team Grid */}
      <section className="py-32 px-6 md:px-24 bg-white text-black">
        <div className="max-w-[1800px] mx-auto">
          <h2 className="font-serif text-6xl mb-24">LEADERSHIP</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {/* Team Member 1 */}
            <div className="bg-white p-12 flex flex-col border-b md:border-b-0 md:border-r border-black/10">
              <span className="font-mono text-xs text-black/50 uppercase tracking-widest mb-4">Founder & CEO</span>
              <h3 className="font-serif text-3xl mb-6">Managing Director</h3>
              <p className="font-sans text-black/60 mb-8">
                Former logistics coordinator for F1 teams and diplomatic security details.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-12 flex flex-col border-b md:border-b-0 md:border-r border-black/10">
              <span className="font-mono text-xs text-black/50 uppercase tracking-widest mb-4">Head of Concierge</span>
              <h3 className="font-serif text-3xl mb-6">Director of Lifestyle</h3>
              <p className="font-sans text-black/60 mb-8">
                15 years experience managing ultra-high-net-worth family offices in NYC and London.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-12 flex flex-col">
              <span className="font-mono text-xs text-black/50 uppercase tracking-widest mb-4">Head of Security</span>
              <h3 className="font-serif text-3xl mb-6">Director of Operations</h3>
              <p className="font-sans text-black/60 mb-8">
                Special operations veteran specializing in threat assessment and secure transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 md:px-24 bg-black text-white border-t border-white/20">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <span className="font-mono text-4xl block mb-4 text-white/30">01</span>
            <h3 className="font-serif text-2xl mb-4">Discretion</h3>
            <p className="text-sm text-white/60">Privacy is our default setting. We do not disclose client lists or discuss movements.</p>
          </div>
          <div>
            <span className="font-mono text-4xl block mb-4 text-white/30">02</span>
            <h3 className="font-serif text-2xl mb-4">Precision</h3>
            <p className="text-sm text-white/60">Logistics measured in seconds, not minutes. Every detail triple-checked.</p>
          </div>
          <div>
            <span className="font-mono text-4xl block mb-4 text-white/30">03</span>
            <h3 className="font-serif text-2xl mb-4">Access</h3>
            <p className="text-sm text-white/60">Doors open for us that remain closed to others. The result of decades of relationship building.</p>
          </div>
          <div>
            <span className="font-mono text-4xl block mb-4 text-white/30">04</span>
            <h3 className="font-serif text-2xl mb-4">Availability</h3>
            <p className="text-sm text-white/60">24/7/365. No call centers. You speak directly to a decision-maker.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
