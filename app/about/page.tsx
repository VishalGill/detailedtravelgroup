import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Detailed Travel Group, your premier luxury travel concierge dedicated to creating extraordinary experiences.',
};

export default function AboutPage() {
  return (
    <div className="pt-[110px] pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-extrabold mb-6">
            About Detailed Travel Group
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Redefining luxury travel through personalized service, exclusive access, and unwavering attention to detail
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-600 mb-4">
                At Detailed Travel Group, we believe that exceptional travel is about more than reaching a destination—it's about crafting moments that become cherished memories.
              </p>
              <p className="text-lg text-neutral-600 mb-4">
                Our mission is to provide discerning travelers with seamless, sophisticated travel experiences that exceed expectations at every touchpoint. From the moment you contact us to the conclusion of your journey, we handle every detail with precision and care.
              </p>
              <p className="text-lg text-neutral-600">
                We are not just service providers; we are your trusted partners in creating extraordinary experiences that reflect your unique style and preferences.
              </p>
            </div>
            <div className="bg-neutral-100 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Global Excellence
              </h3>
              <p className="text-neutral-600">
                Serving clients worldwide with the same dedication to quality and attention to detail that defines luxury travel.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20 bg-neutral-50 rounded-3xl p-12 md:p-16">
          <h2 className="text-4xl font-playfair font-bold mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-playfair font-bold mb-3">Excellence</h3>
              <p className="text-neutral-600">
                We pursue perfection in every interaction, ensuring the highest standards of service quality.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-playfair font-bold mb-3">Integrity</h3>
              <p className="text-neutral-600">
                Transparency, honesty, and discretion are the foundation of our client relationships.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-playfair font-bold mb-3">Personalization</h3>
              <p className="text-neutral-600">
                Every client is unique, and we tailor our services to match individual preferences and needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-20">
          <h2 className="text-4xl font-playfair font-bold mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-2xl font-playfair font-bold mb-4">Transportation</h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Premium black car service with professional chauffeurs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Private jet charters for domestic and international travel</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Helicopter transfers and yacht charters</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-2xl font-playfair font-bold mb-4">VIP Services</h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Airport meet and greet with fast-track security</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Private lounge access and concierge assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Event access and VIP experiences</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-2xl font-playfair font-bold mb-4">Lifestyle</h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Exclusive restaurant reservations worldwide</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Private chef arrangements and culinary experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Luxury shopping and personal styling services</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-2xl font-playfair font-bold mb-4">Accommodations</h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Five-star hotel bookings and suite upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Private villa and estate rentals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Unique and exclusive property access</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Discover how Detailed Travel Group can transform your travel experiences with personalized service and exclusive access.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-black rounded-xl px-8 py-4 font-semibold hover:bg-neutral-100 transition-colors"
          >
            Contact Our Team
          </a>
        </section>
      </div>
    </div>
  );
}
