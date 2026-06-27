import ContactForm from "./ContactForm";
import { business, mailtoUrl, telUrl, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Boot Scootin' Andover — register interest, ask a question, or be the first to know about line dancing classes in Andover.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-leather-dark text-brand-cream">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <p className="uppercase tracking-[0.4em] text-brand-gold text-sm mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Say howdy
          </h1>
          <p className="mt-6 text-brand-light text-lg leading-relaxed max-w-2xl mx-auto">
            Got a question, want to reserve a spot, or just want to be the
            first to know when we kick off? Drop us a message below.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-cream rounded-2xl p-5 text-center shadow-sm border border-brand-light/40 hover:border-brand-gold transition"
            >
              <div className="text-3xl mb-2" aria-hidden>💬</div>
              <p className="font-semibold text-brand-dark">WhatsApp</p>
              <p className="text-sm text-brand-medium">{business.phoneDisplay}</p>
            </a>
            <a
              href={telUrl}
              className="bg-brand-cream rounded-2xl p-5 text-center shadow-sm border border-brand-light/40 hover:border-brand-gold transition"
            >
              <div className="text-3xl mb-2" aria-hidden>📞</div>
              <p className="font-semibold text-brand-dark">Call</p>
              <p className="text-sm text-brand-medium">{business.phoneDisplay}</p>
            </a>
            <a
              href={mailtoUrl}
              className="bg-brand-cream rounded-2xl p-5 text-center shadow-sm border border-brand-light/40 hover:border-brand-gold transition"
            >
              <div className="text-3xl mb-2" aria-hidden>✉️</div>
              <p className="font-semibold text-brand-dark">Email</p>
              <p className="text-sm text-brand-medium break-all">{business.email}</p>
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
