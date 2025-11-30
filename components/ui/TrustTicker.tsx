export function TrustTicker() {
  const companies = [
    "Goldman Sachs",
    "J.P. Morgan",
    "Bloomberg",
    "McKinsey & Co",
    "BlackRock",
    "Wasserman",
    "Octagon",
    "Formula 1",
    "Condé Nast",
    "LVMH"
  ];

  return (
    <div className="w-full bg-white border-y border-black py-8 overflow-hidden">
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...companies, ...companies].map((company, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="font-serif text-2xl italic text-black mx-4">/</span>
              <span className="font-sans text-xl font-bold uppercase tracking-widest text-black">
                {company}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {[...companies, ...companies].map((company, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="font-serif text-2xl italic text-black mx-4">/</span>
              <span className="font-sans text-xl font-bold uppercase tracking-widest text-black">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

