import Image from 'next/image';
import Link from 'next/link';

export default function SecurityPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[600px]">
                <Image
                    src="/images/security.png"
                    alt="Executive Protection Detail"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
                            Executive Protection
                        </h1>
                        <p className="text-xl text-neutral-200 font-light max-w-2xl mx-auto">
                            Uncompromising safety. Discreet, professional, and world-class security solutions for those who cannot afford to be vulnerable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 px-6">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-8">
                        Peace of Mind
                    </h2>
                    <p className="text-2xl md:text-3xl font-playfair text-primary-dark leading-relaxed">
                        Our security personnel are drawn from the world's elite military and law enforcement units. We provide a protective shield that allows you to live your life freely, without fear or interruption.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-neutral-900 text-white px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Personal Protection */}
                        <div>
                            <h3 className="text-3xl font-playfair font-bold mb-6 text-secondary">Personal Protection</h3>
                            <p className="text-neutral-400 leading-relaxed mb-8">
                                Whether for a single event, international travel, or 24/7 coverage, our close protection officers (CPOs) are trained to blend seamlessly into your lifestyle. They are experts in threat assessment, route planning, and conflict de-escalation.
                            </p>
                            <ul className="space-y-4 text-neutral-300">
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                    <span>Close Protection Officers (Armed/Unarmed)</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                    <span>Secure Travel Logistics</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                    <span>Counter-Surveillance</span>
                                </li>
                            </ul>
                        </div>

                        {/* Residential Security */}
                        <div>
                            <h3 className="text-3xl font-playfair font-bold mb-6 text-secondary">Residential Security</h3>
                            <p className="text-neutral-400 leading-relaxed mb-8">
                                Your home is your sanctuary. We implement comprehensive security strategies for estates, apartments, and vacation properties. From physical guards to advanced technical surveillance systems.
                            </p>
                            <ul className="space-y-4 text-neutral-300">
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                    <span>24/7 Estate Guarding</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                    <span>Access Control & Screening</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                    <span>Technical Security Countermeasures (TSCM)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secure Transport */}
            <section className="py-24 px-6 bg-neutral-50">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 relative h-[500px] w-full">
                        {/* Reusing security image for now, but ideally a convoy shot */}
                        <Image
                            src="/images/security.png"
                            alt="Secure Transport"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-playfair font-bold text-primary-dark mb-6">
                            Secure Transport
                        </h2>
                        <p className="text-neutral-600 leading-relaxed mb-8">
                            Movement is often the point of highest vulnerability. Our secure transport services utilize armored vehicles and trained security drivers to ensure you move safely between locations. We coordinate with local authorities and advance teams to mitigate risks.
                        </p>
                        <Link
                            href="/contact"
                            className="text-primary-dark font-bold tracking-widest uppercase border-b border-primary-dark pb-1 hover:text-secondary hover:border-secondary transition-colors"
                        >
                            Inquire About Transport
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-white text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-dark mb-8">
                        Secure Your World
                    </h2>
                    <p className="text-neutral-500 mb-12 text-lg">
                        Consult with our security director for a confidential risk assessment.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 bg-primary-dark text-white font-bold tracking-widest uppercase hover:bg-secondary transition-colors"
                    >
                        Contact Security Desk
                    </Link>
                </div>
            </section>
        </div>
    );
}
