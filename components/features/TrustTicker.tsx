'use client';

import { motion } from 'framer-motion';

export function TrustTicker() {
  const companies = [
    "Goldman Sachs",
    "J.P. Morgan", 
    "Bloomberg",
    "McKinsey & Co",
    "BlackRock",
    "Formula 1",
    "Wasserman",
    "Octagon",
    "IMG"
  ];

  return (
    <div className="bg-white border-y border-black py-8 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...companies, ...companies, ...companies].map((company, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="font-serif text-2xl italic text-black mr-4 opacity-70">Trusted By</span>
            <span className="font-sans text-xl font-bold uppercase tracking-widest text-black">
              {company}
            </span>
            <span className="font-serif text-2xl italic text-black ml-8 opacity-30">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}

