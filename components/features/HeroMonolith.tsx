'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroMonolith() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col md:flex-row overflow-hidden">
      {/* Background Layer - Cityscape */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 grayscale contrast-125 brightness-50"
          style={{ backgroundImage: 'url("/images/nyc-cityscape.jpg")' }} // Fallback image path
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Left Side - Typography */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center p-8 md:p-24 pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
            Est. 2025 — New York City
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9]">
            THE<br />
            <span className="italic opacity-80">IMPOSSIBLE</span><br />
            MADE<br />
            POSSIBLE
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="pl-6 border-l border-white/20 max-w-md"
        >
          <p className="font-sans text-lg font-light text-white/70">
            Precision logistics for the C-Suite. Privacy as a standard, not an option. From Wall Street to Teterboro.
          </p>
        </motion.div>
      </div>

      {/* Right Side - Contact CTA (Replaces Widget) */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-gradient-to-t from-black md:bg-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
            <h3 className="font-serif text-4xl text-white mb-6">Begin The Request</h3>
            <p className="font-sans text-sm text-white/60 mb-10 max-w-xs">
              For immediate assistance or complex itineraries, contact our 24/7 concierge desk.
            </p>
            
            <div className="w-full space-y-4">
              <Link 
                href="/contact" 
                className="block w-full bg-white text-black px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-white/90 transition-colors"
              >
                Inquire Now
              </Link>
              <a 
                href="tel:+18884200177" 
                className="block w-full border border-white/20 text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Call (888) 420-0177
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
