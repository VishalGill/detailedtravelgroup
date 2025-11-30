'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function GiftSourcing() {
  const related = [
    {
      number: "01",
      title: "Personal Shopping",
      description: "Fashion and accessories sourcing.",
      link: "/services/lifestyle/personal-shopping"
    },
    {
      number: "02",
      title: "Secure Transport",
      description: "Armored delivery for high-value items.",
      link: "/services/security/secure-transportation"
    },
    {
      number: "03",
      title: "Private Aviation",
      description: "Hand-carry delivery via private jet.",
      link: "/services/transportation/private-aviation"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          SPECIALIZED / GIFTING
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          THE RARE<br />FIND
        </h1>
        <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6 max-w-2xl">
          When it absolutely must be found. We scour the globe for limited editions, vintage collectibles, and impossible-to-acquire gifts.
        </p>
      </section>

      {/* Details */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl mb-8">Acquisition Artistry</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              Whether it's a specific vintage of wine for a 50th anniversary or a sold-out timepiece for a graduation, our network of dealers, auction houses, and collectors allows us to source the unavailable.
            </p>
            <div className="bg-zinc-100 p-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-4">Expertise</h3>
              <ul className="space-y-2 text-sm text-black/60">
                <li>• Rare Timepieces (Patek, Rolex, AP)</li>
                <li>• Fine Jewelry & Gemstones</li>
                <li>• Vintage Wines & Spirits</li>
                <li>• Limited Edition Art & Collectibles</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="w-full h-[600px] bg-zinc-100 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-0 left-0 p-8">
                 <p className="font-serif text-5xl text-black mix-blend-difference">The Object</p>
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

