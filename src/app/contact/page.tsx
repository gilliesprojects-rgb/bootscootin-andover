import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | Boot Scootin' Andover",
  description:
    "Get in touch with Boot Scootin' Andover — register interest, ask a question, or be the first to know when classes start.",
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
          <ContactForm />
        </div>
      </section>
    </>
  );
}
