import { CONTACT } from "./contact";

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.renew-it.ae",
);

export const SITE = {
  name: "Renew-It",
  legalName: "Renew-It",
  tagline: "Due? We renew.",
  description:
    "Dubai-based Corporate Service Provider for UAE renewals — trade licenses, visas, Emirates IDs, Golden Visas, company formation and government services across all 7 Emirates. Clear pricing, transparent fees, reminders before expiry.",
  shortDescription:
    "UAE renewals made simple, transparent and on time — licenses, visas, Emirates IDs and corporate documents.",
  locale: "en_AE",
  language: "en",
  location: {
    city: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },
  coverage: "All 7 Emirates",
  email: CONTACT.email,
  phone: CONTACT.phone,
  phoneE164: "+971585930042",
  whatsapp: CONTACT.whatsapp,
  keywords: [
    "UAE renewals",
    "Dubai renewals",
    "trade license renewal UAE",
    "visa renewal Dubai",
    "Emirates ID renewal",
    "Golden Visa UAE",
    "corporate service provider Dubai",
    "free zone license renewal",
    "mainland license renewal",
    "establishment card renewal",
    "immigration card UAE",
    "government fees UAE",
    "company formation Dubai",
    "CSP Dubai",
    "renewal reminders UAE",
  ],
  socialImage: "/hero.png",
  socialImageAlt: "Renew-It — UAE corporate and immigration renewals in Dubai",
  logo: "/logo.png",
  foundingExperience: "10+ years in the UAE",
} as const;

export function absoluteUrl(path = ""): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
