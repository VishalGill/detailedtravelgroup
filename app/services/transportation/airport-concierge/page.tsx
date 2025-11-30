'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function AirportConcierge() {
  const related = [
    {
      number: "01",
      title: "Chauffeur Services",
      description: "Seamless curb-to-cabin transfers.",
      link: "/services/transportation/chauffeur-services"
    },
    {
      number: "02",
      title: "Private Aviation",
      description: "Charter options when commercial won't suffice.",
      link: "/services/transportation/private-aviation"
    },
    {
      number: "03",
      title: "Secure Transport",
      description: "Armored vehicles for high-profile arrivals.",
      link: "/services/security/secure-transportation"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          TRANSPORTATION / AIRPORT
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          THE INVISIBLE<br />ARRIVAL
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6">
            Bypass the chaos. From curbside to aircraft door, our airport concierge teams at JFK, EWR, and LGA provide a seamless, expedited experience for commercial travelers.
          </p>
          <div className="flex flex-col gap-4 font-mono text-xs text-white/50 uppercase tracking-widest">
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span>Service</span>
              <span>Availability</span>
            </div>
            <div className="flex justify-between">
              <span>VIP Meet & Greet</span>
              <span>JFK / EWR / LGA</span>
            </div>
            <div className="flex justify-between">
              <span>Private Suite Access</span>
              <span>JFK / LAX / LHR</span>
            </div>
            <div className="flex justify-between">
              <span>Tarmac Transfer</span>
              <span>Select Airlines</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl mb-8">Commercial Made Private</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              We bridge the gap between commercial flying and private aviation. Our agents handle every logistical detail, ensuring you never see a queue, a baggage claim carousel, or a crowded terminal.
            </p>
            <ul className="space-y-4 font-mono text-sm uppercase tracking-wide">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                <strong>Expedited Screening:</strong> Priority access through TSA and Customs/Immigration.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                <strong>Lounge Access:</strong> Entry to exclusive airline lounges and private suites.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                <strong>Luggage Porter:</strong> Seamless baggage handling from check-in to retrieval.
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-8">
            <div className="w-full h-[600px] bg-zinc-100 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-0 left-0 p-8">
                 <p className="font-serif text-5xl text-black mix-blend-difference">Private Terminal</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sell / Interlinking */}
      <RelatedServices services={related} />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What services are included in VIP Meet & Greet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our VIP Meet & Greet service includes a dedicated agent who meets you at the curb (for departures) or aircraft door (for arrivals), escorts you through expedited security or customs lines, assists with luggage, and coordinates with your ground transportation."
              }
            }, {
              "@type": "Question",
              "name": "Can you arrange tarmac transfers at JFK?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, for select commercial flights and private aviation, we can arrange tarmac transfers where a vehicle picks you up directly from the aircraft, bypassing the main terminal entirely. This is subject to airline and airport authority approval."
              }
            }, {
              "@type": "Question",
              "name": "Do you offer services at international airports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Detailed Travel Group operates a global network. We can arrange VIP airport concierge services at major hubs worldwide, including London Heathrow (LHR), Paris Charles de Gaulle (CDG), Dubai (DXB), and Los Angeles (LAX)."
              }
            }]
          })
        }}
      />

      <Footer />
    </main>
  );
}

