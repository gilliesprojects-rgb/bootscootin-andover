export const metadata = {
  title: "About | Boot Scootin' Andover",
  description:
    "About Boot Scootin' Andover — a friendly line dancing class for all abilities in Andover, Hampshire.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-leather-dark text-brand-cream">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <p className="uppercase tracking-[0.4em] text-brand-gold text-sm mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            A new line dance class for Andover
          </h1>
          <p className="mt-6 text-brand-light text-lg leading-relaxed">
            Boot Scootin&apos; Andover is a brand new weekly line dancing
            class, opening its doors in Andover, Hampshire.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-8 text-brand-dark text-lg leading-relaxed">
          <p>
            Line dancing is having a moment again — and for good reason. It&apos;s
            social, it&apos;s a proper workout, and you don&apos;t need a
            partner, fancy footwork, or any prior experience to take part.
          </p>
          <p>
            Our class is designed for absolute beginners and improvers alike.
            Each session blends easy walk-throughs of new dances with
            crowd-pleasing favourites you&apos;ll pick up in minutes. The vibe
            is warm, welcoming, and full of laughter — the kind of evening you
            leave grinning.
          </p>
          <p>
            We&apos;re still putting the final touches in place — confirming
            the venue, the night, and the timings. If you&apos;d like to be
            among the first to know when it all kicks off, head to our{" "}
            <a href="/contact" className="text-brand-red font-semibold underline">
              contact page
            </a>{" "}
            and drop us a quick message.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream/60 border-y border-brand-light/40 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
            What you&apos;ll need
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-brand-medium">
            <div>
              <div className="text-3xl mb-2" aria-hidden>👕</div>
              <p className="font-semibold text-brand-dark">Comfy clothes</p>
              <p className="text-sm">Something you can move in.</p>
            </div>
            <div>
              <div className="text-3xl mb-2" aria-hidden>👢</div>
              <p className="font-semibold text-brand-dark">Smooth-soled shoes</p>
              <p className="text-sm">Boots optional, but encouraged.</p>
            </div>
            <div>
              <div className="text-3xl mb-2" aria-hidden>💧</div>
              <p className="font-semibold text-brand-dark">A water bottle</p>
              <p className="text-sm">You&apos;ll work up a sweat — promise.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
