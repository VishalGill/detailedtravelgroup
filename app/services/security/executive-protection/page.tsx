'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function ExecutiveProtection() {
  const related = [
    {
      number: "01",
      title: "Secure Transport",
      description: "Ballistic vehicles and convoy logistics.",
      link: "/services/security/secure-transportation"
    },
    {
      number: "02",
      title: "Private Aviation",
      description: "Tarmac-to-tarmac security for principals.",
      link: "/services/transportation/private-aviation"
    },
    {
      number: "03",
      title: "Major Events",
      description: "Close protection for high-profile public appearances.",
      link: "/services/events/major-events"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          SECURITY / PROTECTION
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          THE INVISIBLE<br />SHIELD
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6">
            Security that enables your lifestyle, rather than restricting it. Our Executive Protection (EP) agents provide discreet, military-grade security for principals, families, and assets.
          </p>
          <div className="flex flex-col gap-4 font-mono text-xs text-white/50 uppercase tracking-widest">
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span>Service</span>
              <span>Coverage</span>
            </div>
            <div className="flex justify-between">
              <span>Close Protection</span>
              <span>Global / 24-7</span>
            </div>
            <div className="flex justify-between">
              <span>Residential Security</span>
              <span>NYC / Hamptons / Miami</span>
            </div>
            <div className="flex justify-between">
              <span>Secure Transport</span>
              <span>Armored Fleet Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl mb-8">Diplomacy Meets Force</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              Our protection teams are drawn from elite military units and law enforcement agencies. They are trained not just in combat, but in medical response, evasive driving, and conflict de-escalation.
            </p>
            <ul className="space-y-4 font-mono text-sm uppercase tracking-wide">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                <strong>Threat Assessment:</strong> Proactive intelligence gathering and route planning.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                <strong>Counter-Surveillance:</strong> Identifying and neutralizing monitoring efforts.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                <strong>Family Office Support:</strong> Security protocols for estates, schools, and travel.
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-8">
            <div className="w-full h-[600px] bg-zinc-100 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-0 left-0 p-8">
                 <p className="font-serif text-5xl text-black mix-blend-difference">Close Protection</p>
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
              "name": "What qualifications do your security agents have?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Executive Protection agents are recruited from special operations military units (SEALs, SAS, Rangers) and specialized law enforcement. All agents undergo rigorous background checks, psychological evaluations, and continuous training in medical response and defensive tactics."
              }
            }, {
              "@type": "Question",
              "name": "Do you offer armored vehicles?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we maintain a fleet of armored vehicles, including B6/VR6 rated SUVs and sedans. These vehicles provide ballistic protection while maintaining a low profile, allowing for secure movement in high-risk environments."
              }
            }, {
              "@type": "Question",
              "name": "Can you provide security for international travel?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We have a global network of security partners and can deploy Advance Teams to prepare for your arrival anywhere in the world, coordinating with local law enforcement and ensuring secure logistics from touchdown to takeoff."
              }
            }]
          })
        }}
      />

      <Footer />
    </main>
  );
}
