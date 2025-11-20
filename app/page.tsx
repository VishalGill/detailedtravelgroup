import Hero3D from '@/components/Hero3D';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'Private Aviation',
      description: 'Seamless global travel with our fleet of private jets and helicopters. Depart on your schedule, arrive in style.',
      imageSrc: '/images/jet.png',
      href: '/aviation',
    },
    {
      title: 'Executive Protection',
      description: 'Discreet, top-tier security for peace of mind. From personal bodyguards to secure transport convoys.',
      imageSrc: '/images/security.png',
      href: '/security',
    },
    {
      title: 'Dining & Nightlife',
      description: 'Access to the inaccessible. Priority reservations at Michelin-starred restaurants and exclusive clubs worldwide.',
      imageSrc: '/images/dining.png',
      href: '/lifestyle',
    },
    {
      title: 'Global Concierge',
      description: 'Your personal lifestyle manager. From event access to rare acquisitions, we handle the impossible.',
      imageSrc: '/images/concierge.png',
      href: '/services',
    },
  ];

  return (
    <div className="bg-white">
      <Hero3D />

      {/* Introduction */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-6">
            The Standard of Excellence
          </h2>
          <p className="text-3xl md:text-5xl font-playfair font-medium text-primary-dark leading-tight max-w-4xl mx-auto">
            "Detailed Travel Group is not just a service; it is the architect of your most memorable moments. We bridge the gap between desire and reality."
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-dark mb-4">
                Our Expertise
              </h2>
              <p className="text-neutral-500 max-w-md">
                Curated services designed for the modern elite.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden md:inline-flex items-center text-sm font-bold tracking-widest uppercase border-b border-primary-dark pb-1 hover:text-secondary hover:border-secondary transition-colors"
            >
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-bold tracking-widest uppercase border-b border-primary-dark pb-1"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Teaser */}
      <section className="relative py-32 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Abstract background pattern could go here */}
          <div className="absolute inset-0 bg-[url('/images/concierge.png')] bg-cover bg-center grayscale mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-secondary text-sm font-bold tracking-[0.3em] uppercase mb-6">
            Membership
          </h2>
          <h3 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8">
            Unlock the Unattainable
          </h3>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-12 font-light">
            Join an exclusive circle of individuals who demand nothing less than perfection.
            Our tiered membership program offers priority access, dedicated lifestyle management,
            and privileges reserved for the few.
          </p>
          <Link
            href="/membership"
            className="inline-block px-10 py-5 bg-secondary text-white font-bold tracking-widest uppercase hover:bg-white hover:text-primary-dark transition-all duration-300"
          >
            Inquire About Membership
          </Link>
        </div>
      </section>
    </div>
  );
}
