'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServiceGrid } from '@/components/ui/ServiceGrid';

export default function ServicesHub() {
  const categories = [
    {
      id: "TRANSPORTATION",
      title: "Ground & Air Logistics",
      description: "The foundation of our service. Whether it's an S-Class for a board meeting or a Gulfstream for a holiday, we control the movement.",
      link: "/services/transportation",
      image: "/images/services/transport.jpg"
    },
    {
      id: "EVENTS",
      title: "Major Event Access",
      description: "From the Paddock Club at F1 Miami to the red carpet at the Met Gala. We provide access, logistics, and on-site management.",
      link: "/services/events",
      image: "/images/services/events.jpg"
    },
    {
      id: "LIFESTYLE",
      title: "Lifestyle Management",
      description: "Restaurant reservations, personal shopping, and wellness. We handle the details of your life so you can enjoy living it.",
      link: "/services/lifestyle",
      image: "/images/services/lifestyle.jpg"
    },
    {
      id: "SECURITY",
      title: "Executive Protection",
      description: "Discreet, professional security for high-profile individuals. Secure transport, residential security, and travel risk assessment.",
      link: "/services/security",
      image: "/images/services/security.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-40 pb-20 px-6 md:px-24">
        <h1 className="font-serif text-6xl md:text-9xl text-white mb-8">
          THE<br />INDEX
        </h1>
        <p className="font-sans text-xl font-light text-white/60 max-w-2xl border-l border-white/20 pl-6">
          A comprehensive directory of our capabilities. We operate at the intersection of logistics, luxury, and lifestyle.
        </p>
      </div>

      <ServiceGrid title="CATEGORIES" items={categories} />

      <Footer />
    </main>
  );
}
