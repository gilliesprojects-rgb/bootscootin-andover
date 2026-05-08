export const metadata = {
  title: "Classes & Times | Boot Scootin' Andover",
  description:
    "Book a Boot Scootin' Andover line dance class — pick a date and pay online.",
};

export default function ClassesPage() {
  return (
    <>
      <section className="bg-leather-dark text-brand-cream">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <p className="uppercase tracking-[0.4em] text-brand-gold text-sm mb-3">
            Classes &amp; Times
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Book your spot
          </h1>
          <p className="mt-6 text-brand-light text-lg leading-relaxed max-w-2xl mx-auto">
            Pick a date below, grab a place and pay online — all abilities
            welcome.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-brand-cream rounded-2xl shadow-md border border-brand-light/40 overflow-hidden">
            <iframe
              src="https://bookwhen.com/bootscootin/iframe"
              title="Boot Scootin' Andover booking calendar"
              className="block w-full border-0"
              style={{ height: 900 }}
            />
          </div>

          <div className="mt-10 bg-brand-gold/15 border border-brand-gold/40 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-brand-dark">
              Trouble booking?
            </h3>
            <p className="text-brand-medium mt-2 max-w-xl mx-auto">
              If the calendar isn&apos;t loading or you&apos;d rather book by
              email, drop us a message and we&apos;ll sort you out.
            </p>
            <a
              href="/contact"
              className="inline-block mt-5 bg-brand-gold text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
