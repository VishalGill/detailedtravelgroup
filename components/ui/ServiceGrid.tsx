'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  link: string;
  image?: string;
}

interface ServiceGridProps {
  title: string;
  items: ServiceItem[];
}

export function ServiceGrid({ title, items }: ServiceGridProps) {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sticky Title */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32">
            <h2 className="font-serif text-5xl md:text-7xl leading-none mb-4">
              {title}
            </h2>
            <div className="h-px w-24 bg-white/30 mb-8" />
            <p className="font-mono text-xs text-white/50 uppercase tracking-widest">
              Detailed Travel Group
            </p>
          </div>
        </div>

        {/* Content Stack */}
        <div className="lg:col-span-8 flex flex-col gap-24">
          {items.map((item, index) => (
            <div key={item.id} className="group border-t border-white/20 pt-12">
              <div className="flex flex-col md:flex-row gap-8 justify-between">
                <div className="flex-1">
                  <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
                    0{index + 1} — {item.id}
                  </span>
                  <h3 className="font-sans text-3xl font-light mb-6 group-hover:text-white/80 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-serif text-xl text-white/60 leading-relaxed max-w-xl mb-8">
                    {item.description}
                  </p>
                  <Link 
                    href={item.link}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors"
                  >
                    Explore Service <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
                
                {/* Image Placeholder (Grayscale) */}
                <div className="w-full md:w-64 h-40 bg-zinc-900 overflow-hidden relative">
                  {item.image && (
                    <div 
                      className="absolute inset-0 bg-cover bg-center hover-reveal-img"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
