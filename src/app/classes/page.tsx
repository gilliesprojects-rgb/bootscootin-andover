import { SITE_URL, business, venues, formatTime } from "@/lib/site";

export const metadata = {
  title: "Classes & Times",
  description:
    "Boot Scootin' Andover line dance classes: Mondays at Abbotts Ann School and Thursdays at The Landale Wilson Hall, Enham. All abilities welcome — book a date and pay online.",
  alternates: { canonical: "/classes" },
};

const dayToSchemaUrl: Record<string, string> = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday",
};

// One recurring Event per class session, so search engines can surface the times.
const eventsJsonLd = venues.flatMap((v) =>
  v.sessions.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Line Dancing Class — ${v.name}`,
    description: `Weekly ${v.day} line dancing class with Boot Scootin' Andover at ${v.name}. All abilities welcome.`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    eventSchedule: {
      "@type": "Schedule",
      repeatFrequency: "P1W",
      byDay: dayToSchemaUrl[v.day],
      startTime: s.start,
      endTime: s.end,
    },
    location: {
      "@type": "Place",
      name: v.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: v.streetAddress,
        addressLocality: v.locality,
        addressRegion: v.region,
        postalCode: v.postcode,
        addressCountry: "GB",
      },
    },
    organizer: {
      "@type": "Organization",
      name: business.name,
      url: SITE_URL,
    },
  }))
);

export default function ClassesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />

      <section className="bg-leather-dark text-brand-cream">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <p className="uppercase tracking-[0.4em] text-brand-gold text-sm mb-3">
            Classes &amp; Times
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">Book your spot</h1>
          <p className="mt-6 text-brand-light text-lg leading-relaxed max-w-2xl mx-auto">
            Weekly line dancing in Andover — Mondays at Abbotts Ann and Thursdays
            in Enham. Pick a date below, grab a place and pay online. All
            abilities welcome.
          </p>
        </div>
      </section>

      {/* Where & when */}
      <section className="py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark">
            Where &amp; when we dance
          </h2>
          <p className="text-center text-brand-medium mt-3 max-w-2xl mx-auto">
            Two friendly weekly classes across Andover. Come to whichever suits
            you best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {venues.map((v) => (
              <div
                key={v.id}
                className="bg-brand-cream rounded-2xl p-6 shadow-sm border border-brand-light/40"
              >
                <p className="uppercase tracking-widest text-brand-gold text-xs font-semibold">
                  {v.day}s
                </p>
                <h3 className="text-xl font-bold text-brand-dark mt-1">
                  {v.name}
                </h3>
                <address className="not-italic text-brand-medium mt-2 leading-relaxed">
                  {v.streetAddress}
                  <br />
                  {v.locality}, {v.region} {v.postcode}
                </address>
                <ul className="mt-4 space-y-1.5">
                  {v.sessions.map((s, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-brand-dark font-medium"
                    >
                      <span aria-hidden>👢</span>
                      {formatTime(s.start)} – {formatTime(s.end)}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${v.name}, ${v.streetAddress}, ${v.locality} ${v.postcode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-brand-red font-semibold underline"
                >
                  View on map
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="pb-12 md:pb-16">
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
            <h3 className="text-xl font-bold text-brand-dark">Trouble booking?</h3>
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
