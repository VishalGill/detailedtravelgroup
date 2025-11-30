'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RelatedServices } from '@/components/ui/RelatedServices';

export default function PersonalShopping() {
  const related = [
    {
      number: "01",
      title: "Gift Sourcing",
      description: "Rare acquisitions for when it absolutely must be found.",
      link: "/services/specialized/gift-sourcing"
    },
    {
      number: "02",
      title: "Secure Transport",
      description: "Armored logistics for high-value jewelry and art.",
      link: "/services/security/secure-transportation"
    },
    {
      number: "03",
      title: "Fashion Week",
      description: "Front row access and showroom appointments.",
      link: "/services/events/major-events"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-24 bg-black text-white">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          LIFESTYLE / SHOPPING
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-white mb-12">
          GLOBAL<br />SOURCING
        </h1>
        <p className="font-sans text-xl font-light text-white/70 border-l border-white/20 pl-6 max-w-2xl">
          From Hermès quotas to vintage Patek Philippe. Our network finds what others cannot.
        </p>
      </section>

      {/* Details */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl mb-8">The Hunt</h2>
            <p className="font-sans text-lg font-light text-black/70 mb-8">
              We don't just shop; we acquire. Our team specializes in procuring hard-to-find luxury goods, coordinating private showroom viewings, and managing international shipping logistics.
            </p>
            <ul className="space-y-4 font-mono text-sm uppercase tracking-wide text-black/60">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                Timepieces & Jewelry
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                Couture & Leather Goods
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black block" />
                Fine Art Advisory
              </li>
            </ul>
          </div>
          <div className="bg-zinc-100 h-[500px] w-full relative">
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="font-mono text-xs text-black/30">IMAGE: LUXURY BOUTIQUE</span>
             </div>
          </div>
        </div>
      </section>

      <RelatedServices services={related} />

      <Footer />
    </main>
  );
}

