'use client';

import { BookingWidget } from '@/components/booking/BookingWidget';

interface HeroMonolithProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function HeroMonolith({
  title = "THE SILENT ARRIVAL",
  subtitle = "Precision logistics for the C-Suite. Privacy as a standard, not an option.",
  backgroundImage = "/images/hero-bg.jpg" // We'll need to ensure this image exists or use a placeholder
}: HeroMonolithProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row bg-black overflow-hidden pt-20">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-50 opacity-30"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Left Side - Typography */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 lg:pl-20 py-20 lg:py-0 animate-fade-in-slow">
        <div className="font-mono text-xs text-white/50 uppercase tracking-widest-xl mb-8">
          Est. 2025 — New York City
        </div>
        
        <h1 className="font-serif text-6xl lg:text-8xl xl:text-9xl text-white leading-[0.9] mb-12">
          {title.split(' ').map((word, i) => (
            <span key={i} className={`block ${i === 1 ? 'italic opacity-80' : ''}`}>
              {word}
            </span>
          ))}
        </h1>

        <div className="pl-6 border-l border-white/20 max-w-md">
          <p className="font-sans text-lg lg:text-xl font-light text-white/70">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right Side - Booking Widget */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-20 pb-20 lg:py-0">
        <div className="w-full max-w-md animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}

