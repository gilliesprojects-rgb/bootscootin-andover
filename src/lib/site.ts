// Single source of truth for site-wide business details.
// Used by metadata, structured data, footer, and page content so everything stays in sync.

export const SITE_URL = "https://www.bootscootin.co.uk";

export const business = {
  name: "Boot Scootin' UK",
  // Used where the town/country suffix would be redundant.
  shortName: "Boot Scootin'",
  tagline: "Line Dancing in Andover & Salisbury",
  description:
    "Friendly line dancing classes in Andover, Hampshire and Salisbury, Wiltshire. Beginners and experienced dancers welcome — no partner needed, just a pair of boots and a smile.",
  email: "bootscootinuk@gmail.com",
  // Display phone (UK national format) and the digits-only international form for tel:/wa.me links.
  phoneDisplay: "07717 844660",
  phoneIntl: "447717844660",
  areaServed: "Andover & Salisbury",
  priceRange: "££",
} as const;

export const whatsappUrl = `https://wa.me/${business.phoneIntl}`;
export const telUrl = `tel:+${business.phoneIntl}`;
export const mailtoUrl = `mailto:${business.email}`;

// Official merch store. Our printers (Hampshire T-Shirt Printing Services, Andover)
// host a landing page built for us, with separate Andover and Salisbury collections.
export const merchUrl =
  "https://hampshiretshirts.co.uk/pages/boot-scootin-merchandise";

// A few tees to show on the homepage. The shop is the source of truth for the
// full range, sizes and stock — these are just the shopfront window.
export const merchProducts = [
  {
    name: "Men's Softstyle T-Shirt",
    town: "Andover",
    price: "\u00a315",
    image: "/merch/tee-mens-andover.jpg",
    alt: "Black Boot Scootin' Andover t-shirt with cowboy boots and horseshoe back print",
  },
  {
    name: "Women's Softstyle T-Shirt",
    town: "Andover",
    price: "\u00a315",
    image: "/merch/tee-womens-andover.jpg",
    alt: "Cream Boot Scootin' Andover women's t-shirt with cowboy boots and horseshoe back print",
  },
  {
    name: "Women's V-Neck T-Shirt",
    town: "Salisbury",
    price: "\u00a315",
    image: "/merch/tee-vneck-salisbury.jpg",
    alt: "White Boot Scootin' Salisbury women's v-neck t-shirt with cowboy boots and horseshoe back print",
  },
] as const;

// A town where we run classes. Boot Scootin' UK is the umbrella brand; each town
// is a branded section with its own venues and, where set up, its own booking calendar.
export type Town = {
  id: string; // slug, e.g. "andover"
  name: string;
  region: string; // county
  blurb: string;
  // Bookwhen calendar iframe for this town, if online booking is live.
  bookingIframe?: string;
};

export const towns: Town[] = [
  {
    id: "andover",
    name: "Andover",
    region: "Hampshire",
    blurb:
      "Where it all started. Two friendly weekly classes across Andover — come along to whichever suits you best.",
    bookingIframe: "https://bookwhen.com/bootscootin/iframe",
  },
  {
    id: "salisbury",
    name: "Salisbury",
    region: "Wiltshire",
    blurb:
      "Our newest class — line dancing every Tuesday at Chafyn Grove School. All levels welcome, no partner needed.",
    // TODO: swap in the Salisbury-specific Bookwhen calendar once confirmed.
    bookingIframe: "https://bookwhen.com/bootscootin/iframe",
  },
];

export type Venue = {
  id: string;
  townId: Town["id"];
  name: string;
  streetAddress: string;
  locality: string; // town/village
  region: string; // county
  postcode: string;
  day: string; // e.g. "Monday"
  price?: string; // e.g. "£7" — omit when handled inside Bookwhen
  // One or more class sessions held at this venue
  sessions: { start: string; end: string; label?: string }[];
};

export const venues: Venue[] = [
  {
    id: "abbotts-ann",
    townId: "andover",
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
    townId: "andover",
    name: "The Landale Wilson Hall",
    streetAddress: "15 Newbury Road, Enham Alamein",
    locality: "Andover",
    region: "Hampshire",
    postcode: "SP11 6HG",
    day: "Thursday",
    sessions: [{ start: "19:15", end: "20:15" }],
  },
  {
    id: "chafyn-grove",
    townId: "salisbury",
    name: "Chafyn Grove School",
    streetAddress: "Manor Road",
    locality: "Salisbury",
    region: "Wiltshire",
    postcode: "SP1 3PH",
    day: "Tuesday",
    price: "£7",
    sessions: [{ start: "19:30", end: "20:30" }],
  },
];

// All venues for a given town, in listed order.
export function venuesForTown(townId: Town["id"]): Venue[] {
  return venues.filter((v) => v.townId === townId);
}

// "18:15" -> "6:15pm" for human-readable display.
export function formatTime(t: string): string {
  const [hStr, m] = t.split(":");
  const h = Number(hStr);
  const period = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === "00" ? `${h12}${period}` : `${h12}:${m}${period}`;
}
