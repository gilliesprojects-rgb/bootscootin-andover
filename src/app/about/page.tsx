export const metadata = {
  title: "About",
  description:
    "About Boot Scootin' UK — friendly line dancing classes for all abilities in Andover (Hampshire) and Salisbury (Wiltshire).",
  alternates: { canonical: "/about" },
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
            Line dancing in Andover &amp; Salisbury
          </h1>
          <p className="mt-6 text-brand-light text-lg leading-relaxed">
            Boot Scootin&apos; UK runs friendly weekly line dancing classes —
            starting in Andover, Hampshire, and now dancing in Salisbury,
            Wiltshire too.
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
            What started as a single class in Andover has grown into a proper
            boot scootin&apos; family across two counties. In{" "}
            <strong>Andover</strong> we dance <strong>Mondays at Abbotts Ann C
            of E Primary School</strong> and <strong>Thursdays at The Landale
            Wilson Hall in Enham</strong>. Over in <strong>Salisbury</strong>,
            you&apos;ll find us <strong>every Tuesday at Chafyn Grove
            School</strong>. Whether you&apos;re a total beginner or an improver
            looking for your next dance, there&apos;s a spot for you. See the{" "}
            <a href="/classes" className="text-brand-red font-semibold underline">
              classes &amp; times
            </a>{" "}
            page for full details and to book, or{" "}
            <a href="/contact" className="text-brand-red font-semibold underline">
              get in touch
            </a>{" "}
            with any questions.
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
