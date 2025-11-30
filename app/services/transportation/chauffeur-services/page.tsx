'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function ChauffeurServices() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          TRANSPORTATION / CHAUFFEUR
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          THE ART OF<br />
          <span className="italic text-white/80">INVISIBLE</span><br />
          MOVEMENT
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6">
            For the C-Suite, time is the only non-renewable asset. We protect it fiercely with military-grade logistics and white-glove execution.
          </p>
          <div className="flex flex-col gap-4 font-mono text-xs text-white/50 uppercase tracking-widest">
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span>Vehicle</span>
              <span>Capacity</span>
            </div>
            <div className="flex justify-between">
              <span>Mercedes S-Class</span>
              <span>2-3 Pax</span>
            </div>
            <div className="flex justify-between">
              <span>Cadillac Escalade ESV</span>
              <span>6 Pax</span>
            </div>
            <div className="flex justify-between">
              <span>Mercedes Sprinter</span>
              <span>12-14 Pax</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl mb-8">The Operator Advantage</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              Most "luxury concierges" are simply brokers who farm out your ride to the lowest bidder. At Detailed Travel Group, we <strong>operate</strong> our logistics. This fundamental difference ensures:
            </p>
            <ul className="space-y-4 font-mono text-sm uppercase tracking-wide">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                <strong>Vetted Chauffeurs:</strong> Full-time employees, NDAs signed, background checked.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                <strong>Asset Control:</strong> We own the fleet. No "mystery vehicles" showing up.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                <strong>Real-Time Ops:</strong> 24/7 dispatch team tracking traffic and flight delays.
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-8">
            <div className="w-full h-[600px] bg-zinc-100 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-0 left-0 p-8">
                 <p className="font-serif text-5xl text-black mix-blend-difference">The Fleet</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sell / Interlinking */}
      <section className="bg-black text-white py-24 px-6 md:px-24 border-t border-white/20">
        <div className="max-w-[1800px] mx-auto">
          <h3 className="font-serif text-3xl mb-12">Complete Your Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/transportation/airport-concierge" className="group block border-t border-white/20 pt-6">
              <span className="font-mono text-xs text-white/50 mb-2 block">01</span>
              <h4 className="font-sans text-xl group-hover:text-white/70 transition-colors">Airport Concierge</h4>
              <p className="text-white/40 text-sm mt-2">VIP meet & greet for seamless arrivals.</p>
            </Link>
            <Link href="/services/security/executive-protection" className="group block border-t border-white/20 pt-6">
              <span className="font-mono text-xs text-white/50 mb-2 block">02</span>
              <h4 className="font-sans text-xl group-hover:text-white/70 transition-colors">Executive Protection</h4>
              <p className="text-white/40 text-sm mt-2">Secure transport for high-profile principals.</p>
            </Link>
            <Link href="/services/events/major-events" className="group block border-t border-white/20 pt-6">
              <span className="font-mono text-xs text-white/50 mb-2 block">03</span>
              <h4 className="font-sans text-xl group-hover:text-white/70 transition-colors">Major Event Logistics</h4>
              <p className="text-white/40 text-sm mt-2">Transportation for F1, Galas, and Awards.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What types of vehicles are in your luxury fleet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our executive fleet primarily consists of the Mercedes-Benz S-Class for 2-3 passengers, Cadillac Escalade ESV for up to 6 passengers, and luxury Mercedes Sprinter Vans for larger groups. All vehicles are black-on-black, de-badged where possible, and meticulously maintained."
              }
            }, {
              "@type": "Question",
              "name": "Do you offer hourly chauffeur services in NYC?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in 'As Directed' hourly chauffeur services in New York City and the tri-state area. This provides you with a dedicated vehicle and driver for the duration of your day, ensuring flexibility for meetings, shopping, or events."
              }
            }, {
              "@type": "Question",
              "name": "Can you handle airport transfers for private aviation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We have security clearance for tarmac access at Teterboro (TEB), Westchester (HPN), and Farmingdale (FRG) airports, allowing for seamless tail-to-vehicle transfers."
              }
            }]
          })
        }}
      />

      <Footer />
    </main>
  );
}
