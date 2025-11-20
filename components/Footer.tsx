import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col group mb-6">
              <span className="text-2xl font-playfair font-bold tracking-tight text-white">
                DETAILED
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-secondary">
                Travel Group
              </span>
            </Link>
            <p className="text-neutral-400 max-w-sm mb-8 font-light leading-relaxed">
              New York's premier luxury concierge, providing unparalleled access and lifestyle management for the world's most discerning individuals.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              {['instagram', 'facebook', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                  aria-label={social}
                >
                  <span className="capitalize sr-only">{social}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/aviation" className="text-neutral-400 hover:text-secondary transition-colors">Private Aviation</Link></li>
              <li><Link href="/security" className="text-neutral-400 hover:text-secondary transition-colors">Executive Protection</Link></li>
              <li><Link href="/lifestyle" className="text-neutral-400 hover:text-secondary transition-colors">Lifestyle Management</Link></li>
              <li><Link href="/events" className="text-neutral-400 hover:text-secondary transition-colors">Event Access</Link></li>
              <li><Link href="/services" className="text-neutral-400 hover:text-secondary transition-colors">View All Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-neutral-400 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/membership" className="text-neutral-400 hover:text-secondary transition-colors">Membership</Link></li>
              <li><Link href="/careers" className="text-neutral-400 hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">Headquarters</h4>
            <ul className="space-y-4 text-neutral-400">
              <li>
                <div className="text-white font-medium mb-1">New York</div>
                <p>1 World Trade Center<br />New York, NY 10007</p>
              </li>
              <li className="pt-2">
                <a href="tel:+12125550123" className="hover:text-white transition-colors">+1 (212) 555-0123</a>
              </li>
              <li>
                <a href="mailto:concierge@detailedtravel.com" className="hover:text-white transition-colors">concierge@detailedtravel.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <p>&copy; {currentYear} Detailed Travel Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
