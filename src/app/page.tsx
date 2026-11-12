import {
  towns,
  venuesForTown,
  formatTime,
  merchUrl,
  merchProducts,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-leather-dark text-brand-cream overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-brand-gold/30">
            <img
              src="/hero-2026-v2.png"
              alt="Boot Scootin' UK line dance class"
              className="w-full h-auto block"
            />
          </div>
          <div className="text-center mt-10">
            <p className="uppercase tracking-[0.4em] text-brand-gold text-sm mb-4">
              Line Dance Classes · Andover &amp; Salisbury
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-cream leading-tight">
              Boot Scootin&apos; <span className="text-brand-gold">UK</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-light max-w-2xl mx-auto leading-relaxed">
              This isn&apos;t just a dance class — it&apos;s a country community
              in the making. Boot Scootin&apos; puts fun first, with weekly
              lessons designed for all abilities and a friendly, no-pressure
              atmosphere. We&apos;ve now got classes in both{" "}
              <span className="text-brand-cream font-semibold">Andover</span> and{" "}
              <span className="text-brand-cream font-semibold">Salisbury</span>.
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

      {/* Where we dance — town sections */}
      <section className="py-16 md:py-20 bg-brand-cream/50 border-b border-brand-light/40">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark">
            Where we dance
          </h2>
          <p className="text-center text-brand-medium mt-3 max-w-2xl mx-auto">
            Two towns, one boot scootin&apos; family. Pick your nearest class —
            you&apos;re welcome at any of them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {towns.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-7 shadow-sm border border-brand-light/50 flex flex-col"
              >
                <p className="uppercase tracking-widest text-brand-gold text-xs font-semibold">
                  {t.region}
                </p>
                <h3 className="text-2xl font-bold text-brand-dark mt-1">
                  Boot Scootin&apos; {t.name}
                </h3>
                <p className="text-brand-medium mt-3 leading-relaxed">{t.blurb}</p>
                <ul className="mt-5 space-y-2 text-brand-dark">
                  {venuesForTown(t.id).map((v) => (
                    <li key={v.id} className="flex items-start gap-2">
                      <span aria-hidden className="mt-0.5">👢</span>
                      <span>
                        <span className="font-semibold">{v.day}s</span> —{" "}
                        {v.name}
                        <span className="block text-sm text-brand-medium">
                          {v.sessions
                            .map((s) => `${formatTime(s.start)}–${formatTime(s.end)}`)
                            .join(" & ")}
                          {v.price ? ` · ${v.price}` : ""}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/classes"
                  className="inline-block mt-6 self-start bg-brand-gold text-brand-dark px-5 py-2.5 rounded-lg font-semibold hover:bg-yellow-400 transition"
                >
                  See {t.name} classes
                </a>
              </div>
            ))}
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

      {/* Merch */}
      <section className="py-16 md:py-20 bg-brand-cream/50 border-y border-brand-light/40">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center uppercase tracking-[0.3em] text-brand-gold text-xs font-semibold">
            Official Merch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mt-3">
            Wear your boots with pride
          </h2>
          <p className="text-center text-brand-medium mt-3 max-w-2xl mx-auto">
            Boot Scootin&apos; tees — badge on the front, big boots-and-horseshoe
            print on the back — printed for us by Hampshire T-Shirt Printing
            Services in Andover. £15 each, in Andover and Salisbury designs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {merchProducts.map((product) => (
              <a
                key={product.image}
                href={merchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-light/50 hover:shadow-md hover:border-brand-gold/60 transition"
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="w-full h-auto block bg-white"
                />
                <div className="p-5 border-t border-brand-light/40">
                  <p className="uppercase tracking-widest text-brand-gold text-xs font-semibold">
                    {product.town}
                  </p>
                  <h3 className="text-lg font-bold text-brand-dark mt-1 group-hover:text-brand-medium transition">
                    {product.name}
                  </h3>
                  <p className="text-brand-medium mt-1">{product.price}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={merchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Shop the Merch
            </a>
            <p className="text-sm text-brand-medium mt-4 max-w-xl mx-auto">
              Opens our shop at Hampshire T-Shirt Printing Services — choose
              Andover or Salisbury, then pick your size and colour. Orders take
              7–10 working days.
            </p>
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
