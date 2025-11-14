import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: '🚗',
      title: 'Black Car Service',
      description: 'Premium chauffeur-driven vehicles for business and leisure travel with professional drivers.',
      link: '/services/black-car',
    },
    {
      icon: '✈️',
      title: 'Private Jet Charters',
      description: 'Access to a global fleet of private aircraft for seamless, exclusive air travel.',
      link: '/services/private-jets',
    },
    {
      icon: '🛂',
      title: 'VIP Airport Service',
      description: 'Meet and greet, fast-track security, lounge access, and seamless airport navigation.',
      link: '/services/vip-airport',
    },
    {
      icon: '🍽️',
      title: 'Restaurant Reservations',
      description: 'Secure tables at the world\'s most exclusive restaurants and dining experiences.',
      link: '/services/restaurants',
    },
    {
      icon: '🎩',
      title: 'Concierge Services',
      description: 'Personalized assistance for all your travel needs, from planning to execution.',
      link: '/services/concierge',
    },
    {
      icon: '🏨',
      title: 'Luxury Accommodations',
      description: 'Curated selection of five-star hotels, private villas, and exclusive properties.',
      link: '/services/accommodations',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive luxury travel solutions tailored to your lifestyle and preferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-white border border-neutral-200 rounded-2xl p-8 hover:bg-neutral-50 hover:border-neutral-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-playfair font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-4">{service.description}</p>
              <div className="flex items-center text-black font-semibold">
                <span>Learn More</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
