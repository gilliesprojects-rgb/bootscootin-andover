export default function Footer() {
  return (
    <footer className="bg-leather-dark text-brand-cream mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-brand-gold mb-3">Boot Scootin&apos; Andover</h3>
            <p className="text-sm text-brand-light leading-relaxed">
              Friendly line dancing in Andover, Hampshire. Easy steps, great
              music, no partner needed — just a pair of boots and a smile.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-brand-gold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-brand-gold transition">
                  About
                </a>
              </li>
              <li>
                <a href="/classes" className="hover:text-brand-gold transition">
                  Classes &amp; Times
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-brand-gold transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-brand-gold mb-3">Find Us</h3>
            <p className="text-sm text-brand-light">
              Andover, Hampshire
              <br />
              <span className="italic text-brand-light/80">
                Venue to be confirmed
              </span>
            </p>
          </div>
        </div>
        <div className="border-t border-brand-medium mt-8 pt-4 text-center text-xs text-brand-light">
          &copy; {new Date().getFullYear()} Boot Scootin&apos; Andover. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
