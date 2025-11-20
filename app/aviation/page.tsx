import Image from 'next/image';
import Link from 'next/link';

export default function AviationPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[600px]">
                <Image
                    src="/images/jet.png"
                    alt="Private Jet on Tarmac"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
                            Private Aviation
                        </h1>
                        <p className="text-xl text-neutral-200 font-light max-w-2xl mx-auto">
                            Fly on your own terms. Access over 5,000 aircraft worldwide with as little as 4 hours notice.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 px-6">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-8">
                        The Fleet
                    </h2>
                    <p className="text-2xl md:text-3xl font-playfair text-primary-dark leading-relaxed">
                        Whether you need a light jet for a quick regional hop or a heavy cabin aircraft for a transoceanic flight, we source the perfect aircraft for your mission. Safety, privacy, and comfort are our non-negotiables.
                    </p>
                </div>
            </section>

            {/* Fleet Categories */}
            <section className="py-24 bg-neutral-50 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Light Jets */}
                        <div className="bg-white p-8 shadow-sm border border-neutral-100">
                            <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-4">Light Jets</h3>
                            <ul className="space-y-3 text-neutral-600 mb-8">
                                <li>• Range: Up to 3.5 hours</li>
                                <li>• Passengers: 6-7</li>
                                <li>• Perfect for: NYC to Miami, LA to Vegas</li>
                            </ul>
                            <p className="text-sm text-neutral-500">
                                Ideal for short-haul flights. Efficient, fast, and access to smaller airports.
                            </p>
                        </div>

                        {/* Midsize Jets */}
                        <div className="bg-white p-8 shadow-sm border border-neutral-100 transform md:-translate-y-8">
                            <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-4">Midsize Jets</h3>
                            <ul className="space-y-3 text-neutral-600 mb-8">
                                <li>• Range: Up to 5 hours</li>
                                <li>• Passengers: 8-9</li>
                                <li>• Perfect for: NYC to LA, London to Moscow</li>
                            </ul>
                            <p className="text-sm text-neutral-500">
                                Stand-up cabins, flight attendants, and enhanced luggage capacity.
                            </p>
                        </div>

                        {/* Heavy Jets */}
                        <div className="bg-white p-8 shadow-sm border border-neutral-100">
                            <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-4">Heavy Jets</h3>
                            <ul className="space-y-3 text-neutral-600 mb-8">
                                <li>• Range: 10+ hours</li>
                                <li>• Passengers: 10-16</li>
                                <li>• Perfect for: NYC to London, Dubai to Tokyo</li>
                            </ul>
                            <p className="text-sm text-neutral-500">
                                The ultimate in luxury. Full beds, showers, and gourmet galleys.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Helicopter Transfers */}
            <section className="py-24 px-6">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-playfair font-bold text-primary-dark mb-6">
                            Helicopter Transfers
                        </h2>
                        <p className="text-neutral-600 leading-relaxed mb-8">
                            Skip the traffic. Our helicopter service transforms a 2-hour drive into a 15-minute flight.
                            Seamless connections from major airports directly to Manhattan heliports or the Hamptons.
                        </p>
                        <Link
                            href="/contact"
                            className="text-primary-dark font-bold tracking-widest uppercase border-b border-primary-dark pb-1 hover:text-secondary hover:border-secondary transition-colors"
                        >
                            Request Quote
                        </Link>
                    </div>
                    <div className="md:w-1/2 relative h-[400px] w-full bg-neutral-100">
                        {/* Placeholder for heli image if we had one, reusing jet for now or just a color block */}
                        <div className="absolute inset-0 bg-primary-light/10 flex items-center justify-center text-primary-dark/20 font-bold text-4xl">
                            BLADE / HELI
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-primary-dark text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
                        Ready for Takeoff?
                    </h2>
                    <p className="text-neutral-300 mb-12 text-lg">
                        Contact our aviation desk for a quote. We are available 24/7.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-primary-dark font-bold tracking-widest uppercase hover:bg-secondary hover:text-white transition-colors"
                        >
                            Request Charter
                        </Link>
                        <a
                            href="tel:+1555DTGLUXE"
                            className="px-10 py-4 border border-white text-white font-bold tracking-widest uppercase hover:bg-white/10 transition-colors"
                        >
                            Call Aviation Desk
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
