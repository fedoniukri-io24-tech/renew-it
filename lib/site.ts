import { CONTACT } from "./contact";

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.renew-it.ae",
);

export const SITE_SERVICES = {
  corporate: [
    "Trade License Renewal",
    "Free Zone License Renewal",
    "Mainland License Renewal",
    "Establishment Card Renewal",
    "Immigration Card Renewal",
    "Corporate Document Renewal",
    "Government Permits & Approvals",
  ],
  visas: [
    "Investor Visa Renewal",
    "Golden Visa Renewal",
    "Partner Visa Renewal",
    "Family & Dependent Visa Renewal",
    "Employee Visa Renewal",
    "Residence Visa Renewal",
    "Emirates ID Renewal",
  ],
  other: [
    "Work Permit Renewal",
    "Government Approval Renewal",
    "Regulatory Document Renewal",
  ],
} as const;

export const SITE = {
  name: "Renew-It",
  legalName: "Renew-It",
  tagline: "Due? We renew.",
  title: "UAE Renewals — Trade Licenses, Visas & Emirates ID",
  description:
    "Renew trade licenses, visas, Emirates IDs and corporate documents across the UAE. Dubai-based CSP with clear pricing, transparent government fees and expiry reminders.",
  shortDescription:
    "UAE renewals made simple — licenses, visas, Emirates IDs and corporate documents across all 7 Emirates.",
  abstract:
    "Certified Corporate Service Provider in Dubai for UAE trade license, visa, Emirates ID and corporate document renewals.",
  locale: "en_AE",
  language: "en",
  alternateLocales: ["ar_AE"] as const,
  location: {
    city: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    geoRegion: "AE-DU",
    latitude: 25.2048,
    longitude: 55.2708,
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
    "trade license renewal Dubai",
    "visa renewal Dubai",
    "visa renewal UAE",
    "Emirates ID renewal",
    "Emirates ID renewal Dubai",
    "Golden Visa UAE",
    "Golden Visa renewal",
    "corporate service provider Dubai",
    "CSP Dubai",
    "free zone license renewal",
    "mainland license renewal",
    "establishment card renewal",
    "immigration card UAE",
    "government fees UAE",
    "company formation Dubai",
    "renewal reminders UAE",
    "PRO services Dubai",
    "UAE immigration services",
    "DET trade license renewal",
    "Abu Dhabi license renewal",
    "Sharjah visa renewal",
    "UAE corporate documents",
    "residence visa renewal UAE",
    "investor visa renewal Dubai",
    "work permit renewal UAE",
    "UAE government approvals",
    "document renewal Dubai",
  ],
  socialImage: "/hero.png",
  socialImageAlt:
    "Renew-It — Dubai-based Corporate Service Provider for UAE trade license, visa and Emirates ID renewals",
  logo: "/logo.png",
  foundingExperience: "10+ years in the UAE",
  certifications: [
    "Certified Corporate Service Provider",
    "Official partner of Dubai Department of Economy and Tourism",
  ],
} as const;

export function absoluteUrl(path = ""): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
