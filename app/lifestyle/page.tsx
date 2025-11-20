import Image from 'next/image';
import Link from 'next/link';

export default function LifestylePage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[600px]">
                <Image
                    src="/images/dining.png"
                    alt="Fine Dining Experience"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
                            Lifestyle & Access
                        </h1>
                        <p className="text-xl text-neutral-200 font-light max-w-2xl mx-auto">
                            The keys to the city, and the world. From sold-out Broadway shows to last-minute reservations at the most coveted tables.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 px-6">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-8">
                        Curated Experiences
                    </h2>
                    <p className="text-2xl md:text-3xl font-playfair text-primary-dark leading-relaxed">
                        We don't just make reservations; we create experiences. Our relationships with the world's top hospitality groups ensure you are always treated as a VIP.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-24 bg-neutral-50 px-6">
                <div className="max-w-[1400px] mx-auto space-y-24">

                    {/* Dining */}
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <h3 className="text-4xl font-playfair font-bold text-primary-dark mb-6">
                                Dining & Nightlife
                            </h3>
                            <p className="text-neutral-600 leading-relaxed mb-8">
                                Skip the waitlist. We hold prime tables at New York's most exclusive restaurants and provide seamless entry to top-tier nightclubs. Whether it's a quiet omakase for two or a private room for twenty, we handle every detail.
                            </p>
                            <ul className="space-y-3 text-neutral-500 mb-8">
                                <li>• Priority Reservations</li>
                                <li>• Chef's Table Experiences</li>
                                <li>• Private Dining Coordination</li>
                                <li>• VIP Club Access</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 relative h-[400px] w-full">
                            <div className="absolute inset-0 bg-neutral-200" />
                            {/* Placeholder for dining image */}
                            <Image
                                src="/images/dining.png"
                                alt="Dining"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Events */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                        <div className="md:w-1/2">
                            <h3 className="text-4xl font-playfair font-bold text-primary-dark mb-6">
                                Events & Entertainment
                            </h3>
                            <p className="text-neutral-600 leading-relaxed mb-8">
                                Experience the unforgettable. We secure access to sold-out concerts, major sporting events, fashion weeks, and award shows. Our team can also plan bespoke private events, from yacht parties to intimate gatherings.
                            </p>
                            <ul className="space-y-3 text-neutral-500 mb-8">
                                <li>• Premium Seating & Boxes</li>
                                <li>• Backstage Access</li>
                                <li>• Red Carpet Events</li>
                                <li>• Private Event Production</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 relative h-[400px] w-full">
                            <div className="absolute inset-0 bg-neutral-200" />
                            {/* Placeholder for events image - reusing concierge for now */}
                            <Image
                                src="/images/concierge.png"
                                alt="Events"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-white text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-dark mb-8">
                        Live Without Limits
                    </h2>
                    <p className="text-neutral-500 mb-12 text-lg">
                        Join our membership to unlock full lifestyle management services.
                    </p>
                    <Link
                        href="/membership"
                        className="inline-block px-10 py-4 bg-secondary text-white font-bold tracking-widest uppercase hover:bg-primary-dark transition-colors"
                    >
                        Explore Membership
                    </Link>
                </div>
            </section>
        </div>
    );
}
