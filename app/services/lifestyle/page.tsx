'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServiceGrid } from '@/components/ui/ServiceGrid';

export default function LifestyleHub() {
  const services = [
    {
      id: "DINING",
      title: "Dining Reservations",
      description: "Access to the impossible. Carbone, Rao's, Polo Bar. We maintain direct relationships with General Managers to secure prime tables.",
      link: "/services/lifestyle/dining-reservations",
      image: "/images/services/dining.jpg"
    },
    {
      id: "ACCESS",
      title: "Entertainment Access",
      description: "Sold out is a suggestion. VIP boxes, backstage passes, and premium seats for concerts, theater, and sporting events.",
      link: "/services/lifestyle/entertainment-access",
      image: "/images/services/entertainment.jpg"
    },
    {
      id: "SHOPPING",
      title: "Personal Shopping",
      description: "Global sourcing for rare luxury goods. From Hermès quotas to vintage Patek Philippe, our network finds what others cannot.",
      link: "/services/lifestyle/personal-shopping",
      image: "/images/services/shopping.jpg"
    },
    {
      id: "WELLNESS",
      title: "Wellness & Spa",
      description: "Regenerative luxury. Private spa bookings, medical concierge referrals, and exclusive wellness retreat planning.",
      link: "/services/lifestyle/wellness-spa",
      image: "/images/services/wellness.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-40 pb-20 px-6 md:px-24">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          SERVICES / LIFESTYLE
        </span>
        <h1 className="font-serif text-6xl md:text-9xl text-white mb-8">
          CURATED<br />LIVING
        </h1>
        <p className="font-sans text-xl font-light text-white/60 max-w-2xl border-l border-white/20 pl-6">
          We handle the details of your life so you can enjoy living it. Access, sourcing, and experiences that money alone cannot buy.
        </p>
      </div>

      <ServiceGrid title="EXPERIENCES" items={services} />

      <Footer />
    </main>
  );
}

