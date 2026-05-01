export const metadata = {
  title: "Classes & Times | Boot Scootin' Andover",
  description:
    "Class times, location and pricing for Boot Scootin' Andover line dance class — details coming soon.",
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
            Coming soon to Andover
          </h1>
          <p className="mt-6 text-brand-light text-lg leading-relaxed max-w-2xl mx-auto">
            We&apos;re finalising the details. Here&apos;s what we know so far —
            and how to get on the early-bird list.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-brand-cream rounded-2xl shadow-md border border-brand-light/40 overflow-hidden">
            <div className="bg-leather text-brand-cream px-6 py-4">
              <h2 className="text-2xl font-bold">Weekly Line Dance Class</h2>
              <p className="text-sm text-brand-light">All abilities welcome</p>
            </div>
            <dl className="divide-y divide-brand-light/40">
              <div className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
                <dt className="font-semibold text-brand-dark sm:w-40">Day</dt>
                <dd className="text-brand-medium italic">To be confirmed</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
                <dt className="font-semibold text-brand-dark sm:w-40">Time</dt>
                <dd className="text-brand-medium italic">To be confirmed</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
                <dt className="font-semibold text-brand-dark sm:w-40">Venue</dt>
                <dd className="text-brand-medium italic">
                  To be confirmed — somewhere in Andover, Hampshire
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
                <dt className="font-semibold text-brand-dark sm:w-40">Price</dt>
                <dd className="text-brand-medium italic">To be confirmed</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start px-6 py-4">
                <dt className="font-semibold text-brand-dark sm:w-40">
                  Booking
                </dt>
                <dd className="text-brand-medium">
                  No booking needed at this stage — just register your interest
                  and we&apos;ll keep you in the loop.
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 bg-brand-gold/15 border border-brand-gold/40 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-brand-dark">
              Want first dibs on a spot?
            </h3>
            <p className="text-brand-medium mt-2 max-w-xl mx-auto">
              Drop us a message and we&apos;ll send you the launch date, venue
              and pricing the moment they&apos;re confirmed.
            </p>
            <a
              href="/contact"
              className="inline-block mt-5 bg-brand-gold text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Register your interest
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
