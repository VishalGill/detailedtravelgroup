import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export default function ServicesPage() {
    const services = [
        {
            title: 'Private Aviation',
            description: 'Global reach on your terms. From light jets for regional hops to ultra-long-range aircraft for intercontinental travel, we curate the perfect fleet for your journey.',
            imageSrc: '/images/jet.png',
            href: '/aviation',
        },
        {
            title: 'Executive Protection',
            description: 'Uncompromising safety. Our elite security teams provide discreet protection for high-profile individuals, families, and corporate executives worldwide.',
            imageSrc: '/images/security.png',
            href: '/security',
        },
        {
            title: 'Lifestyle Management',
            description: 'Curating the exceptional. From priority dining reservations at the world\'s most exclusive restaurants to VIP access at sold-out events.',
            imageSrc: '/images/dining.png',
            href: '/lifestyle',
        },
        {
            title: 'Global Concierge',
            description: 'Your dedicated team for the impossible. Rare acquisitions, relocation services, and bespoke travel itineraries crafted to perfection.',
            imageSrc: '/images/concierge.png',
            href: '/services', // Self-referential for now, or could be a specific contact anchor
        },
    ];

    return (
        <div className="bg-white pt-20">
            {/* Header */}
            <section className="py-24 px-6 bg-neutral-50">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary-dark mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light">
                        A comprehensive suite of luxury services designed to reclaim your time and elevate your lifestyle.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary-dark text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8">
                        Don't see what you're looking for?
                    </h2>
                    <p className="text-neutral-300 mb-12 text-lg">
                        Our team specializes in bespoke requests. If you can imagine it, we can arrange it.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 border border-white text-white font-bold tracking-widest uppercase hover:bg-white hover:text-primary-dark transition-colors"
                    >
                        Contact Concierge
                    </Link>
                </div>
            </section>
        </div>
    );
}
