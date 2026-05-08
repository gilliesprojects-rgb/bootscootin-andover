export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-leather-dark text-brand-cream overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-brand-gold/30">
            <img
              src="/hero.png"
              alt="Boot Scootin' Andover line dance class logo"
              className="w-full h-auto block"
            />
          </div>
          <div className="text-center mt-10">
            <p className="uppercase tracking-[0.4em] text-brand-gold text-sm mb-4">
              Line Dancing · Andover · Hampshire
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-cream leading-tight">
              Boot Scootin&apos; <span className="text-brand-gold">Andover</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-light max-w-2xl mx-auto leading-relaxed">
              This isn&apos;t just a dance class — it&apos;s a country community
              in the making. Boot Scootin&apos; Andover is set up to put fun
              first, with weekly lessons designed for all abilities and a
              friendly, no-pressure atmosphere.
            </p>
            <p className="mt-4 text-lg md:text-xl text-brand-light max-w-2xl mx-auto leading-relaxed">
              Every 8 weeks, we&apos;ll host a social event so you can show off
              your new moves, meet like-minded folks, and enjoy a proper boot
              scootin&apos; night out. Lessons, laughs, and line dancing —
              that&apos;s what we&apos;re about.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/classes"
                className="bg-brand-gold text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Book a Class
              </a>
              <a
                href="/contact"
                className="border-2 border-brand-gold text-brand-cream px-6 py-3 rounded-lg font-semibold hover:bg-brand-gold hover:text-brand-dark transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark">
            What to expect
          </h2>
          <p className="text-center text-brand-medium mt-3 max-w-2xl mx-auto">
            No partner. No pressure. No judgement. Just genuinely good fun.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-brand-cream rounded-2xl p-6 shadow-sm border border-brand-light/40">
              <div className="text-4xl mb-3" aria-hidden>👢</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                Beginner friendly
              </h3>
              <p className="text-brand-medium leading-relaxed">
                Every dance is broken down step by step. Two left feet? Perfect
                — that&apos;s most of us when we start.
              </p>
            </div>
            <div className="bg-brand-cream rounded-2xl p-6 shadow-sm border border-brand-light/40">
              <div className="text-4xl mb-3" aria-hidden>🎶</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                Music you&apos;ll love
              </h3>
              <p className="text-brand-medium leading-relaxed">
                Country classics, modern crossover, and a few cheeky pop tracks
                — there&apos;s something on the playlist for everyone.
              </p>
            </div>
            <div className="bg-brand-cream rounded-2xl p-6 shadow-sm border border-brand-light/40">
              <div className="text-4xl mb-3" aria-hidden>🤠</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                A proper community
              </h3>
              <p className="text-brand-medium leading-relaxed">
                Come on your own, bring a friend, or rope in the whole family.
                You&apos;ll know names by the end of week one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-leather text-brand-cream">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to scoot?</h2>
          <p className="mt-4 text-brand-cream/90 max-w-xl mx-auto">
            Grab a spot in the next class — book online and pay in seconds.
          </p>
          <a
            href="/classes"
            className="inline-block mt-8 bg-brand-gold text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
