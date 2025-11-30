'use client';

import Link from 'next/link';

interface RelatedService {
  title: string;
  description: string;
  link: string;
  number: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
}

export function RelatedServices({ services, title = "Complete Your Experience" }: RelatedServicesProps) {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-24 border-t border-white/20">
      <div className="max-w-[1800px] mx-auto">
        <h3 className="font-serif text-3xl mb-12">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.link} 
              href={service.link} 
              className="group block border-t border-white/20 pt-6"
            >
              <span className="font-mono text-xs text-white/50 mb-2 block">{service.number}</span>
              <h4 className="font-sans text-xl group-hover:text-white/70 transition-colors">
                {service.title}
              </h4>
              <p className="text-white/40 text-sm mt-2">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
