import { FAQ_ITEMS } from "@/lib/faq";
import { absoluteUrl, SITE, SITE_URL } from "@/lib/site";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.socialImage),
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phoneE164,
    areaServed: {
      "@type": "Country",
      name: SITE.location.country,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phoneE164,
        email: SITE.email,
        contactType: "customer service",
        areaServed: SITE.location.countryCode,
        availableLanguage: ["English", "Arabic"],
      },
    ],
    sameAs: [SITE.whatsapp],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE.name,
    url: SITE_URL,
    image: absoluteUrl(SITE.socialImage),
    description: SITE.shortDescription,
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2048,
      longitude: 55.2708,
    },
    areaServed: {
      "@type": "Country",
      name: SITE.location.country,
    },
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
    knowsAbout: [
      "UAE trade license renewal",
      "UAE visa renewal",
      "Emirates ID renewal",
      "Golden Visa UAE",
      "Corporate service provider Dubai",
      "Free zone license renewal",
      "Mainland company renewal",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    description: SITE.shortDescription,
    inLanguage: SITE.language,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${SITE.tagline} | ${SITE.name}`,
    description: SITE.description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: SITE.language,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLdScript data={organization} />
      <JsonLdScript data={localBusiness} />
      <JsonLdScript data={website} />
      <JsonLdScript data={webPage} />
      <JsonLdScript data={faqPage} />
    </>
  );
}
