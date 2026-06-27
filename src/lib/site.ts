// Single source of truth for site-wide business details.
// Used by metadata, structured data, footer, and page content so everything stays in sync.

export const SITE_URL = "https://www.bootscootin.co.uk";

export const business = {
  name: "Boot Scootin' Andover",
  tagline: "Line Dancing in Andover, Hampshire",
  description:
    "A friendly line dancing class in Andover, Hampshire. Beginners and experienced dancers welcome — no partner needed, just a pair of boots and a smile.",
  email: "bootscootinuk@gmail.com",
  // Display phone (UK national format) and the digits-only international form for tel:/wa.me links.
  phoneDisplay: "07717 844660",
  phoneIntl: "447717844660",
  areaServed: "Andover, Hampshire",
  priceRange: "££",
} as const;

export const whatsappUrl = `https://wa.me/${business.phoneIntl}`;
export const telUrl = `tel:+${business.phoneIntl}`;
export const mailtoUrl = `mailto:${business.email}`;

export type Venue = {
  id: string;
  name: string;
  streetAddress: string;
  locality: string; // town/village
  region: string; // county
  postcode: string;
  day: string; // e.g. "Monday"
  // One or more class sessions held at this venue
  sessions: { start: string; end: string; label?: string }[];
};

export const venues: Venue[] = [
  {
    id: "abbotts-ann",
    name: "Abbotts Ann C of E Primary School",
    streetAddress: "Duck Street, Abbotts Ann",
    locality: "Andover",
    region: "Hampshire",
    postcode: "SP11 7FE",
    day: "Monday",
    sessions: [
      { start: "18:15", end: "19:15" },
      { start: "19:30", end: "20:30" },
    ],
  },
  {
    id: "landale-wilson-hall",
    name: "The Landale Wilson Hall",
    streetAddress: "15 Newbury Road, Enham Alamein",
    locality: "Andover",
    region: "Hampshire",
    postcode: "SP11 6HG",
    day: "Thursday",
    sessions: [{ start: "19:15", end: "20:15" }],
  },
];

// "18:15" -> "6:15pm" for human-readable display.
export function formatTime(t: string): string {
  const [hStr, m] = t.split(":");
  const h = Number(hStr);
  const period = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === "00" ? `${h12}${period}` : `${h12}:${m}${period}`;
}
