import { venues, mailtoUrl, telUrl, whatsappUrl, business } from "@/lib/site";

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
            <p className="text-sm text-brand-light leading-relaxed mt-4 space-y-1">
              <a href={mailtoUrl} className="block hover:text-brand-gold transition">
                {business.email}
              </a>
              <a href={telUrl} className="block hover:text-brand-gold transition">
                {business.phoneDisplay}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-brand-gold transition"
              >
                Message us on WhatsApp
              </a>
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
            <h3 className="font-bold text-brand-gold mb-3">Where We Dance</h3>
            <ul className="space-y-3 text-sm text-brand-light">
              {venues.map((v) => (
                <li key={v.id}>
                  <span className="font-semibold text-brand-cream">{v.name}</span>
                  <br />
                  {v.locality}, {v.region} {v.postcode}
                  <br />
                  <span className="text-brand-light/80">{v.day}s</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-medium mt-8 pt-4 text-center text-xs text-brand-light">
          &copy; {new Date().getFullYear()} Boot Scootin&apos; Andover. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
